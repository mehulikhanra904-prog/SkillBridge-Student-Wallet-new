import { EnumValue } from "../values/enum-value.js";
export type ScSpecUdtUnionCaseV0KindWire = number;
export type ScSpecUdtUnionCaseV0KindName = "scSpecUdtUnionCaseVoidV0" | "scSpecUdtUnionCaseTupleV0";
/**
 * ```xdr
 * enum SCSpecUDTUnionCaseV0Kind
 * {
 *     SC_SPEC_UDT_UNION_CASE_VOID_V0 = 0,
 *     SC_SPEC_UDT_UNION_CASE_TUPLE_V0 = 1
 * };
 * ```
 */
export declare class ScSpecUdtUnionCaseV0Kind extends EnumValue<ScSpecUdtUnionCaseV0KindName> {
    static readonly scSpecUdtUnionCaseVoidV0: ScSpecUdtUnionCaseV0Kind;
    static readonly scSpecUdtUnionCaseTupleV0: ScSpecUdtUnionCaseV0Kind;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly scSpecUdtUnionCaseVoidV0: 0;
        readonly scSpecUdtUnionCaseTupleV0: 1;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScSpecUdtUnionCaseV0Kind";
        readonly nameByValue: ReadonlyMap<number, "scSpecUdtUnionCaseVoidV0" | "scSpecUdtUnionCaseTupleV0">;
    } & {
        readonly scSpecUdtUnionCaseVoidV0: 0;
        readonly scSpecUdtUnionCaseTupleV0: 1;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScSpecUdtUnionCaseV0Kind;
    static fromName(name: ScSpecUdtUnionCaseV0KindName): ScSpecUdtUnionCaseV0Kind;
    static fromXdrObject(wire: number): ScSpecUdtUnionCaseV0Kind;
}
