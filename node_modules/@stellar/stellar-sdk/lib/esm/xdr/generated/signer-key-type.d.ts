import { EnumValue } from "../values/enum-value.js";
export type SignerKeyTypeWire = number;
export type SignerKeyTypeName = "signerKeyTypeEd25519" | "signerKeyTypePreAuthTx" | "signerKeyTypeHashX" | "signerKeyTypeEd25519SignedPayload";
/**
 * ```xdr
 * enum SignerKeyType
 * {
 *     SIGNER_KEY_TYPE_ED25519 = KEY_TYPE_ED25519,
 *     SIGNER_KEY_TYPE_PRE_AUTH_TX = KEY_TYPE_PRE_AUTH_TX,
 *     SIGNER_KEY_TYPE_HASH_X = KEY_TYPE_HASH_X,
 *     SIGNER_KEY_TYPE_ED25519_SIGNED_PAYLOAD = KEY_TYPE_ED25519_SIGNED_PAYLOAD
 * };
 * ```
 */
export declare class SignerKeyType extends EnumValue<SignerKeyTypeName> {
    static readonly signerKeyTypeEd25519: SignerKeyType;
    static readonly signerKeyTypePreAuthTx: SignerKeyType;
    static readonly signerKeyTypeHashX: SignerKeyType;
    static readonly signerKeyTypeEd25519SignedPayload: SignerKeyType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly signerKeyTypeEd25519: 0;
        readonly signerKeyTypePreAuthTx: 1;
        readonly signerKeyTypeHashX: 2;
        readonly signerKeyTypeEd25519SignedPayload: 3;
    }>> & {
        readonly kind: "enum";
        readonly name: "SignerKeyType";
        readonly nameByValue: ReadonlyMap<number, "signerKeyTypeEd25519" | "signerKeyTypePreAuthTx" | "signerKeyTypeHashX" | "signerKeyTypeEd25519SignedPayload">;
    } & {
        readonly signerKeyTypeEd25519: 0;
        readonly signerKeyTypePreAuthTx: 1;
        readonly signerKeyTypeHashX: 2;
        readonly signerKeyTypeEd25519SignedPayload: 3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): SignerKeyType;
    static fromName(name: SignerKeyTypeName): SignerKeyType;
    static fromXdrObject(wire: number): SignerKeyType;
}
