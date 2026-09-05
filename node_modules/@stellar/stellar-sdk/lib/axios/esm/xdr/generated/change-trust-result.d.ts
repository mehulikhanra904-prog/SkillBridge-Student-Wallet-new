import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type ChangeTrustResultWire = {
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
};
export type ChangeTrustResultVariantName = "changeTrustSuccess" | "changeTrustMalformed" | "changeTrustNoIssuer" | "changeTrustInvalidLimit" | "changeTrustLowReserve" | "changeTrustSelfNotAllowed" | "changeTrustTrustLineMissing" | "changeTrustCannotDelete" | "changeTrustNotAuthMaintainLiabilities";
/**
 * ```xdr
 * union ChangeTrustResult switch (ChangeTrustResultCode code)
 * {
 * case CHANGE_TRUST_SUCCESS:
 *     void;
 * case CHANGE_TRUST_MALFORMED:
 * case CHANGE_TRUST_NO_ISSUER:
 * case CHANGE_TRUST_INVALID_LIMIT:
 * case CHANGE_TRUST_LOW_RESERVE:
 * case CHANGE_TRUST_SELF_NOT_ALLOWED:
 * case CHANGE_TRUST_TRUST_LINE_MISSING:
 * case CHANGE_TRUST_CANNOT_DELETE:
 * case CHANGE_TRUST_NOT_AUTH_MAINTAIN_LIABILITIES:
 *     void;
 * };
 * ```
 */
declare abstract class ChangeTrustResultBase extends XdrValue {
    abstract readonly type: ChangeTrustResultVariantName;
    constructor();
    static readonly schema: XdrType<ChangeTrustResultWire>;
    static changeTrustSuccess(): ChangeTrustResultSuccess;
    static changeTrustMalformed(): ChangeTrustResultMalformed;
    static changeTrustNoIssuer(): ChangeTrustResultNoIssuer;
    static changeTrustInvalidLimit(): ChangeTrustResultInvalidLimit;
    static changeTrustLowReserve(): ChangeTrustResultLowReserve;
    static changeTrustSelfNotAllowed(): ChangeTrustResultSelfNotAllowed;
    static changeTrustTrustLineMissing(): ChangeTrustResultTrustLineMissing;
    static changeTrustCannotDelete(): ChangeTrustResultCannotDelete;
    static changeTrustNotAuthMaintainLiabilities(): ChangeTrustResultNotAuthMaintainLiabilities;
    static fromXdrObject(wire: ChangeTrustResultWire): ChangeTrustResult;
    /**
     * Type guard narrowing an unknown value to a concrete ChangeTrustResult variant.
     * Use this instead of `instanceof ChangeTrustResult`: the exported `ChangeTrustResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ChangeTrustResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ChangeTrustResult;
    abstract toXdrObject(): ChangeTrustResultWire;
}
export declare class ChangeTrustResultSuccess extends ChangeTrustResultBase {
    readonly type: "changeTrustSuccess";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustResultWire, {
        code: 0;
    }>;
}
export declare class ChangeTrustResultMalformed extends ChangeTrustResultBase {
    readonly type: "changeTrustMalformed";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustResultWire, {
        code: -1;
    }>;
}
export declare class ChangeTrustResultNoIssuer extends ChangeTrustResultBase {
    readonly type: "changeTrustNoIssuer";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustResultWire, {
        code: -2;
    }>;
}
export declare class ChangeTrustResultInvalidLimit extends ChangeTrustResultBase {
    readonly type: "changeTrustInvalidLimit";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustResultWire, {
        code: -3;
    }>;
}
export declare class ChangeTrustResultLowReserve extends ChangeTrustResultBase {
    readonly type: "changeTrustLowReserve";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustResultWire, {
        code: -4;
    }>;
}
export declare class ChangeTrustResultSelfNotAllowed extends ChangeTrustResultBase {
    readonly type: "changeTrustSelfNotAllowed";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustResultWire, {
        code: -5;
    }>;
}
export declare class ChangeTrustResultTrustLineMissing extends ChangeTrustResultBase {
    readonly type: "changeTrustTrustLineMissing";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustResultWire, {
        code: -6;
    }>;
}
export declare class ChangeTrustResultCannotDelete extends ChangeTrustResultBase {
    readonly type: "changeTrustCannotDelete";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustResultWire, {
        code: -7;
    }>;
}
export declare class ChangeTrustResultNotAuthMaintainLiabilities extends ChangeTrustResultBase {
    readonly type: "changeTrustNotAuthMaintainLiabilities";
    get value(): null;
    toXdrObject(): Extract<ChangeTrustResultWire, {
        code: -8;
    }>;
}
export type ChangeTrustResult = ChangeTrustResultSuccess | ChangeTrustResultMalformed | ChangeTrustResultNoIssuer | ChangeTrustResultInvalidLimit | ChangeTrustResultLowReserve | ChangeTrustResultSelfNotAllowed | ChangeTrustResultTrustLineMissing | ChangeTrustResultCannotDelete | ChangeTrustResultNotAuthMaintainLiabilities;
export declare const ChangeTrustResult: typeof ChangeTrustResultBase;
export {};
