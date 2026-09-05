import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PoolId, type PoolIdWire } from "./pool-id.js";
import { LiquidityPoolEntryBody, type LiquidityPoolEntryBodyWire } from "./liquidity-pool-entry-body.js";
export interface LiquidityPoolEntryWire {
    liquidityPoolId: PoolIdWire;
    body: LiquidityPoolEntryBodyWire;
}
/**
 * ```xdr
 * struct LiquidityPoolEntry
 * {
 *     PoolID liquidityPoolID;
 *
 *     union switch (LiquidityPoolType type)
 *     {
 *     case LIQUIDITY_POOL_CONSTANT_PRODUCT:
 *         struct
 *         {
 *             LiquidityPoolConstantProductParameters params;
 *
 *             int64 reserveA;        // amount of A in the pool
 *             int64 reserveB;        // amount of B in the pool
 *             int64 totalPoolShares; // total number of pool shares issued
 *             int64 poolSharesTrustLineCount; // number of trust lines for the
 *                                             // associated pool shares
 *         } constantProduct;
 *     }
 *     body;
 * };
 * ```
 */
export declare class LiquidityPoolEntry extends XdrValue {
    readonly liquidityPoolId: PoolId;
    readonly body: LiquidityPoolEntryBody;
    static readonly schema: XdrType<LiquidityPoolEntryWire>;
    constructor(input: {
        liquidityPoolId: PoolId;
        body: LiquidityPoolEntryBody;
    });
    toXdrObject(): LiquidityPoolEntryWire;
    static fromXdrObject(wire: LiquidityPoolEntryWire): LiquidityPoolEntry;
}
