import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
export interface FreezeBypassTxsWire {
    txHashes: HashWire[];
}
/**
 * ```xdr
 * struct FreezeBypassTxs {
 *     Hash txHashes<>;
 * };
 * ```
 */
export declare class FreezeBypassTxs extends XdrValue {
    readonly txHashes: Hash[];
    static readonly schema: XdrType<FreezeBypassTxsWire>;
    constructor(input: {
        txHashes: (Hash | Uint8Array | string)[];
    });
    toXdrObject(): FreezeBypassTxsWire;
    static fromXdrObject(wire: FreezeBypassTxsWire): FreezeBypassTxs;
}
