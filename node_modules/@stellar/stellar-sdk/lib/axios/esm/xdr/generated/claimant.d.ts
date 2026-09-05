import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimantV0, type ClaimantV0Wire } from "./claimant-v0.js";
export type ClaimantWire = {
    type: 0;
    v0: ClaimantV0Wire;
};
export type ClaimantVariantName = "claimantTypeV0";
/**
 * ```xdr
 * union Claimant switch (ClaimantType type)
 * {
 * case CLAIMANT_TYPE_V0:
 *     struct
 *     {
 *         AccountID destination;    // The account that can use this condition
 *         ClaimPredicate predicate; // Claimable if predicate is true
 *     } v0;
 * };
 * ```
 */
declare abstract class ClaimantBase extends XdrValue {
    abstract readonly type: ClaimantVariantName;
    constructor();
    static readonly schema: XdrType<ClaimantWire>;
    static claimantTypeV0(v0: ClaimantV0): ClaimantV0Arm;
    static fromXdrObject(wire: ClaimantWire): Claimant;
    /**
     * Type guard narrowing an unknown value to a concrete Claimant variant.
     * Use this instead of `instanceof Claimant`: the exported `Claimant` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `Claimant.is(x)` narrows to the union.
     */
    static is(value: unknown): value is Claimant;
    abstract toXdrObject(): ClaimantWire;
}
export declare class ClaimantV0Arm extends ClaimantBase {
    readonly type: "claimantTypeV0";
    readonly v0: ClaimantV0;
    constructor(v0: ClaimantV0);
    get value(): ClaimantV0;
    toXdrObject(): Extract<ClaimantWire, {
        type: 0;
    }>;
}
export type Claimant = ClaimantV0Arm;
export declare const Claimant: typeof ClaimantBase;
export {};
