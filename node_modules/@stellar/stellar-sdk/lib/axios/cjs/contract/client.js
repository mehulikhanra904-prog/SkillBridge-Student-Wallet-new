'use strict';

require('../xdr/index.js');
require('@noble/hashes/sha2.js');
var uint8arrayExtras = require('uint8array-extras');
require('../base/signing.js');
require('../base/keypair.js');
require('@exodus/bytes/base32.js');
var base64 = require('../base/util/base64.js');
var operation = require('../base/operation.js');
require('../base/util/bignumber.js');
require('../base/muxed_account.js');
var address = require('../base/address.js');
require('@stellar/js-xdr');
var spec = require('./spec.js');
require('../rpc/api.js');
var server = require('../rpc/server.js');
var assembled_transaction = require('./assembled_transaction.js');
var utils = require('../bindings/utils.js');
var contractExecutableExternalRef = require('../xdr/generated/contract-executable-external-ref.js');

const CONSTRUCTOR_FUNC = "__constructor";
class Client {
  constructor(spec, options) {
    this.spec = spec;
    this.options = options;
    if (options.server === void 0) {
      const { allowHttp, headers } = options;
      options.server = new server.RpcServer(options.rpcUrl, {
        allowHttp,
        headers
      });
    }
    this.spec.funcs().forEach((xdrFn) => {
      const method = xdrFn.name.toString();
      if (method === CONSTRUCTOR_FUNC) {
        return;
      }
      const assembleTransaction = (args, methodOptions) => assembled_transaction.AssembledTransaction.build({
        method,
        args: args && spec.funcArgsToScVals(method, args),
        ...options,
        ...methodOptions,
        errorTypes: spec.errorCases().reduce(
          (acc, curr) => ({
            ...acc,
            [curr.value]: { message: curr.doc.toString() }
          }),
          {}
        ),
        parseResultXdr: (result) => spec.funcResToNative(method, result)
      });
      this[utils.sanitizeIdentifier(method)] = spec.getFunc(method).inputs.length === 0 ? (opts) => assembleTransaction(void 0, opts) : assembleTransaction;
    });
  }
  spec;
  options;
  static async deploy(args, options) {
    const {
      wasmHash,
      externalRef,
      salt,
      format,
      fee,
      timeoutInSeconds,
      simulate,
      ...clientOptions
    } = options;
    if (!clientOptions.rpcUrl) {
      throw new TypeError("options must contain rpcUrl");
    }
    const { rpcUrl, allowHttp, headers } = clientOptions;
    const server$1 = clientOptions.server ?? new server.RpcServer(rpcUrl, { allowHttp, headers });
    let executableOpts;
    let specWasmHash;
    if (externalRef !== void 0) {
      const ref = externalRef instanceof contractExecutableExternalRef.ContractExecutableExternalRef ? externalRef : new contractExecutableExternalRef.ContractExecutableExternalRef({
        executableOwner: (externalRef.owner instanceof address.Address ? externalRef.owner : new address.Address(externalRef.owner)).toScAddress(),
        tag: externalRef.tag
      });
      specWasmHash = await server$1.getExternalRefWasmHash(ref);
      executableOpts = { externalRef: ref };
    } else {
      specWasmHash = typeof wasmHash === "string" ? (format ?? "hex") === "base64" ? base64.base64ToUint8Array(wasmHash) : uint8arrayExtras.hexToUint8Array(wasmHash) : wasmHash;
      executableOpts = { wasmHash: specWasmHash };
    }
    const spec$1 = spec.Spec.fromWasm(
      await server$1.getContractWasmByHash(specWasmHash)
    );
    const operation$1 = operation.Operation.createCustomContract({
      address: new address.Address(options.address || options.publicKey),
      ...executableOpts,
      salt,
      constructorArgs: args ? spec$1.funcArgsToScVals(CONSTRUCTOR_FUNC, args) : []
    });
    return assembled_transaction.AssembledTransaction.buildWithOp(operation$1, {
      fee,
      timeoutInSeconds,
      simulate,
      ...clientOptions,
      contractId: "ignored",
      method: CONSTRUCTOR_FUNC,
      parseResultXdr: (result) => new Client(spec$1, {
        ...clientOptions,
        contractId: address.Address.fromScVal(result).toString()
      })
    });
  }
  /**
   * Generates a Client instance from the provided ClientOptions and the contract's wasm hash.
   * The wasmHash can be provided in either hex or base64 format.
   *
   * @typeParam T - An interface describing the contract's methods, used to type
   * the returned client. Defaults to `unknown`, so calling without a type
   * argument yields a plain `Client` (backward compatible). Provide it to get
   * typed, autocompleted contract methods without code generation.
   *
   * @param wasmHash - The hash of the contract's wasm binary, in either hex or base64 format.
   * @param options - The ClientOptions object containing the necessary configuration, including the rpcUrl.
   * @param format - (optional) The format of the provided wasmHash, either "hex" or "base64". Defaults to "hex".
   * @returns A Promise that resolves to a Client instance.
   * @throws If the provided options object does not contain an rpcUrl.
   *
   * @example
   * ```ts
   * interface MyContract {
   *   increment: (opts?: MethodOptions) => Promise<AssembledTransaction<number>>;
   * }
   * const client = await contract.Client.fromWasmHash<MyContract>(hash, options);
   * const tx = await client.increment(); // typed
   * ```
   */
  static async fromWasmHash(wasmHash, options, format = "hex") {
    if (!options || !options.rpcUrl) {
      throw new TypeError("options must contain rpcUrl");
    }
    const { rpcUrl, allowHttp, headers } = options;
    const server$1 = options.server ?? new server.RpcServer(rpcUrl, {
      allowHttp,
      headers
    });
    const wasm = await server$1.getContractWasmByHash(wasmHash, format);
    return Client.fromWasm(wasm, options);
  }
  /**
   * Generates a Client instance from the provided ClientOptions and the contract's wasm binary.
   *
   * @typeParam T - An interface describing the contract's methods, used to type
   * the returned client. Defaults to `unknown`, so calling without a type
   * argument yields a plain `Client` (backward compatible). Provide it to get
   * typed, autocompleted contract methods without code generation.
   *
   * @param wasm - The contract's wasm binary as a Uint8Array.
   * @param options - The ClientOptions object containing the necessary configuration.
   * @returns A Promise that resolves to a Client instance.
   * @throws If the contract spec cannot be obtained from the provided wasm binary.
   *
   * @example
   * ```ts
   * interface MyContract {
   *   increment: (opts?: MethodOptions) => Promise<AssembledTransaction<number>>;
   * }
   * const client = await contract.Client.fromWasm<MyContract>(wasm, options);
   * const tx = await client.increment(); // typed
   * ```
   */
  static async fromWasm(wasm, options) {
    const spec$1 = await spec.Spec.fromWasm(wasm);
    return new Client(spec$1, options);
  }
  /**
   * Generates a Client instance from the provided ClientOptions, which must include the contractId and rpcUrl.
   *
   * If the contract is a built-in Stellar Asset Contract (SAC), the embedded
   * SAC spec is used instead of downloading Wasm, since a SAC has no Wasm
   * executable on-chain.
   *
   * If the contract was created from a CAP-85 external executable reference,
   * the reference is resolved to a Wasm hash first (see
   * {@link rpc.Server.getExternalRefWasmHash}), then the spec is read from
   * that Wasm.
   *
   * @typeParam T - An interface describing the contract's methods, used to type
   * the returned client. Defaults to `unknown`, so calling without a type
   * argument yields a plain `Client` (backward compatible). Provide it to get
   * typed, autocompleted contract methods without code generation.
   *
   * @param options - The ClientOptions object containing the necessary configuration, including the contractId and rpcUrl.
   * @returns A Promise that resolves to a Client instance.
   * @throws If the provided options object does not contain both rpcUrl and contractId.
   *
   * @example
   * ```ts
   * interface MyContract {
   *   increment: (opts?: MethodOptions) => Promise<AssembledTransaction<number>>;
   * }
   * const client = await contract.Client.from<MyContract>(options);
   * const tx = await client.increment(); // typed
   * ```
   */
  static async from(options) {
    if (!options || !options.rpcUrl || !options.contractId) {
      throw new TypeError("options must contain rpcUrl and contractId");
    }
    const { rpcUrl, contractId, allowHttp, headers } = options;
    const server$1 = options.server ?? new server.RpcServer(rpcUrl, {
      allowHttp,
      headers
    });
    const instance = await server$1.getContractInstance(contractId);
    const executable = instance.executable;
    if (executable.type === "contractExecutableStellarAsset") {
      const { SAC_SPEC } = await Promise.resolve().then(function () { return require('../bindings/sac-spec.js'); });
      return new Client(new spec.Spec(SAC_SPEC), options);
    }
    const wasmHash = executable.type === "contractExecutableExternalRef" ? await server$1.getExternalRefWasmHash(executable.externalRef) : executable.wasmHash.value;
    const wasm = await server$1.getContractWasmByHash(wasmHash);
    return Client.fromWasm(wasm, options);
  }
  txFromJson = (json) => {
    const { method, ...tx } = JSON.parse(json);
    return assembled_transaction.AssembledTransaction.fromJson(
      {
        ...this.options,
        method,
        parseResultXdr: (result) => this.spec.funcResToNative(method, result)
      },
      tx
    );
  };
  /**
   * @deprecated Use {@link txFromJson} instead.
   */
  txFromJSON = this.txFromJson;
  txFromXDR = (xdrBase64) => assembled_transaction.AssembledTransaction.fromXdr(this.options, xdrBase64, this.spec);
}

exports.Client = Client;
//# sourceMappingURL=client.js.map
