import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AssetCode4, type AssetCode4Wire } from "./asset-code4.js";
import { AssetCode12, type AssetCode12Wire } from "./asset-code12.js";
export type AssetCodeWire = {
    type: 1;
    assetCode4: AssetCode4Wire;
} | {
    type: 2;
    assetCode12: AssetCode12Wire;
};
export type AssetCodeVariantName = "assetTypeCreditAlphanum4" | "assetTypeCreditAlphanum12";
/**
 * ```xdr
 * union AssetCode switch (AssetType type)
 * {
 * case ASSET_TYPE_CREDIT_ALPHANUM4:
 *     AssetCode4 assetCode4;
 *
 * case ASSET_TYPE_CREDIT_ALPHANUM12:
 *     AssetCode12 assetCode12;
 *
 *     // add other asset types here in the future
 * };
 * ```
 */
declare abstract class AssetCodeBase extends XdrValue {
    abstract readonly type: AssetCodeVariantName;
    constructor();
    static readonly schema: XdrType<AssetCodeWire>;
    static assetTypeCreditAlphanum4(assetCode4: AssetCode4 | Uint8Array | string): AssetCodeCreditAlphanum4;
    static assetTypeCreditAlphanum12(assetCode12: AssetCode12 | Uint8Array | string): AssetCodeCreditAlphanum12;
    static fromXdrObject(wire: AssetCodeWire): AssetCode;
    /**
     * Type guard narrowing an unknown value to a concrete AssetCode variant.
     * Use this instead of `instanceof AssetCode`: the exported `AssetCode` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `AssetCode.is(x)` narrows to the union.
     */
    static is(value: unknown): value is AssetCode;
    abstract toXdrObject(): AssetCodeWire;
}
export declare class AssetCodeCreditAlphanum4 extends AssetCodeBase {
    readonly type: "assetTypeCreditAlphanum4";
    readonly assetCode4: AssetCode4;
    constructor(assetCode4: AssetCode4 | Uint8Array | string);
    get value(): AssetCode4;
    toXdrObject(): Extract<AssetCodeWire, {
        type: 1;
    }>;
}
export declare class AssetCodeCreditAlphanum12 extends AssetCodeBase {
    readonly type: "assetTypeCreditAlphanum12";
    readonly assetCode12: AssetCode12;
    constructor(assetCode12: AssetCode12 | Uint8Array | string);
    get value(): AssetCode12;
    toXdrObject(): Extract<AssetCodeWire, {
        type: 2;
    }>;
}
export type AssetCode = AssetCodeCreditAlphanum4 | AssetCodeCreditAlphanum12;
export declare const AssetCode: typeof AssetCodeBase;
export {};
