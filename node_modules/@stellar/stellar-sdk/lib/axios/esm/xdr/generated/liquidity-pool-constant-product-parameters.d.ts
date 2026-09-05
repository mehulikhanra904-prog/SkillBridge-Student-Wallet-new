import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Asset, type AssetWire } from "./asset.js";
export interface LiquidityPoolConstantProductParametersWire {
    assetA: AssetWire;
    assetB: AssetWire;
    fee: number;
}
/**
 * ```xdr
 * struct LiquidityPoolConstantProductParameters
 * {
 *     Asset assetA; // assetA < assetB
 *     Asset assetB;
 *     int32 fee; // Fee is in basis points, so the actual rate is (fee/100)%
 * };
 * ```
 */
export declare class LiquidityPoolConstantProductParameters extends XdrValue {
    readonly assetA: Asset;
    readonly assetB: Asset;
    readonly fee: number;
    static readonly schema: XdrType<LiquidityPoolConstantProductParametersWire>;
    constructor(input: {
        assetA: Asset;
        assetB: Asset;
        fee: number;
    });
    toXdrObject(): LiquidityPoolConstantProductParametersWire;
    static fromXdrObject(wire: LiquidityPoolConstantProductParametersWire): LiquidityPoolConstantProductParameters;
}
