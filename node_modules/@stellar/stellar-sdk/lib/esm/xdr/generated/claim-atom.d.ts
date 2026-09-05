import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimOfferAtomV0, type ClaimOfferAtomV0Wire } from "./claim-offer-atom-v0.js";
import { ClaimOfferAtom, type ClaimOfferAtomWire } from "./claim-offer-atom.js";
import { ClaimLiquidityAtom, type ClaimLiquidityAtomWire } from "./claim-liquidity-atom.js";
export type ClaimAtomWire = {
    type: 0;
    v0: ClaimOfferAtomV0Wire;
} | {
    type: 1;
    orderBook: ClaimOfferAtomWire;
} | {
    type: 2;
    liquidityPool: ClaimLiquidityAtomWire;
};
export type ClaimAtomVariantName = "claimAtomTypeV0" | "claimAtomTypeOrderBook" | "claimAtomTypeLiquidityPool";
/**
 * ```xdr
 * union ClaimAtom switch (ClaimAtomType type)
 * {
 * case CLAIM_ATOM_TYPE_V0:
 *     ClaimOfferAtomV0 v0;
 * case CLAIM_ATOM_TYPE_ORDER_BOOK:
 *     ClaimOfferAtom orderBook;
 * case CLAIM_ATOM_TYPE_LIQUIDITY_POOL:
 *     ClaimLiquidityAtom liquidityPool;
 * };
 * ```
 */
declare abstract class ClaimAtomBase extends XdrValue {
    abstract readonly type: ClaimAtomVariantName;
    constructor();
    static readonly schema: XdrType<ClaimAtomWire>;
    static claimAtomTypeV0(v0: ClaimOfferAtomV0): ClaimAtomV0;
    static claimAtomTypeOrderBook(orderBook: ClaimOfferAtom): ClaimAtomOrderBook;
    static claimAtomTypeLiquidityPool(liquidityPool: ClaimLiquidityAtom): ClaimAtomLiquidityPool;
    static fromXdrObject(wire: ClaimAtomWire): ClaimAtom;
    /**
     * Type guard narrowing an unknown value to a concrete ClaimAtom variant.
     * Use this instead of `instanceof ClaimAtom`: the exported `ClaimAtom` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ClaimAtom.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ClaimAtom;
    abstract toXdrObject(): ClaimAtomWire;
}
export declare class ClaimAtomV0 extends ClaimAtomBase {
    readonly type: "claimAtomTypeV0";
    readonly v0: ClaimOfferAtomV0;
    constructor(v0: ClaimOfferAtomV0);
    get value(): ClaimOfferAtomV0;
    toXdrObject(): Extract<ClaimAtomWire, {
        type: 0;
    }>;
}
export declare class ClaimAtomOrderBook extends ClaimAtomBase {
    readonly type: "claimAtomTypeOrderBook";
    readonly orderBook: ClaimOfferAtom;
    constructor(orderBook: ClaimOfferAtom);
    get value(): ClaimOfferAtom;
    toXdrObject(): Extract<ClaimAtomWire, {
        type: 1;
    }>;
}
export declare class ClaimAtomLiquidityPool extends ClaimAtomBase {
    readonly type: "claimAtomTypeLiquidityPool";
    readonly liquidityPool: ClaimLiquidityAtom;
    constructor(liquidityPool: ClaimLiquidityAtom);
    get value(): ClaimLiquidityAtom;
    toXdrObject(): Extract<ClaimAtomWire, {
        type: 2;
    }>;
}
export type ClaimAtom = ClaimAtomV0 | ClaimAtomOrderBook | ClaimAtomLiquidityPool;
export declare const ClaimAtom: typeof ClaimAtomBase;
export {};
