import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LiquidityPoolConstantProductParameters, type LiquidityPoolConstantProductParametersWire } from "./liquidity-pool-constant-product-parameters.js";
export interface LiquidityPoolEntryConstantProductWire {
    params: LiquidityPoolConstantProductParametersWire;
    reserveA: bigint;
    reserveB: bigint;
    totalPoolShares: bigint;
    poolSharesTrustLineCount: bigint;
}
/**
 * ```xdr
 * struct
 *         {
 *             LiquidityPoolConstantProductParameters params;
 *
 *             int64 reserveA;        // amount of A in the pool
 *             int64 reserveB;        // amount of B in the pool
 *             int64 totalPoolShares; // total number of pool shares issued
 *             int64 poolSharesTrustLineCount; // number of trust lines for the
 *                                             // associated pool shares
 *         }
 * ```
 */
export declare class LiquidityPoolEntryConstantProduct extends XdrValue {
    readonly params: LiquidityPoolConstantProductParameters;
    readonly reserveA: bigint;
    readonly reserveB: bigint;
    readonly totalPoolShares: bigint;
    readonly poolSharesTrustLineCount: bigint;
    static readonly schema: XdrType<LiquidityPoolEntryConstantProductWire>;
    constructor(input: {
        params: LiquidityPoolConstantProductParameters;
        reserveA: bigint;
        reserveB: bigint;
        totalPoolShares: bigint;
        poolSharesTrustLineCount: bigint;
    });
    toXdrObject(): LiquidityPoolEntryConstantProductWire;
    static fromXdrObject(wire: LiquidityPoolEntryConstantProductWire): LiquidityPoolEntryConstantProduct;
}
