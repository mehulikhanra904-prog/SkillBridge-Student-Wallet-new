import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type RestoreFootprintResultWire = {
    code: 0;
} | {
    code: -1;
} | {
    code: -2;
} | {
    code: -3;
};
export type RestoreFootprintResultVariantName = "restoreFootprintSuccess" | "restoreFootprintMalformed" | "restoreFootprintResourceLimitExceeded" | "restoreFootprintInsufficientRefundableFee";
/**
 * ```xdr
 * union RestoreFootprintResult switch (RestoreFootprintResultCode code)
 * {
 * case RESTORE_FOOTPRINT_SUCCESS:
 *     void;
 * case RESTORE_FOOTPRINT_MALFORMED:
 * case RESTORE_FOOTPRINT_RESOURCE_LIMIT_EXCEEDED:
 * case RESTORE_FOOTPRINT_INSUFFICIENT_REFUNDABLE_FEE:
 *     void;
 * };
 * ```
 */
declare abstract class RestoreFootprintResultBase extends XdrValue {
    abstract readonly type: RestoreFootprintResultVariantName;
    constructor();
    static readonly schema: XdrType<RestoreFootprintResultWire>;
    static restoreFootprintSuccess(): RestoreFootprintResultSuccess;
    static restoreFootprintMalformed(): RestoreFootprintResultMalformed;
    static restoreFootprintResourceLimitExceeded(): RestoreFootprintResultResourceLimitExceeded;
    static restoreFootprintInsufficientRefundableFee(): RestoreFootprintResultInsufficientRefundableFee;
    static fromXdrObject(wire: RestoreFootprintResultWire): RestoreFootprintResult;
    /**
     * Type guard narrowing an unknown value to a concrete RestoreFootprintResult variant.
     * Use this instead of `instanceof RestoreFootprintResult`: the exported `RestoreFootprintResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `RestoreFootprintResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is RestoreFootprintResult;
    abstract toXdrObject(): RestoreFootprintResultWire;
}
export declare class RestoreFootprintResultSuccess extends RestoreFootprintResultBase {
    readonly type: "restoreFootprintSuccess";
    get value(): null;
    toXdrObject(): Extract<RestoreFootprintResultWire, {
        code: 0;
    }>;
}
export declare class RestoreFootprintResultMalformed extends RestoreFootprintResultBase {
    readonly type: "restoreFootprintMalformed";
    get value(): null;
    toXdrObject(): Extract<RestoreFootprintResultWire, {
        code: -1;
    }>;
}
export declare class RestoreFootprintResultResourceLimitExceeded extends RestoreFootprintResultBase {
    readonly type: "restoreFootprintResourceLimitExceeded";
    get value(): null;
    toXdrObject(): Extract<RestoreFootprintResultWire, {
        code: -2;
    }>;
}
export declare class RestoreFootprintResultInsufficientRefundableFee extends RestoreFootprintResultBase {
    readonly type: "restoreFootprintInsufficientRefundableFee";
    get value(): null;
    toXdrObject(): Extract<RestoreFootprintResultWire, {
        code: -3;
    }>;
}
export type RestoreFootprintResult = RestoreFootprintResultSuccess | RestoreFootprintResultMalformed | RestoreFootprintResultResourceLimitExceeded | RestoreFootprintResultInsufficientRefundableFee;
export declare const RestoreFootprintResult: typeof RestoreFootprintResultBase;
export {};
