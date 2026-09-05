import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimableBalanceId, type ClaimableBalanceIdWire } from "./claimable-balance-id.js";
export type CreateClaimableBalanceResultWire = {
    code: 0;
    balanceId: ClaimableBalanceIdWire;
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
export type CreateClaimableBalanceResultVariantName = "createClaimableBalanceSuccess" | "createClaimableBalanceMalformed" | "createClaimableBalanceLowReserve" | "createClaimableBalanceNoTrust" | "createClaimableBalanceNotAuthorized" | "createClaimableBalanceUnderfunded";
/**
 * ```xdr
 * union CreateClaimableBalanceResult switch (
 *     CreateClaimableBalanceResultCode code)
 * {
 * case CREATE_CLAIMABLE_BALANCE_SUCCESS:
 *     ClaimableBalanceID balanceID;
 * case CREATE_CLAIMABLE_BALANCE_MALFORMED:
 * case CREATE_CLAIMABLE_BALANCE_LOW_RESERVE:
 * case CREATE_CLAIMABLE_BALANCE_NO_TRUST:
 * case CREATE_CLAIMABLE_BALANCE_NOT_AUTHORIZED:
 * case CREATE_CLAIMABLE_BALANCE_UNDERFUNDED:
 *     void;
 * };
 * ```
 */
declare abstract class CreateClaimableBalanceResultBase extends XdrValue {
    abstract readonly type: CreateClaimableBalanceResultVariantName;
    constructor();
    static readonly schema: XdrType<CreateClaimableBalanceResultWire>;
    static createClaimableBalanceSuccess(balanceId: ClaimableBalanceId): CreateClaimableBalanceResultSuccess;
    static createClaimableBalanceMalformed(): CreateClaimableBalanceResultMalformed;
    static createClaimableBalanceLowReserve(): CreateClaimableBalanceResultLowReserve;
    static createClaimableBalanceNoTrust(): CreateClaimableBalanceResultNoTrust;
    static createClaimableBalanceNotAuthorized(): CreateClaimableBalanceResultNotAuthorized;
    static createClaimableBalanceUnderfunded(): CreateClaimableBalanceResultUnderfunded;
    static fromXdrObject(wire: CreateClaimableBalanceResultWire): CreateClaimableBalanceResult;
    /**
     * Type guard narrowing an unknown value to a concrete CreateClaimableBalanceResult variant.
     * Use this instead of `instanceof CreateClaimableBalanceResult`: the exported `CreateClaimableBalanceResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `CreateClaimableBalanceResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is CreateClaimableBalanceResult;
    abstract toXdrObject(): CreateClaimableBalanceResultWire;
}
export declare class CreateClaimableBalanceResultSuccess extends CreateClaimableBalanceResultBase {
    readonly type: "createClaimableBalanceSuccess";
    readonly balanceId: ClaimableBalanceId;
    constructor(balanceId: ClaimableBalanceId);
    get value(): ClaimableBalanceId;
    toXdrObject(): Extract<CreateClaimableBalanceResultWire, {
        code: 0;
    }>;
}
export declare class CreateClaimableBalanceResultMalformed extends CreateClaimableBalanceResultBase {
    readonly type: "createClaimableBalanceMalformed";
    get value(): null;
    toXdrObject(): Extract<CreateClaimableBalanceResultWire, {
        code: -1;
    }>;
}
export declare class CreateClaimableBalanceResultLowReserve extends CreateClaimableBalanceResultBase {
    readonly type: "createClaimableBalanceLowReserve";
    get value(): null;
    toXdrObject(): Extract<CreateClaimableBalanceResultWire, {
        code: -2;
    }>;
}
export declare class CreateClaimableBalanceResultNoTrust extends CreateClaimableBalanceResultBase {
    readonly type: "createClaimableBalanceNoTrust";
    get value(): null;
    toXdrObject(): Extract<CreateClaimableBalanceResultWire, {
        code: -3;
    }>;
}
export declare class CreateClaimableBalanceResultNotAuthorized extends CreateClaimableBalanceResultBase {
    readonly type: "createClaimableBalanceNotAuthorized";
    get value(): null;
    toXdrObject(): Extract<CreateClaimableBalanceResultWire, {
        code: -4;
    }>;
}
export declare class CreateClaimableBalanceResultUnderfunded extends CreateClaimableBalanceResultBase {
    readonly type: "createClaimableBalanceUnderfunded";
    get value(): null;
    toXdrObject(): Extract<CreateClaimableBalanceResultWire, {
        code: -5;
    }>;
}
export type CreateClaimableBalanceResult = CreateClaimableBalanceResultSuccess | CreateClaimableBalanceResultMalformed | CreateClaimableBalanceResultLowReserve | CreateClaimableBalanceResultNoTrust | CreateClaimableBalanceResultNotAuthorized | CreateClaimableBalanceResultUnderfunded;
export declare const CreateClaimableBalanceResult: typeof CreateClaimableBalanceResultBase;
export {};
