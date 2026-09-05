import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { BinaryFuseFilterType, type BinaryFuseFilterTypeWire } from "./binary-fuse-filter-type.js";
import { ShortHashSeed, type ShortHashSeedWire } from "./short-hash-seed.js";
export interface SerializedBinaryFuseFilterWire {
    type: BinaryFuseFilterTypeWire;
    inputHashSeed: ShortHashSeedWire;
    filterSeed: ShortHashSeedWire;
    segmentLength: number;
    segementLengthMask: number;
    segmentCount: number;
    segmentCountLength: number;
    fingerprintLength: number;
    fingerprints: Uint8Array;
}
/**
 * ```xdr
 * struct SerializedBinaryFuseFilter
 * {
 *     BinaryFuseFilterType type;
 *
 *     // Seed used to hash input to filter
 *     ShortHashSeed inputHashSeed;
 *
 *     // Seed used for internal filter hash operations
 *     ShortHashSeed filterSeed;
 *     uint32 segmentLength;
 *     uint32 segementLengthMask;
 *     uint32 segmentCount;
 *     uint32 segmentCountLength;
 *     uint32 fingerprintLength; // Length in terms of element count, not bytes
 *
 *     // Array of uint8_t, uint16_t, or uint32_t depending on filter type
 *     opaque fingerprints<>;
 * };
 * ```
 */
export declare class SerializedBinaryFuseFilter extends XdrValue {
    readonly type: BinaryFuseFilterType;
    readonly inputHashSeed: ShortHashSeed;
    readonly filterSeed: ShortHashSeed;
    readonly segmentLength: number;
    readonly segementLengthMask: number;
    readonly segmentCount: number;
    readonly segmentCountLength: number;
    readonly fingerprintLength: number;
    readonly fingerprints: Uint8Array;
    static readonly schema: XdrType<SerializedBinaryFuseFilterWire>;
    constructor(input: {
        type: BinaryFuseFilterType;
        inputHashSeed: ShortHashSeed;
        filterSeed: ShortHashSeed;
        segmentLength: number;
        segementLengthMask: number;
        segmentCount: number;
        segmentCountLength: number;
        fingerprintLength: number;
        fingerprints: Uint8Array;
    });
    toXdrObject(): SerializedBinaryFuseFilterWire;
    static fromXdrObject(wire: SerializedBinaryFuseFilterWire): SerializedBinaryFuseFilter;
}
