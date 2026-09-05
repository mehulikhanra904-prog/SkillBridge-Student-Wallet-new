import { EnumValue } from "../values/enum-value.js";
export type ScMetaKindWire = number;
export type ScMetaKindName = "scMetaV0";
/**
 * ```xdr
 * enum SCMetaKind
 * {
 *     SC_META_V0 = 0
 * };
 * ```
 */
export declare class ScMetaKind extends EnumValue<ScMetaKindName> {
    static readonly scMetaV0: ScMetaKind;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"ScMetaKind", {
        readonly scMetaV0: 0;
    }>;
    static fromValue(value: number): ScMetaKind;
    static fromName(name: ScMetaKindName): ScMetaKind;
    static fromXdrObject(wire: number): ScMetaKind;
}
