import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AlphaNum4, type AlphaNum4Wire } from "./alpha-num4.js";
import { AlphaNum12, type AlphaNum12Wire } from "./alpha-num12.js";
export type AssetWire = {
    type: 0;
} | {
    type: 1;
    alphaNum4: AlphaNum4Wire;
} | {
    type: 2;
    alphaNum12: AlphaNum12Wire;
};
export type AssetVariantName = "assetTypeNative" | "assetTypeCreditAlphanum4" | "assetTypeCreditAlphanum12";
/**
 * ```xdr
 * union Asset switch (AssetType type)
 * {
 * case ASSET_TYPE_NATIVE: // Not credit
 *     void;
 *
 * case ASSET_TYPE_CREDIT_ALPHANUM4:
 *     AlphaNum4 alphaNum4;
 *
 * case ASSET_TYPE_CREDIT_ALPHANUM12:
 *     AlphaNum12 alphaNum12;
 *
 *     // add other asset types here in the future
 * };
 * ```
 */
declare abstract class AssetBase extends XdrValue {
    abstract readonly type: AssetVariantName;
    constructor();
    static readonly schema: XdrType<AssetWire>;
    static assetTypeNative(): AssetNative;
    static assetTypeCreditAlphanum4(alphaNum4: AlphaNum4): AssetCreditAlphanum4;
    static assetTypeCreditAlphanum12(alphaNum12: AlphaNum12): AssetCreditAlphanum12;
    static fromXdrObject(wire: AssetWire): Asset;
    /**
     * Type guard narrowing an unknown value to a concrete Asset variant.
     * Use this instead of `instanceof Asset`: the exported `Asset` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `Asset.is(x)` narrows to the union.
     */
    static is(value: unknown): value is Asset;
    abstract toXdrObject(): AssetWire;
}
export declare class AssetNative extends AssetBase {
    readonly type: "assetTypeNative";
    get value(): null;
    toXdrObject(): Extract<AssetWire, {
        type: 0;
    }>;
}
export declare class AssetCreditAlphanum4 extends AssetBase {
    readonly type: "assetTypeCreditAlphanum4";
    readonly alphaNum4: AlphaNum4;
    constructor(alphaNum4: AlphaNum4);
    get value(): AlphaNum4;
    toXdrObject(): Extract<AssetWire, {
        type: 1;
    }>;
}
export declare class AssetCreditAlphanum12 extends AssetBase {
    readonly type: "assetTypeCreditAlphanum12";
    readonly alphaNum12: AlphaNum12;
    constructor(alphaNum12: AlphaNum12);
    get value(): AlphaNum12;
    toXdrObject(): Extract<AssetWire, {
        type: 2;
    }>;
}
export type Asset = AssetNative | AssetCreditAlphanum4 | AssetCreditAlphanum12;
export declare const Asset: typeof AssetBase;
export {};
