import { struct, array, UNBOUNDED_MAX_LENGTH, option, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionEnvelope } from './transaction-envelope.js';

class TxSetComponentTxsMaybeDiscountedFee extends XdrValue {
  baseFee;
  txs;
  static schema = struct("TxSetComponentTxsMaybeDiscountedFee", {
    baseFee: option(int64()),
    txs: array(TransactionEnvelope.schema, UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.baseFee = input.baseFee;
    this.txs = input.txs;
  }
  toXdrObject() {
    return {
      baseFee: this.baseFee,
      txs: this.txs.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TxSetComponentTxsMaybeDiscountedFee({
      baseFee: wire.baseFee,
      txs: wire.txs.map((w) => TransactionEnvelope.fromXdrObject(w))
    });
  }
}

export { TxSetComponentTxsMaybeDiscountedFee };
//# sourceMappingURL=tx-set-component-txs-maybe-discounted-fee.js.map
