import { EnumValue } from "../values/enum-value.js";
export type PublicKeyTypeWire = number;
export type PublicKeyTypeName = "publicKeyTypeEd25519";
/**
 * ```xdr
 * enum PublicKeyType
 * {
 *     PUBLIC_KEY_TYPE_ED25519 = KEY_TYPE_ED25519
 * };
 * ```
 */
export declare class PublicKeyType extends EnumValue<PublicKeyTypeName> {
    static readonly publicKeyTypeEd25519: PublicKeyType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"PublicKeyType", {
        readonly publicKeyTypeEd25519: 0;
    }>;
    static fromValue(value: number): PublicKeyType;
    static fromName(name: PublicKeyTypeName): PublicKeyType;
    static fromXdrObject(wire: number): PublicKeyType;
}
