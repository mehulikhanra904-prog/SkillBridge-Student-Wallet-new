import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type LiquidityPoolDepositResultWire = {
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
} | {
    code: -7;
} | {
    code: -8;
};
export type LiquidityPoolDepositResultVariantName = "liquidityPoolDepositSuccess" | "liquidityPoolDepositMalformed" | "liquidityPoolDepositNoTrust" | "liquidityPoolDepositNotAuthorized" | "liquidityPoolDepositUnderfunded" | "liquidityPoolDepositLineFull" | "liquidityPoolDepositBadPrice" | "liquidityPoolDepositPoolFull" | "liquidityPoolDepositTrustlineFrozen";
/**
 * ```xdr
 * union LiquidityPoolDepositResult switch (LiquidityPoolDepositResultCode code)
 * {
 * case LIQUIDITY_POOL_DEPOSIT_SUCCESS:
 *     void;
 * case LIQUIDITY_POOL_DEPOSIT_MALFORMED:
 * case LIQUIDITY_POOL_DEPOSIT_NO_TRUST:
 * case LIQUIDITY_POOL_DEPOSIT_NOT_AUTHORIZED:
 * case LIQUIDITY_POOL_DEPOSIT_UNDERFUNDED:
 * case LIQUIDITY_POOL_DEPOSIT_LINE_FULL:
 * case LIQUIDITY_POOL_DEPOSIT_BAD_PRICE:
 * case LIQUIDITY_POOL_DEPOSIT_POOL_FULL:
 * case LIQUIDITY_POOL_DEPOSIT_TRUSTLINE_FROZEN:
 *     void;
 * };
 * ```
 */
declare abstract class LiquidityPoolDepositResultBase extends XdrValue {
    abstract readonly type: LiquidityPoolDepositResultVariantName;
    constructor();
    static readonly schema: XdrType<LiquidityPoolDepositResultWire>;
    static liquidityPoolDepositSuccess(): LiquidityPoolDepositResultSuccess;
    static liquidityPoolDepositMalformed(): LiquidityPoolDepositResultMalformed;
    static liquidityPoolDepositNoTrust(): LiquidityPoolDepositResultNoTrust;
    static liquidityPoolDepositNotAuthorized(): LiquidityPoolDepositResultNotAuthorized;
    static liquidityPoolDepositUnderfunded(): LiquidityPoolDepositResultUnderfunded;
    static liquidityPoolDepositLineFull(): LiquidityPoolDepositResultLineFull;
    static liquidityPoolDepositBadPrice(): LiquidityPoolDepositResultBadPrice;
    static liquidityPoolDepositPoolFull(): LiquidityPoolDepositResultPoolFull;
    static liquidityPoolDepositTrustlineFrozen(): LiquidityPoolDepositResultTrustlineFrozen;
    static fromXdrObject(wire: LiquidityPoolDepositResultWire): LiquidityPoolDepositResult;
    /**
     * Type guard narrowing an unknown value to a concrete LiquidityPoolDepositResult variant.
     * Use this instead of `instanceof LiquidityPoolDepositResult`: the exported `LiquidityPoolDepositResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LiquidityPoolDepositResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LiquidityPoolDepositResult;
    abstract toXdrObject(): LiquidityPoolDepositResultWire;
}
export declare class LiquidityPoolDepositResultSuccess extends LiquidityPoolDepositResultBase {
    readonly type: "liquidityPoolDepositSuccess";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolDepositResultWire, {
        code: 0;
    }>;
}
export declare class LiquidityPoolDepositResultMalformed extends LiquidityPoolDepositResultBase {
    readonly type: "liquidityPoolDepositMalformed";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolDepositResultWire, {
        code: -1;
    }>;
}
export declare class LiquidityPoolDepositResultNoTrust extends LiquidityPoolDepositResultBase {
    readonly type: "liquidityPoolDepositNoTrust";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolDepositResultWire, {
        code: -2;
    }>;
}
export declare class LiquidityPoolDepositResultNotAuthorized extends LiquidityPoolDepositResultBase {
    readonly type: "liquidityPoolDepositNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolDepositResultWire, {
        code: -3;
    }>;
}
export declare class LiquidityPoolDepositResultUnderfunded extends LiquidityPoolDepositResultBase {
    readonly type: "liquidityPoolDepositUnderfunded";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolDepositResultWire, {
        code: -4;
    }>;
}
export declare class LiquidityPoolDepositResultLineFull extends LiquidityPoolDepositResultBase {
    readonly type: "liquidityPoolDepositLineFull";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolDepositResultWire, {
        code: -5;
    }>;
}
export declare class LiquidityPoolDepositResultBadPrice extends LiquidityPoolDepositResultBase {
    readonly type: "liquidityPoolDepositBadPrice";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolDepositResultWire, {
        code: -6;
    }>;
}
export declare class LiquidityPoolDepositResultPoolFull extends LiquidityPoolDepositResultBase {
    readonly type: "liquidityPoolDepositPoolFull";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolDepositResultWire, {
        code: -7;
    }>;
}
export declare class LiquidityPoolDepositResultTrustlineFrozen extends LiquidityPoolDepositResultBase {
    readonly type: "liquidityPoolDepositTrustlineFrozen";
    get value(): null;
    toXdrObject(): Extract<LiquidityPoolDepositResultWire, {
        code: -8;
    }>;
}
export type LiquidityPoolDepositResult = LiquidityPoolDepositResultSuccess | LiquidityPoolDepositResultMalformed | LiquidityPoolDepositResultNoTrust | LiquidityPoolDepositResultNotAuthorized | LiquidityPoolDepositResultUnderfunded | LiquidityPoolDepositResultLineFull | LiquidityPoolDepositResultBadPrice | LiquidityPoolDepositResultPoolFull | LiquidityPoolDepositResultTrustlineFrozen;
export declare const LiquidityPoolDepositResult: typeof LiquidityPoolDepositResultBase;
export {};
