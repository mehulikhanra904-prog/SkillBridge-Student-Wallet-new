import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PathPaymentStrictReceiveResultSuccess, type PathPaymentStrictReceiveResultSuccessWire } from "./path-payment-strict-receive-result-success.js";
import { Asset, type AssetWire } from "./asset.js";
export type PathPaymentStrictReceiveResultWire = {
    code: 0;
    success: PathPaymentStrictReceiveResultSuccessWire;
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
export type PathPaymentStrictReceiveResultVariantName = "pathPaymentStrictReceiveSuccess" | "pathPaymentStrictReceiveMalformed" | "pathPaymentStrictReceiveUnderfunded" | "pathPaymentStrictReceiveSrcNoTrust" | "pathPaymentStrictReceiveSrcNotAuthorized" | "pathPaymentStrictReceiveNoDestination" | "pathPaymentStrictReceiveNoTrust" | "pathPaymentStrictReceiveNotAuthorized" | "pathPaymentStrictReceiveLineFull" | "pathPaymentStrictReceiveNoIssuer" | "pathPaymentStrictReceiveTooFewOffers" | "pathPaymentStrictReceiveOfferCrossSelf" | "pathPaymentStrictReceiveOverSendmax";
/**
 * ```xdr
 * union PathPaymentStrictReceiveResult switch (
 *     PathPaymentStrictReceiveResultCode code)
 * {
 * case PATH_PAYMENT_STRICT_RECEIVE_SUCCESS:
 *     struct
 *     {
 *         ClaimAtom offers<>;
 *         SimplePaymentResult last;
 *     } success;
 * case PATH_PAYMENT_STRICT_RECEIVE_MALFORMED:
 * case PATH_PAYMENT_STRICT_RECEIVE_UNDERFUNDED:
 * case PATH_PAYMENT_STRICT_RECEIVE_SRC_NO_TRUST:
 * case PATH_PAYMENT_STRICT_RECEIVE_SRC_NOT_AUTHORIZED:
 * case PATH_PAYMENT_STRICT_RECEIVE_NO_DESTINATION:
 * case PATH_PAYMENT_STRICT_RECEIVE_NO_TRUST:
 * case PATH_PAYMENT_STRICT_RECEIVE_NOT_AUTHORIZED:
 * case PATH_PAYMENT_STRICT_RECEIVE_LINE_FULL:
 *     void;
 * case PATH_PAYMENT_STRICT_RECEIVE_NO_ISSUER:
 *     Asset noIssuer; // the asset that caused the error
 * case PATH_PAYMENT_STRICT_RECEIVE_TOO_FEW_OFFERS:
 * case PATH_PAYMENT_STRICT_RECEIVE_OFFER_CROSS_SELF:
 * case PATH_PAYMENT_STRICT_RECEIVE_OVER_SENDMAX:
 *     void;
 * };
 * ```
 */
declare abstract class PathPaymentStrictReceiveResultBase extends XdrValue {
    abstract readonly type: PathPaymentStrictReceiveResultVariantName;
    constructor();
    static readonly schema: XdrType<PathPaymentStrictReceiveResultWire>;
    static pathPaymentStrictReceiveSuccess(success: PathPaymentStrictReceiveResultSuccess): PathPaymentStrictReceiveResultSuccessArm;
    static pathPaymentStrictReceiveMalformed(): PathPaymentStrictReceiveResultMalformed;
    static pathPaymentStrictReceiveUnderfunded(): PathPaymentStrictReceiveResultUnderfunded;
    static pathPaymentStrictReceiveSrcNoTrust(): PathPaymentStrictReceiveResultSrcNoTrust;
    static pathPaymentStrictReceiveSrcNotAuthorized(): PathPaymentStrictReceiveResultSrcNotAuthorized;
    static pathPaymentStrictReceiveNoDestination(): PathPaymentStrictReceiveResultNoDestination;
    static pathPaymentStrictReceiveNoTrust(): PathPaymentStrictReceiveResultNoTrust;
    static pathPaymentStrictReceiveNotAuthorized(): PathPaymentStrictReceiveResultNotAuthorized;
    static pathPaymentStrictReceiveLineFull(): PathPaymentStrictReceiveResultLineFull;
    static pathPaymentStrictReceiveNoIssuer(noIssuer: Asset): PathPaymentStrictReceiveResultNoIssuer;
    static pathPaymentStrictReceiveTooFewOffers(): PathPaymentStrictReceiveResultTooFewOffers;
    static pathPaymentStrictReceiveOfferCrossSelf(): PathPaymentStrictReceiveResultOfferCrossSelf;
    static pathPaymentStrictReceiveOverSendmax(): PathPaymentStrictReceiveResultOverSendmax;
    static fromXdrObject(wire: PathPaymentStrictReceiveResultWire): PathPaymentStrictReceiveResult;
    /**
     * Type guard narrowing an unknown value to a concrete PathPaymentStrictReceiveResult variant.
     * Use this instead of `instanceof PathPaymentStrictReceiveResult`: the exported `PathPaymentStrictReceiveResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `PathPaymentStrictReceiveResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is PathPaymentStrictReceiveResult;
    abstract toXdrObject(): PathPaymentStrictReceiveResultWire;
}
export declare class PathPaymentStrictReceiveResultSuccessArm extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveSuccess";
    readonly success: PathPaymentStrictReceiveResultSuccess;
    constructor(success: PathPaymentStrictReceiveResultSuccess);
    get value(): PathPaymentStrictReceiveResultSuccess;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: 0;
    }>;
}
export declare class PathPaymentStrictReceiveResultMalformed extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveMalformed";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -1;
    }>;
}
export declare class PathPaymentStrictReceiveResultUnderfunded extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveUnderfunded";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -2;
    }>;
}
export declare class PathPaymentStrictReceiveResultSrcNoTrust extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveSrcNoTrust";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -3;
    }>;
}
export declare class PathPaymentStrictReceiveResultSrcNotAuthorized extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveSrcNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -4;
    }>;
}
export declare class PathPaymentStrictReceiveResultNoDestination extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveNoDestination";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -5;
    }>;
}
export declare class PathPaymentStrictReceiveResultNoTrust extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveNoTrust";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -6;
    }>;
}
export declare class PathPaymentStrictReceiveResultNotAuthorized extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -7;
    }>;
}
export declare class PathPaymentStrictReceiveResultLineFull extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveLineFull";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -8;
    }>;
}
export declare class PathPaymentStrictReceiveResultNoIssuer extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveNoIssuer";
    readonly noIssuer: Asset;
    constructor(noIssuer: Asset);
    get value(): Asset;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -9;
    }>;
}
export declare class PathPaymentStrictReceiveResultTooFewOffers extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveTooFewOffers";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -10;
    }>;
}
export declare class PathPaymentStrictReceiveResultOfferCrossSelf extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveOfferCrossSelf";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -11;
    }>;
}
export declare class PathPaymentStrictReceiveResultOverSendmax extends PathPaymentStrictReceiveResultBase {
    readonly type: "pathPaymentStrictReceiveOverSendmax";
    get value(): null;
    toXdrObject(): Extract<PathPaymentStrictReceiveResultWire, {
        code: -12;
    }>;
}
export type PathPaymentStrictReceiveResult = PathPaymentStrictReceiveResultSuccessArm | PathPaymentStrictReceiveResultMalformed | PathPaymentStrictReceiveResultUnderfunded | PathPaymentStrictReceiveResultSrcNoTrust | PathPaymentStrictReceiveResultSrcNotAuthorized | PathPaymentStrictReceiveResultNoDestination | PathPaymentStrictReceiveResultNoTrust | PathPaymentStrictReceiveResultNotAuthorized | PathPaymentStrictReceiveResultLineFull | PathPaymentStrictReceiveResultNoIssuer | PathPaymentStrictReceiveResultTooFewOffers | PathPaymentStrictReceiveResultOfferCrossSelf | PathPaymentStrictReceiveResultOverSendmax;
export declare const PathPaymentStrictReceiveResult: typeof PathPaymentStrictReceiveResultBase;
export {};
