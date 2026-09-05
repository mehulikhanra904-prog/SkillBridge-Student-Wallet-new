import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type BumpSequenceResultWire = {
    code: 0;
} | {
    code: -1;
};
export type BumpSequenceResultVariantName = "bumpSequenceSuccess" | "bumpSequenceBadSeq";
/**
 * ```xdr
 * union BumpSequenceResult switch (BumpSequenceResultCode code)
 * {
 * case BUMP_SEQUENCE_SUCCESS:
 *     void;
 * case BUMP_SEQUENCE_BAD_SEQ:
 *     void;
 * };
 * ```
 */
declare abstract class BumpSequenceResultBase extends XdrValue {
    abstract readonly type: BumpSequenceResultVariantName;
    constructor();
    static readonly schema: XdrType<BumpSequenceResultWire>;
    static bumpSequenceSuccess(): BumpSequenceResultSuccess;
    static bumpSequenceBadSeq(): BumpSequenceResultBadSeq;
    static fromXdrObject(wire: BumpSequenceResultWire): BumpSequenceResult;
    /**
     * Type guard narrowing an unknown value to a concrete BumpSequenceResult variant.
     * Use this instead of `instanceof BumpSequenceResult`: the exported `BumpSequenceResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `BumpSequenceResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is BumpSequenceResult;
    abstract toXdrObject(): BumpSequenceResultWire;
}
export declare class BumpSequenceResultSuccess extends BumpSequenceResultBase {
    readonly type: "bumpSequenceSuccess";
    get value(): null;
    toXdrObject(): Extract<BumpSequenceResultWire, {
        code: 0;
    }>;
}
export declare class BumpSequenceResultBadSeq extends BumpSequenceResultBase {
    readonly type: "bumpSequenceBadSeq";
    get value(): null;
    toXdrObject(): Extract<BumpSequenceResultWire, {
        code: -1;
    }>;
}
export type BumpSequenceResult = BumpSequenceResultSuccess | BumpSequenceResultBadSeq;
export declare const BumpSequenceResult: typeof BumpSequenceResultBase;
export {};
