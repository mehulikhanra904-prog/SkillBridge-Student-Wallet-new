import { EnumValue } from "../values/enum-value.js";
export type HotArchiveBucketEntryTypeWire = number;
export type HotArchiveBucketEntryTypeName = "hotArchiveMetaentry" | "hotArchiveArchived" | "hotArchiveLive";
/**
 * ```xdr
 * enum HotArchiveBucketEntryType
 * {
 *     HOT_ARCHIVE_METAENTRY = -1, // Bucket metadata, should come first.
 *     HOT_ARCHIVE_ARCHIVED = 0,   // Entry is Archived
 *     HOT_ARCHIVE_LIVE = 1        // Entry was previously HOT_ARCHIVE_ARCHIVED, but
 *                                 // has been added back to the live BucketList.
 *                                 // Does not need to be persisted.
 * };
 * ```
 */
export declare class HotArchiveBucketEntryType extends EnumValue<HotArchiveBucketEntryTypeName> {
    static readonly hotArchiveMetaentry: HotArchiveBucketEntryType;
    static readonly hotArchiveArchived: HotArchiveBucketEntryType;
    static readonly hotArchiveLive: HotArchiveBucketEntryType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly hotArchiveMetaentry: -1;
        readonly hotArchiveArchived: 0;
        readonly hotArchiveLive: 1;
    }>> & {
        readonly kind: "enum";
        readonly name: "HotArchiveBucketEntryType";
        readonly nameByValue: ReadonlyMap<number, "hotArchiveMetaentry" | "hotArchiveArchived" | "hotArchiveLive">;
    } & {
        readonly hotArchiveMetaentry: -1;
        readonly hotArchiveArchived: 0;
        readonly hotArchiveLive: 1;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): HotArchiveBucketEntryType;
    static fromName(name: HotArchiveBucketEntryTypeName): HotArchiveBucketEntryType;
    static fromXdrObject(wire: number): HotArchiveBucketEntryType;
}
