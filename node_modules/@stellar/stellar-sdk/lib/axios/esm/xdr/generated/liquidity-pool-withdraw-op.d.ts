import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PoolId, type PoolIdWire } from "./pool-id.js";
export interface LiquidityPoolWithdrawOpWire {
    liquidityPoolId: PoolIdWire;
    amount: bigint;
    minAmountA: bigint;
    minAmountB: bigint;
}
/**
 * ```xdr
 * struct LiquidityPoolWithdrawOp
 * {
 *     PoolID liquidityPoolID;
 *     int64 amount;     // amount of pool shares to withdraw
 *     int64 minAmountA; // minimum amount of first asset to withdraw
 *     int64 minAmountB; // minimum amount of second asset to withdraw
 * };
 * ```
 */
export declare class LiquidityPoolWithdrawOp extends XdrValue {
    readonly liquidityPoolId: PoolId;
    readonly amount: bigint;
    readonly minAmountA: bigint;
    readonly minAmountB: bigint;
    static readonly schema: XdrType<LiquidityPoolWithdrawOpWire>;
    constructor(input: {
        liquidityPoolId: PoolId;
        amount: bigint;
        minAmountA: bigint;
        minAmountB: bigint;
    });
    toXdrObject(): LiquidityPoolWithdrawOpWire;
    static fromXdrObject(wire: LiquidityPoolWithdrawOpWire): LiquidityPoolWithdrawOp;
}
