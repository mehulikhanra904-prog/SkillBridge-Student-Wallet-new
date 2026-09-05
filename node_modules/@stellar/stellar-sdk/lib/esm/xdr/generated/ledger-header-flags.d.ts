import { EnumValue } from "../values/enum-value.js";
export type LedgerHeaderFlagsWire = number;
export type LedgerHeaderFlagsName = "disableLiquidityPoolTradingFlag" | "disableLiquidityPoolDepositFlag" | "disableLiquidityPoolWithdrawalFlag";
/**
 * ```xdr
 * enum LedgerHeaderFlags
 * {
 *     DISABLE_LIQUIDITY_POOL_TRADING_FLAG = 0x1,
 *     DISABLE_LIQUIDITY_POOL_DEPOSIT_FLAG = 0x2,
 *     DISABLE_LIQUIDITY_POOL_WITHDRAWAL_FLAG = 0x4
 * };
 * ```
 */
export declare class LedgerHeaderFlags extends EnumValue<LedgerHeaderFlagsName> {
    static readonly disableLiquidityPoolTradingFlag: LedgerHeaderFlags;
    static readonly disableLiquidityPoolDepositFlag: LedgerHeaderFlags;
    static readonly disableLiquidityPoolWithdrawalFlag: LedgerHeaderFlags;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly disableLiquidityPoolTradingFlag: 1;
        readonly disableLiquidityPoolDepositFlag: 2;
        readonly disableLiquidityPoolWithdrawalFlag: 4;
    }>> & {
        readonly kind: "enum";
        readonly name: "LedgerHeaderFlags";
        readonly nameByValue: ReadonlyMap<number, "disableLiquidityPoolTradingFlag" | "disableLiquidityPoolDepositFlag" | "disableLiquidityPoolWithdrawalFlag">;
    } & {
        readonly disableLiquidityPoolTradingFlag: 1;
        readonly disableLiquidityPoolDepositFlag: 2;
        readonly disableLiquidityPoolWithdrawalFlag: 4;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): LedgerHeaderFlags;
    static fromName(name: LedgerHeaderFlagsName): LedgerHeaderFlags;
    static fromXdrObject(wire: number): LedgerHeaderFlags;
}
