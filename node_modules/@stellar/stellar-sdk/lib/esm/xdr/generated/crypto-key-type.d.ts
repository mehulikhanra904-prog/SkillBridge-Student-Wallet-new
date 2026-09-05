import { EnumValue } from "../values/enum-value.js";
export type CryptoKeyTypeWire = number;
export type CryptoKeyTypeName = "keyTypeEd25519" | "keyTypePreAuthTx" | "keyTypeHashX" | "keyTypeEd25519SignedPayload" | "keyTypeMuxedEd25519";
/**
 * ```xdr
 * enum CryptoKeyType
 * {
 *     KEY_TYPE_ED25519 = 0,
 *     KEY_TYPE_PRE_AUTH_TX = 1,
 *     KEY_TYPE_HASH_X = 2,
 *     KEY_TYPE_ED25519_SIGNED_PAYLOAD = 3,
 *     // MUXED enum values for supported type are derived from the enum values
 *     // above by ORing them with 0x100
 *     KEY_TYPE_MUXED_ED25519 = 0x100
 * };
 * ```
 */
export declare class CryptoKeyType extends EnumValue<CryptoKeyTypeName> {
    static readonly keyTypeEd25519: CryptoKeyType;
    static readonly keyTypePreAuthTx: CryptoKeyType;
    static readonly keyTypeHashX: CryptoKeyType;
    static readonly keyTypeEd25519SignedPayload: CryptoKeyType;
    static readonly keyTypeMuxedEd25519: CryptoKeyType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly keyTypeEd25519: 0;
        readonly keyTypePreAuthTx: 1;
        readonly keyTypeHashX: 2;
        readonly keyTypeEd25519SignedPayload: 3;
        readonly keyTypeMuxedEd25519: 256;
    }>> & {
        readonly kind: "enum";
        readonly name: "CryptoKeyType";
        readonly nameByValue: ReadonlyMap<number, "keyTypeEd25519" | "keyTypePreAuthTx" | "keyTypeHashX" | "keyTypeEd25519SignedPayload" | "keyTypeMuxedEd25519">;
    } & {
        readonly keyTypeEd25519: 0;
        readonly keyTypePreAuthTx: 1;
        readonly keyTypeHashX: 2;
        readonly keyTypeEd25519SignedPayload: 3;
        readonly keyTypeMuxedEd25519: 256;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): CryptoKeyType;
    static fromName(name: CryptoKeyTypeName): CryptoKeyType;
    static fromXdrObject(wire: number): CryptoKeyType;
}
