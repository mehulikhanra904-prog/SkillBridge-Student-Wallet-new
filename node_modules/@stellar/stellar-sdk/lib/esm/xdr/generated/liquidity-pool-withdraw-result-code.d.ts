import { EnumValue } from "../values/enum-value.js";
export type LiquidityPoolWithdrawResultCodeWire = number;
export type LiquidityPoolWithdrawResultCodeName = "liquidityPoolWithdrawSuccess" | "liquidityPoolWithdrawMalformed" | "liquidityPoolWithdrawNoTrust" | "liquidityPoolWithdrawUnderfunded" | "liquidityPoolWithdrawLineFull" | "liquidityPoolWithdrawUnderMinimum" | "liquidityPoolWithdrawTrustlineFrozen";
/**
 * ```xdr
 * enum LiquidityPoolWithdrawResultCode
 * {
 *     // codes considered as "success" for the operation
 *     LIQUIDITY_POOL_WITHDRAW_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     LIQUIDITY_POOL_WITHDRAW_MALFORMED = -1,    // bad input
 *     LIQUIDITY_POOL_WITHDRAW_NO_TRUST = -2,     // no trust line for one of the
 *                                                // assets
 *     LIQUIDITY_POOL_WITHDRAW_UNDERFUNDED = -3,  // not enough balance of the
 *                                                // pool share
 *     LIQUIDITY_POOL_WITHDRAW_LINE_FULL = -4,    // would go above limit for one
 *                                                // of the assets
 *     LIQUIDITY_POOL_WITHDRAW_UNDER_MINIMUM = -5, // didn't withdraw enough
 *     LIQUIDITY_POOL_WITHDRAW_TRUSTLINE_FROZEN = -6  // trustline for one of the
 *                                                    // assets is frozen
 * };
 * ```
 */
export declare class LiquidityPoolWithdrawResultCode extends EnumValue<LiquidityPoolWithdrawResultCodeName> {
    static readonly liquidityPoolWithdrawSuccess: LiquidityPoolWithdrawResultCode;
    static readonly liquidityPoolWithdrawMalformed: LiquidityPoolWithdrawResultCode;
    static readonly liquidityPoolWithdrawNoTrust: LiquidityPoolWithdrawResultCode;
    static readonly liquidityPoolWithdrawUnderfunded: LiquidityPoolWithdrawResultCode;
    static readonly liquidityPoolWithdrawLineFull: LiquidityPoolWithdrawResultCode;
    static readonly liquidityPoolWithdrawUnderMinimum: LiquidityPoolWithdrawResultCode;
    static readonly liquidityPoolWithdrawTrustlineFrozen: LiquidityPoolWithdrawResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly liquidityPoolWithdrawSuccess: 0;
        readonly liquidityPoolWithdrawMalformed: -1;
        readonly liquidityPoolWithdrawNoTrust: -2;
        readonly liquidityPoolWithdrawUnderfunded: -3;
        readonly liquidityPoolWithdrawLineFull: -4;
        readonly liquidityPoolWithdrawUnderMinimum: -5;
        readonly liquidityPoolWithdrawTrustlineFrozen: -6;
    }>> & {
        readonly kind: "enum";
        readonly name: "LiquidityPoolWithdrawResultCode";
        readonly nameByValue: ReadonlyMap<number, "liquidityPoolWithdrawSuccess" | "liquidityPoolWithdrawMalformed" | "liquidityPoolWithdrawNoTrust" | "liquidityPoolWithdrawUnderfunded" | "liquidityPoolWithdrawLineFull" | "liquidityPoolWithdrawUnderMinimum" | "liquidityPoolWithdrawTrustlineFrozen">;
    } & {
        readonly liquidityPoolWithdrawSuccess: 0;
        readonly liquidityPoolWithdrawMalformed: -1;
        readonly liquidityPoolWithdrawNoTrust: -2;
        readonly liquidityPoolWithdrawUnderfunded: -3;
        readonly liquidityPoolWithdrawLineFull: -4;
        readonly liquidityPoolWithdrawUnderMinimum: -5;
        readonly liquidityPoolWithdrawTrustlineFrozen: -6;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): LiquidityPoolWithdrawResultCode;
    static fromName(name: LiquidityPoolWithdrawResultCodeName): LiquidityPoolWithdrawResultCode;
    static fromXdrObject(wire: number): LiquidityPoolWithdrawResultCode;
}
