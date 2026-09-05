import { EnumValue } from "../values/enum-value.js";
export type BumpSequenceResultCodeWire = number;
export type BumpSequenceResultCodeName = "bumpSequenceSuccess" | "bumpSequenceBadSeq";
/**
 * ```xdr
 * enum BumpSequenceResultCode
 * {
 *     // codes considered as "success" for the operation
 *     BUMP_SEQUENCE_SUCCESS = 0,
 *     // codes considered as "failure" for the operation
 *     BUMP_SEQUENCE_BAD_SEQ = -1 // `bumpTo` is not within bounds
 * };
 * ```
 */
export declare class BumpSequenceResultCode extends EnumValue<BumpSequenceResultCodeName> {
    static readonly bumpSequenceSuccess: BumpSequenceResultCode;
    static readonly bumpSequenceBadSeq: BumpSequenceResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly bumpSequenceSuccess: 0;
        readonly bumpSequenceBadSeq: -1;
    }>> & {
        readonly kind: "enum";
        readonly name: "BumpSequenceResultCode";
        readonly nameByValue: ReadonlyMap<number, "bumpSequenceSuccess" | "bumpSequenceBadSeq">;
    } & {
        readonly bumpSequenceSuccess: 0;
        readonly bumpSequenceBadSeq: -1;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): BumpSequenceResultCode;
    static fromName(name: BumpSequenceResultCodeName): BumpSequenceResultCode;
    static fromXdrObject(wire: number): BumpSequenceResultCode;
}
