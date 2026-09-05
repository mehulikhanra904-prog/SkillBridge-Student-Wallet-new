import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { ContractExecutableExternalRef, type ContractExecutableExternalRefWire } from "./contract-executable-external-ref.js";
export type ContractExecutableWire = {
    type: 0;
    wasmHash: HashWire;
} | {
    type: 1;
} | {
    type: 2;
    externalRef: ContractExecutableExternalRefWire;
};
export type ContractExecutableVariantName = "contractExecutableWasm" | "contractExecutableStellarAsset" | "contractExecutableExternalRef";
/**
 * ```xdr
 * union ContractExecutable switch (ContractExecutableType type)
 * {
 * case CONTRACT_EXECUTABLE_WASM:
 *     Hash wasm_hash;
 * case CONTRACT_EXECUTABLE_STELLAR_ASSET:
 *     void;
 * case CONTRACT_EXECUTABLE_EXTERNAL_REF:
 *     ContractExecutableExternalRef external_ref;
 * };
 * ```
 */
declare abstract class ContractExecutableBase extends XdrValue {
    abstract readonly type: ContractExecutableVariantName;
    constructor();
    static readonly schema: XdrType<ContractExecutableWire>;
    static contractExecutableWasm(wasmHash: Hash | Uint8Array | string): ContractExecutableWasm;
    static contractExecutableStellarAsset(): ContractExecutableStellarAsset;
    static contractExecutableExternalRef(externalRef: ContractExecutableExternalRef): ContractExecutableExternalRefArm;
    static fromXdrObject(wire: ContractExecutableWire): ContractExecutable;
    /**
     * Type guard narrowing an unknown value to a concrete ContractExecutable variant.
     * Use this instead of `instanceof ContractExecutable`: the exported `ContractExecutable` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ContractExecutable.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ContractExecutable;
    abstract toXdrObject(): ContractExecutableWire;
}
export declare class ContractExecutableWasm extends ContractExecutableBase {
    readonly type: "contractExecutableWasm";
    readonly wasmHash: Hash;
    constructor(wasmHash: Hash | Uint8Array | string);
    get value(): Hash;
    toXdrObject(): Extract<ContractExecutableWire, {
        type: 0;
    }>;
}
export declare class ContractExecutableStellarAsset extends ContractExecutableBase {
    readonly type: "contractExecutableStellarAsset";
    get value(): null;
    toXdrObject(): Extract<ContractExecutableWire, {
        type: 1;
    }>;
}
export declare class ContractExecutableExternalRefArm extends ContractExecutableBase {
    readonly type: "contractExecutableExternalRef";
    readonly externalRef: ContractExecutableExternalRef;
    constructor(externalRef: ContractExecutableExternalRef);
    get value(): ContractExecutableExternalRef;
    toXdrObject(): Extract<ContractExecutableWire, {
        type: 2;
    }>;
}
export type ContractExecutable = ContractExecutableWasm | ContractExecutableStellarAsset | ContractExecutableExternalRefArm;
export declare const ContractExecutable: typeof ContractExecutableBase;
export {};
