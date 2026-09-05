import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type BeginSponsoringFutureReservesResultWire = {
    code: 0;
} | {
    code: -1;
} | {
    code: -2;
} | {
    code: -3;
};
export type BeginSponsoringFutureReservesResultVariantName = "beginSponsoringFutureReservesSuccess" | "beginSponsoringFutureReservesMalformed" | "beginSponsoringFutureReservesAlreadySponsored" | "beginSponsoringFutureReservesRecursive";
/**
 * ```xdr
 * union BeginSponsoringFutureReservesResult switch (
 *     BeginSponsoringFutureReservesResultCode code)
 * {
 * case BEGIN_SPONSORING_FUTURE_RESERVES_SUCCESS:
 *     void;
 * case BEGIN_SPONSORING_FUTURE_RESERVES_MALFORMED:
 * case BEGIN_SPONSORING_FUTURE_RESERVES_ALREADY_SPONSORED:
 * case BEGIN_SPONSORING_FUTURE_RESERVES_RECURSIVE:
 *     void;
 * };
 * ```
 */
declare abstract class BeginSponsoringFutureReservesResultBase extends XdrValue {
    abstract readonly type: BeginSponsoringFutureReservesResultVariantName;
    constructor();
    static readonly schema: XdrType<BeginSponsoringFutureReservesResultWire>;
    static beginSponsoringFutureReservesSuccess(): BeginSponsoringFutureReservesResultSuccess;
    static beginSponsoringFutureReservesMalformed(): BeginSponsoringFutureReservesResultMalformed;
    static beginSponsoringFutureReservesAlreadySponsored(): BeginSponsoringFutureReservesResultAlreadySponsored;
    static beginSponsoringFutureReservesRecursive(): BeginSponsoringFutureReservesResultRecursive;
    static fromXdrObject(wire: BeginSponsoringFutureReservesResultWire): BeginSponsoringFutureReservesResult;
    /**
     * Type guard narrowing an unknown value to a concrete BeginSponsoringFutureReservesResult variant.
     * Use this instead of `instanceof BeginSponsoringFutureReservesResult`: the exported `BeginSponsoringFutureReservesResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `BeginSponsoringFutureReservesResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is BeginSponsoringFutureReservesResult;
    abstract toXdrObject(): BeginSponsoringFutureReservesResultWire;
}
export declare class BeginSponsoringFutureReservesResultSuccess extends BeginSponsoringFutureReservesResultBase {
    readonly type: "beginSponsoringFutureReservesSuccess";
    get value(): null;
    toXdrObject(): Extract<BeginSponsoringFutureReservesResultWire, {
        code: 0;
    }>;
}
export declare class BeginSponsoringFutureReservesResultMalformed extends BeginSponsoringFutureReservesResultBase {
    readonly type: "beginSponsoringFutureReservesMalformed";
    get value(): null;
    toXdrObject(): Extract<BeginSponsoringFutureReservesResultWire, {
        code: -1;
    }>;
}
export declare class BeginSponsoringFutureReservesResultAlreadySponsored extends BeginSponsoringFutureReservesResultBase {
    readonly type: "beginSponsoringFutureReservesAlreadySponsored";
    get value(): null;
    toXdrObject(): Extract<BeginSponsoringFutureReservesResultWire, {
        code: -2;
    }>;
}
export declare class BeginSponsoringFutureReservesResultRecursive extends BeginSponsoringFutureReservesResultBase {
    readonly type: "beginSponsoringFutureReservesRecursive";
    get value(): null;
    toXdrObject(): Extract<BeginSponsoringFutureReservesResultWire, {
        code: -3;
    }>;
}
export type BeginSponsoringFutureReservesResult = BeginSponsoringFutureReservesResultSuccess | BeginSponsoringFutureReservesResultMalformed | BeginSponsoringFutureReservesResultAlreadySponsored | BeginSponsoringFutureReservesResultRecursive;
export declare const BeginSponsoringFutureReservesResult: typeof BeginSponsoringFutureReservesResultBase;
export {};
