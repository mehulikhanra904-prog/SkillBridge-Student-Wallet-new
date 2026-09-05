import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
export interface ContractCodeCostInputsWire {
    ext: ExtensionPointWire;
    nInstructions: number;
    nFunctions: number;
    nGlobals: number;
    nTableEntries: number;
    nTypes: number;
    nDataSegments: number;
    nElemSegments: number;
    nImports: number;
    nExports: number;
    nDataSegmentBytes: number;
}
/**
 * ```xdr
 * struct ContractCodeCostInputs {
 *     ExtensionPoint ext;
 *     uint32 nInstructions;
 *     uint32 nFunctions;
 *     uint32 nGlobals;
 *     uint32 nTableEntries;
 *     uint32 nTypes;
 *     uint32 nDataSegments;
 *     uint32 nElemSegments;
 *     uint32 nImports;
 *     uint32 nExports;
 *     uint32 nDataSegmentBytes;
 * };
 * ```
 */
export declare class ContractCodeCostInputs extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly nInstructions: number;
    readonly nFunctions: number;
    readonly nGlobals: number;
    readonly nTableEntries: number;
    readonly nTypes: number;
    readonly nDataSegments: number;
    readonly nElemSegments: number;
    readonly nImports: number;
    readonly nExports: number;
    readonly nDataSegmentBytes: number;
    static readonly schema: XdrType<ContractCodeCostInputsWire>;
    constructor(input: {
        ext: ExtensionPoint;
        nInstructions: number;
        nFunctions: number;
        nGlobals: number;
        nTableEntries: number;
        nTypes: number;
        nDataSegments: number;
        nElemSegments: number;
        nImports: number;
        nExports: number;
        nDataSegmentBytes: number;
    });
    toXdrObject(): ContractCodeCostInputsWire;
    static fromXdrObject(wire: ContractCodeCostInputsWire): ContractCodeCostInputs;
}
