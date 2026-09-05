import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { BucketListType, type BucketListTypeWire } from "./bucket-list-type.js";
export type BucketMetadataExtWire = {
    v: 0;
} | {
    v: 1;
    bucketListType: BucketListTypeWire;
};
export type BucketMetadataExtVariantName = "v0" | "bucketListType";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         BucketListType bucketListType;
 *     }
 * ```
 */
declare abstract class BucketMetadataExtBase extends XdrValue {
    abstract readonly type: BucketMetadataExtVariantName;
    constructor();
    static readonly schema: XdrType<BucketMetadataExtWire>;
    static v0(): BucketMetadataExtV0;
    static bucketListType(bucketListType: BucketListType): BucketMetadataExtBucketListType;
    static fromXdrObject(wire: BucketMetadataExtWire): BucketMetadataExt;
    /**
     * Type guard narrowing an unknown value to a concrete BucketMetadataExt variant.
     * Use this instead of `instanceof BucketMetadataExt`: the exported `BucketMetadataExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `BucketMetadataExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is BucketMetadataExt;
    abstract toXdrObject(): BucketMetadataExtWire;
}
export declare class BucketMetadataExtV0 extends BucketMetadataExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<BucketMetadataExtWire, {
        v: 0;
    }>;
}
export declare class BucketMetadataExtBucketListType extends BucketMetadataExtBase {
    readonly type: "bucketListType";
    readonly bucketListType: BucketListType;
    constructor(bucketListType: BucketListType);
    get value(): BucketListType;
    toXdrObject(): Extract<BucketMetadataExtWire, {
        v: 1;
    }>;
}
export type BucketMetadataExt = BucketMetadataExtV0 | BucketMetadataExtBucketListType;
export declare const BucketMetadataExt: typeof BucketMetadataExtBase;
export {};
