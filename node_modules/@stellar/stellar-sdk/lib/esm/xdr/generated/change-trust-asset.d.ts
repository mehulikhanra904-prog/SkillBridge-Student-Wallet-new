import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AlphaNum4, type AlphaNum4Wire } from "./alpha-num4.js";
import { AlphaNum12, type AlphaNum12Wire } from "./alpha-num12.js";
import { LiquidityPoolParameters, type LiquidityPoolParametersWire } from "./liquidity-pool-parameters.js";
export type ChangeTrustAssetWire = {
    type: 0;
} | {
    type: 1;
    alphaNum4: AlphaNum4Wire;
} | {
    type: 2;
    alphaNum12: AlphaNum12Wire;
} | {
    type: 3;
    liquidityPool: LiquidityPoolParametersWire;
};
export type ChangeTrustAssetVariantName = "assetTypeNative" | "assetTypeCreditAlphanum4" | "assetTypeCreditAlphanum12" | "assetTypePoolShare";
/**
 * ```xdr
 * union ChangeTrustAsset switch (AssetType type)
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
 *     LiquidityPoolParameters liquidityPool;
 *
 *     // add other asset types here in the future
 * };
 * ```
 */
declare abstract class ChangeTrustAssetBase extends XdrValue {
    abstract readonly type: ChangeTrustAssetVariantName;
    constructor();
    static readonly schema: XdrType<ChangeTrustAssetWire>;
    static assetTypeNative(): ChangeTrustAssetNative;
    static assetTypeCreditAlphanum4(alphaNum4: AlphaNum4): ChangeTrustAssetCreditAlphanum4;
    static assetTypeCreditAlphanum12(alphaNum12: AlphaNum12): ChangeTrustAssetCreditAlphanum12;
    static assetTypePoolShare(liquidityPool: LiquidityPoolParameters): ChangeTrustAssetPoolShare;
    static fromXdrObject(wire: ChangeTrustAssetWire): ChangeTrustAsset;
    /**
     * Type guard narrowing an unknown value to a concrete ChangeTrustAsset variant.
     * Use this instead of `instanceof ChangeTrustAsset`: the exported `ChangeTrustAsset` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ChangeTrustAsset.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ChangeTrustAsset;
    abstract toXdrObject(): ChangeTrustAssetWire;
}
export declare class ChangeTrustAssetNative extends ChangeTrustAssetBase {
    readonly type: "assetTypeNative";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustAssetWire, {
        type: 0;
    }>;
}
export declare class ChangeTrustAssetCreditAlphanum4 extends ChangeTrustAssetBase {
    readonly type: "assetTypeCreditAlphanum4";
    readonly alphaNum4: AlphaNum4;
    constructor(alphaNum4: AlphaNum4);
    get value(): AlphaNum4;
    toXdrObject(): Extract<ChangeTrustAssetWire, {
        type: 1;
    }>;
}
export declare class ChangeTrustAssetCreditAlphanum12 extends ChangeTrustAssetBase {
    readonly type: "assetTypeCreditAlphanum12";
    readonly alphaNum12: AlphaNum12;
    constructor(alphaNum12: AlphaNum12);
    get value(): AlphaNum12;
    toXdrObject(): Extract<ChangeTrustAssetWire, {
        type: 2;
    }>;
}
export declare class ChangeTrustAssetPoolShare extends ChangeTrustAssetBase {
    readonly type: "assetTypePoolShare";
    readonly liquidityPool: LiquidityPoolParameters;
    constructor(liquidityPool: LiquidityPoolParameters);
    get value(): LiquidityPoolParameters;
    toXdrObject(): Extract<ChangeTrustAssetWire, {
        type: 3;
    }>;
}
export type ChangeTrustAsset = ChangeTrustAssetNative | ChangeTrustAssetCreditAlphanum4 | ChangeTrustAssetCreditAlphanum12 | ChangeTrustAssetPoolShare;
export declare const ChangeTrustAsset: typeof ChangeTrustAssetBase;
export {};
