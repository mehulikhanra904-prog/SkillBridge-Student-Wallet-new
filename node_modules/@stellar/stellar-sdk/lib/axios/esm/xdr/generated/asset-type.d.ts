import { EnumValue } from "../values/enum-value.js";
export type AssetTypeWire = number;
export type AssetTypeName = "assetTypeNative" | "assetTypeCreditAlphanum4" | "assetTypeCreditAlphanum12" | "assetTypePoolShare";
/**
 * ```xdr
 * enum AssetType
 * {
 *     ASSET_TYPE_NATIVE = 0,
 *     ASSET_TYPE_CREDIT_ALPHANUM4 = 1,
 *     ASSET_TYPE_CREDIT_ALPHANUM12 = 2,
 *     ASSET_TYPE_POOL_SHARE = 3
 * };
 * ```
 */
export declare class AssetType extends EnumValue<AssetTypeName> {
    static readonly assetTypeNative: AssetType;
    static readonly assetTypeCreditAlphanum4: AssetType;
    static readonly assetTypeCreditAlphanum12: AssetType;
    static readonly assetTypePoolShare: AssetType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly assetTypeNative: 0;
        readonly assetTypeCreditAlphanum4: 1;
        readonly assetTypeCreditAlphanum12: 2;
        readonly assetTypePoolShare: 3;
    }>> & {
        readonly kind: "enum";
        readonly name: "AssetType";
        readonly nameByValue: ReadonlyMap<number, "assetTypeNative" | "assetTypeCreditAlphanum4" | "assetTypeCreditAlphanum12" | "assetTypePoolShare">;
    } & {
        readonly assetTypeNative: 0;
        readonly assetTypeCreditAlphanum4: 1;
        readonly assetTypeCreditAlphanum12: 2;
        readonly assetTypePoolShare: 3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): AssetType;
    static fromName(name: AssetTypeName): AssetType;
    static fromXdrObject(wire: number): AssetType;
}
