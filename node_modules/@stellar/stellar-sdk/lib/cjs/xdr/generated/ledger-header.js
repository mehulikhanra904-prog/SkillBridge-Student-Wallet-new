'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var stellarValue = require('./stellar-value.js');
var ledgerHeaderExt = require('./ledger-header-ext.js');

class LedgerHeader extends xdrValue.XdrValue {
  ledgerVersion;
  previousLedgerHash;
  scpValue;
  txSetResultHash;
  bucketListHash;
  ledgerSeq;
  totalCoins;
  feePool;
  inflationSeq;
  idPool;
  baseFee;
  baseReserve;
  maxTxSetSize;
  skipList;
  ext;
  static schema = jsXdr.struct("LedgerHeader", {
    ledgerVersion: jsXdr.uint32(),
    previousLedgerHash: hash.Hash.schema,
    scpValue: stellarValue.StellarValue.schema,
    txSetResultHash: hash.Hash.schema,
    bucketListHash: hash.Hash.schema,
    ledgerSeq: jsXdr.uint32(),
    totalCoins: jsXdr.int64(),
    feePool: jsXdr.int64(),
    inflationSeq: jsXdr.uint32(),
    idPool: jsXdr.uint64(),
    baseFee: jsXdr.uint32(),
    baseReserve: jsXdr.uint32(),
    maxTxSetSize: jsXdr.uint32(),
    skipList: jsXdr.fixedArray(hash.Hash.schema, 4),
    ext: ledgerHeaderExt.LedgerHeaderExt.schema
  });
  constructor(input) {
    super();
    this.ledgerVersion = input.ledgerVersion;
    this.previousLedgerHash = input.previousLedgerHash instanceof hash.Hash ? input.previousLedgerHash : new hash.Hash(input.previousLedgerHash);
    this.scpValue = input.scpValue;
    this.txSetResultHash = input.txSetResultHash instanceof hash.Hash ? input.txSetResultHash : new hash.Hash(input.txSetResultHash);
    this.bucketListHash = input.bucketListHash instanceof hash.Hash ? input.bucketListHash : new hash.Hash(input.bucketListHash);
    this.ledgerSeq = input.ledgerSeq;
    this.totalCoins = input.totalCoins;
    this.feePool = input.feePool;
    this.inflationSeq = input.inflationSeq;
    this.idPool = input.idPool;
    this.baseFee = input.baseFee;
    this.baseReserve = input.baseReserve;
    this.maxTxSetSize = input.maxTxSetSize;
    this.skipList = input.skipList.map(
      (v) => v instanceof hash.Hash ? v : new hash.Hash(v)
    );
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      ledgerVersion: this.ledgerVersion,
      previousLedgerHash: this.previousLedgerHash.toXdrObject(),
      scpValue: this.scpValue.toXdrObject(),
      txSetResultHash: this.txSetResultHash.toXdrObject(),
      bucketListHash: this.bucketListHash.toXdrObject(),
      ledgerSeq: this.ledgerSeq,
      totalCoins: this.totalCoins,
      feePool: this.feePool,
      inflationSeq: this.inflationSeq,
      idPool: this.idPool,
      baseFee: this.baseFee,
      baseReserve: this.baseReserve,
      maxTxSetSize: this.maxTxSetSize,
      skipList: this.skipList.map((v) => v.toXdrObject()),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerHeader({
      ledgerVersion: wire.ledgerVersion,
      previousLedgerHash: hash.Hash.fromXdrObject(wire.previousLedgerHash),
      scpValue: stellarValue.StellarValue.fromXdrObject(wire.scpValue),
      txSetResultHash: hash.Hash.fromXdrObject(wire.txSetResultHash),
      bucketListHash: hash.Hash.fromXdrObject(wire.bucketListHash),
      ledgerSeq: wire.ledgerSeq,
      totalCoins: wire.totalCoins,
      feePool: wire.feePool,
      inflationSeq: wire.inflationSeq,
      idPool: wire.idPool,
      baseFee: wire.baseFee,
      baseReserve: wire.baseReserve,
      maxTxSetSize: wire.maxTxSetSize,
      skipList: wire.skipList.map((w) => hash.Hash.fromXdrObject(w)),
      ext: ledgerHeaderExt.LedgerHeaderExt.fromXdrObject(wire.ext)
    });
  }
}

exports.LedgerHeader = LedgerHeader;
//# sourceMappingURL=ledger-header.js.map
