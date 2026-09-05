import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerFootprint, type LedgerFootprintWire } from "./ledger-footprint.js";
export interface SorobanResourcesWire {
    footprint: LedgerFootprintWire;
    instructions: number;
    diskReadBytes: number;
    writeBytes: number;
}
/**
 * ```xdr
 * struct SorobanResources
 * {
 *     // The ledger footprint of the transaction.
 *     LedgerFootprint footprint;
 *     // The maximum number of instructions this transaction can use
 *     uint32 instructions;
 *
 *     // The maximum number of bytes this transaction can read from disk backed entries
 *     uint32 diskReadBytes;
 *     // The maximum number of bytes this transaction can write to ledger
 *     uint32 writeBytes;
 * };
 * ```
 */
export declare class SorobanResources extends XdrValue {
    readonly footprint: LedgerFootprint;
    readonly instructions: number;
    readonly diskReadBytes: number;
    readonly writeBytes: number;
    static readonly schema: XdrType<SorobanResourcesWire>;
    constructor(input: {
        footprint: LedgerFootprint;
        instructions: number;
        diskReadBytes: number;
        writeBytes: number;
    });
    toXdrObject(): SorobanResourcesWire;
    static fromXdrObject(wire: SorobanResourcesWire): SorobanResources;
}
