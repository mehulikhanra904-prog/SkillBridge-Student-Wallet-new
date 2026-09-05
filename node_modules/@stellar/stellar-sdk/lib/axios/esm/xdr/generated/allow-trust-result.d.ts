import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type AllowTrustResultWire = {
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
};
export type AllowTrustResultVariantName = "allowTrustSuccess" | "allowTrustMalformed" | "allowTrustNoTrustLine" | "allowTrustTrustNotRequired" | "allowTrustCantRevoke" | "allowTrustSelfNotAllowed" | "allowTrustLowReserve";
/**
 * ```xdr
 * union AllowTrustResult switch (AllowTrustResultCode code)
 * {
 * case ALLOW_TRUST_SUCCESS:
 *     void;
 * case ALLOW_TRUST_MALFORMED:
 * case ALLOW_TRUST_NO_TRUST_LINE:
 * case ALLOW_TRUST_TRUST_NOT_REQUIRED:
 * case ALLOW_TRUST_CANT_REVOKE:
 * case ALLOW_TRUST_SELF_NOT_ALLOWED:
 * case ALLOW_TRUST_LOW_RESERVE:
 *     void;
 * };
 * ```
 */
declare abstract class AllowTrustResultBase extends XdrValue {
    abstract readonly type: AllowTrustResultVariantName;
    constructor();
    static readonly schema: XdrType<AllowTrustResultWire>;
    static allowTrustSuccess(): AllowTrustResultSuccess;
    static allowTrustMalformed(): AllowTrustResultMalformed;
    static allowTrustNoTrustLine(): AllowTrustResultNoTrustLine;
    static allowTrustTrustNotRequired(): AllowTrustResultTrustNotRequired;
    static allowTrustCantRevoke(): AllowTrustResultCantRevoke;
    static allowTrustSelfNotAllowed(): AllowTrustResultSelfNotAllowed;
    static allowTrustLowReserve(): AllowTrustResultLowReserve;
    static fromXdrObject(wire: AllowTrustResultWire): AllowTrustResult;
    /**
     * Type guard narrowing an unknown value to a concrete AllowTrustResult variant.
     * Use this instead of `instanceof AllowTrustResult`: the exported `AllowTrustResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `AllowTrustResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is AllowTrustResult;
    abstract toXdrObject(): AllowTrustResultWire;
}
export declare class AllowTrustResultSuccess extends AllowTrustResultBase {
    readonly type: "allowTrustSuccess";
    get value(): null;
    toXdrObject(): Extract<AllowTrustResultWire, {
        code: 0;
    }>;
}
export declare class AllowTrustResultMalformed extends AllowTrustResultBase {
    readonly type: "allowTrustMalformed";
    get value(): null;
    toXdrObject(): Extract<AllowTrustResultWire, {
        code: -1;
    }>;
}
export declare class AllowTrustResultNoTrustLine extends AllowTrustResultBase {
    readonly type: "allowTrustNoTrustLine";
    get value(): null;
    toXdrObject(): Extract<AllowTrustResultWire, {
        code: -2;
    }>;
}
export declare class AllowTrustResultTrustNotRequired extends AllowTrustResultBase {
    readonly type: "allowTrustTrustNotRequired";
    get value(): null;
    toXdrObject(): Extract<AllowTrustResultWire, {
        code: -3;
    }>;
}
export declare class AllowTrustResultCantRevoke extends AllowTrustResultBase {
    readonly type: "allowTrustCantRevoke";
    get value(): null;
    toXdrObject(): Extract<AllowTrustResultWire, {
        code: -4;
    }>;
}
export declare class AllowTrustResultSelfNotAllowed extends AllowTrustResultBase {
    readonly type: "allowTrustSelfNotAllowed";
    get value(): null;
    toXdrObject(): Extract<AllowTrustResultWire, {
        code: -5;
    }>;
}
export declare class AllowTrustResultLowReserve extends AllowTrustResultBase {
    readonly type: "allowTrustLowReserve";
    get value(): null;
    toXdrObject(): Extract<AllowTrustResultWire, {
        code: -6;
    }>;
}
export type AllowTrustResult = AllowTrustResultSuccess | AllowTrustResultMalformed | AllowTrustResultNoTrustLine | AllowTrustResultTrustNotRequired | AllowTrustResultCantRevoke | AllowTrustResultSelfNotAllowed | AllowTrustResultLowReserve;
export declare const AllowTrustResult: typeof AllowTrustResultBase;
export {};
