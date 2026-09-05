import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PoolId, type PoolIdWire } from "./pool-id.js";
import { Asset, type AssetWire } from "./asset.js";
export interface ClaimLiquidityAtomWire {
    liquidityPoolId: PoolIdWire;
    assetSold: AssetWire;
    amountSold: bigint;
    assetBought: AssetWire;
    amountBought: bigint;
}
/**
 * ```xdr
 * struct ClaimLiquidityAtom
 * {
 *     PoolID liquidityPoolID;
 *
 *     // amount and asset taken from the pool
 *     Asset assetSold;
 *     int64 amountSold;
 *
 *     // amount and asset sent to the pool
 *     Asset assetBought;
 *     int64 amountBought;
 * };
 * ```
 */
export declare class ClaimLiquidityAtom extends XdrValue {
    readonly liquidityPoolId: PoolId;
    readonly assetSold: Asset;
    readonly amountSold: bigint;
    readonly assetBought: Asset;
    readonly amountBought: bigint;
    static readonly schema: XdrType<ClaimLiquidityAtomWire>;
    constructor(input: {
        liquidityPoolId: PoolId;
        assetSold: Asset;
        amountSold: bigint;
        assetBought: Asset;
        amountBought: bigint;
    });
    toXdrObject(): ClaimLiquidityAtomWire;
    static fromXdrObject(wire: ClaimLiquidityAtomWire): ClaimLiquidityAtom;
}
