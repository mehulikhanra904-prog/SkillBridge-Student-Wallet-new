import { struct, array, int64, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { MuxedAccount } from './muxed-account.js';
import { Preconditions } from './preconditions.js';
import { Memo as Memo$1 } from './memo.js';
import { Operation } from './operation.js';
import { TransactionExt } from './transaction-ext.js';

let Transaction$1 = class Transaction extends XdrValue {
  sourceAccount;
  fee;
  seqNum;
  cond;
  memo;
  operations;
  ext;
  static schema = struct("Transaction", {
    sourceAccount: MuxedAccount.schema,
    fee: uint32(),
    seqNum: int64(),
    cond: Preconditions.schema,
    memo: Memo$1.schema,
    operations: array(Operation.schema, 100),
    ext: TransactionExt.schema
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
      sourceAccount: MuxedAccount.fromXdrObject(wire.sourceAccount),
      fee: wire.fee,
      seqNum: wire.seqNum,
      cond: Preconditions.fromXdrObject(wire.cond),
      memo: Memo$1.fromXdrObject(wire.memo),
      operations: wire.operations.map((w) => Operation.fromXdrObject(w)),
      ext: TransactionExt.fromXdrObject(wire.ext)
    });
  }
};

export { Transaction$1 as Transaction };
//# sourceMappingURL=transaction.js.map
