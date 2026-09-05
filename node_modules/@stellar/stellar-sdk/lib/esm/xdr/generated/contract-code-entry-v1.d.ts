import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
import { ContractCodeCostInputs, type ContractCodeCostInputsWire } from "./contract-code-cost-inputs.js";
export interface ContractCodeEntryV1Wire {
    ext: ExtensionPointWire;
    costInputs: ContractCodeCostInputsWire;
}
/**
 * ```xdr
 * struct
 *             {
 *                 ExtensionPoint ext;
 *                 ContractCodeCostInputs costInputs;
 *             }
 * ```
 */
export declare class ContractCodeEntryV1 extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly costInputs: ContractCodeCostInputs;
    static readonly schema: XdrType<ContractCodeEntryV1Wire>;
    constructor(input: {
        ext: ExtensionPoint;
        costInputs: ContractCodeCostInputs;
    });
    toXdrObject(): ContractCodeEntryV1Wire;
    static fromXdrObject(wire: ContractCodeEntryV1Wire): ContractCodeEntryV1;
}
