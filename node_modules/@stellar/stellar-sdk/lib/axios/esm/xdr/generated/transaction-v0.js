import { struct, array, option, int64, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Uint256Bytes } from './uint256-bytes.js';
import { TimeBounds } from './time-bounds.js';
import { Memo as Memo$1 } from './memo.js';
import { Operation } from './operation.js';
import { TransactionV0Ext } from './transaction-v0-ext.js';

class TransactionV0 extends XdrValue {
  sourceAccountEd25519;
  fee;
  seqNum;
  timeBounds;
  memo;
  operations;
  ext;
  static schema = struct("TransactionV0", {
    sourceAccountEd25519: Uint256Bytes.schema,
    fee: uint32(),
    seqNum: int64(),
    timeBounds: option(TimeBounds.schema),
    memo: Memo$1.schema,
    operations: array(Operation.schema, 100),
    ext: TransactionV0Ext.schema
  });
  constructor(input) {
    super();
    this.sourceAccountEd25519 = input.sourceAccountEd25519 instanceof Uint256Bytes ? input.sourceAccountEd25519 : new Uint256Bytes(input.sourceAccountEd25519);
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
      sourceAccountEd25519: Uint256Bytes.fromXdrObject(
        wire.sourceAccountEd25519
      ),
      fee: wire.fee,
      seqNum: wire.seqNum,
      timeBounds: wire.timeBounds === null ? null : TimeBounds.fromXdrObject(wire.timeBounds),
      memo: Memo$1.fromXdrObject(wire.memo),
      operations: wire.operations.map((w) => Operation.fromXdrObject(w)),
      ext: TransactionV0Ext.fromXdrObject(wire.ext)
    });
  }
}

export { TransactionV0 };
//# sourceMappingURL=transaction-v0.js.map
