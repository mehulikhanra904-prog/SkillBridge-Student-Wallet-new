import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerHeaderHistoryEntry, type LedgerHeaderHistoryEntryWire } from "./ledger-header-history-entry.js";
import { TransactionSet, type TransactionSetWire } from "./transaction-set.js";
import { TransactionResultMeta, type TransactionResultMetaWire } from "./transaction-result-meta.js";
import { UpgradeEntryMeta, type UpgradeEntryMetaWire } from "./upgrade-entry-meta.js";
import { ScpHistoryEntry, type ScpHistoryEntryWire } from "./scp-history-entry.js";
export interface LedgerCloseMetaV0Wire {
    ledgerHeader: LedgerHeaderHistoryEntryWire;
    txSet: TransactionSetWire;
    txProcessing: TransactionResultMetaWire[];
    upgradesProcessing: UpgradeEntryMetaWire[];
    scpInfo: ScpHistoryEntryWire[];
}
/**
 * ```xdr
 * struct LedgerCloseMetaV0
 * {
 *     LedgerHeaderHistoryEntry ledgerHeader;
 *     // NB: txSet is sorted in "Hash order"
 *     TransactionSet txSet;
 *
 *     // NB: transactions are sorted in apply order here
 *     // fees for all transactions are processed first
 *     // followed by applying transactions
 *     TransactionResultMeta txProcessing<>;
 *
 *     // upgrades are applied last
 *     UpgradeEntryMeta upgradesProcessing<>;
 *
 *     // other misc information attached to the ledger close
 *     SCPHistoryEntry scpInfo<>;
 * };
 * ```
 */
export declare class LedgerCloseMetaV0 extends XdrValue {
    readonly ledgerHeader: LedgerHeaderHistoryEntry;
    readonly txSet: TransactionSet;
    readonly txProcessing: TransactionResultMeta[];
    readonly upgradesProcessing: UpgradeEntryMeta[];
    readonly scpInfo: ScpHistoryEntry[];
    static readonly schema: XdrType<LedgerCloseMetaV0Wire>;
    constructor(input: {
        ledgerHeader: LedgerHeaderHistoryEntry;
        txSet: TransactionSet;
        txProcessing: TransactionResultMeta[];
        upgradesProcessing: UpgradeEntryMeta[];
        scpInfo: ScpHistoryEntry[];
    });
    toXdrObject(): LedgerCloseMetaV0Wire;
    static fromXdrObject(wire: LedgerCloseMetaV0Wire): LedgerCloseMetaV0;
}
