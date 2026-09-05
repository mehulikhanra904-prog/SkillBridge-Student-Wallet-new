'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var muxedAccount = require('./muxed-account.js');
var preconditions = require('./preconditions.js');
var memo = require('./memo.js');
var operation = require('./operation.js');
var transactionExt = require('./transaction-ext.js');

let Transaction$1 = class Transaction extends xdrValue.XdrValue {
  sourceAccount;
  fee;
  seqNum;
  cond;
  memo;
  operations;
  ext;
  static schema = jsXdr.struct("Transaction", {
    sourceAccount: muxedAccount.MuxedAccount.schema,
    fee: jsXdr.uint32(),
    seqNum: jsXdr.int64(),
    cond: preconditions.Preconditions.schema,
    memo: memo.Memo.schema,
    operations: jsXdr.array(operation.Operation.schema, 100),
    ext: transactionExt.TransactionExt.schema
  });
  constructor(input) {
    super();
    this.sourceAccount = input.sourceAccount;
    this.fee = input.fee;
    this.seqNum = input.seqNum;
    this.cond = input.cond;
    this.memo = input.memo;
    this.operations = input.operations;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      sourceAccount: this.sourceAccount.toXdrObject(),
      fee: this.fee,
      seqNum: this.seqNum,
      cond: this.cond.toXdrObject(),
      memo: this.memo.toXdrObject(),
      operations: this.operations.map((v) => v.toXdrObject()),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new Transaction({
      sourceAccount: muxedAccount.MuxedAccount.fromXdrObject(wire.sourceAccount),
      fee: wire.fee,
      seqNum: wire.seqNum,
      cond: preconditions.Preconditions.fromXdrObject(wire.cond),
      memo: memo.Memo.fromXdrObject(wire.memo),
      operations: wire.operations.map((w) => operation.Operation.fromXdrObject(w)),
      ext: transactionExt.TransactionExt.fromXdrObject(wire.ext)
    });
  }
};

exports.Transaction = Transaction$1;
//# sourceMappingURL=transaction.js.map
