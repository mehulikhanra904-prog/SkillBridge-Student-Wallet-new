import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type AccountMergeResultWire = {
    code: 0;
    sourceAccountBalance: bigint;
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
};
export type AccountMergeResultVariantName = "accountMergeSuccess" | "accountMergeMalformed" | "accountMergeNoAccount" | "accountMergeImmutableSet" | "accountMergeHasSubEntries" | "accountMergeSeqnumTooFar" | "accountMergeDestFull" | "accountMergeIsSponsor";
/**
 * ```xdr
 * union AccountMergeResult switch (AccountMergeResultCode code)
 * {
 * case ACCOUNT_MERGE_SUCCESS:
 *     int64 sourceAccountBalance; // how much got transferred from source account
 * case ACCOUNT_MERGE_MALFORMED:
 * case ACCOUNT_MERGE_NO_ACCOUNT:
 * case ACCOUNT_MERGE_IMMUTABLE_SET:
 * case ACCOUNT_MERGE_HAS_SUB_ENTRIES:
 * case ACCOUNT_MERGE_SEQNUM_TOO_FAR:
 * case ACCOUNT_MERGE_DEST_FULL:
 * case ACCOUNT_MERGE_IS_SPONSOR:
 *     void;
 * };
 * ```
 */
declare abstract class AccountMergeResultBase extends XdrValue {
    abstract readonly type: AccountMergeResultVariantName;
    constructor();
    static readonly schema: XdrType<AccountMergeResultWire>;
    static accountMergeSuccess(sourceAccountBalance: bigint): AccountMergeResultSuccess;
    static accountMergeMalformed(): AccountMergeResultMalformed;
    static accountMergeNoAccount(): AccountMergeResultNoAccount;
    static accountMergeImmutableSet(): AccountMergeResultImmutableSet;
    static accountMergeHasSubEntries(): AccountMergeResultHasSubEntries;
    static accountMergeSeqnumTooFar(): AccountMergeResultSeqnumTooFar;
    static accountMergeDestFull(): AccountMergeResultDestFull;
    static accountMergeIsSponsor(): AccountMergeResultIsSponsor;
    static fromXdrObject(wire: AccountMergeResultWire): AccountMergeResult;
    /**
     * Type guard narrowing an unknown value to a concrete AccountMergeResult variant.
     * Use this instead of `instanceof AccountMergeResult`: the exported `AccountMergeResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `AccountMergeResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is AccountMergeResult;
    abstract toXdrObject(): AccountMergeResultWire;
}
export declare class AccountMergeResultSuccess extends AccountMergeResultBase {
    readonly type: "accountMergeSuccess";
    readonly sourceAccountBalance: bigint;
    constructor(sourceAccountBalance: bigint);
    get value(): bigint;
    toXdrObject(): Extract<AccountMergeResultWire, {
        code: 0;
    }>;
}
export declare class AccountMergeResultMalformed extends AccountMergeResultBase {
    readonly type: "accountMergeMalformed";
    get value(): null;
    toXdrObject(): Extract<AccountMergeResultWire, {
        code: -1;
    }>;
}
export declare class AccountMergeResultNoAccount extends AccountMergeResultBase {
    readonly type: "accountMergeNoAccount";
    get value(): null;
    toXdrObject(): Extract<AccountMergeResultWire, {
        code: -2;
    }>;
}
export declare class AccountMergeResultImmutableSet extends AccountMergeResultBase {
    readonly type: "accountMergeImmutableSet";
    get value(): null;
    toXdrObject(): Extract<AccountMergeResultWire, {
        code: -3;
    }>;
}
export declare class AccountMergeResultHasSubEntries extends AccountMergeResultBase {
    readonly type: "accountMergeHasSubEntries";
    get value(): null;
    toXdrObject(): Extract<AccountMergeResultWire, {
        code: -4;
    }>;
}
export declare class AccountMergeResultSeqnumTooFar extends AccountMergeResultBase {
    readonly type: "accountMergeSeqnumTooFar";
    get value(): null;
    toXdrObject(): Extract<AccountMergeResultWire, {
        code: -5;
    }>;
}
export declare class AccountMergeResultDestFull extends AccountMergeResultBase {
    readonly type: "accountMergeDestFull";
    get value(): null;
    toXdrObject(): Extract<AccountMergeResultWire, {
        code: -6;
    }>;
}
export declare class AccountMergeResultIsSponsor extends AccountMergeResultBase {
    readonly type: "accountMergeIsSponsor";
    get value(): null;
    toXdrObject(): Extract<AccountMergeResultWire, {
        code: -7;
    }>;
}
export type AccountMergeResult = AccountMergeResultSuccess | AccountMergeResultMalformed | AccountMergeResultNoAccount | AccountMergeResultImmutableSet | AccountMergeResultHasSubEntries | AccountMergeResultSeqnumTooFar | AccountMergeResultDestFull | AccountMergeResultIsSponsor;
export declare const AccountMergeResult: typeof AccountMergeResultBase;
export {};
