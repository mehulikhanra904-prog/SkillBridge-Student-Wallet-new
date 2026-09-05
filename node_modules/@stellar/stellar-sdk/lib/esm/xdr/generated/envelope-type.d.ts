import { EnumValue } from "../values/enum-value.js";
export type EnvelopeTypeWire = number;
export type EnvelopeTypeName = "envelopeTypeTxV0" | "envelopeTypeScp" | "envelopeTypeTx" | "envelopeTypeAuth" | "envelopeTypeScpvalue" | "envelopeTypeTxFeeBump" | "envelopeTypeOpId" | "envelopeTypePoolRevokeOpId" | "envelopeTypeContractId" | "envelopeTypeSorobanAuthorization" | "envelopeTypeSorobanAuthorizationWithAddress";
/**
 * ```xdr
 * enum EnvelopeType
 * {
 *     ENVELOPE_TYPE_TX_V0 = 0,
 *     ENVELOPE_TYPE_SCP = 1,
 *     ENVELOPE_TYPE_TX = 2,
 *     ENVELOPE_TYPE_AUTH = 3,
 *     ENVELOPE_TYPE_SCPVALUE = 4,
 *     ENVELOPE_TYPE_TX_FEE_BUMP = 5,
 *     ENVELOPE_TYPE_OP_ID = 6,
 *     ENVELOPE_TYPE_POOL_REVOKE_OP_ID = 7,
 *     ENVELOPE_TYPE_CONTRACT_ID = 8,
 *     ENVELOPE_TYPE_SOROBAN_AUTHORIZATION = 9,
 *     ENVELOPE_TYPE_SOROBAN_AUTHORIZATION_WITH_ADDRESS = 10
 * };
 * ```
 */
export declare class EnvelopeType extends EnumValue<EnvelopeTypeName> {
    static readonly envelopeTypeTxV0: EnvelopeType;
    static readonly envelopeTypeScp: EnvelopeType;
    static readonly envelopeTypeTx: EnvelopeType;
    static readonly envelopeTypeAuth: EnvelopeType;
    static readonly envelopeTypeScpvalue: EnvelopeType;
    static readonly envelopeTypeTxFeeBump: EnvelopeType;
    static readonly envelopeTypeOpId: EnvelopeType;
    static readonly envelopeTypePoolRevokeOpId: EnvelopeType;
    static readonly envelopeTypeContractId: EnvelopeType;
    static readonly envelopeTypeSorobanAuthorization: EnvelopeType;
    static readonly envelopeTypeSorobanAuthorizationWithAddress: EnvelopeType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly envelopeTypeTxV0: 0;
        readonly envelopeTypeScp: 1;
        readonly envelopeTypeTx: 2;
        readonly envelopeTypeAuth: 3;
        readonly envelopeTypeScpvalue: 4;
        readonly envelopeTypeTxFeeBump: 5;
        readonly envelopeTypeOpId: 6;
        readonly envelopeTypePoolRevokeOpId: 7;
        readonly envelopeTypeContractId: 8;
        readonly envelopeTypeSorobanAuthorization: 9;
        readonly envelopeTypeSorobanAuthorizationWithAddress: 10;
    }>> & {
        readonly kind: "enum";
        readonly name: "EnvelopeType";
        readonly nameByValue: ReadonlyMap<number, "envelopeTypeTxV0" | "envelopeTypeScp" | "envelopeTypeTx" | "envelopeTypeAuth" | "envelopeTypeScpvalue" | "envelopeTypeTxFeeBump" | "envelopeTypeOpId" | "envelopeTypePoolRevokeOpId" | "envelopeTypeContractId" | "envelopeTypeSorobanAuthorization" | "envelopeTypeSorobanAuthorizationWithAddress">;
    } & {
        readonly envelopeTypeTxV0: 0;
        readonly envelopeTypeScp: 1;
        readonly envelopeTypeTx: 2;
        readonly envelopeTypeAuth: 3;
        readonly envelopeTypeScpvalue: 4;
        readonly envelopeTypeTxFeeBump: 5;
        readonly envelopeTypeOpId: 6;
        readonly envelopeTypePoolRevokeOpId: 7;
        readonly envelopeTypeContractId: 8;
        readonly envelopeTypeSorobanAuthorization: 9;
        readonly envelopeTypeSorobanAuthorizationWithAddress: 10;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): EnvelopeType;
    static fromName(name: EnvelopeTypeName): EnvelopeType;
    static fromXdrObject(wire: number): EnvelopeType;
}
