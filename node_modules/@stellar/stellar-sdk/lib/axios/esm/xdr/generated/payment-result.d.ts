import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type PaymentResultWire = {
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
} | {
    code: -9;
};
export type PaymentResultVariantName = "paymentSuccess" | "paymentMalformed" | "paymentUnderfunded" | "paymentSrcNoTrust" | "paymentSrcNotAuthorized" | "paymentNoDestination" | "paymentNoTrust" | "paymentNotAuthorized" | "paymentLineFull" | "paymentNoIssuer";
/**
 * ```xdr
 * union PaymentResult switch (PaymentResultCode code)
 * {
 * case PAYMENT_SUCCESS:
 *     void;
 * case PAYMENT_MALFORMED:
 * case PAYMENT_UNDERFUNDED:
 * case PAYMENT_SRC_NO_TRUST:
 * case PAYMENT_SRC_NOT_AUTHORIZED:
 * case PAYMENT_NO_DESTINATION:
 * case PAYMENT_NO_TRUST:
 * case PAYMENT_NOT_AUTHORIZED:
 * case PAYMENT_LINE_FULL:
 * case PAYMENT_NO_ISSUER:
 *     void;
 * };
 * ```
 */
declare abstract class PaymentResultBase extends XdrValue {
    abstract readonly type: PaymentResultVariantName;
    constructor();
    static readonly schema: XdrType<PaymentResultWire>;
    static paymentSuccess(): PaymentResultSuccess;
    static paymentMalformed(): PaymentResultMalformed;
    static paymentUnderfunded(): PaymentResultUnderfunded;
    static paymentSrcNoTrust(): PaymentResultSrcNoTrust;
    static paymentSrcNotAuthorized(): PaymentResultSrcNotAuthorized;
    static paymentNoDestination(): PaymentResultNoDestination;
    static paymentNoTrust(): PaymentResultNoTrust;
    static paymentNotAuthorized(): PaymentResultNotAuthorized;
    static paymentLineFull(): PaymentResultLineFull;
    static paymentNoIssuer(): PaymentResultNoIssuer;
    static fromXdrObject(wire: PaymentResultWire): PaymentResult;
    /**
     * Type guard narrowing an unknown value to a concrete PaymentResult variant.
     * Use this instead of `instanceof PaymentResult`: the exported `PaymentResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `PaymentResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is PaymentResult;
    abstract toXdrObject(): PaymentResultWire;
}
export declare class PaymentResultSuccess extends PaymentResultBase {
    readonly type: "paymentSuccess";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: 0;
    }>;
}
export declare class PaymentResultMalformed extends PaymentResultBase {
    readonly type: "paymentMalformed";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: -1;
    }>;
}
export declare class PaymentResultUnderfunded extends PaymentResultBase {
    readonly type: "paymentUnderfunded";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: -2;
    }>;
}
export declare class PaymentResultSrcNoTrust extends PaymentResultBase {
    readonly type: "paymentSrcNoTrust";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: -3;
    }>;
}
export declare class PaymentResultSrcNotAuthorized extends PaymentResultBase {
    readonly type: "paymentSrcNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: -4;
    }>;
}
export declare class PaymentResultNoDestination extends PaymentResultBase {
    readonly type: "paymentNoDestination";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: -5;
    }>;
}
export declare class PaymentResultNoTrust extends PaymentResultBase {
    readonly type: "paymentNoTrust";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: -6;
    }>;
}
export declare class PaymentResultNotAuthorized extends PaymentResultBase {
    readonly type: "paymentNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: -7;
    }>;
}
export declare class PaymentResultLineFull extends PaymentResultBase {
    readonly type: "paymentLineFull";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: -8;
    }>;
}
export declare class PaymentResultNoIssuer extends PaymentResultBase {
    readonly type: "paymentNoIssuer";
    get value(): null;
    toXdrObject(): Extract<PaymentResultWire, {
        code: -9;
    }>;
}
export type PaymentResult = PaymentResultSuccess | PaymentResultMalformed | PaymentResultUnderfunded | PaymentResultSrcNoTrust | PaymentResultSrcNotAuthorized | PaymentResultNoDestination | PaymentResultNoTrust | PaymentResultNotAuthorized | PaymentResultLineFull | PaymentResultNoIssuer;
export declare const PaymentResult: typeof PaymentResultBase;
export {};
