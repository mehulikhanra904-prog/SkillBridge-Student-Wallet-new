import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ContractCodeEntryV1, type ContractCodeEntryV1Wire } from "./contract-code-entry-v1.js";
export type ContractCodeEntryExtWire = {
    v: 0;
} | {
    v: 1;
    v1: ContractCodeEntryV1Wire;
};
export type ContractCodeEntryExtVariantName = "v0" | "v1";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *         case 0:
 *             void;
 *         case 1:
 *             struct
 *             {
 *                 ExtensionPoint ext;
 *                 ContractCodeCostInputs costInputs;
 *             } v1;
 *     }
 * ```
 */
declare abstract class ContractCodeEntryExtBase extends XdrValue {
    abstract readonly type: ContractCodeEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<ContractCodeEntryExtWire>;
    static v0(): ContractCodeEntryExtV0;
    static v1(v1: ContractCodeEntryV1): ContractCodeEntryExtV1;
    static fromXdrObject(wire: ContractCodeEntryExtWire): ContractCodeEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete ContractCodeEntryExt variant.
     * Use this instead of `instanceof ContractCodeEntryExt`: the exported `ContractCodeEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ContractCodeEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ContractCodeEntryExt;
    abstract toXdrObject(): ContractCodeEntryExtWire;
}
export declare class ContractCodeEntryExtV0 extends ContractCodeEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<ContractCodeEntryExtWire, {
        v: 0;
    }>;
}
export declare class ContractCodeEntryExtV1 extends ContractCodeEntryExtBase {
    readonly type: "v1";
    readonly v1: ContractCodeEntryV1;
    constructor(v1: ContractCodeEntryV1);
    get value(): ContractCodeEntryV1;
    toXdrObject(): Extract<ContractCodeEntryExtWire, {
        v: 1;
    }>;
}
export type ContractCodeEntryExt = ContractCodeEntryExtV0 | ContractCodeEntryExtV1;
export declare const ContractCodeEntryExt: typeof ContractCodeEntryExtBase;
export {};
