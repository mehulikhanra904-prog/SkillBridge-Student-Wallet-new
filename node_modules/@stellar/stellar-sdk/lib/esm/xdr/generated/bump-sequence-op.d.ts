import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface BumpSequenceOpWire {
    bumpTo: bigint;
}
/**
 * ```xdr
 * struct BumpSequenceOp
 * {
 *     SequenceNumber bumpTo;
 * };
 * ```
 */
export declare class BumpSequenceOp extends XdrValue {
    readonly bumpTo: bigint;
    static readonly schema: XdrType<BumpSequenceOpWire>;
    constructor(input: {
        bumpTo: bigint;
    });
    toXdrObject(): BumpSequenceOpWire;
    static fromXdrObject(wire: BumpSequenceOpWire): BumpSequenceOp;
}
