import { EnumValue } from "../values/enum-value.js";
export type ScSpecEntryKindWire = number;
export type ScSpecEntryKindName = "scSpecEntryFunctionV0" | "scSpecEntryUdtStructV0" | "scSpecEntryUdtUnionV0" | "scSpecEntryUdtEnumV0" | "scSpecEntryUdtErrorEnumV0" | "scSpecEntryEventV0";
/**
 * ```xdr
 * enum SCSpecEntryKind
 * {
 *     SC_SPEC_ENTRY_FUNCTION_V0 = 0,
 *     SC_SPEC_ENTRY_UDT_STRUCT_V0 = 1,
 *     SC_SPEC_ENTRY_UDT_UNION_V0 = 2,
 *     SC_SPEC_ENTRY_UDT_ENUM_V0 = 3,
 *     SC_SPEC_ENTRY_UDT_ERROR_ENUM_V0 = 4,
 *     SC_SPEC_ENTRY_EVENT_V0 = 5
 * };
 * ```
 */
export declare class ScSpecEntryKind extends EnumValue<ScSpecEntryKindName> {
    static readonly scSpecEntryFunctionV0: ScSpecEntryKind;
    static readonly scSpecEntryUdtStructV0: ScSpecEntryKind;
    static readonly scSpecEntryUdtUnionV0: ScSpecEntryKind;
    static readonly scSpecEntryUdtEnumV0: ScSpecEntryKind;
    static readonly scSpecEntryUdtErrorEnumV0: ScSpecEntryKind;
    static readonly scSpecEntryEventV0: ScSpecEntryKind;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly scSpecEntryFunctionV0: 0;
        readonly scSpecEntryUdtStructV0: 1;
        readonly scSpecEntryUdtUnionV0: 2;
        readonly scSpecEntryUdtEnumV0: 3;
        readonly scSpecEntryUdtErrorEnumV0: 4;
        readonly scSpecEntryEventV0: 5;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScSpecEntryKind";
        readonly nameByValue: ReadonlyMap<number, "scSpecEntryFunctionV0" | "scSpecEntryUdtStructV0" | "scSpecEntryUdtUnionV0" | "scSpecEntryUdtEnumV0" | "scSpecEntryUdtErrorEnumV0" | "scSpecEntryEventV0">;
    } & {
        readonly scSpecEntryFunctionV0: 0;
        readonly scSpecEntryUdtStructV0: 1;
        readonly scSpecEntryUdtUnionV0: 2;
        readonly scSpecEntryUdtEnumV0: 3;
        readonly scSpecEntryUdtErrorEnumV0: 4;
        readonly scSpecEntryEventV0: 5;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScSpecEntryKind;
    static fromName(name: ScSpecEntryKindName): ScSpecEntryKind;
    static fromXdrObject(wire: number): ScSpecEntryKind;
}
