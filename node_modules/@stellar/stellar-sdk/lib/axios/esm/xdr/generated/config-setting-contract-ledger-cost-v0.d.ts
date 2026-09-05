import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ConfigSettingContractLedgerCostV0Wire {
    ledgerMaxDiskReadEntries: number;
    ledgerMaxDiskReadBytes: number;
    ledgerMaxWriteLedgerEntries: number;
    ledgerMaxWriteBytes: number;
    txMaxDiskReadEntries: number;
    txMaxDiskReadBytes: number;
    txMaxWriteLedgerEntries: number;
    txMaxWriteBytes: number;
    feeDiskReadLedgerEntry: bigint;
    feeWriteLedgerEntry: bigint;
    feeDiskRead1Kb: bigint;
    sorobanStateTargetSizeBytes: bigint;
    rentFee1KbSorobanStateSizeLow: bigint;
    rentFee1KbSorobanStateSizeHigh: bigint;
    sorobanStateRentFeeGrowthFactor: number;
}
/**
 * ```xdr
 * struct ConfigSettingContractLedgerCostV0
 * {
 *     // Maximum number of disk entry read operations per ledger
 *     uint32 ledgerMaxDiskReadEntries;
 *     // Maximum number of bytes of disk reads that can be performed per ledger
 *     uint32 ledgerMaxDiskReadBytes;
 *     // Maximum number of ledger entry write operations per ledger
 *     uint32 ledgerMaxWriteLedgerEntries;
 *     // Maximum number of bytes that can be written per ledger
 *     uint32 ledgerMaxWriteBytes;
 *
 *     // Maximum number of disk entry read operations per transaction
 *     uint32 txMaxDiskReadEntries;
 *     // Maximum number of bytes of disk reads that can be performed per transaction
 *     uint32 txMaxDiskReadBytes;
 *     // Maximum number of ledger entry write operations per transaction
 *     uint32 txMaxWriteLedgerEntries;
 *     // Maximum number of bytes that can be written per transaction
 *     uint32 txMaxWriteBytes;
 *
 *     int64 feeDiskReadLedgerEntry;  // Fee per disk ledger entry read
 *     int64 feeWriteLedgerEntry;     // Fee per ledger entry write
 *
 *     int64 feeDiskRead1KB;          // Fee for reading 1KB disk
 *
 *     // The following parameters determine the write fee per 1KB.
 *     // Rent fee grows linearly until soroban state reaches this size
 *     int64 sorobanStateTargetSizeBytes;
 *     // Fee per 1KB rent when the soroban state is empty
 *     int64 rentFee1KBSorobanStateSizeLow;
 *     // Fee per 1KB rent when the soroban state has reached `sorobanStateTargetSizeBytes`
 *     int64 rentFee1KBSorobanStateSizeHigh;
 *     // Rent fee multiplier for any additional data past the first `sorobanStateTargetSizeBytes`
 *     uint32 sorobanStateRentFeeGrowthFactor;
 * };
 * ```
 */
export declare class ConfigSettingContractLedgerCostV0 extends XdrValue {
    readonly ledgerMaxDiskReadEntries: number;
    readonly ledgerMaxDiskReadBytes: number;
    readonly ledgerMaxWriteLedgerEntries: number;
    readonly ledgerMaxWriteBytes: number;
    readonly txMaxDiskReadEntries: number;
    readonly txMaxDiskReadBytes: number;
    readonly txMaxWriteLedgerEntries: number;
    readonly txMaxWriteBytes: number;
    readonly feeDiskReadLedgerEntry: bigint;
    readonly feeWriteLedgerEntry: bigint;
    readonly feeDiskRead1Kb: bigint;
    readonly sorobanStateTargetSizeBytes: bigint;
    readonly rentFee1KbSorobanStateSizeLow: bigint;
    readonly rentFee1KbSorobanStateSizeHigh: bigint;
    readonly sorobanStateRentFeeGrowthFactor: number;
    static readonly schema: XdrType<ConfigSettingContractLedgerCostV0Wire>;
    constructor(input: {
        ledgerMaxDiskReadEntries: number;
        ledgerMaxDiskReadBytes: number;
        ledgerMaxWriteLedgerEntries: number;
        ledgerMaxWriteBytes: number;
        txMaxDiskReadEntries: number;
        txMaxDiskReadBytes: number;
        txMaxWriteLedgerEntries: number;
        txMaxWriteBytes: number;
        feeDiskReadLedgerEntry: bigint;
        feeWriteLedgerEntry: bigint;
        feeDiskRead1Kb: bigint;
        sorobanStateTargetSizeBytes: bigint;
        rentFee1KbSorobanStateSizeLow: bigint;
        rentFee1KbSorobanStateSizeHigh: bigint;
        sorobanStateRentFeeGrowthFactor: number;
    });
    toXdrObject(): ConfigSettingContractLedgerCostV0Wire;
    static fromXdrObject(wire: ConfigSettingContractLedgerCostV0Wire): ConfigSettingContractLedgerCostV0;
}
