import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
export interface FreezeBypassTxsDeltaWire {
    addTxs: HashWire[];
    removeTxs: HashWire[];
}
/**
 * ```xdr
 * struct FreezeBypassTxsDelta {
 *     Hash addTxs<>;
 *     Hash removeTxs<>;
 * };
 * ```
 */
export declare class FreezeBypassTxsDelta extends XdrValue {
    readonly addTxs: Hash[];
    readonly removeTxs: Hash[];
    static readonly schema: XdrType<FreezeBypassTxsDeltaWire>;
    constructor(input: {
        addTxs: (Hash | Uint8Array | string)[];
        removeTxs: (Hash | Uint8Array | string)[];
    });
    toXdrObject(): FreezeBypassTxsDeltaWire;
    static fromXdrObject(wire: FreezeBypassTxsDeltaWire): FreezeBypassTxsDelta;
}
