import { hexToUint8Array } from 'uint8array-extras';
import '../xdr/index.js';
import '@noble/hashes/sha2.js';
import '../base/signing.js';
import '../base/keypair.js';
import { StrKey } from '../base/strkey.js';
import '../base/util/continued_fraction.js';
import '../base/util/bignumber.js';
import { Address } from '../base/address.js';
import '../base/muxed_account.js';
import { Contract } from '../base/contract.js';
import '@stellar/js-xdr';
import { LedgerKey } from '../xdr/generated/ledger-key.js';
import { LedgerKeyContractCode } from '../xdr/generated/ledger-key-contract-code.js';
import { Hash } from '../xdr/generated/hash.js';

class WasmFetchError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "WasmFetchError";
  }
  cause;
}
async function getRemoteWasmFromHash(server, hashBytes) {
  try {
    const contractCodeKey = LedgerKey.contractCode(
      new LedgerKeyContractCode({
        hash: new Hash(hashBytes)
      })
    );
    const response = await server.getLedgerEntries(contractCodeKey);
    if (!response.entries || response.entries.length === 0) {
      throw new WasmFetchError("WASM not found for the given hash");
    }
    const entry = response.entries[0];
    if (entry.key.type !== "contractCode") {
      throw new WasmFetchError("Invalid ledger entry type returned");
    }
    if (entry.val.type !== "contractCode") {
      throw new WasmFetchError("Invalid ledger entry data type");
    }
    const contractCode = entry.val.value;
    return contractCode.code;
  } catch (error) {
    if (error instanceof WasmFetchError) {
      throw error;
    }
    throw new WasmFetchError("Failed to fetch WASM from hash", error);
  }
}
function isStellarAssetContract(instance) {
  return instance.executable.type === "contractExecutableStellarAsset";
}
async function fetchWasmFromContract(server, contractAddress) {
  try {
    const contract = new Contract(contractAddress.toString());
    const response = await server.getLedgerEntries(contract.getFootprint());
    if (!response.entries || response.entries.length === 0) {
      throw new WasmFetchError("Contract instance not found");
    }
    const entry = response.entries[0];
    if (entry.key.type !== "contractData") {
      throw new WasmFetchError("Invalid ledger entry type returned");
    }
    if (entry.val.type !== "contractData") {
      throw new WasmFetchError("Invalid ledger entry data type");
    }
    const contractData = entry.val.value;
    if (contractData.val.type !== "scvContractInstance") {
      throw new WasmFetchError("Expected contract instance in ledger entry");
    }
    const instance = contractData.val.value;
    if (isStellarAssetContract(instance)) {
      return { type: "stellar-asset-contract" };
    }
    if (instance.executable.type !== "contractExecutableWasm") {
      throw new WasmFetchError("Contract is not a wasm executable");
    }
    const wasmHash = instance.executable.value.value;
    const wasmBytes = await getRemoteWasmFromHash(server, wasmHash);
    return { type: "wasm", wasmBytes };
  } catch (error) {
    if (error instanceof WasmFetchError) {
      throw error;
    }
    throw new WasmFetchError(
      "Failed to fetch WASM from contract",
      error
    );
  }
}
async function fetchFromWasmHash(wasmHash, rpcServer) {
  try {
    const hashBytes = hexToUint8Array(wasmHash);
    if (hashBytes.length !== 32) {
      throw new WasmFetchError(
        `Invalid WASM hash length: expected 32 bytes, got ${hashBytes.length}`
      );
    }
    const wasmBytes = await getRemoteWasmFromHash(rpcServer, hashBytes);
    return { type: "wasm", wasmBytes };
  } catch (error) {
    throw new WasmFetchError(
      `Failed to fetch WASM from hash ${wasmHash}`,
      error
    );
  }
}
async function fetchFromContractId(contractId, rpcServer) {
  try {
    if (!StrKey.isValidContract(contractId)) {
      throw new WasmFetchError(`Invalid contract ID: ${contractId}`);
    }
    const contractAddress = Address.fromString(contractId);
    return await fetchWasmFromContract(rpcServer, contractAddress);
  } catch (error) {
    throw new WasmFetchError(
      `Failed to fetch WASM from contract ${contractId}`,
      error
    );
  }
}

export { WasmFetchError, fetchFromContractId, fetchFromWasmHash };
//# sourceMappingURL=wasm_fetcher.js.map
