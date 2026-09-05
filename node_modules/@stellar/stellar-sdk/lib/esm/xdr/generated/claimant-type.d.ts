import { EnumValue } from "../values/enum-value.js";
export type ClaimantTypeWire = number;
export type ClaimantTypeName = "claimantTypeV0";
/**
 * ```xdr
 * enum ClaimantType
 * {
 *     CLAIMANT_TYPE_V0 = 0
 * };
 * ```
 */
export declare class ClaimantType extends EnumValue<ClaimantTypeName> {
    static readonly claimantTypeV0: ClaimantType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"ClaimantType", {
        readonly claimantTypeV0: 0;
    }>;
    static fromValue(value: number): ClaimantType;
    static fromName(name: ClaimantTypeName): ClaimantType;
    static fromXdrObject(wire: number): ClaimantType;
}
