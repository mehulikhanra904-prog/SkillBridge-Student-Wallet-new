import { EnumValue } from "../values/enum-value.js";
export type ThresholdIndexesWire = number;
export type ThresholdIndexesName = "thresholdMasterWeight" | "thresholdLow" | "thresholdMed" | "thresholdHigh";
/**
 * ```xdr
 * enum ThresholdIndexes
 * {
 *     THRESHOLD_MASTER_WEIGHT = 0,
 *     THRESHOLD_LOW = 1,
 *     THRESHOLD_MED = 2,
 *     THRESHOLD_HIGH = 3
 * };
 * ```
 */
export declare class ThresholdIndexes extends EnumValue<ThresholdIndexesName> {
    static readonly thresholdMasterWeight: ThresholdIndexes;
    static readonly thresholdLow: ThresholdIndexes;
    static readonly thresholdMed: ThresholdIndexes;
    static readonly thresholdHigh: ThresholdIndexes;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly thresholdMasterWeight: 0;
        readonly thresholdLow: 1;
        readonly thresholdMed: 2;
        readonly thresholdHigh: 3;
    }>> & {
        readonly kind: "enum";
        readonly name: "ThresholdIndexes";
        readonly nameByValue: ReadonlyMap<number, "thresholdMasterWeight" | "thresholdLow" | "thresholdMed" | "thresholdHigh">;
    } & {
        readonly thresholdMasterWeight: 0;
        readonly thresholdLow: 1;
        readonly thresholdMed: 2;
        readonly thresholdHigh: 3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ThresholdIndexes;
    static fromName(name: ThresholdIndexesName): ThresholdIndexes;
    static fromXdrObject(wire: number): ThresholdIndexes;
}
