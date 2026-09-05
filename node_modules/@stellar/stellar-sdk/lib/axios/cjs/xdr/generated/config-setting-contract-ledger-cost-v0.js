'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ConfigSettingContractLedgerCostV0 extends xdrValue.XdrValue {
  ledgerMaxDiskReadEntries;
  ledgerMaxDiskReadBytes;
  ledgerMaxWriteLedgerEntries;
  ledgerMaxWriteBytes;
  txMaxDiskReadEntries;
  txMaxDiskReadBytes;
  txMaxWriteLedgerEntries;
  txMaxWriteBytes;
  feeDiskReadLedgerEntry;
  feeWriteLedgerEntry;
  feeDiskRead1Kb;
  sorobanStateTargetSizeBytes;
  rentFee1KbSorobanStateSizeLow;
  rentFee1KbSorobanStateSizeHigh;
  sorobanStateRentFeeGrowthFactor;
  static schema = jsXdr.struct("ConfigSettingContractLedgerCostV0", {
    ledgerMaxDiskReadEntries: jsXdr.uint32(),
    ledgerMaxDiskReadBytes: jsXdr.uint32(),
    ledgerMaxWriteLedgerEntries: jsXdr.uint32(),
    ledgerMaxWriteBytes: jsXdr.uint32(),
    txMaxDiskReadEntries: jsXdr.uint32(),
    txMaxDiskReadBytes: jsXdr.uint32(),
    txMaxWriteLedgerEntries: jsXdr.uint32(),
    txMaxWriteBytes: jsXdr.uint32(),
    feeDiskReadLedgerEntry: jsXdr.int64(),
    feeWriteLedgerEntry: jsXdr.int64(),
    feeDiskRead1Kb: jsXdr.int64(),
    sorobanStateTargetSizeBytes: jsXdr.int64(),
    rentFee1KbSorobanStateSizeLow: jsXdr.int64(),
    rentFee1KbSorobanStateSizeHigh: jsXdr.int64(),
    sorobanStateRentFeeGrowthFactor: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.ledgerMaxDiskReadEntries = input.ledgerMaxDiskReadEntries;
    this.ledgerMaxDiskReadBytes = input.ledgerMaxDiskReadBytes;
    this.ledgerMaxWriteLedgerEntries = input.ledgerMaxWriteLedgerEntries;
    this.ledgerMaxWriteBytes = input.ledgerMaxWriteBytes;
    this.txMaxDiskReadEntries = input.txMaxDiskReadEntries;
    this.txMaxDiskReadBytes = input.txMaxDiskReadBytes;
    this.txMaxWriteLedgerEntries = input.txMaxWriteLedgerEntries;
    this.txMaxWriteBytes = input.txMaxWriteBytes;
    this.feeDiskReadLedgerEntry = input.feeDiskReadLedgerEntry;
    this.feeWriteLedgerEntry = input.feeWriteLedgerEntry;
    this.feeDiskRead1Kb = input.feeDiskRead1Kb;
    this.sorobanStateTargetSizeBytes = input.sorobanStateTargetSizeBytes;
    this.rentFee1KbSorobanStateSizeLow = input.rentFee1KbSorobanStateSizeLow;
    this.rentFee1KbSorobanStateSizeHigh = input.rentFee1KbSorobanStateSizeHigh;
    this.sorobanStateRentFeeGrowthFactor = input.sorobanStateRentFeeGrowthFactor;
  }
  toXdrObject() {
    return {
      ledgerMaxDiskReadEntries: this.ledgerMaxDiskReadEntries,
      ledgerMaxDiskReadBytes: this.ledgerMaxDiskReadBytes,
      ledgerMaxWriteLedgerEntries: this.ledgerMaxWriteLedgerEntries,
      ledgerMaxWriteBytes: this.ledgerMaxWriteBytes,
      txMaxDiskReadEntries: this.txMaxDiskReadEntries,
      txMaxDiskReadBytes: this.txMaxDiskReadBytes,
      txMaxWriteLedgerEntries: this.txMaxWriteLedgerEntries,
      txMaxWriteBytes: this.txMaxWriteBytes,
      feeDiskReadLedgerEntry: this.feeDiskReadLedgerEntry,
      feeWriteLedgerEntry: this.feeWriteLedgerEntry,
      feeDiskRead1Kb: this.feeDiskRead1Kb,
      sorobanStateTargetSizeBytes: this.sorobanStateTargetSizeBytes,
      rentFee1KbSorobanStateSizeLow: this.rentFee1KbSorobanStateSizeLow,
      rentFee1KbSorobanStateSizeHigh: this.rentFee1KbSorobanStateSizeHigh,
      sorobanStateRentFeeGrowthFactor: this.sorobanStateRentFeeGrowthFactor
    };
  }
  static fromXdrObject(wire) {
    return new ConfigSettingContractLedgerCostV0({
      ledgerMaxDiskReadEntries: wire.ledgerMaxDiskReadEntries,
      ledgerMaxDiskReadBytes: wire.ledgerMaxDiskReadBytes,
      ledgerMaxWriteLedgerEntries: wire.ledgerMaxWriteLedgerEntries,
      ledgerMaxWriteBytes: wire.ledgerMaxWriteBytes,
      txMaxDiskReadEntries: wire.txMaxDiskReadEntries,
      txMaxDiskReadBytes: wire.txMaxDiskReadBytes,
      txMaxWriteLedgerEntries: wire.txMaxWriteLedgerEntries,
      txMaxWriteBytes: wire.txMaxWriteBytes,
      feeDiskReadLedgerEntry: wire.feeDiskReadLedgerEntry,
      feeWriteLedgerEntry: wire.feeWriteLedgerEntry,
      feeDiskRead1Kb: wire.feeDiskRead1Kb,
      sorobanStateTargetSizeBytes: wire.sorobanStateTargetSizeBytes,
      rentFee1KbSorobanStateSizeLow: wire.rentFee1KbSorobanStateSizeLow,
      rentFee1KbSorobanStateSizeHigh: wire.rentFee1KbSorobanStateSizeHigh,
      sorobanStateRentFeeGrowthFactor: wire.sorobanStateRentFeeGrowthFactor
    });
  }
}

exports.ConfigSettingContractLedgerCostV0 = ConfigSettingContractLedgerCostV0;
//# sourceMappingURL=config-setting-contract-ledger-cost-v0.js.map
