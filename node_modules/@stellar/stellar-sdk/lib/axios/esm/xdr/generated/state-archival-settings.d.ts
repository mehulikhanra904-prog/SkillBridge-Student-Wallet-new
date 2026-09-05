import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface StateArchivalSettingsWire {
    maxEntryTtl: number;
    minTemporaryTtl: number;
    minPersistentTtl: number;
    persistentRentRateDenominator: bigint;
    tempRentRateDenominator: bigint;
    maxEntriesToArchive: number;
    liveSorobanStateSizeWindowSampleSize: number;
    liveSorobanStateSizeWindowSamplePeriod: number;
    evictionScanSize: number;
    startingEvictionScanLevel: number;
}
/**
 * ```xdr
 * struct StateArchivalSettings {
 *     uint32 maxEntryTTL;
 *     uint32 minTemporaryTTL;
 *     uint32 minPersistentTTL;
 *
 *     // rent_fee = wfee_rate_average / rent_rate_denominator_for_type
 *     int64 persistentRentRateDenominator;
 *     int64 tempRentRateDenominator;
 *
 *     // max number of entries that emit archival meta in a single ledger
 *     uint32 maxEntriesToArchive;
 *
 *     // Number of snapshots to use when calculating average live Soroban State size
 *     uint32 liveSorobanStateSizeWindowSampleSize;
 *
 *     // How often to sample the live Soroban State size for the average, in ledgers
 *     uint32 liveSorobanStateSizeWindowSamplePeriod;
 *
 *     // Maximum number of bytes that we scan for eviction per ledger
 *     uint32 evictionScanSize;
 *
 *     // Lowest BucketList level to be scanned to evict entries
 *     uint32 startingEvictionScanLevel;
 * };
 * ```
 */
export declare class StateArchivalSettings extends XdrValue {
    readonly maxEntryTtl: number;
    readonly minTemporaryTtl: number;
    readonly minPersistentTtl: number;
    readonly persistentRentRateDenominator: bigint;
    readonly tempRentRateDenominator: bigint;
    readonly maxEntriesToArchive: number;
    readonly liveSorobanStateSizeWindowSampleSize: number;
    readonly liveSorobanStateSizeWindowSamplePeriod: number;
    readonly evictionScanSize: number;
    readonly startingEvictionScanLevel: number;
    static readonly schema: XdrType<StateArchivalSettingsWire>;
    constructor(input: {
        maxEntryTtl: number;
        minTemporaryTtl: number;
        minPersistentTtl: number;
        persistentRentRateDenominator: bigint;
        tempRentRateDenominator: bigint;
        maxEntriesToArchive: number;
        liveSorobanStateSizeWindowSampleSize: number;
        liveSorobanStateSizeWindowSamplePeriod: number;
        evictionScanSize: number;
        startingEvictionScanLevel: number;
    });
    toXdrObject(): StateArchivalSettingsWire;
    static fromXdrObject(wire: StateArchivalSettingsWire): StateArchivalSettings;
}
