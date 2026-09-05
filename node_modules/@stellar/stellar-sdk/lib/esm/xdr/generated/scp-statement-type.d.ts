import { EnumValue } from "../values/enum-value.js";
export type ScpStatementTypeWire = number;
export type ScpStatementTypeName = "scpStPrepare" | "scpStConfirm" | "scpStExternalize" | "scpStNominate";
/**
 * ```xdr
 * enum SCPStatementType
 * {
 *     SCP_ST_PREPARE = 0,
 *     SCP_ST_CONFIRM = 1,
 *     SCP_ST_EXTERNALIZE = 2,
 *     SCP_ST_NOMINATE = 3
 * };
 * ```
 */
export declare class ScpStatementType extends EnumValue<ScpStatementTypeName> {
    static readonly scpStPrepare: ScpStatementType;
    static readonly scpStConfirm: ScpStatementType;
    static readonly scpStExternalize: ScpStatementType;
    static readonly scpStNominate: ScpStatementType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly scpStPrepare: 0;
        readonly scpStConfirm: 1;
        readonly scpStExternalize: 2;
        readonly scpStNominate: 3;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScpStatementType";
        readonly nameByValue: ReadonlyMap<number, "scpStPrepare" | "scpStConfirm" | "scpStExternalize" | "scpStNominate">;
    } & {
        readonly scpStPrepare: 0;
        readonly scpStConfirm: 1;
        readonly scpStExternalize: 2;
        readonly scpStNominate: 3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScpStatementType;
    static fromName(name: ScpStatementTypeName): ScpStatementType;
    static fromXdrObject(wire: number): ScpStatementType;
}
