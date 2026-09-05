import { EnumValue } from "../values/enum-value.js";
export type BucketEntryTypeWire = number;
export type BucketEntryTypeName = "metaentry" | "liveentry" | "deadentry" | "initentry";
/**
 * ```xdr
 * enum BucketEntryType
 * {
 *     METAENTRY =
 *         -1, // At-and-after protocol 11: bucket metadata, should come first.
 *     LIVEENTRY = 0, // Before protocol 11: created-or-updated;
 *                    // At-and-after protocol 11: only updated.
 *     DEADENTRY = 1,
 *     INITENTRY = 2 // At-and-after protocol 11: only created.
 * };
 * ```
 */
export declare class BucketEntryType extends EnumValue<BucketEntryTypeName> {
    static readonly metaentry: BucketEntryType;
    static readonly liveentry: BucketEntryType;
    static readonly deadentry: BucketEntryType;
    static readonly initentry: BucketEntryType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"BucketEntryType", {
        readonly metaentry: -1;
        readonly liveentry: 0;
        readonly deadentry: 1;
        readonly initentry: 2;
    }>;
    static fromValue(value: number): BucketEntryType;
    static fromName(name: BucketEntryTypeName): BucketEntryType;
    static fromXdrObject(wire: number): BucketEntryType;
}
