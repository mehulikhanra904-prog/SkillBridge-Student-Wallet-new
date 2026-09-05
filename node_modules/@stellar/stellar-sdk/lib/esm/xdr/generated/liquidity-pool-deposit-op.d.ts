import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PoolId, type PoolIdWire } from "./pool-id.js";
import { Price, type PriceWire } from "./price.js";
export interface LiquidityPoolDepositOpWire {
    liquidityPoolId: PoolIdWire;
    maxAmountA: bigint;
    maxAmountB: bigint;
    minPrice: PriceWire;
    maxPrice: PriceWire;
}
/**
 * ```xdr
 * struct LiquidityPoolDepositOp
 * {
 *     PoolID liquidityPoolID;
 *     int64 maxAmountA; // maximum amount of first asset to deposit
 *     int64 maxAmountB; // maximum amount of second asset to deposit
 *     Price minPrice;   // minimum depositA/depositB
 *     Price maxPrice;   // maximum depositA/depositB
 * };
 * ```
 */
export declare class LiquidityPoolDepositOp extends XdrValue {
    readonly liquidityPoolId: PoolId;
    readonly maxAmountA: bigint;
    readonly maxAmountB: bigint;
    readonly minPrice: Price;
    readonly maxPrice: Price;
    static readonly schema: XdrType<LiquidityPoolDepositOpWire>;
    constructor(input: {
        liquidityPoolId: PoolId;
        maxAmountA: bigint;
        maxAmountB: bigint;
        minPrice: Price;
        maxPrice: Price;
    });
    toXdrObject(): LiquidityPoolDepositOpWire;
    static fromXdrObject(wire: LiquidityPoolDepositOpWire): LiquidityPoolDepositOp;
}
