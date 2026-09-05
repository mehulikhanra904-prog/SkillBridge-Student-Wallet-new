import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { BucketMetadataExt, type BucketMetadataExtWire } from "./bucket-metadata-ext.js";
export interface BucketMetadataWire {
    ledgerVersion: number;
    ext: BucketMetadataExtWire;
}
/**
 * ```xdr
 * struct BucketMetadata
 * {
 *     // Indicates the protocol version used to create / merge this bucket.
 *     uint32 ledgerVersion;
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         BucketListType bucketListType;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class BucketMetadata extends XdrValue {
    readonly ledgerVersion: number;
    readonly ext: BucketMetadataExt;
    static readonly schema: XdrType<BucketMetadataWire>;
    constructor(input: {
        ledgerVersion: number;
        ext: BucketMetadataExt;
    });
    toXdrObject(): BucketMetadataWire;
    static fromXdrObject(wire: BucketMetadataWire): BucketMetadata;
}
