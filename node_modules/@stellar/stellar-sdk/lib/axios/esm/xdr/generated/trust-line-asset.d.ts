import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AlphaNum4, type AlphaNum4Wire } from "./alpha-num4.js";
import { AlphaNum12, type AlphaNum12Wire } from "./alpha-num12.js";
import { PoolId, type PoolIdWire } from "./pool-id.js";
export type TrustLineAssetWire = {
    type: 0;
} | {
    type: 1;
    alphaNum4: AlphaNum4Wire;
} | {
    type: 2;
    alphaNum12: AlphaNum12Wire;
} | {
    type: 3;
    liquidityPoolId: PoolIdWire;
};
export type TrustLineAssetVariantName = "assetTypeNative" | "assetTypeCreditAlphanum4" | "assetTypeCreditAlphanum12" | "assetTypePoolShare";
/**
 * ```xdr
 * union TrustLineAsset switch (AssetType type)
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
 * case ASSET_TYPE_POOL_SHARE:
 *     PoolID liquidityPoolID;
 *
 *     // add other asset types here in the future
 * };
 * ```
 */
declare abstract class TrustLineAssetBase extends XdrValue {
    abstract readonly type: TrustLineAssetVariantName;
    constructor();
    static readonly schema: XdrType<TrustLineAssetWire>;
    static assetTypeNative(): TrustLineAssetNative;
    static assetTypeCreditAlphanum4(alphaNum4: AlphaNum4): TrustLineAssetCreditAlphanum4;
    static assetTypeCreditAlphanum12(alphaNum12: AlphaNum12): TrustLineAssetCreditAlphanum12;
    static assetTypePoolShare(liquidityPoolId: PoolId): TrustLineAssetPoolShare;
    static fromXdrObject(wire: TrustLineAssetWire): TrustLineAsset;
    /**
     * Type guard narrowing an unknown value to a concrete TrustLineAsset variant.
     * Use this instead of `instanceof TrustLineAsset`: the exported `TrustLineAsset` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TrustLineAsset.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TrustLineAsset;
    abstract toXdrObject(): TrustLineAssetWire;
}
export declare class TrustLineAssetNative extends TrustLineAssetBase {
    readonly type: "assetTypeNative";
    get value(): null;
    toXdrObject(): Extract<TrustLineAssetWire, {
        type: 0;
    }>;
}
export declare class TrustLineAssetCreditAlphanum4 extends TrustLineAssetBase {
    readonly type: "assetTypeCreditAlphanum4";
    readonly alphaNum4: AlphaNum4;
    constructor(alphaNum4: AlphaNum4);
    get value(): AlphaNum4;
    toXdrObject(): Extract<TrustLineAssetWire, {
        type: 1;
    }>;
}
export declare class TrustLineAssetCreditAlphanum12 extends TrustLineAssetBase {
    readonly type: "assetTypeCreditAlphanum12";
    readonly alphaNum12: AlphaNum12;
    constructor(alphaNum12: AlphaNum12);
    get value(): AlphaNum12;
    toXdrObject(): Extract<TrustLineAssetWire, {
        type: 2;
    }>;
}
export declare class TrustLineAssetPoolShare extends TrustLineAssetBase {
    readonly type: "assetTypePoolShare";
    readonly liquidityPoolId: PoolId;
    constructor(liquidityPoolId: PoolId);
    get value(): PoolId;
    toXdrObject(): Extract<TrustLineAssetWire, {
        type: 3;
    }>;
}
export type TrustLineAsset = TrustLineAssetNative | TrustLineAssetCreditAlphanum4 | TrustLineAssetCreditAlphanum12 | TrustLineAssetPoolShare;
export declare const TrustLineAsset: typeof TrustLineAssetBase;
export {};
