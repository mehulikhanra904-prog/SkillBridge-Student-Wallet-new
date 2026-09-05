import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type ClaimPredicateWire = {
    type: 0;
} | {
    type: 1;
    andPredicates: ClaimPredicateWire[];
} | {
    type: 2;
    orPredicates: ClaimPredicateWire[];
} | {
    type: 3;
    notPredicate: ClaimPredicateWire | null;
} | {
    type: 4;
    absBefore: bigint;
} | {
    type: 5;
    relBefore: bigint;
};
export type ClaimPredicateVariantName = "claimPredicateUnconditional" | "claimPredicateAnd" | "claimPredicateOr" | "claimPredicateNot" | "claimPredicateBeforeAbsoluteTime" | "claimPredicateBeforeRelativeTime";
/**
 * ```xdr
 * union ClaimPredicate switch (ClaimPredicateType type)
 * {
 * case CLAIM_PREDICATE_UNCONDITIONAL:
 *     void;
 * case CLAIM_PREDICATE_AND:
 *     ClaimPredicate andPredicates<2>;
 * case CLAIM_PREDICATE_OR:
 *     ClaimPredicate orPredicates<2>;
 * case CLAIM_PREDICATE_NOT:
 *     ClaimPredicate* notPredicate;
 * case CLAIM_PREDICATE_BEFORE_ABSOLUTE_TIME:
 *     int64 absBefore; // Predicate will be true if closeTime < absBefore
 * case CLAIM_PREDICATE_BEFORE_RELATIVE_TIME:
 *     int64 relBefore; // Seconds since closeTime of the ledger in which the
 *                      // ClaimableBalanceEntry was created
 * };
 * ```
 */
declare abstract class ClaimPredicateBase extends XdrValue {
    abstract readonly type: ClaimPredicateVariantName;
    constructor();
    static readonly schema: XdrType<ClaimPredicateWire>;
    static claimPredicateUnconditional(): ClaimPredicateUnconditional;
    static claimPredicateAnd(andPredicates: ClaimPredicate[]): ClaimPredicateAnd;
    static claimPredicateOr(orPredicates: ClaimPredicate[]): ClaimPredicateOr;
    static claimPredicateNot(notPredicate: ClaimPredicate | null): ClaimPredicateNot;
    static claimPredicateBeforeAbsoluteTime(absBefore: bigint): ClaimPredicateBeforeAbsoluteTime;
    static claimPredicateBeforeRelativeTime(relBefore: bigint): ClaimPredicateBeforeRelativeTime;
    static fromXdrObject(wire: ClaimPredicateWire): ClaimPredicate;
    /**
     * Type guard narrowing an unknown value to a concrete ClaimPredicate variant.
     * Use this instead of `instanceof ClaimPredicate`: the exported `ClaimPredicate` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ClaimPredicate.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ClaimPredicate;
    abstract toXdrObject(): ClaimPredicateWire;
}
export declare class ClaimPredicateUnconditional extends ClaimPredicateBase {
    readonly type: "claimPredicateUnconditional";
    get value(): null;
    toXdrObject(): Extract<ClaimPredicateWire, {
        type: 0;
    }>;
}
export declare class ClaimPredicateAnd extends ClaimPredicateBase {
    readonly type: "claimPredicateAnd";
    readonly andPredicates: ClaimPredicate[];
    constructor(andPredicates: ClaimPredicate[]);
    get value(): ClaimPredicate[];
    toXdrObject(): Extract<ClaimPredicateWire, {
        type: 1;
    }>;
}
export declare class ClaimPredicateOr extends ClaimPredicateBase {
    readonly type: "claimPredicateOr";
    readonly orPredicates: ClaimPredicate[];
    constructor(orPredicates: ClaimPredicate[]);
    get value(): ClaimPredicate[];
    toXdrObject(): Extract<ClaimPredicateWire, {
        type: 2;
    }>;
}
export declare class ClaimPredicateNot extends ClaimPredicateBase {
    readonly type: "claimPredicateNot";
    readonly notPredicate: ClaimPredicate | null;
    constructor(notPredicate: ClaimPredicate | null);
    get value(): ClaimPredicate | null;
    toXdrObject(): Extract<ClaimPredicateWire, {
        type: 3;
    }>;
}
export declare class ClaimPredicateBeforeAbsoluteTime extends ClaimPredicateBase {
    readonly type: "claimPredicateBeforeAbsoluteTime";
    readonly absBefore: bigint;
    constructor(absBefore: bigint);
    get value(): bigint;
    toXdrObject(): Extract<ClaimPredicateWire, {
        type: 4;
    }>;
}
export declare class ClaimPredicateBeforeRelativeTime extends ClaimPredicateBase {
    readonly type: "claimPredicateBeforeRelativeTime";
    readonly relBefore: bigint;
    constructor(relBefore: bigint);
    get value(): bigint;
    toXdrObject(): Extract<ClaimPredicateWire, {
        type: 5;
    }>;
}
export type ClaimPredicate = ClaimPredicateUnconditional | ClaimPredicateAnd | ClaimPredicateOr | ClaimPredicateNot | ClaimPredicateBeforeAbsoluteTime | ClaimPredicateBeforeRelativeTime;
export declare const ClaimPredicate: typeof ClaimPredicateBase;
export {};
