import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ManageOfferSuccessResult, type ManageOfferSuccessResultWire } from "./manage-offer-success-result.js";
export type ManageSellOfferResultWire = {
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
export type ManageSellOfferResultVariantName = "manageSellOfferSuccess" | "manageSellOfferMalformed" | "manageSellOfferSellNoTrust" | "manageSellOfferBuyNoTrust" | "manageSellOfferSellNotAuthorized" | "manageSellOfferBuyNotAuthorized" | "manageSellOfferLineFull" | "manageSellOfferUnderfunded" | "manageSellOfferCrossSelf" | "manageSellOfferSellNoIssuer" | "manageSellOfferBuyNoIssuer" | "manageSellOfferNotFound" | "manageSellOfferLowReserve";
/**
 * ```xdr
 * union ManageSellOfferResult switch (ManageSellOfferResultCode code)
 * {
 * case MANAGE_SELL_OFFER_SUCCESS:
 *     ManageOfferSuccessResult success;
 * case MANAGE_SELL_OFFER_MALFORMED:
 * case MANAGE_SELL_OFFER_SELL_NO_TRUST:
 * case MANAGE_SELL_OFFER_BUY_NO_TRUST:
 * case MANAGE_SELL_OFFER_SELL_NOT_AUTHORIZED:
 * case MANAGE_SELL_OFFER_BUY_NOT_AUTHORIZED:
 * case MANAGE_SELL_OFFER_LINE_FULL:
 * case MANAGE_SELL_OFFER_UNDERFUNDED:
 * case MANAGE_SELL_OFFER_CROSS_SELF:
 * case MANAGE_SELL_OFFER_SELL_NO_ISSUER:
 * case MANAGE_SELL_OFFER_BUY_NO_ISSUER:
 * case MANAGE_SELL_OFFER_NOT_FOUND:
 * case MANAGE_SELL_OFFER_LOW_RESERVE:
 *     void;
 * };
 * ```
 */
declare abstract class ManageSellOfferResultBase extends XdrValue {
    abstract readonly type: ManageSellOfferResultVariantName;
    constructor();
    static readonly schema: XdrType<ManageSellOfferResultWire>;
    static manageSellOfferSuccess(success: ManageOfferSuccessResult): ManageSellOfferResultSuccess;
    static manageSellOfferMalformed(): ManageSellOfferResultMalformed;
    static manageSellOfferSellNoTrust(): ManageSellOfferResultSellNoTrust;
    static manageSellOfferBuyNoTrust(): ManageSellOfferResultBuyNoTrust;
    static manageSellOfferSellNotAuthorized(): ManageSellOfferResultSellNotAuthorized;
    static manageSellOfferBuyNotAuthorized(): ManageSellOfferResultBuyNotAuthorized;
    static manageSellOfferLineFull(): ManageSellOfferResultLineFull;
    static manageSellOfferUnderfunded(): ManageSellOfferResultUnderfunded;
    static manageSellOfferCrossSelf(): ManageSellOfferResultCrossSelf;
    static manageSellOfferSellNoIssuer(): ManageSellOfferResultSellNoIssuer;
    static manageSellOfferBuyNoIssuer(): ManageSellOfferResultBuyNoIssuer;
    static manageSellOfferNotFound(): ManageSellOfferResultNotFound;
    static manageSellOfferLowReserve(): ManageSellOfferResultLowReserve;
    static fromXdrObject(wire: ManageSellOfferResultWire): ManageSellOfferResult;
    /**
     * Type guard narrowing an unknown value to a concrete ManageSellOfferResult variant.
     * Use this instead of `instanceof ManageSellOfferResult`: the exported `ManageSellOfferResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ManageSellOfferResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ManageSellOfferResult;
    abstract toXdrObject(): ManageSellOfferResultWire;
}
export declare class ManageSellOfferResultSuccess extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferSuccess";
    readonly success: ManageOfferSuccessResult;
    constructor(success: ManageOfferSuccessResult);
    get value(): ManageOfferSuccessResult;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: 0;
    }>;
}
export declare class ManageSellOfferResultMalformed extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferMalformed";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -1;
    }>;
}
export declare class ManageSellOfferResultSellNoTrust extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferSellNoTrust";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -2;
    }>;
}
export declare class ManageSellOfferResultBuyNoTrust extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferBuyNoTrust";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -3;
    }>;
}
export declare class ManageSellOfferResultSellNotAuthorized extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferSellNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -4;
    }>;
}
export declare class ManageSellOfferResultBuyNotAuthorized extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferBuyNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -5;
    }>;
}
export declare class ManageSellOfferResultLineFull extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferLineFull";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -6;
    }>;
}
export declare class ManageSellOfferResultUnderfunded extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferUnderfunded";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -7;
    }>;
}
export declare class ManageSellOfferResultCrossSelf extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferCrossSelf";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -8;
    }>;
}
export declare class ManageSellOfferResultSellNoIssuer extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferSellNoIssuer";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -9;
    }>;
}
export declare class ManageSellOfferResultBuyNoIssuer extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferBuyNoIssuer";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -10;
    }>;
}
export declare class ManageSellOfferResultNotFound extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferNotFound";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -11;
    }>;
}
export declare class ManageSellOfferResultLowReserve extends ManageSellOfferResultBase {
    readonly type: "manageSellOfferLowReserve";
    get value(): null;
    toXdrObject(): Extract<ManageSellOfferResultWire, {
        code: -12;
    }>;
}
export type ManageSellOfferResult = ManageSellOfferResultSuccess | ManageSellOfferResultMalformed | ManageSellOfferResultSellNoTrust | ManageSellOfferResultBuyNoTrust | ManageSellOfferResultSellNotAuthorized | ManageSellOfferResultBuyNotAuthorized | ManageSellOfferResultLineFull | ManageSellOfferResultUnderfunded | ManageSellOfferResultCrossSelf | ManageSellOfferResultSellNoIssuer | ManageSellOfferResultBuyNoIssuer | ManageSellOfferResultNotFound | ManageSellOfferResultLowReserve;
export declare const ManageSellOfferResult: typeof ManageSellOfferResultBase;
export {};
