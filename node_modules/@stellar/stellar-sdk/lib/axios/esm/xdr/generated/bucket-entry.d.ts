import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerEntry, type LedgerEntryWire } from "./ledger-entry.js";
import { LedgerKey, type LedgerKeyWire } from "./ledger-key.js";
import { BucketMetadata, type BucketMetadataWire } from "./bucket-metadata.js";
export type BucketEntryWire = {
    type: 0;
    liveEntry: LedgerEntryWire;
} | {
    type: 2;
    liveEntry: LedgerEntryWire;
} | {
    type: 1;
    deadEntry: LedgerKeyWire;
} | {
    type: -1;
    metaEntry: BucketMetadataWire;
};
export type BucketEntryVariantName = "liveentry" | "initentry" | "deadentry" | "metaentry";
/**
 * ```xdr
 * union BucketEntry switch (BucketEntryType type)
 * {
 * case LIVEENTRY:
 * case INITENTRY:
 *     LedgerEntry liveEntry;
 *
 * case DEADENTRY:
 *     LedgerKey deadEntry;
 * case METAENTRY:
 *     BucketMetadata metaEntry;
 * };
 * ```
 */
declare abstract class BucketEntryBase extends XdrValue {
    abstract readonly type: BucketEntryVariantName;
    constructor();
    static readonly schema: XdrType<BucketEntryWire>;
    static liveentry(liveEntry: LedgerEntry): BucketEntryLiveentry;
    static initentry(liveEntry: LedgerEntry): BucketEntryInitentry;
    static deadentry(deadEntry: LedgerKey): BucketEntryDeadentry;
    static metaentry(metaEntry: BucketMetadata): BucketEntryMetaentry;
    static fromXdrObject(wire: BucketEntryWire): BucketEntry;
    /**
     * Type guard narrowing an unknown value to a concrete BucketEntry variant.
     * Use this instead of `instanceof BucketEntry`: the exported `BucketEntry` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `BucketEntry.is(x)` narrows to the union.
     */
    static is(value: unknown): value is BucketEntry;
    abstract toXdrObject(): BucketEntryWire;
}
export declare class BucketEntryLiveentry extends BucketEntryBase {
    readonly type: "liveentry";
    readonly liveEntry: LedgerEntry;
    constructor(liveEntry: LedgerEntry);
    get value(): LedgerEntry;
    toXdrObject(): Extract<BucketEntryWire, {
        type: 0;
    }>;
}
export declare class BucketEntryInitentry extends BucketEntryBase {
    readonly type: "initentry";
    readonly liveEntry: LedgerEntry;
    constructor(liveEntry: LedgerEntry);
    get value(): LedgerEntry;
    toXdrObject(): Extract<BucketEntryWire, {
        type: 2;
    }>;
}
export declare class BucketEntryDeadentry extends BucketEntryBase {
    readonly type: "deadentry";
    readonly deadEntry: LedgerKey;
    constructor(deadEntry: LedgerKey);
    get value(): LedgerKey;
    toXdrObject(): Extract<BucketEntryWire, {
        type: 1;
    }>;
}
export declare class BucketEntryMetaentry extends BucketEntryBase {
    readonly type: "metaentry";
    readonly metaEntry: BucketMetadata;
    constructor(metaEntry: BucketMetadata);
    get value(): BucketMetadata;
    toXdrObject(): Extract<BucketEntryWire, {
        type: -1;
    }>;
}
export type BucketEntry = BucketEntryLiveentry | BucketEntryInitentry | BucketEntryDeadentry | BucketEntryMetaentry;
export declare const BucketEntry: typeof BucketEntryBase;
export {};
