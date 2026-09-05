import { Command } from 'commander';
import * as path from 'path';
import { WasmFetchError } from '../bindings/wasm_fetcher.js';
import { createGenerator, logSourceInfo, deriveContractName, generateAndWrite } from './util.js';
import '../xdr/index.js';
import '@noble/hashes/sha2.js';
import 'uint8array-extras';
import '../base/signing.js';
import '../base/keypair.js';
import '@exodus/bytes/base32.js';
import '../base/util/continued_fraction.js';
import '../base/util/bignumber.js';
import '../base/muxed_account.js';
import '@stellar/js-xdr';
import { Networks } from '../base/network.js';

const NETWORK_CONFIG = {
  testnet: {
    passphrase: Networks.TESTNET,
    rpcUrl: "https://soroban-testnet.stellar.org"
  },
  mainnet: {
    passphrase: Networks.PUBLIC,
    rpcUrl: null
    // User must provide their own
  },
  futurenet: {
    passphrase: Networks.FUTURENET,
    rpcUrl: "https://rpc-futurenet.stellar.org"
  },
  localnet: {
    passphrase: Networks.STANDALONE,
    rpcUrl: "http://localhost:8000/rpc"
  }
};
function runCli() {
  const program = new Command();
  program.name("stellar-cli").description("CLI for generating TypeScript bindings for Stellar contracts").version("1.0.0");
  program.command("generate").description("Generate TypeScript bindings for a Stellar contract").helpOption("-h, --help", "Display help for command").option("--wasm <path>", "Path to local WASM file").option("--wasm-hash <hash>", "Hash of WASM blob on network").option("--contract-id <id>", "Contract ID on network").option("--rpc-url <url>", "RPC server URL").option(
    "--network <network>",
    "Network options to use: mainnet, testnet, futurenet, or localnet"
  ).option("--output-dir <dir>", "Output directory for generated bindings").option(
    "--allow-http",
    "Allow insecure HTTP connections to RPC server",
    false
  ).option("--timeout <ms>", "RPC request timeout in milliseconds").option(
    "--headers <json>",
    `Custom headers as JSON object (e.g., '{"Authorization": "Bearer token"}')`
  ).option(
    "--contract-name <name>",
    "Name for the generated contract client class"
  ).option("--overwrite", "Overwrite existing files", false).action(async (options) => {
    try {
      let networkPassphrase;
      let rpcUrl = options.rpcUrl;
      let allowHttp = options.allowHttp;
      if (options.network) {
        const network = options.network.toLowerCase();
        const config = NETWORK_CONFIG[network];
        if (!config) {
          throw new Error(
            `
\u2717 Invalid network: ${options.network}. Must be mainnet, testnet, futurenet, or localnet`
          );
        }
        networkPassphrase = config.passphrase;
        const needsRpcUrl = options.wasmHash || options.contractId;
        if (!rpcUrl && needsRpcUrl) {
          if (config.rpcUrl) {
            rpcUrl = config.rpcUrl;
            console.log(`Using default RPC URL for ${network}: ${rpcUrl}`);
            if (network === "localnet" && !options.allowHttp) {
              allowHttp = true;
            }
          } else if (network === "mainnet") {
            throw new Error(
              `
\u2717 --rpc-url is required for mainnet. Find RPC providers at: https://developers.stellar.org/docs/data/rpc/rpc-providers`
            );
          }
        }
      }
      if (options.outputDir === void 0) {
        throw new Error("Output directory (--output-dir) is required");
      }
      let headers;
      if (options.headers) {
        try {
          headers = JSON.parse(options.headers);
        } catch {
          throw new Error(`Invalid JSON for --headers: ${options.headers}`);
        }
      }
      let timeout;
      if (options.timeout) {
        timeout = parseInt(options.timeout, 10);
        if (!/^\d+$/.test(options.timeout.trim()) || timeout <= 0) {
          throw new Error(
            `Invalid timeout value: ${options.timeout}. Must be a positive integer.`
          );
        }
      }
      console.log("Fetching contract...");
      const { generator, source } = await createGenerator({
        wasm: options.wasm,
        wasmHash: options.wasmHash,
        contractId: options.contractId,
        rpcUrl,
        networkPassphrase,
        serverOptions: { allowHttp, timeout, headers }
      });
      logSourceInfo(source);
      const contractName = options.contractName || deriveContractName(source) || "contract";
      console.log(
        `
\u2713 Generating TypeScript bindings for "${contractName}"...`
      );
      const bindings = await generateAndWrite(generator, {
        contractName,
        outputDir: path.resolve(options.outputDir),
        overwrite: options.overwrite
      });
      for (const d of bindings.diagnostics) {
        if (d.declarations > 1) {
          console.warn(
            `
\u26A0 Event "${d.rawName}" is declared ${d.declarations} times; declaration ${d.occurrence + 1} generated as ${d.interfaceName} with filter ${d.filterMethodName}(). Review the generated bindings to confirm which declaration you need.`
          );
        } else {
          const renamed = [
            ...d.interfaceRenamed ? [d.interfaceName] : [],
            ...d.filterMethodRenamed ? [`${d.filterMethodName}()`] : []
          ];
          console.warn(
            `
\u26A0 Event "${d.rawName}": generated name${renamed.length > 1 ? "s" : ""} ${renamed.join(" and ")} ${renamed.length > 1 ? "were" : "was"} renamed to avoid a collision with another generated name.`
          );
        }
      }
      console.log(
        `
\u2713 Successfully generated bindings in ${options.outputDir}`
      );
      console.log(`
Usage:`);
      console.log(
        `  import { Client } from './${path.basename(options.outputDir)}';`
      );
    } catch (error) {
      if (error instanceof WasmFetchError) {
        console.error(`
\u2717 Error: ${error.message}`);
        if (error.cause) {
          console.error(`  Caused by: ${error.cause.message}`);
        }
      } else if (error instanceof Error) {
        console.error(`
\u2717 Error: ${error.message}`);
      } else {
        console.error(`
\u2717 Unexpected error:`, error);
      }
      process.exit(1);
    }
  });
  program.parse();
}

export { runCli };
//# sourceMappingURL=index.js.map
