import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
export interface FloodAdvertWire {
    txHashes: HashWire[];
}
/**
 * ```xdr
 * struct FloodAdvert
 * {
 *     TxAdvertVector txHashes;
 * };
 * ```
 */
export declare class FloodAdvert extends XdrValue {
    readonly txHashes: Hash[];
    static readonly schema: XdrType<FloodAdvertWire>;
    constructor(input: {
        txHashes: Hash[];
    });
    toXdrObject(): FloodAdvertWire;
    static fromXdrObject(wire: FloodAdvertWire): FloodAdvert;
}
