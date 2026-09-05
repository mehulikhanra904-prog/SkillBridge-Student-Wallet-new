import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type OfferEntryExtWire = {
    v: 0;
};
export type OfferEntryExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class OfferEntryExtBase extends XdrValue {
    abstract readonly type: OfferEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<OfferEntryExtWire>;
    static v0(): OfferEntryExtV0;
    static fromXdrObject(wire: OfferEntryExtWire): OfferEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete OfferEntryExt variant.
     * Use this instead of `instanceof OfferEntryExt`: the exported `OfferEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `OfferEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is OfferEntryExt;
    abstract toXdrObject(): OfferEntryExtWire;
}
export declare class OfferEntryExtV0 extends OfferEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<OfferEntryExtWire, {
        v: 0;
    }>;
}
export type OfferEntryExt = OfferEntryExtV0;
export declare const OfferEntryExt: typeof OfferEntryExtBase;
export {};
