import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { LedgerHeader, type LedgerHeaderWire } from "./ledger-header.js";
import { LedgerHeaderHistoryEntryExt, type LedgerHeaderHistoryEntryExtWire } from "./ledger-header-history-entry-ext.js";
export interface LedgerHeaderHistoryEntryWire {
    hash: HashWire;
    header: LedgerHeaderWire;
    ext: LedgerHeaderHistoryEntryExtWire;
}
/**
 * ```xdr
 * struct LedgerHeaderHistoryEntry
 * {
 *     Hash hash;
 *     LedgerHeader header;
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class LedgerHeaderHistoryEntry extends XdrValue {
    readonly hash: Hash;
    readonly header: LedgerHeader;
    readonly ext: LedgerHeaderHistoryEntryExt;
    static readonly schema: XdrType<LedgerHeaderHistoryEntryWire>;
    constructor(input: {
        hash: Hash | Uint8Array | string;
        header: LedgerHeader;
        ext: LedgerHeaderHistoryEntryExt;
    });
    toXdrObject(): LedgerHeaderHistoryEntryWire;
    static fromXdrObject(wire: LedgerHeaderHistoryEntryWire): LedgerHeaderHistoryEntry;
}
