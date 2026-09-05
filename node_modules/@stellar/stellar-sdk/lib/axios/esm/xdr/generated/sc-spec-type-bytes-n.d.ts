import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ScSpecTypeBytesNWire {
    n: number;
}
/**
 * ```xdr
 * struct SCSpecTypeBytesN
 * {
 *     uint32 n;
 * };
 * ```
 */
export declare class ScSpecTypeBytesN extends XdrValue {
    readonly n: number;
    static readonly schema: XdrType<ScSpecTypeBytesNWire>;
    constructor(input: {
        n: number;
    });
    toXdrObject(): ScSpecTypeBytesNWire;
    static fromXdrObject(wire: ScSpecTypeBytesNWire): ScSpecTypeBytesN;
}
