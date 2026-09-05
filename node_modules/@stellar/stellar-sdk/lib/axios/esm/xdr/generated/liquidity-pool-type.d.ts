import { EnumValue } from "../values/enum-value.js";
export type LiquidityPoolTypeWire = number;
export type LiquidityPoolTypeName = "liquidityPoolConstantProduct";
/**
 * ```xdr
 * enum LiquidityPoolType
 * {
 *     LIQUIDITY_POOL_CONSTANT_PRODUCT = 0
 * };
 * ```
 */
export declare class LiquidityPoolType extends EnumValue<LiquidityPoolTypeName> {
    static readonly liquidityPoolConstantProduct: LiquidityPoolType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"LiquidityPoolType", {
        readonly liquidityPoolConstantProduct: 0;
    }>;
    static fromValue(value: number): LiquidityPoolType;
    static fromName(name: LiquidityPoolTypeName): LiquidityPoolType;
    static fromXdrObject(wire: number): LiquidityPoolType;
}
