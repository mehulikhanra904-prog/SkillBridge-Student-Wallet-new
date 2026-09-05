import type { ExternalExecutableRef } from "../base/operations/types.js";
import { Spec } from "./spec.js";
import { AssembledTransaction } from "./assembled_transaction.js";
import type { ClientOptions, MethodOptions } from "./types.js";
/**
 * Generate a class from the contract spec that where each contract method
 * gets included with an identical name.
 *
 * Each method returns an {@link contract.AssembledTransaction | AssembledTransaction} that can
 * be used to modify, simulate, decode results, and possibly sign, & submit the
 * transaction.
 *
 *
 * @param spec - {@link Spec} to construct a Client for
 * @param options - see {@link ClientOptions}
 */
export declare class Client {
    readonly spec: Spec;
    readonly options: ClientOptions;
    static deploy<T = Client>(
    /** Constructor/Initialization Args for the contract's `__constructor` method */
    args: Record<string, any> | null, 
    /** Options for initializing a Client as well as for calling a method, with extras specific to deploying. */
    options: MethodOptions & Omit<ClientOptions, "contractId"> & {
        /** Salt used to generate the contract's ID. Passed through to {@link Operation.createCustomContract}. Default: random. */
        salt?: Uint8Array;
        /** The address to use to deploy the custom contract */
        address?: string;
    } & ({
        /** The hash of the Wasm blob, which must already be installed on-chain. */
        wasmHash: Uint8Array | string;
        /** The format used to decode `wasmHash`, if it's provided as a string. */
        format?: "hex" | "base64";
        externalRef?: never;
    } | {
        /**
         * A CAP-85 external executable reference to deploy from instead of
         * a Wasm hash: the owner contract plus the tag under which it
         * publishes the Wasm hash. Passed through to
         * {@link Operation.createCustomContract}; the reference is also
         * resolved on-chain here to fetch the contract's spec.
         */
        externalRef: ExternalExecutableRef;
        wasmHash?: never;
        format?: never;
    })): Promise<AssembledTransaction<T>>;
    constructor(spec: Spec, options: ClientOptions);
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
    static fromWasmHash<T = unknown>(wasmHash: Uint8Array | string, options: ClientOptions, format?: "hex" | "base64"): Promise<Client & T>;
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
    static fromWasm<T = unknown>(wasm: Uint8Array, options: ClientOptions): Promise<Client & T>;
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
    static from<T = unknown>(options: ClientOptions): Promise<Client & T>;
    txFromJson: <T>(json: string) => AssembledTransaction<T>;
    /**
     * @deprecated Use {@link txFromJson} instead.
     */
    txFromJSON: <T>(json: string) => AssembledTransaction<T>;
    txFromXDR: <T>(xdrBase64: string) => AssembledTransaction<T>;
}
