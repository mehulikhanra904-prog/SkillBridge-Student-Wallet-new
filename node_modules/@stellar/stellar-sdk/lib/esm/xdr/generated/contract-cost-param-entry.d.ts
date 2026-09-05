import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
export interface ContractCostParamEntryWire {
    ext: ExtensionPointWire;
    constTerm: bigint;
    linearTerm: bigint;
}
/**
 * ```xdr
 * struct ContractCostParamEntry {
 *     // use `ext` to add more terms (e.g. higher order polynomials) in the future
 *     ExtensionPoint ext;
 *
 *     int64 constTerm;
 *     int64 linearTerm;
 * };
 * ```
 */
export declare class ContractCostParamEntry extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly constTerm: bigint;
    readonly linearTerm: bigint;
    static readonly schema: XdrType<ContractCostParamEntryWire>;
    constructor(input: {
        ext: ExtensionPoint;
        constTerm: bigint;
        linearTerm: bigint;
    });
    toXdrObject(): ContractCostParamEntryWire;
    static fromXdrObject(wire: ContractCostParamEntryWire): ContractCostParamEntry;
}
