import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type ClawbackResultWire = {
    code: 0;
} | {
    code: -1;
} | {
    code: -2;
} | {
    code: -3;
} | {
    code: -4;
};
export type ClawbackResultVariantName = "clawbackSuccess" | "clawbackMalformed" | "clawbackNotClawbackEnabled" | "clawbackNoTrust" | "clawbackUnderfunded";
/**
 * ```xdr
 * union ClawbackResult switch (ClawbackResultCode code)
 * {
 * case CLAWBACK_SUCCESS:
 *     void;
 * case CLAWBACK_MALFORMED:
 * case CLAWBACK_NOT_CLAWBACK_ENABLED:
 * case CLAWBACK_NO_TRUST:
 * case CLAWBACK_UNDERFUNDED:
 *     void;
 * };
 * ```
 */
declare abstract class ClawbackResultBase extends XdrValue {
    abstract readonly type: ClawbackResultVariantName;
    constructor();
    static readonly schema: XdrType<ClawbackResultWire>;
    static clawbackSuccess(): ClawbackResultSuccess;
    static clawbackMalformed(): ClawbackResultMalformed;
    static clawbackNotClawbackEnabled(): ClawbackResultNotClawbackEnabled;
    static clawbackNoTrust(): ClawbackResultNoTrust;
    static clawbackUnderfunded(): ClawbackResultUnderfunded;
    static fromXdrObject(wire: ClawbackResultWire): ClawbackResult;
    /**
     * Type guard narrowing an unknown value to a concrete ClawbackResult variant.
     * Use this instead of `instanceof ClawbackResult`: the exported `ClawbackResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ClawbackResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ClawbackResult;
    abstract toXdrObject(): ClawbackResultWire;
}
export declare class ClawbackResultSuccess extends ClawbackResultBase {
    readonly type: "clawbackSuccess";
    get value(): null;
    toXdrObject(): Extract<ClawbackResultWire, {
        code: 0;
    }>;
}
export declare class ClawbackResultMalformed extends ClawbackResultBase {
    readonly type: "clawbackMalformed";
    get value(): null;
    toXdrObject(): Extract<ClawbackResultWire, {
        code: -1;
    }>;
}
export declare class ClawbackResultNotClawbackEnabled extends ClawbackResultBase {
    readonly type: "clawbackNotClawbackEnabled";
    get value(): null;
    toXdrObject(): Extract<ClawbackResultWire, {
        code: -2;
    }>;
}
export declare class ClawbackResultNoTrust extends ClawbackResultBase {
    readonly type: "clawbackNoTrust";
    get value(): null;
    toXdrObject(): Extract<ClawbackResultWire, {
        code: -3;
    }>;
}
export declare class ClawbackResultUnderfunded extends ClawbackResultBase {
    readonly type: "clawbackUnderfunded";
    get value(): null;
    toXdrObject(): Extract<ClawbackResultWire, {
        code: -4;
    }>;
}
export type ClawbackResult = ClawbackResultSuccess | ClawbackResultMalformed | ClawbackResultNotClawbackEnabled | ClawbackResultNoTrust | ClawbackResultUnderfunded;
export declare const ClawbackResult: typeof ClawbackResultBase;
export {};
