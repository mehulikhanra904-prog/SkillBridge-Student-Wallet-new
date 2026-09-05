import { EnumValue } from "../values/enum-value.js";
export type BucketListTypeWire = number;
export type BucketListTypeName = "live" | "hotArchive";
/**
 * ```xdr
 * enum BucketListType
 * {
 *     LIVE = 0,
 *     HOT_ARCHIVE = 1
 * };
 * ```
 */
export declare class BucketListType extends EnumValue<BucketListTypeName> {
    static readonly live: BucketListType;
    static readonly hotArchive: BucketListType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"BucketListType", {
        readonly live: 0;
        readonly hotArchive: 1;
    }>;
    static fromValue(value: number): BucketListType;
    static fromName(name: BucketListTypeName): BucketListType;
    static fromXdrObject(wire: number): BucketListType;
}
