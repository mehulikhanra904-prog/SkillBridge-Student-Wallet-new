import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type ExtendFootprintTtlResultWire = {
    code: 0;
} | {
    code: -1;
} | {
    code: -2;
} | {
    code: -3;
};
export type ExtendFootprintTtlResultVariantName = "extendFootprintTtlSuccess" | "extendFootprintTtlMalformed" | "extendFootprintTtlResourceLimitExceeded" | "extendFootprintTtlInsufficientRefundableFee";
/**
 * ```xdr
 * union ExtendFootprintTTLResult switch (ExtendFootprintTTLResultCode code)
 * {
 * case EXTEND_FOOTPRINT_TTL_SUCCESS:
 *     void;
 * case EXTEND_FOOTPRINT_TTL_MALFORMED:
 * case EXTEND_FOOTPRINT_TTL_RESOURCE_LIMIT_EXCEEDED:
 * case EXTEND_FOOTPRINT_TTL_INSUFFICIENT_REFUNDABLE_FEE:
 *     void;
 * };
 * ```
 */
declare abstract class ExtendFootprintTtlResultBase extends XdrValue {
    abstract readonly type: ExtendFootprintTtlResultVariantName;
    constructor();
    static readonly schema: XdrType<ExtendFootprintTtlResultWire>;
    static extendFootprintTtlSuccess(): ExtendFootprintTtlResultSuccess;
    static extendFootprintTtlMalformed(): ExtendFootprintTtlResultMalformed;
    static extendFootprintTtlResourceLimitExceeded(): ExtendFootprintTtlResultResourceLimitExceeded;
    static extendFootprintTtlInsufficientRefundableFee(): ExtendFootprintTtlResultInsufficientRefundableFee;
    static fromXdrObject(wire: ExtendFootprintTtlResultWire): ExtendFootprintTtlResult;
    /**
     * Type guard narrowing an unknown value to a concrete ExtendFootprintTtlResult variant.
     * Use this instead of `instanceof ExtendFootprintTtlResult`: the exported `ExtendFootprintTtlResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ExtendFootprintTtlResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ExtendFootprintTtlResult;
    abstract toXdrObject(): ExtendFootprintTtlResultWire;
}
export declare class ExtendFootprintTtlResultSuccess extends ExtendFootprintTtlResultBase {
    readonly type: "extendFootprintTtlSuccess";
    get value(): null;
    toXdrObject(): Extract<ExtendFootprintTtlResultWire, {
        code: 0;
    }>;
}
export declare class ExtendFootprintTtlResultMalformed extends ExtendFootprintTtlResultBase {
    readonly type: "extendFootprintTtlMalformed";
    get value(): null;
    toXdrObject(): Extract<ExtendFootprintTtlResultWire, {
        code: -1;
    }>;
}
export declare class ExtendFootprintTtlResultResourceLimitExceeded extends ExtendFootprintTtlResultBase {
    readonly type: "extendFootprintTtlResourceLimitExceeded";
    get value(): null;
    toXdrObject(): Extract<ExtendFootprintTtlResultWire, {
        code: -2;
    }>;
}
export declare class ExtendFootprintTtlResultInsufficientRefundableFee extends ExtendFootprintTtlResultBase {
    readonly type: "extendFootprintTtlInsufficientRefundableFee";
    get value(): null;
    toXdrObject(): Extract<ExtendFootprintTtlResultWire, {
        code: -3;
    }>;
}
export type ExtendFootprintTtlResult = ExtendFootprintTtlResultSuccess | ExtendFootprintTtlResultMalformed | ExtendFootprintTtlResultResourceLimitExceeded | ExtendFootprintTtlResultInsufficientRefundableFee;
export declare const ExtendFootprintTtlResult: typeof ExtendFootprintTtlResultBase;
export {};
