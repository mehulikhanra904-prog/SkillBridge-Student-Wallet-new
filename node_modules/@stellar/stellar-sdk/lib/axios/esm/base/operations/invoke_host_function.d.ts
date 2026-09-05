import { Operation } from "../../xdr/index.js";
import { CreateCustomContractOpts, CreateStellarAssetContractOpts, InvokeContractFunctionOpts, InvokeHostFunctionOpts, UploadContractWasmOpts } from "./types.js";
/**
 * Invokes a single smart contract host function.
 *
 *
 * @param opts - options object
 *   - `func`: host function to execute (with its wrapped parameters)
 *   - `auth`: list outlining the tree of authorizations required for the call
 *   - `source`: an optional source account
 *
 * @see https://soroban.stellar.org/docs/fundamentals-and-concepts/invoking-contracts-with-transactions#function
 * @see Operation.invokeContractFunction
 * @see Operation.createCustomContract
 * @see Operation.createStellarAssetContract
 * @see Operation.uploadContractWasm
 * @see Contract.call
 */
export declare function invokeHostFunction(opts: InvokeHostFunctionOpts): Operation;
/**
 * Returns an operation that invokes a contract function.
 *
 *
 * @param opts - the set of parameters
 *   - `contract`: a strkey-fied contract address (`C...`)
 *   - `function`: the name of the contract fn to invoke
 *   - `args`: parameters to pass to the function invocation
 *   - `auth`: an optional list outlining the tree of authorizations required for the call
 *   - `source`: an optional source account
 *
 * @see Operation.invokeHostFunction
 * @see Contract.call
 * @see Address
 */
export declare function invokeContractFunction(opts: InvokeContractFunctionOpts): Operation;
/**
 * Returns an operation that creates a custom contract and atomically invokes
 * its constructor.
 *
 * The contract's executable is either the hash of uploaded WASM (`wasmHash`)
 * or a CAP-85 external executable reference (`externalRef`), naming an owner
 * contract and the tag under which it publishes the WASM hash. Exactly one of
 * the two must be given.
 *
 * @param opts - the set of parameters
 *   - `address`: the contract deployer address
 *   - `wasmHash`: the SHA-256 hash of the contract WASM you're deploying
 *   - `externalRef`: an external executable reference to deploy from instead,
 *     as either `{owner, tag}` or an {@link ContractExecutableExternalRef}
 *   - `constructorArgs`: the optional parameters to pass to the constructor
 *   - `salt`: an optional, 32-byte salt to distinguish deployment instances
 *   - `auth`: an optional list outlining the tree of authorizations required for the call
 *   - `source`: an optional source account
 *
 * @see https://soroban.stellar.org/docs/fundamentals-and-concepts/invoking-contracts-with-transactions#function
 * @see https://stellar.org/protocol/cap-85
 */
export declare function createCustomContract(opts: CreateCustomContractOpts): Operation;
/**
 * Returns an operation that wraps a Stellar asset into a token contract.
 *
 *
 * @param opts - the set of parameters
 *   - `asset`: the Stellar asset to wrap, either as an {@link Asset} object or in canonical form (SEP-11, `code:issuer`)
 *   - `auth`: an optional list outlining the tree of authorizations required for the upload
 *   - `source`: an optional source account
 *
 * @see https://stellar.org/protocol/sep-11#alphanum4-alphanum12
 * @see https://soroban.stellar.org/docs/fundamentals-and-concepts/invoking-contracts-with-transactions
 * @see https://soroban.stellar.org/docs/advanced-tutorials/stellar-asset-contract
 * @see Operation.invokeHostFunction
 */
export declare function createStellarAssetContract(opts: CreateStellarAssetContractOpts): Operation;
/**
 * Returns an operation that uploads WASM for a contract.
 *
 *
 * @param opts - the set of parameters
 *   - `wasm`: a WASM blob to upload to the ledger
 *   - `auth`: an optional list outlining the tree of authorizations required for the upload
 *   - `source`: an optional source account
 *
 * @see https://soroban.stellar.org/docs/fundamentals-and-concepts/invoking-contracts-with-transactions#function
 */
export declare function uploadContractWasm(opts: UploadContractWasmOpts): Operation;
