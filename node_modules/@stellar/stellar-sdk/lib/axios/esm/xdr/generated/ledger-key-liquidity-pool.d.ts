import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PoolId, type PoolIdWire } from "./pool-id.js";
export interface LedgerKeyLiquidityPoolWire {
    liquidityPoolId: PoolIdWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         PoolID liquidityPoolID;
 *     }
 * ```
 */
export declare class LedgerKeyLiquidityPool extends XdrValue {
    readonly liquidityPoolId: PoolId;
    static readonly schema: XdrType<LedgerKeyLiquidityPoolWire>;
    constructor(input: {
        liquidityPoolId: PoolId;
    });
    toXdrObject(): LedgerKeyLiquidityPoolWire;
    static fromXdrObject(wire: LedgerKeyLiquidityPoolWire): LedgerKeyLiquidityPool;
}
