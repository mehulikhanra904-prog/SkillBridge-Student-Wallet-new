import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LiquidityPoolEntryConstantProduct, type LiquidityPoolEntryConstantProductWire } from "./liquidity-pool-entry-constant-product.js";
export type LiquidityPoolEntryBodyWire = {
    type: 0;
    constantProduct: LiquidityPoolEntryConstantProductWire;
};
export type LiquidityPoolEntryBodyVariantName = "liquidityPoolConstantProduct";
/**
 * ```xdr
 * union switch (LiquidityPoolType type)
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
 * ```
 */
declare abstract class LiquidityPoolEntryBodyBase extends XdrValue {
    abstract readonly type: LiquidityPoolEntryBodyVariantName;
    constructor();
    static readonly schema: XdrType<LiquidityPoolEntryBodyWire>;
    static liquidityPoolConstantProduct(constantProduct: LiquidityPoolEntryConstantProduct): LiquidityPoolEntryBodyLiquidityPoolConstantProduct;
    static fromXdrObject(wire: LiquidityPoolEntryBodyWire): LiquidityPoolEntryBody;
    /**
     * Type guard narrowing an unknown value to a concrete LiquidityPoolEntryBody variant.
     * Use this instead of `instanceof LiquidityPoolEntryBody`: the exported `LiquidityPoolEntryBody` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LiquidityPoolEntryBody.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LiquidityPoolEntryBody;
    abstract toXdrObject(): LiquidityPoolEntryBodyWire;
}
export declare class LiquidityPoolEntryBodyLiquidityPoolConstantProduct extends LiquidityPoolEntryBodyBase {
    readonly type: "liquidityPoolConstantProduct";
    readonly constantProduct: LiquidityPoolEntryConstantProduct;
    constructor(constantProduct: LiquidityPoolEntryConstantProduct);
    get value(): LiquidityPoolEntryConstantProduct;
    toXdrObject(): Extract<LiquidityPoolEntryBodyWire, {
        type: 0;
    }>;
}
export type LiquidityPoolEntryBody = LiquidityPoolEntryBodyLiquidityPoolConstantProduct;
export declare const LiquidityPoolEntryBody: typeof LiquidityPoolEntryBodyBase;
export {};
