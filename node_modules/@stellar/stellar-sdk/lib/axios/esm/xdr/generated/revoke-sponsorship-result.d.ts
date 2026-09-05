import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type RevokeSponsorshipResultWire = {
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
};
export type RevokeSponsorshipResultVariantName = "revokeSponsorshipSuccess" | "revokeSponsorshipDoesNotExist" | "revokeSponsorshipNotSponsor" | "revokeSponsorshipLowReserve" | "revokeSponsorshipOnlyTransferable" | "revokeSponsorshipMalformed";
/**
 * ```xdr
 * union RevokeSponsorshipResult switch (RevokeSponsorshipResultCode code)
 * {
 * case REVOKE_SPONSORSHIP_SUCCESS:
 *     void;
 * case REVOKE_SPONSORSHIP_DOES_NOT_EXIST:
 * case REVOKE_SPONSORSHIP_NOT_SPONSOR:
 * case REVOKE_SPONSORSHIP_LOW_RESERVE:
 * case REVOKE_SPONSORSHIP_ONLY_TRANSFERABLE:
 * case REVOKE_SPONSORSHIP_MALFORMED:
 *     void;
 * };
 * ```
 */
declare abstract class RevokeSponsorshipResultBase extends XdrValue {
    abstract readonly type: RevokeSponsorshipResultVariantName;
    constructor();
    static readonly schema: XdrType<RevokeSponsorshipResultWire>;
    static revokeSponsorshipSuccess(): RevokeSponsorshipResultSuccess;
    static revokeSponsorshipDoesNotExist(): RevokeSponsorshipResultDoesNotExist;
    static revokeSponsorshipNotSponsor(): RevokeSponsorshipResultNotSponsor;
    static revokeSponsorshipLowReserve(): RevokeSponsorshipResultLowReserve;
    static revokeSponsorshipOnlyTransferable(): RevokeSponsorshipResultOnlyTransferable;
    static revokeSponsorshipMalformed(): RevokeSponsorshipResultMalformed;
    static fromXdrObject(wire: RevokeSponsorshipResultWire): RevokeSponsorshipResult;
    /**
     * Type guard narrowing an unknown value to a concrete RevokeSponsorshipResult variant.
     * Use this instead of `instanceof RevokeSponsorshipResult`: the exported `RevokeSponsorshipResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `RevokeSponsorshipResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is RevokeSponsorshipResult;
    abstract toXdrObject(): RevokeSponsorshipResultWire;
}
export declare class RevokeSponsorshipResultSuccess extends RevokeSponsorshipResultBase {
    readonly type: "revokeSponsorshipSuccess";
    get value(): null;
    toXdrObject(): Extract<RevokeSponsorshipResultWire, {
        code: 0;
    }>;
}
export declare class RevokeSponsorshipResultDoesNotExist extends RevokeSponsorshipResultBase {
    readonly type: "revokeSponsorshipDoesNotExist";
    get value(): null;
    toXdrObject(): Extract<RevokeSponsorshipResultWire, {
        code: -1;
    }>;
}
export declare class RevokeSponsorshipResultNotSponsor extends RevokeSponsorshipResultBase {
    readonly type: "revokeSponsorshipNotSponsor";
    get value(): null;
    toXdrObject(): Extract<RevokeSponsorshipResultWire, {
        code: -2;
    }>;
}
export declare class RevokeSponsorshipResultLowReserve extends RevokeSponsorshipResultBase {
    readonly type: "revokeSponsorshipLowReserve";
    get value(): null;
    toXdrObject(): Extract<RevokeSponsorshipResultWire, {
        code: -3;
    }>;
}
export declare class RevokeSponsorshipResultOnlyTransferable extends RevokeSponsorshipResultBase {
    readonly type: "revokeSponsorshipOnlyTransferable";
    get value(): null;
    toXdrObject(): Extract<RevokeSponsorshipResultWire, {
        code: -4;
    }>;
}
export declare class RevokeSponsorshipResultMalformed extends RevokeSponsorshipResultBase {
    readonly type: "revokeSponsorshipMalformed";
    get value(): null;
    toXdrObject(): Extract<RevokeSponsorshipResultWire, {
        code: -5;
    }>;
}
export type RevokeSponsorshipResult = RevokeSponsorshipResultSuccess | RevokeSponsorshipResultDoesNotExist | RevokeSponsorshipResultNotSponsor | RevokeSponsorshipResultLowReserve | RevokeSponsorshipResultOnlyTransferable | RevokeSponsorshipResultMalformed;
export declare const RevokeSponsorshipResult: typeof RevokeSponsorshipResultBase;
export {};
