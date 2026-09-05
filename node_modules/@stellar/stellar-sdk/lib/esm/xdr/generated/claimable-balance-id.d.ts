import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
export type ClaimableBalanceIdWire = {
    type: 0;
    v0: HashWire;
};
export type ClaimableBalanceIdVariantName = "claimableBalanceIdTypeV0";
/**
 * ```xdr
 * union ClaimableBalanceID switch (ClaimableBalanceIDType type)
 * {
 * case CLAIMABLE_BALANCE_ID_TYPE_V0:
 *     Hash v0;
 * };
 * ```
 */
declare abstract class ClaimableBalanceIdBase extends XdrValue {
    abstract readonly type: ClaimableBalanceIdVariantName;
    constructor();
    static readonly schema: XdrType<ClaimableBalanceIdWire>;
    static claimableBalanceIdTypeV0(v0: Hash | Uint8Array | string): ClaimableBalanceIdV0;
    static fromXdrObject(wire: ClaimableBalanceIdWire): ClaimableBalanceId;
    /**
     * Type guard narrowing an unknown value to a concrete ClaimableBalanceId variant.
     * Use this instead of `instanceof ClaimableBalanceId`: the exported `ClaimableBalanceId` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ClaimableBalanceId.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ClaimableBalanceId;
    abstract toXdrObject(): ClaimableBalanceIdWire;
}
export declare class ClaimableBalanceIdV0 extends ClaimableBalanceIdBase {
    readonly type: "claimableBalanceIdTypeV0";
    readonly v0: Hash;
    constructor(v0: Hash | Uint8Array | string);
    get value(): Hash;
    toXdrObject(): Extract<ClaimableBalanceIdWire, {
        type: 0;
    }>;
}
export type ClaimableBalanceId = ClaimableBalanceIdV0;
export declare const ClaimableBalanceId: typeof ClaimableBalanceIdBase;
export {};
