'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var uint256Bytes = require('./uint256-bytes.js');
var timeBounds = require('./time-bounds.js');
var memo = require('./memo.js');
var operation = require('./operation.js');
var transactionV0Ext = require('./transaction-v0-ext.js');

class TransactionV0 extends xdrValue.XdrValue {
  sourceAccountEd25519;
  fee;
  seqNum;
  timeBounds;
  memo;
  operations;
  ext;
  static schema = jsXdr.struct("TransactionV0", {
    sourceAccountEd25519: uint256Bytes.Uint256Bytes.schema,
    fee: jsXdr.uint32(),
    seqNum: jsXdr.int64(),
    timeBounds: jsXdr.option(timeBounds.TimeBounds.schema),
    memo: memo.Memo.schema,
    operations: jsXdr.array(operation.Operation.schema, 100),
    ext: transactionV0Ext.TransactionV0Ext.schema
  });
  constructor(input) {
    super();
    this.sourceAccountEd25519 = input.sourceAccountEd25519 instanceof uint256Bytes.Uint256Bytes ? input.sourceAccountEd25519 : new uint256Bytes.Uint256Bytes(input.sourceAccountEd25519);
    this.fee = input.fee;
    this.seqNum = input.seqNum;
    this.timeBounds = input.timeBounds;
    this.memo = input.memo;
    this.operations = input.operations;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      sourceAccountEd25519: this.sourceAccountEd25519.toXdrObject(),
      fee: this.fee,
      seqNum: this.seqNum,
      timeBounds: this.timeBounds === null ? null : this.timeBounds.toXdrObject(),
      memo: this.memo.toXdrObject(),
      operations: this.operations.map((v) => v.toXdrObject()),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionV0({
      sourceAccountEd25519: uint256Bytes.Uint256Bytes.fromXdrObject(
        wire.sourceAccountEd25519
      ),
      fee: wire.fee,
      seqNum: wire.seqNum,
      timeBounds: wire.timeBounds === null ? null : timeBounds.TimeBounds.fromXdrObject(wire.timeBounds),
      memo: memo.Memo.fromXdrObject(wire.memo),
      operations: wire.operations.map((w) => operation.Operation.fromXdrObject(w)),
      ext: transactionV0Ext.TransactionV0Ext.fromXdrObject(wire.ext)
    });
  }
}

exports.TransactionV0 = TransactionV0;
//# sourceMappingURL=transaction-v0.js.map
