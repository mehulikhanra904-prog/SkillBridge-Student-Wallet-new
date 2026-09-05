import { EnumValue } from "../values/enum-value.js";
export type LiquidityPoolDepositResultCodeWire = number;
export type LiquidityPoolDepositResultCodeName = "liquidityPoolDepositSuccess" | "liquidityPoolDepositMalformed" | "liquidityPoolDepositNoTrust" | "liquidityPoolDepositNotAuthorized" | "liquidityPoolDepositUnderfunded" | "liquidityPoolDepositLineFull" | "liquidityPoolDepositBadPrice" | "liquidityPoolDepositPoolFull" | "liquidityPoolDepositTrustlineFrozen";
/**
 * ```xdr
 * enum LiquidityPoolDepositResultCode
 * {
 *     // codes considered as "success" for the operation
 *     LIQUIDITY_POOL_DEPOSIT_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     LIQUIDITY_POOL_DEPOSIT_MALFORMED = -1,      // bad input
 *     LIQUIDITY_POOL_DEPOSIT_NO_TRUST = -2,       // no trust line for one of the
 *                                                 // assets
 *     LIQUIDITY_POOL_DEPOSIT_NOT_AUTHORIZED = -3, // not authorized for one of the
 *                                                 // assets
 *     LIQUIDITY_POOL_DEPOSIT_UNDERFUNDED = -4,    // not enough balance for one of
 *                                                 // the assets
 *     LIQUIDITY_POOL_DEPOSIT_LINE_FULL = -5,      // pool share trust line doesn't
 *                                                 // have sufficient limit
 *     LIQUIDITY_POOL_DEPOSIT_BAD_PRICE = -6,      // deposit price outside bounds
 *     LIQUIDITY_POOL_DEPOSIT_POOL_FULL = -7,      // pool reserves are full
 *     LIQUIDITY_POOL_DEPOSIT_TRUSTLINE_FROZEN = -8  // trustline for one of the
 *                                                   // assets is frozen
 * };
 * ```
 */
export declare class LiquidityPoolDepositResultCode extends EnumValue<LiquidityPoolDepositResultCodeName> {
    static readonly liquidityPoolDepositSuccess: LiquidityPoolDepositResultCode;
    static readonly liquidityPoolDepositMalformed: LiquidityPoolDepositResultCode;
    static readonly liquidityPoolDepositNoTrust: LiquidityPoolDepositResultCode;
    static readonly liquidityPoolDepositNotAuthorized: LiquidityPoolDepositResultCode;
    static readonly liquidityPoolDepositUnderfunded: LiquidityPoolDepositResultCode;
    static readonly liquidityPoolDepositLineFull: LiquidityPoolDepositResultCode;
    static readonly liquidityPoolDepositBadPrice: LiquidityPoolDepositResultCode;
    static readonly liquidityPoolDepositPoolFull: LiquidityPoolDepositResultCode;
    static readonly liquidityPoolDepositTrustlineFrozen: LiquidityPoolDepositResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly liquidityPoolDepositSuccess: 0;
        readonly liquidityPoolDepositMalformed: -1;
        readonly liquidityPoolDepositNoTrust: -2;
        readonly liquidityPoolDepositNotAuthorized: -3;
        readonly liquidityPoolDepositUnderfunded: -4;
        readonly liquidityPoolDepositLineFull: -5;
        readonly liquidityPoolDepositBadPrice: -6;
        readonly liquidityPoolDepositPoolFull: -7;
        readonly liquidityPoolDepositTrustlineFrozen: -8;
    }>> & {
        readonly kind: "enum";
        readonly name: "LiquidityPoolDepositResultCode";
        readonly nameByValue: ReadonlyMap<number, "liquidityPoolDepositSuccess" | "liquidityPoolDepositMalformed" | "liquidityPoolDepositNoTrust" | "liquidityPoolDepositNotAuthorized" | "liquidityPoolDepositUnderfunded" | "liquidityPoolDepositLineFull" | "liquidityPoolDepositBadPrice" | "liquidityPoolDepositPoolFull" | "liquidityPoolDepositTrustlineFrozen">;
    } & {
        readonly liquidityPoolDepositSuccess: 0;
        readonly liquidityPoolDepositMalformed: -1;
        readonly liquidityPoolDepositNoTrust: -2;
        readonly liquidityPoolDepositNotAuthorized: -3;
        readonly liquidityPoolDepositUnderfunded: -4;
        readonly liquidityPoolDepositLineFull: -5;
        readonly liquidityPoolDepositBadPrice: -6;
        readonly liquidityPoolDepositPoolFull: -7;
        readonly liquidityPoolDepositTrustlineFrozen: -8;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): LiquidityPoolDepositResultCode;
    static fromName(name: LiquidityPoolDepositResultCodeName): LiquidityPoolDepositResultCode;
    static fromXdrObject(wire: number): LiquidityPoolDepositResultCode;
}
