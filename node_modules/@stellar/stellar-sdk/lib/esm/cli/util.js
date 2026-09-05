import * as fs from 'fs/promises';
import * as path from 'path';
import { BindingGenerator } from '../bindings/generator.js';
import '../xdr/index.js';
import { WasmFetchError } from '../bindings/wasm_fetcher.js';
import { RpcServer } from '../rpc/server.js';

async function verifyNetwork(server, expectedPassphrase) {
  const networkResponse = await server.getNetwork();
  if (networkResponse.passphrase !== expectedPassphrase) {
    throw new WasmFetchError(
      `Network mismatch: expected "${expectedPassphrase}", got "${networkResponse.passphrase}"`
    );
  }
}
async function createGenerator(args) {
  const sources = [args.wasm, args.wasmHash, args.contractId].filter(Boolean);
  if (sources.length === 0) {
    throw new WasmFetchError(
      "Must provide one of: --wasm, --wasm-hash, or --contract-id"
    );
  }
  if (sources.length > 1) {
    throw new WasmFetchError(
      "Must provide only one of: --wasm, --wasm-hash, or --contract-id"
    );
  }
  if (args.wasm) {
    const wasmBytes = await fs.readFile(args.wasm);
    return {
      generator: BindingGenerator.fromWasm(wasmBytes),
      source: { type: "file", path: args.wasm }
    };
  }
  if (!args.rpcUrl) {
    throw new WasmFetchError(
      "--rpc-url is required when fetching from network"
    );
  }
  if (!args.networkPassphrase) {
    throw new WasmFetchError(
      "--network is required when fetching from network"
    );
  }
  const server = new RpcServer(args.rpcUrl, args.serverOptions);
  await verifyNetwork(server, args.networkPassphrase);
  if (args.wasmHash) {
    return {
      generator: await BindingGenerator.fromWasmHash(args.wasmHash, server),
      source: {
        type: "wasm-hash",
        hash: args.wasmHash,
        rpcUrl: args.rpcUrl,
        network: args.networkPassphrase
      }
    };
  }
  if (args.contractId) {
    const generator = await BindingGenerator.fromContractId(
      args.contractId,
      server
    );
    return {
      generator,
      source: {
        type: "contract-id",
        contractId: args.contractId,
        rpcUrl: args.rpcUrl,
        network: args.networkPassphrase
      }
    };
  }
  throw new WasmFetchError("Invalid arguments");
}
async function writeBindings(outputDir, bindings, overwrite) {
  try {
    const stat = await fs.stat(outputDir);
    if (stat.isFile()) {
      throw new Error(`Output path is a file: ${outputDir}`);
    }
    if (!overwrite) {
      throw new Error(`Directory exists (use --overwrite): ${outputDir}`);
    }
    await fs.rm(outputDir, { recursive: true, force: true });
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  await fs.mkdir(path.join(outputDir, "src"), { recursive: true });
  const writes = [
    fs.writeFile(path.join(outputDir, "src/index.ts"), bindings.index),
    fs.writeFile(path.join(outputDir, "src/client.ts"), bindings.client),
    fs.writeFile(path.join(outputDir, ".gitignore"), bindings.gitignore),
    fs.writeFile(path.join(outputDir, "README.md"), bindings.readme),
    fs.writeFile(path.join(outputDir, "package.json"), bindings.packageJson),
    fs.writeFile(path.join(outputDir, "tsconfig.json"), bindings.tsConfig)
  ];
  if (bindings.types.trim()) {
    writes.push(
      fs.writeFile(path.join(outputDir, "src/types.ts"), bindings.types)
    );
  }
  await Promise.all(writes);
}
async function generateAndWrite(generator, options) {
  const { outputDir, overwrite = false, ...genOptions } = options;
  const bindings = generator.generate(genOptions);
  await writeBindings(outputDir, bindings, overwrite);
  return bindings;
}
function logSourceInfo(source) {
  console.log("\nSource:");
  switch (source.type) {
    case "file":
      console.log(`  Type: Local file`);
      console.log(`  Path: ${source.path}`);
      break;
    case "wasm-hash":
      console.log(`  Type: WASM hash`);
      console.log(`  Hash: ${source.hash}`);
      console.log(`  RPC: ${source.rpcUrl}`);
      console.log(`  Network: ${source.network}`);
      break;
    case "contract-id":
      console.log(`  Type: Contract ID`);
      console.log(`  Address: ${source.contractId}`);
      console.log(`  RPC: ${source.rpcUrl}`);
      console.log(`  Network: ${source.network}`);
      break;
  }
}
function deriveContractName(source) {
  if (source.type !== "file") return null;
  return path.basename(source.path, path.extname(source.path)).replace(/([a-z])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase();
}

export { createGenerator, deriveContractName, generateAndWrite, logSourceInfo, writeBindings };
//# sourceMappingURL=util.js.map
