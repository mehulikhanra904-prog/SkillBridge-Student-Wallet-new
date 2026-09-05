import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ManageOfferSuccessResult, type ManageOfferSuccessResultWire } from "./manage-offer-success-result.js";
export type ManageBuyOfferResultWire = {
    code: 0;
    success: ManageOfferSuccessResultWire;
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
} | {
    code: -10;
} | {
    code: -11;
} | {
    code: -12;
};
export type ManageBuyOfferResultVariantName = "manageBuyOfferSuccess" | "manageBuyOfferMalformed" | "manageBuyOfferSellNoTrust" | "manageBuyOfferBuyNoTrust" | "manageBuyOfferSellNotAuthorized" | "manageBuyOfferBuyNotAuthorized" | "manageBuyOfferLineFull" | "manageBuyOfferUnderfunded" | "manageBuyOfferCrossSelf" | "manageBuyOfferSellNoIssuer" | "manageBuyOfferBuyNoIssuer" | "manageBuyOfferNotFound" | "manageBuyOfferLowReserve";
/**
 * ```xdr
 * union ManageBuyOfferResult switch (ManageBuyOfferResultCode code)
 * {
 * case MANAGE_BUY_OFFER_SUCCESS:
 *     ManageOfferSuccessResult success;
 * case MANAGE_BUY_OFFER_MALFORMED:
 * case MANAGE_BUY_OFFER_SELL_NO_TRUST:
 * case MANAGE_BUY_OFFER_BUY_NO_TRUST:
 * case MANAGE_BUY_OFFER_SELL_NOT_AUTHORIZED:
 * case MANAGE_BUY_OFFER_BUY_NOT_AUTHORIZED:
 * case MANAGE_BUY_OFFER_LINE_FULL:
 * case MANAGE_BUY_OFFER_UNDERFUNDED:
 * case MANAGE_BUY_OFFER_CROSS_SELF:
 * case MANAGE_BUY_OFFER_SELL_NO_ISSUER:
 * case MANAGE_BUY_OFFER_BUY_NO_ISSUER:
 * case MANAGE_BUY_OFFER_NOT_FOUND:
 * case MANAGE_BUY_OFFER_LOW_RESERVE:
 *     void;
 * };
 * ```
 */
declare abstract class ManageBuyOfferResultBase extends XdrValue {
    abstract readonly type: ManageBuyOfferResultVariantName;
    constructor();
    static readonly schema: XdrType<ManageBuyOfferResultWire>;
    static manageBuyOfferSuccess(success: ManageOfferSuccessResult): ManageBuyOfferResultSuccess;
    static manageBuyOfferMalformed(): ManageBuyOfferResultMalformed;
    static manageBuyOfferSellNoTrust(): ManageBuyOfferResultSellNoTrust;
    static manageBuyOfferBuyNoTrust(): ManageBuyOfferResultBuyNoTrust;
    static manageBuyOfferSellNotAuthorized(): ManageBuyOfferResultSellNotAuthorized;
    static manageBuyOfferBuyNotAuthorized(): ManageBuyOfferResultBuyNotAuthorized;
    static manageBuyOfferLineFull(): ManageBuyOfferResultLineFull;
    static manageBuyOfferUnderfunded(): ManageBuyOfferResultUnderfunded;
    static manageBuyOfferCrossSelf(): ManageBuyOfferResultCrossSelf;
    static manageBuyOfferSellNoIssuer(): ManageBuyOfferResultSellNoIssuer;
    static manageBuyOfferBuyNoIssuer(): ManageBuyOfferResultBuyNoIssuer;
    static manageBuyOfferNotFound(): ManageBuyOfferResultNotFound;
    static manageBuyOfferLowReserve(): ManageBuyOfferResultLowReserve;
    static fromXdrObject(wire: ManageBuyOfferResultWire): ManageBuyOfferResult;
    /**
     * Type guard narrowing an unknown value to a concrete ManageBuyOfferResult variant.
     * Use this instead of `instanceof ManageBuyOfferResult`: the exported `ManageBuyOfferResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ManageBuyOfferResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ManageBuyOfferResult;
    abstract toXdrObject(): ManageBuyOfferResultWire;
}
export declare class ManageBuyOfferResultSuccess extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferSuccess";
    readonly success: ManageOfferSuccessResult;
    constructor(success: ManageOfferSuccessResult);
    get value(): ManageOfferSuccessResult;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: 0;
    }>;
}
export declare class ManageBuyOfferResultMalformed extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferMalformed";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -1;
    }>;
}
export declare class ManageBuyOfferResultSellNoTrust extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferSellNoTrust";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -2;
    }>;
}
export declare class ManageBuyOfferResultBuyNoTrust extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferBuyNoTrust";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -3;
    }>;
}
export declare class ManageBuyOfferResultSellNotAuthorized extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferSellNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -4;
    }>;
}
export declare class ManageBuyOfferResultBuyNotAuthorized extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferBuyNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -5;
    }>;
}
export declare class ManageBuyOfferResultLineFull extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferLineFull";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -6;
    }>;
}
export declare class ManageBuyOfferResultUnderfunded extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferUnderfunded";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -7;
    }>;
}
export declare class ManageBuyOfferResultCrossSelf extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferCrossSelf";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -8;
    }>;
}
export declare class ManageBuyOfferResultSellNoIssuer extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferSellNoIssuer";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -9;
    }>;
}
export declare class ManageBuyOfferResultBuyNoIssuer extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferBuyNoIssuer";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -10;
    }>;
}
export declare class ManageBuyOfferResultNotFound extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferNotFound";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -11;
    }>;
}
export declare class ManageBuyOfferResultLowReserve extends ManageBuyOfferResultBase {
    readonly type: "manageBuyOfferLowReserve";
    get value(): null;
    toXdrObject(): Extract<ManageBuyOfferResultWire, {
        code: -12;
    }>;
}
export type ManageBuyOfferResult = ManageBuyOfferResultSuccess | ManageBuyOfferResultMalformed | ManageBuyOfferResultSellNoTrust | ManageBuyOfferResultBuyNoTrust | ManageBuyOfferResultSellNotAuthorized | ManageBuyOfferResultBuyNotAuthorized | ManageBuyOfferResultLineFull | ManageBuyOfferResultUnderfunded | ManageBuyOfferResultCrossSelf | ManageBuyOfferResultSellNoIssuer | ManageBuyOfferResultBuyNoIssuer | ManageBuyOfferResultNotFound | ManageBuyOfferResultLowReserve;
export declare const ManageBuyOfferResult: typeof ManageBuyOfferResultBase;
export {};
