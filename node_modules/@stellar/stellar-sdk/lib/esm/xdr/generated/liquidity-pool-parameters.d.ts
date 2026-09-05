import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LiquidityPoolConstantProductParameters, type LiquidityPoolConstantProductParametersWire } from "./liquidity-pool-constant-product-parameters.js";
export type LiquidityPoolParametersWire = {
    type: 0;
    constantProduct: LiquidityPoolConstantProductParametersWire;
};
export type LiquidityPoolParametersVariantName = "liquidityPoolConstantProduct";
/**
 * ```xdr
 * union LiquidityPoolParameters switch (LiquidityPoolType type)
 * {
 * case LIQUIDITY_POOL_CONSTANT_PRODUCT:
 *     LiquidityPoolConstantProductParameters constantProduct;
 * };
 * ```
 */
declare abstract class LiquidityPoolParametersBase extends XdrValue {
    abstract readonly type: LiquidityPoolParametersVariantName;
    constructor();
    static readonly schema: XdrType<LiquidityPoolParametersWire>;
    static liquidityPoolConstantProduct(constantProduct: LiquidityPoolConstantProductParameters): LiquidityPoolParametersLiquidityPoolConstantProduct;
    static fromXdrObject(wire: LiquidityPoolParametersWire): LiquidityPoolParameters;
    /**
     * Type guard narrowing an unknown value to a concrete LiquidityPoolParameters variant.
     * Use this instead of `instanceof LiquidityPoolParameters`: the exported `LiquidityPoolParameters` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LiquidityPoolParameters.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LiquidityPoolParameters;
    abstract toXdrObject(): LiquidityPoolParametersWire;
}
export declare class LiquidityPoolParametersLiquidityPoolConstantProduct extends LiquidityPoolParametersBase {
    readonly type: "liquidityPoolConstantProduct";
    readonly constantProduct: LiquidityPoolConstantProductParameters;
    constructor(constantProduct: LiquidityPoolConstantProductParameters);
    get value(): LiquidityPoolConstantProductParameters;
    toXdrObject(): Extract<LiquidityPoolParametersWire, {
        type: 0;
    }>;
}
export type LiquidityPoolParameters = LiquidityPoolParametersLiquidityPoolConstantProduct;
export declare const LiquidityPoolParameters: typeof LiquidityPoolParametersBase;
export {};
