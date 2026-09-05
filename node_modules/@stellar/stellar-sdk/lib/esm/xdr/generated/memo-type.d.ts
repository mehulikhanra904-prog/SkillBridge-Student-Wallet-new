import { EnumValue } from "../values/enum-value.js";
export type MemoTypeWire = number;
export type MemoTypeName = "memoNone" | "memoText" | "memoId" | "memoHash" | "memoReturn";
/**
 * ```xdr
 * enum MemoType
 * {
 *     MEMO_NONE = 0,
 *     MEMO_TEXT = 1,
 *     MEMO_ID = 2,
 *     MEMO_HASH = 3,
 *     MEMO_RETURN = 4
 * };
 * ```
 */
export declare class MemoType extends EnumValue<MemoTypeName> {
    static readonly memoNone: MemoType;
    static readonly memoText: MemoType;
    static readonly memoId: MemoType;
    static readonly memoHash: MemoType;
    static readonly memoReturn: MemoType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly memoNone: 0;
        readonly memoText: 1;
        readonly memoId: 2;
        readonly memoHash: 3;
        readonly memoReturn: 4;
    }>> & {
        readonly kind: "enum";
        readonly name: "MemoType";
        readonly nameByValue: ReadonlyMap<number, "memoNone" | "memoText" | "memoId" | "memoHash" | "memoReturn">;
    } & {
        readonly memoNone: 0;
        readonly memoText: 1;
        readonly memoId: 2;
        readonly memoHash: 3;
        readonly memoReturn: 4;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): MemoType;
    static fromName(name: MemoTypeName): MemoType;
    static fromXdrObject(wire: number): MemoType;
}
