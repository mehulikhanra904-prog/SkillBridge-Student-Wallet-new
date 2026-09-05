import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PathPaymentStrictSendResultSuccess, type PathPaymentStrictSendResultSuccessWire } from "./path-payment-strict-send-result-success.js";
import { Asset, type AssetWire } from "./asset.js";
export type PathPaymentStrictSendResultWire = {
    code: 0;
    success: PathPaymentStrictSendResultSuccessWire;
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
    noIssuer: AssetWire;
} | {
    code: -10;
} | {
    code: -11;
} | {
    code: -12;
};
export type PathPaymentStrictSendResultVariantName = "pathPaymentStrictSendSuccess" | "pathPaymentStrictSendMalformed" | "pathPaymentStrictSendUnderfunded" | "pathPaymentStrictSendSrcNoTrust" | "pathPaymentStrictSendSrcNotAuthorized" | "pathPaymentStrictSendNoDestination" | "pathPaymentStrictSendNoTrust" | "pathPaymentStrictSendNotAuthorized" | "pathPaymentStrictSendLineFull" | "pathPaymentStrictSendNoIssuer" | "pathPaymentStrictSendTooFewOffers" | "pathPaymentStrictSendOfferCrossSelf" | "pathPaymentStrictSendUnderDestmin";
/**
 * ```xdr
 * union PathPaymentStrictSendResult switch (PathPaymentStrictSendResultCode code)
 * {
 * case PATH_PAYMENT_STRICT_SEND_SUCCESS:
 *     struct
 *     {
 *         ClaimAtom offers<>;
 *         SimplePaymentResult last;
 *     } success;
 * case PATH_PAYMENT_STRICT_SEND_MALFORMED:
 * case PATH_PAYMENT_STRICT_SEND_UNDERFUNDED:
 * case PATH_PAYMENT_STRICT_SEND_SRC_NO_TRUST:
 * case PATH_PAYMENT_STRICT_SEND_SRC_NOT_AUTHORIZED:
 * case PATH_PAYMENT_STRICT_SEND_NO_DESTINATION:
 * case PATH_PAYMENT_STRICT_SEND_NO_TRUST:
 * case PATH_PAYMENT_STRICT_SEND_NOT_AUTHORIZED:
 * case PATH_PAYMENT_STRICT_SEND_LINE_FULL:
 *     void;
 * case PATH_PAYMENT_STRICT_SEND_NO_ISSUER:
 *     Asset noIssuer; // the asset that caused the error
 * case PATH_PAYMENT_STRICT_SEND_TOO_FEW_OFFERS:
 * case PATH_PAYMENT_STRICT_SEND_OFFER_CROSS_SELF:
 * case PATH_PAYMENT_STRICT_SEND_UNDER_DESTMIN:
 *     void;
 * };
 * ```
 */
declare abstract class PathPaymentStrictSendResultBase extends XdrValue {
    abstract readonly type: PathPaymentStrictSendResultVariantName;
    constructor();
    static readonly schema: XdrType<PathPaymentStrictSendResultWire>;
    static pathPaymentStrictSendSuccess(success: PathPaymentStrictSendResultSuccess): PathPaymentStrictSendResultSuccessArm;
    static pathPaymentStrictSendMalformed(): PathPaymentStrictSendResultMalformed;
    static pathPaymentStrictSendUnderfunded(): PathPaymentStrictSendResultUnderfunded;
    static pathPaymentStrictSendSrcNoTrust(): PathPaymentStrictSendResultSrcNoTrust;
    static pathPaymentStrictSendSrcNotAuthorized(): PathPaymentStrictSendResultSrcNotAuthorized;
    static pathPaymentStrictSendNoDestination(): PathPaymentStrictSendResultNoDestination;
    static pathPaymentStrictSendNoTrust(): PathPaymentStrictSendResultNoTrust;
    static pathPaymentStrictSendNotAuthorized(): PathPaymentStrictSendResultNotAuthorized;
    static pathPaymentStrictSendLineFull(): PathPaymentStrictSendResultLineFull;
    static pathPaymentStrictSendNoIssuer(noIssuer: Asset): PathPaymentStrictSendResultNoIssuer;
    static pathPaymentStrictSendTooFewOffers(): PathPaymentStrictSendResultTooFewOffers;
    static pathPaymentStrictSendOfferCrossSelf(): PathPaymentStrictSendResultOfferCrossSelf;
    static pathPaymentStrictSendUnderDestmin(): PathPaymentStrictSendResultUnderDestmin;
    static fromXdrObject(wire: PathPaymentStrictSendResultWire): PathPaymentStrictSendResult;
    /**
     * Type guard narrowing an unknown value to a concrete PathPaymentStrictSendResult variant.
     * Use this instead of `instanceof PathPaymentStrictSendResult`: the exported `PathPaymentStrictSendResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `PathPaymentStrictSendResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is PathPaymentStrictSendResult;
    abstract toXdrObject(): PathPaymentStrictSendResultWire;
}
export declare class PathPaymentStrictSendResultSuccessArm extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendSuccess";
    readonly success: PathPaymentStrictSendResultSuccess;
    constructor(success: PathPaymentStrictSendResultSuccess);
    get value(): PathPaymentStrictSendResultSuccess;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: 0;
    }>;
}
export declare class PathPaymentStrictSendResultMalformed extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendMalformed";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -1;
    }>;
}
export declare class PathPaymentStrictSendResultUnderfunded extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendUnderfunded";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -2;
    }>;
}
export declare class PathPaymentStrictSendResultSrcNoTrust extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendSrcNoTrust";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -3;
    }>;
}
export declare class PathPaymentStrictSendResultSrcNotAuthorized extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendSrcNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -4;
    }>;
}
export declare class PathPaymentStrictSendResultNoDestination extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendNoDestination";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -5;
    }>;
}
export declare class PathPaymentStrictSendResultNoTrust extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendNoTrust";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -6;
    }>;
}
export declare class PathPaymentStrictSendResultNotAuthorized extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -7;
    }>;
}
export declare class PathPaymentStrictSendResultLineFull extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendLineFull";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -8;
    }>;
}
export declare class PathPaymentStrictSendResultNoIssuer extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendNoIssuer";
    readonly noIssuer: Asset;
    constructor(noIssuer: Asset);
    get value(): Asset;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -9;
    }>;
}
export declare class PathPaymentStrictSendResultTooFewOffers extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendTooFewOffers";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -10;
    }>;
}
export declare class PathPaymentStrictSendResultOfferCrossSelf extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendOfferCrossSelf";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -11;
    }>;
}
export declare class PathPaymentStrictSendResultUnderDestmin extends PathPaymentStrictSendResultBase {
    readonly type: "pathPaymentStrictSendUnderDestmin";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictSendResultWire, {
        code: -12;
    }>;
}
export type PathPaymentStrictSendResult = PathPaymentStrictSendResultSuccessArm | PathPaymentStrictSendResultMalformed | PathPaymentStrictSendResultUnderfunded | PathPaymentStrictSendResultSrcNoTrust | PathPaymentStrictSendResultSrcNotAuthorized | PathPaymentStrictSendResultNoDestination | PathPaymentStrictSendResultNoTrust | PathPaymentStrictSendResultNotAuthorized | PathPaymentStrictSendResultLineFull | PathPaymentStrictSendResultNoIssuer | PathPaymentStrictSendResultTooFewOffers | PathPaymentStrictSendResultOfferCrossSelf | PathPaymentStrictSendResultUnderDestmin;
export declare const PathPaymentStrictSendResult: typeof PathPaymentStrictSendResultBase;
export {};
