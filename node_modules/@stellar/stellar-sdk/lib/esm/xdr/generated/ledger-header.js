import { struct, fixedArray, uint32, uint64, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { StellarValue } from './stellar-value.js';
import { LedgerHeaderExt } from './ledger-header-ext.js';

class LedgerHeader extends XdrValue {
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
  static schema = struct("LedgerHeader", {
    ledgerVersion: uint32(),
    previousLedgerHash: Hash.schema,
    scpValue: StellarValue.schema,
    txSetResultHash: Hash.schema,
    bucketListHash: Hash.schema,
    ledgerSeq: uint32(),
    totalCoins: int64(),
    feePool: int64(),
    inflationSeq: uint32(),
    idPool: uint64(),
    baseFee: uint32(),
    baseReserve: uint32(),
    maxTxSetSize: uint32(),
    skipList: fixedArray(Hash.schema, 4),
    ext: LedgerHeaderExt.schema
  });
  constructor(input) {
    super();
    this.ledgerVersion = input.ledgerVersion;
    this.previousLedgerHash = input.previousLedgerHash instanceof Hash ? input.previousLedgerHash : new Hash(input.previousLedgerHash);
    this.scpValue = input.scpValue;
    this.txSetResultHash = input.txSetResultHash instanceof Hash ? input.txSetResultHash : new Hash(input.txSetResultHash);
    this.bucketListHash = input.bucketListHash instanceof Hash ? input.bucketListHash : new Hash(input.bucketListHash);
    this.ledgerSeq = input.ledgerSeq;
    this.totalCoins = input.totalCoins;
    this.feePool = input.feePool;
    this.inflationSeq = input.inflationSeq;
    this.idPool = input.idPool;
    this.baseFee = input.baseFee;
    this.baseReserve = input.baseReserve;
    this.maxTxSetSize = input.maxTxSetSize;
    this.skipList = input.skipList.map(
      (v) => v instanceof Hash ? v : new Hash(v)
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
      previousLedgerHash: Hash.fromXdrObject(wire.previousLedgerHash),
      scpValue: StellarValue.fromXdrObject(wire.scpValue),
      txSetResultHash: Hash.fromXdrObject(wire.txSetResultHash),
      bucketListHash: Hash.fromXdrObject(wire.bucketListHash),
      ledgerSeq: wire.ledgerSeq,
      totalCoins: wire.totalCoins,
      feePool: wire.feePool,
      inflationSeq: wire.inflationSeq,
      idPool: wire.idPool,
      baseFee: wire.baseFee,
      baseReserve: wire.baseReserve,
      maxTxSetSize: wire.maxTxSetSize,
      skipList: wire.skipList.map((w) => Hash.fromXdrObject(w)),
      ext: LedgerHeaderExt.fromXdrObject(wire.ext)
    });
  }
}

export { LedgerHeader };
//# sourceMappingURL=ledger-header.js.map
