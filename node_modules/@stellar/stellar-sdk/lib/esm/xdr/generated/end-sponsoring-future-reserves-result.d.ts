import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type EndSponsoringFutureReservesResultWire = {
    code: 0;
} | {
    code: -1;
};
export type EndSponsoringFutureReservesResultVariantName = "endSponsoringFutureReservesSuccess" | "endSponsoringFutureReservesNotSponsored";
/**
 * ```xdr
 * union EndSponsoringFutureReservesResult switch (
 *     EndSponsoringFutureReservesResultCode code)
 * {
 * case END_SPONSORING_FUTURE_RESERVES_SUCCESS:
 *     void;
 * case END_SPONSORING_FUTURE_RESERVES_NOT_SPONSORED:
 *     void;
 * };
 * ```
 */
declare abstract class EndSponsoringFutureReservesResultBase extends XdrValue {
    abstract readonly type: EndSponsoringFutureReservesResultVariantName;
    constructor();
    static readonly schema: XdrType<EndSponsoringFutureReservesResultWire>;
    static endSponsoringFutureReservesSuccess(): EndSponsoringFutureReservesResultSuccess;
    static endSponsoringFutureReservesNotSponsored(): EndSponsoringFutureReservesResultNotSponsored;
    static fromXdrObject(wire: EndSponsoringFutureReservesResultWire): EndSponsoringFutureReservesResult;
    /**
     * Type guard narrowing an unknown value to a concrete EndSponsoringFutureReservesResult variant.
     * Use this instead of `instanceof EndSponsoringFutureReservesResult`: the exported `EndSponsoringFutureReservesResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `EndSponsoringFutureReservesResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is EndSponsoringFutureReservesResult;
    abstract toXdrObject(): EndSponsoringFutureReservesResultWire;
}
export declare class EndSponsoringFutureReservesResultSuccess extends EndSponsoringFutureReservesResultBase {
    readonly type: "endSponsoringFutureReservesSuccess";
    get value(): null;
    toXdrObject(): Extract<EndSponsoringFutureReservesResultWire, {
        code: 0;
    }>;
}
export declare class EndSponsoringFutureReservesResultNotSponsored extends EndSponsoringFutureReservesResultBase {
    readonly type: "endSponsoringFutureReservesNotSponsored";
    get value(): null;
    toXdrObject(): Extract<EndSponsoringFutureReservesResultWire, {
        code: -1;
    }>;
}
export type EndSponsoringFutureReservesResult = EndSponsoringFutureReservesResultSuccess | EndSponsoringFutureReservesResultNotSponsored;
export declare const EndSponsoringFutureReservesResult: typeof EndSponsoringFutureReservesResultBase;
export {};
