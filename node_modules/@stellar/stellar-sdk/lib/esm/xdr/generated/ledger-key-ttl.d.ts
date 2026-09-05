import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
export interface LedgerKeyTtlWire {
    keyHash: HashWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         // Hash of the LedgerKey that is associated with this TTLEntry
 *         Hash keyHash;
 *     }
 * ```
 */
export declare class LedgerKeyTtl extends XdrValue {
    readonly keyHash: Hash;
    static readonly schema: XdrType<LedgerKeyTtlWire>;
    constructor(input: {
        keyHash: Hash | Uint8Array | string;
    });
    toXdrObject(): LedgerKeyTtlWire;
    static fromXdrObject(wire: LedgerKeyTtlWire): LedgerKeyTtl;
}
