import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
export interface TtlEntryWire {
    keyHash: HashWire;
    liveUntilLedgerSeq: number;
}
/**
 * ```xdr
 * struct TTLEntry {
 *     // Hash of the LedgerKey that is associated with this TTLEntry
 *     Hash keyHash;
 *     uint32 liveUntilLedgerSeq;
 * };
 * ```
 */
export declare class TtlEntry extends XdrValue {
    readonly keyHash: Hash;
    readonly liveUntilLedgerSeq: number;
    static readonly schema: XdrType<TtlEntryWire>;
    constructor(input: {
        keyHash: Hash | Uint8Array | string;
        liveUntilLedgerSeq: number;
    });
    toXdrObject(): TtlEntryWire;
    static fromXdrObject(wire: TtlEntryWire): TtlEntry;
}
