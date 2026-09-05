import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface PriceWire {
    n: number;
    d: number;
}
/**
 * ```xdr
 * struct Price
 * {
 *     int32 n; // numerator
 *     int32 d; // denominator
 * };
 * ```
 */
export declare class Price extends XdrValue {
    readonly n: number;
    readonly d: number;
    static readonly schema: XdrType<PriceWire>;
    constructor(input: {
        n: number;
        d: number;
    });
    toXdrObject(): PriceWire;
    static fromXdrObject(wire: PriceWire): Price;
}
