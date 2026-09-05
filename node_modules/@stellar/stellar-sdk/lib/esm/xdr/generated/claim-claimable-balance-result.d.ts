import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type ClaimClaimableBalanceResultWire = {
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
export type ClaimClaimableBalanceResultVariantName = "claimClaimableBalanceSuccess" | "claimClaimableBalanceDoesNotExist" | "claimClaimableBalanceCannotClaim" | "claimClaimableBalanceLineFull" | "claimClaimableBalanceNoTrust" | "claimClaimableBalanceNotAuthorized" | "claimClaimableBalanceTrustlineFrozen";
/**
 * ```xdr
 * union ClaimClaimableBalanceResult switch (ClaimClaimableBalanceResultCode code)
 * {
 * case CLAIM_CLAIMABLE_BALANCE_SUCCESS:
 *     void;
 * case CLAIM_CLAIMABLE_BALANCE_DOES_NOT_EXIST:
 * case CLAIM_CLAIMABLE_BALANCE_CANNOT_CLAIM:
 * case CLAIM_CLAIMABLE_BALANCE_LINE_FULL:
 * case CLAIM_CLAIMABLE_BALANCE_NO_TRUST:
 * case CLAIM_CLAIMABLE_BALANCE_NOT_AUTHORIZED:
 * case CLAIM_CLAIMABLE_BALANCE_TRUSTLINE_FROZEN:
 *     void;
 * };
 * ```
 */
declare abstract class ClaimClaimableBalanceResultBase extends XdrValue {
    abstract readonly type: ClaimClaimableBalanceResultVariantName;
    constructor();
    static readonly schema: XdrType<ClaimClaimableBalanceResultWire>;
    static claimClaimableBalanceSuccess(): ClaimClaimableBalanceResultSuccess;
    static claimClaimableBalanceDoesNotExist(): ClaimClaimableBalanceResultDoesNotExist;
    static claimClaimableBalanceCannotClaim(): ClaimClaimableBalanceResultCannotClaim;
    static claimClaimableBalanceLineFull(): ClaimClaimableBalanceResultLineFull;
    static claimClaimableBalanceNoTrust(): ClaimClaimableBalanceResultNoTrust;
    static claimClaimableBalanceNotAuthorized(): ClaimClaimableBalanceResultNotAuthorized;
    static claimClaimableBalanceTrustlineFrozen(): ClaimClaimableBalanceResultTrustlineFrozen;
    static fromXdrObject(wire: ClaimClaimableBalanceResultWire): ClaimClaimableBalanceResult;
    /**
     * Type guard narrowing an unknown value to a concrete ClaimClaimableBalanceResult variant.
     * Use this instead of `instanceof ClaimClaimableBalanceResult`: the exported `ClaimClaimableBalanceResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ClaimClaimableBalanceResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ClaimClaimableBalanceResult;
    abstract toXdrObject(): ClaimClaimableBalanceResultWire;
}
export declare class ClaimClaimableBalanceResultSuccess extends ClaimClaimableBalanceResultBase {
    readonly type: "claimClaimableBalanceSuccess";
    get value(): null;
    toXdrObject(): Extract<ClaimClaimableBalanceResultWire, {
        code: 0;
    }>;
}
export declare class ClaimClaimableBalanceResultDoesNotExist extends ClaimClaimableBalanceResultBase {
    readonly type: "claimClaimableBalanceDoesNotExist";
    get value(): null;
    toXdrObject(): Extract<ClaimClaimableBalanceResultWire, {
        code: -1;
    }>;
}
export declare class ClaimClaimableBalanceResultCannotClaim extends ClaimClaimableBalanceResultBase {
    readonly type: "claimClaimableBalanceCannotClaim";
    get value(): null;
    toXdrObject(): Extract<ClaimClaimableBalanceResultWire, {
        code: -2;
    }>;
}
export declare class ClaimClaimableBalanceResultLineFull extends ClaimClaimableBalanceResultBase {
    readonly type: "claimClaimableBalanceLineFull";
    get value(): null;
    toXdrObject(): Extract<ClaimClaimableBalanceResultWire, {
        code: -3;
    }>;
}
export declare class ClaimClaimableBalanceResultNoTrust extends ClaimClaimableBalanceResultBase {
    readonly type: "claimClaimableBalanceNoTrust";
    get value(): null;
    toXdrObject(): Extract<ClaimClaimableBalanceResultWire, {
        code: -4;
    }>;
}
export declare class ClaimClaimableBalanceResultNotAuthorized extends ClaimClaimableBalanceResultBase {
    readonly type: "claimClaimableBalanceNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<ClaimClaimableBalanceResultWire, {
        code: -5;
    }>;
}
export declare class ClaimClaimableBalanceResultTrustlineFrozen extends ClaimClaimableBalanceResultBase {
    readonly type: "claimClaimableBalanceTrustlineFrozen";
    get value(): null;
    toXdrObject(): Extract<ClaimClaimableBalanceResultWire, {
        code: -6;
    }>;
}
export type ClaimClaimableBalanceResult = ClaimClaimableBalanceResultSuccess | ClaimClaimableBalanceResultDoesNotExist | ClaimClaimableBalanceResultCannotClaim | ClaimClaimableBalanceResultLineFull | ClaimClaimableBalanceResultNoTrust | ClaimClaimableBalanceResultNotAuthorized | ClaimClaimableBalanceResultTrustlineFrozen;
export declare const ClaimClaimableBalanceResult: typeof ClaimClaimableBalanceResultBase;
export {};
