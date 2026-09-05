import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { ClaimPredicate, type ClaimPredicateWire } from "./claim-predicate.js";
export interface ClaimantV0Wire {
    destination: PublicKeyWire;
    predicate: ClaimPredicateWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         AccountID destination;    // The account that can use this condition
 *         ClaimPredicate predicate; // Claimable if predicate is true
 *     }
 * ```
 */
export declare class ClaimantV0 extends XdrValue {
    readonly destination: PublicKey;
    readonly predicate: ClaimPredicate;
    static readonly schema: XdrType<ClaimantV0Wire>;
    constructor(input: {
        destination: PublicKey;
        predicate: ClaimPredicate;
    });
    toXdrObject(): ClaimantV0Wire;
    static fromXdrObject(wire: ClaimantV0Wire): ClaimantV0;
}
