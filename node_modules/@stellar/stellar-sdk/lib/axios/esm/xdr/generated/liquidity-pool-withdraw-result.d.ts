import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type LiquidityPoolWithdrawResultWire = {
    code: 0;
} | {
    code: -1;
} | {
    code: -2;
} | {
    code: -3;
} | {
    code: -4;
} | {
    code: -5;
} | {
    code: -6;
};
export type LiquidityPoolWithdrawResultVariantName = "liquidityPoolWithdrawSuccess" | "liquidityPoolWithdrawMalformed" | "liquidityPoolWithdrawNoTrust" | "liquidityPoolWithdrawUnderfunded" | "liquidityPoolWithdrawLineFull" | "liquidityPoolWithdrawUnderMinimum" | "liquidityPoolWithdrawTrustlineFrozen";
/**
 * ```xdr
 * union LiquidityPoolWithdrawResult switch (LiquidityPoolWithdrawResultCode code)
 * {
 * case LIQUIDITY_POOL_WITHDRAW_SUCCESS:
 *     void;
 * case LIQUIDITY_POOL_WITHDRAW_MALFORMED:
 * case LIQUIDITY_POOL_WITHDRAW_NO_TRUST:
 * case LIQUIDITY_POOL_WITHDRAW_UNDERFUNDED:
 * case LIQUIDITY_POOL_WITHDRAW_LINE_FULL:
 * case LIQUIDITY_POOL_WITHDRAW_UNDER_MINIMUM:
 * case LIQUIDITY_POOL_WITHDRAW_TRUSTLINE_FROZEN:
 *     void;
 * };
 * ```
 */
declare abstract class LiquidityPoolWithdrawResultBase extends XdrValue {
    abstract readonly type: LiquidityPoolWithdrawResultVariantName;
    constructor();
    static readonly schema: XdrType<LiquidityPoolWithdrawResultWire>;
    static liquidityPoolWithdrawSuccess(): LiquidityPoolWithdrawResultSuccess;
    static liquidityPoolWithdrawMalformed(): LiquidityPoolWithdrawResultMalformed;
    static liquidityPoolWithdrawNoTrust(): LiquidityPoolWithdrawResultNoTrust;
    static liquidityPoolWithdrawUnderfunded(): LiquidityPoolWithdrawResultUnderfunded;
    static liquidityPoolWithdrawLineFull(): LiquidityPoolWithdrawResultLineFull;
    static liquidityPoolWithdrawUnderMinimum(): LiquidityPoolWithdrawResultUnderMinimum;
    static liquidityPoolWithdrawTrustlineFrozen(): LiquidityPoolWithdrawResultTrustlineFrozen;
    static fromXdrObject(wire: LiquidityPoolWithdrawResultWire): LiquidityPoolWithdrawResult;
    /**
     * Type guard narrowing an unknown value to a concrete LiquidityPoolWithdrawResult variant.
     * Use this instead of `instanceof LiquidityPoolWithdrawResult`: the exported `LiquidityPoolWithdrawResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LiquidityPoolWithdrawResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LiquidityPoolWithdrawResult;
    abstract toXdrObject(): LiquidityPoolWithdrawResultWire;
}
export declare class LiquidityPoolWithdrawResultSuccess extends LiquidityPoolWithdrawResultBase {
    readonly type: "liquidityPoolWithdrawSuccess";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolWithdrawResultWire, {
        code: 0;
    }>;
}
export declare class LiquidityPoolWithdrawResultMalformed extends LiquidityPoolWithdrawResultBase {
    readonly type: "liquidityPoolWithdrawMalformed";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolWithdrawResultWire, {
        code: -1;
    }>;
}
export declare class LiquidityPoolWithdrawResultNoTrust extends LiquidityPoolWithdrawResultBase {
    readonly type: "liquidityPoolWithdrawNoTrust";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolWithdrawResultWire, {
        code: -2;
    }>;
}
export declare class LiquidityPoolWithdrawResultUnderfunded extends LiquidityPoolWithdrawResultBase {
    readonly type: "liquidityPoolWithdrawUnderfunded";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolWithdrawResultWire, {
        code: -3;
    }>;
}
export declare class LiquidityPoolWithdrawResultLineFull extends LiquidityPoolWithdrawResultBase {
    readonly type: "liquidityPoolWithdrawLineFull";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolWithdrawResultWire, {
        code: -4;
    }>;
}
export declare class LiquidityPoolWithdrawResultUnderMinimum extends LiquidityPoolWithdrawResultBase {
    readonly type: "liquidityPoolWithdrawUnderMinimum";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolWithdrawResultWire, {
        code: -5;
    }>;
}
export declare class LiquidityPoolWithdrawResultTrustlineFrozen extends LiquidityPoolWithdrawResultBase {
    readonly type: "liquidityPoolWithdrawTrustlineFrozen";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolWithdrawResultWire, {
        code: -6;
    }>;
}
export type LiquidityPoolWithdrawResult = LiquidityPoolWithdrawResultSuccess | LiquidityPoolWithdrawResultMalformed | LiquidityPoolWithdrawResultNoTrust | LiquidityPoolWithdrawResultUnderfunded | LiquidityPoolWithdrawResultLineFull | LiquidityPoolWithdrawResultUnderMinimum | LiquidityPoolWithdrawResultTrustlineFrozen;
export declare const LiquidityPoolWithdrawResult: typeof LiquidityPoolWithdrawResultBase;
export {};
