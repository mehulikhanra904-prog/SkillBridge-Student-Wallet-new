import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type ClawbackClaimableBalanceResultWire = {
    code: 0;
} | {
    code: -1;
} | {
    code: -2;
} | {
    code: -3;
};
export type ClawbackClaimableBalanceResultVariantName = "clawbackClaimableBalanceSuccess" | "clawbackClaimableBalanceDoesNotExist" | "clawbackClaimableBalanceNotIssuer" | "clawbackClaimableBalanceNotClawbackEnabled";
/**
 * ```xdr
 * union ClawbackClaimableBalanceResult switch (
 *     ClawbackClaimableBalanceResultCode code)
 * {
 * case CLAWBACK_CLAIMABLE_BALANCE_SUCCESS:
 *     void;
 * case CLAWBACK_CLAIMABLE_BALANCE_DOES_NOT_EXIST:
 * case CLAWBACK_CLAIMABLE_BALANCE_NOT_ISSUER:
 * case CLAWBACK_CLAIMABLE_BALANCE_NOT_CLAWBACK_ENABLED:
 *     void;
 * };
 * ```
 */
declare abstract class ClawbackClaimableBalanceResultBase extends XdrValue {
    abstract readonly type: ClawbackClaimableBalanceResultVariantName;
    constructor();
    static readonly schema: XdrType<ClawbackClaimableBalanceResultWire>;
    static clawbackClaimableBalanceSuccess(): ClawbackClaimableBalanceResultSuccess;
    static clawbackClaimableBalanceDoesNotExist(): ClawbackClaimableBalanceResultDoesNotExist;
    static clawbackClaimableBalanceNotIssuer(): ClawbackClaimableBalanceResultNotIssuer;
    static clawbackClaimableBalanceNotClawbackEnabled(): ClawbackClaimableBalanceResultNotClawbackEnabled;
    static fromXdrObject(wire: ClawbackClaimableBalanceResultWire): ClawbackClaimableBalanceResult;
    /**
     * Type guard narrowing an unknown value to a concrete ClawbackClaimableBalanceResult variant.
     * Use this instead of `instanceof ClawbackClaimableBalanceResult`: the exported `ClawbackClaimableBalanceResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ClawbackClaimableBalanceResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ClawbackClaimableBalanceResult;
    abstract toXdrObject(): ClawbackClaimableBalanceResultWire;
}
export declare class ClawbackClaimableBalanceResultSuccess extends ClawbackClaimableBalanceResultBase {
    readonly type: "clawbackClaimableBalanceSuccess";
    get value(): null;
    toXdrObject(): Extract<ClawbackClaimableBalanceResultWire, {
        code: 0;
    }>;
}
export declare class ClawbackClaimableBalanceResultDoesNotExist extends ClawbackClaimableBalanceResultBase {
    readonly type: "clawbackClaimableBalanceDoesNotExist";
    get value(): null;
    toXdrObject(): Extract<ClawbackClaimableBalanceResultWire, {
        code: -1;
    }>;
}
export declare class ClawbackClaimableBalanceResultNotIssuer extends ClawbackClaimableBalanceResultBase {
    readonly type: "clawbackClaimableBalanceNotIssuer";
    get value(): null;
    toXdrObject(): Extract<ClawbackClaimableBalanceResultWire, {
        code: -2;
    }>;
}
export declare class ClawbackClaimableBalanceResultNotClawbackEnabled extends ClawbackClaimableBalanceResultBase {
    readonly type: "clawbackClaimableBalanceNotClawbackEnabled";
    get value(): null;
    toXdrObject(): Extract<ClawbackClaimableBalanceResultWire, {
        code: -3;
    }>;
}
export type ClawbackClaimableBalanceResult = ClawbackClaimableBalanceResultSuccess | ClawbackClaimableBalanceResultDoesNotExist | ClawbackClaimableBalanceResultNotIssuer | ClawbackClaimableBalanceResultNotClawbackEnabled;
export declare const ClawbackClaimableBalanceResult: typeof ClawbackClaimableBalanceResultBase;
export {};
