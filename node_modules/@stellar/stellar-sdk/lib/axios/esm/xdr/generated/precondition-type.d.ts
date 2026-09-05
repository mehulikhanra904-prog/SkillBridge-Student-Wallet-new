import { EnumValue } from "../values/enum-value.js";
export type PreconditionTypeWire = number;
export type PreconditionTypeName = "precondNone" | "precondTime" | "precondV2";
/**
 * ```xdr
 * enum PreconditionType
 * {
 *     PRECOND_NONE = 0,
 *     PRECOND_TIME = 1,
 *     PRECOND_V2 = 2
 * };
 * ```
 */
export declare class PreconditionType extends EnumValue<PreconditionTypeName> {
    static readonly precondNone: PreconditionType;
    static readonly precondTime: PreconditionType;
    static readonly precondV2: PreconditionType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly precondNone: 0;
        readonly precondTime: 1;
        readonly precondV2: 2;
    }>> & {
        readonly kind: "enum";
        readonly name: "PreconditionType";
        readonly nameByValue: ReadonlyMap<number, "precondNone" | "precondTime" | "precondV2">;
    } & {
        readonly precondNone: 0;
        readonly precondTime: 1;
        readonly precondV2: 2;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): PreconditionType;
    static fromName(name: PreconditionTypeName): PreconditionType;
    static fromXdrObject(wire: number): PreconditionType;
}
