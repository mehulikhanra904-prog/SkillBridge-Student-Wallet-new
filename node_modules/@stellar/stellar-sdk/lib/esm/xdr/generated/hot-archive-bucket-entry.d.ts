import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerEntry, type LedgerEntryWire } from "./ledger-entry.js";
import { LedgerKey, type LedgerKeyWire } from "./ledger-key.js";
import { BucketMetadata, type BucketMetadataWire } from "./bucket-metadata.js";
export type HotArchiveBucketEntryWire = {
    type: 0;
    archivedEntry: LedgerEntryWire;
} | {
    type: 1;
    key: LedgerKeyWire;
} | {
    type: -1;
    metaEntry: BucketMetadataWire;
};
export type HotArchiveBucketEntryVariantName = "hotArchiveArchived" | "hotArchiveLive" | "hotArchiveMetaentry";
/**
 * ```xdr
 * union HotArchiveBucketEntry switch (HotArchiveBucketEntryType type)
 * {
 * case HOT_ARCHIVE_ARCHIVED:
 *     LedgerEntry archivedEntry;
 *
 * case HOT_ARCHIVE_LIVE:
 *     LedgerKey key;
 * case HOT_ARCHIVE_METAENTRY:
 *     BucketMetadata metaEntry;
 * };
 * ```
 */
declare abstract class HotArchiveBucketEntryBase extends XdrValue {
    abstract readonly type: HotArchiveBucketEntryVariantName;
    constructor();
    static readonly schema: XdrType<HotArchiveBucketEntryWire>;
    static hotArchiveArchived(archivedEntry: LedgerEntry): HotArchiveBucketEntryArchived;
    static hotArchiveLive(key: LedgerKey): HotArchiveBucketEntryLive;
    static hotArchiveMetaentry(metaEntry: BucketMetadata): HotArchiveBucketEntryMetaentry;
    static fromXdrObject(wire: HotArchiveBucketEntryWire): HotArchiveBucketEntry;
    /**
     * Type guard narrowing an unknown value to a concrete HotArchiveBucketEntry variant.
     * Use this instead of `instanceof HotArchiveBucketEntry`: the exported `HotArchiveBucketEntry` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `HotArchiveBucketEntry.is(x)` narrows to the union.
     */
    static is(value: unknown): value is HotArchiveBucketEntry;
    abstract toXdrObject(): HotArchiveBucketEntryWire;
}
export declare class HotArchiveBucketEntryArchived extends HotArchiveBucketEntryBase {
    readonly type: "hotArchiveArchived";
    readonly archivedEntry: LedgerEntry;
    constructor(archivedEntry: LedgerEntry);
    get value(): LedgerEntry;
    toXdrObject(): Extract<HotArchiveBucketEntryWire, {
        type: 0;
    }>;
}
export declare class HotArchiveBucketEntryLive extends HotArchiveBucketEntryBase {
    readonly type: "hotArchiveLive";
    readonly key: LedgerKey;
    constructor(key: LedgerKey);
    get value(): LedgerKey;
    toXdrObject(): Extract<HotArchiveBucketEntryWire, {
        type: 1;
    }>;
}
export declare class HotArchiveBucketEntryMetaentry extends HotArchiveBucketEntryBase {
    readonly type: "hotArchiveMetaentry";
    readonly metaEntry: BucketMetadata;
    constructor(metaEntry: BucketMetadata);
    get value(): BucketMetadata;
    toXdrObject(): Extract<HotArchiveBucketEntryWire, {
        type: -1;
    }>;
}
export type HotArchiveBucketEntry = HotArchiveBucketEntryArchived | HotArchiveBucketEntryLive | HotArchiveBucketEntryMetaentry;
export declare const HotArchiveBucketEntry: typeof HotArchiveBucketEntryBase;
export {};
