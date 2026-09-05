import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerCloseMetaExt, type LedgerCloseMetaExtWire } from "./ledger-close-meta-ext.js";
import { LedgerHeaderHistoryEntry, type LedgerHeaderHistoryEntryWire } from "./ledger-header-history-entry.js";
import { GeneralizedTransactionSet, type GeneralizedTransactionSetWire } from "./generalized-transaction-set.js";
import { TransactionResultMetaV1, type TransactionResultMetaV1Wire } from "./transaction-result-meta-v1.js";
import { UpgradeEntryMeta, type UpgradeEntryMetaWire } from "./upgrade-entry-meta.js";
import { ScpHistoryEntry, type ScpHistoryEntryWire } from "./scp-history-entry.js";
import { LedgerKey, type LedgerKeyWire } from "./ledger-key.js";
export interface LedgerCloseMetaV2Wire {
    ext: LedgerCloseMetaExtWire;
    ledgerHeader: LedgerHeaderHistoryEntryWire;
    txSet: GeneralizedTransactionSetWire;
    txProcessing: TransactionResultMetaV1Wire[];
    upgradesProcessing: UpgradeEntryMetaWire[];
    scpInfo: ScpHistoryEntryWire[];
    totalByteSizeOfLiveSorobanState: bigint;
    evictedKeys: LedgerKeyWire[];
}
/**
 * ```xdr
 * struct LedgerCloseMetaV2
 * {
 *     LedgerCloseMetaExt ext;
 *
 *     LedgerHeaderHistoryEntry ledgerHeader;
 *
 *     GeneralizedTransactionSet txSet;
 *
 *     // NB: transactions are sorted in apply order here
 *     // fees for all transactions are processed first
 *     // followed by applying transactions
 *     TransactionResultMetaV1 txProcessing<>;
 *
 *     // upgrades are applied last
 *     UpgradeEntryMeta upgradesProcessing<>;
 *
 *     // other misc information attached to the ledger close
 *     SCPHistoryEntry scpInfo<>;
 *
 *     // Size in bytes of live Soroban state, to support downstream
 *     // systems calculating storage fees correctly.
 *     uint64 totalByteSizeOfLiveSorobanState;
 *
 *     // TTL and data/code keys that have been evicted at this ledger.
 *     LedgerKey evictedKeys<>;
 * };
 * ```
 */
export declare class LedgerCloseMetaV2 extends XdrValue {
    readonly ext: LedgerCloseMetaExt;
    readonly ledgerHeader: LedgerHeaderHistoryEntry;
    readonly txSet: GeneralizedTransactionSet;
    readonly txProcessing: TransactionResultMetaV1[];
    readonly upgradesProcessing: UpgradeEntryMeta[];
    readonly scpInfo: ScpHistoryEntry[];
    readonly totalByteSizeOfLiveSorobanState: bigint;
    readonly evictedKeys: LedgerKey[];
    static readonly schema: XdrType<LedgerCloseMetaV2Wire>;
    constructor(input: {
        ext: LedgerCloseMetaExt;
        ledgerHeader: LedgerHeaderHistoryEntry;
        txSet: GeneralizedTransactionSet;
        txProcessing: TransactionResultMetaV1[];
        upgradesProcessing: UpgradeEntryMeta[];
        scpInfo: ScpHistoryEntry[];
        totalByteSizeOfLiveSorobanState: bigint;
        evictedKeys: LedgerKey[];
    });
    toXdrObject(): LedgerCloseMetaV2Wire;
    static fromXdrObject(wire: LedgerCloseMetaV2Wire): LedgerCloseMetaV2;
}
