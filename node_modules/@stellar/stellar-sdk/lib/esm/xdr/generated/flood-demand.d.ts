import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
export interface FloodDemandWire {
    txHashes: HashWire[];
}
/**
 * ```xdr
 * struct FloodDemand
 * {
 *     TxDemandVector txHashes;
 * };
 * ```
 */
export declare class FloodDemand extends XdrValue {
    readonly txHashes: Hash[];
    static readonly schema: XdrType<FloodDemandWire>;
    constructor(input: {
        txHashes: Hash[];
    });
    toXdrObject(): FloodDemandWire;
    static fromXdrObject(wire: FloodDemandWire): FloodDemand;
}
