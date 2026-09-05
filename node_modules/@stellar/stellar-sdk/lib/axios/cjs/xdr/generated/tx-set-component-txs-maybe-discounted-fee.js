'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionEnvelope = require('./transaction-envelope.js');

class TxSetComponentTxsMaybeDiscountedFee extends xdrValue.XdrValue {
  baseFee;
  txs;
  static schema = jsXdr.struct("TxSetComponentTxsMaybeDiscountedFee", {
    baseFee: jsXdr.option(jsXdr.int64()),
    txs: jsXdr.array(transactionEnvelope.TransactionEnvelope.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
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
      txs: wire.txs.map((w) => transactionEnvelope.TransactionEnvelope.fromXdrObject(w))
    });
  }
}

exports.TxSetComponentTxsMaybeDiscountedFee = TxSetComponentTxsMaybeDiscountedFee;
//# sourceMappingURL=tx-set-component-txs-maybe-discounted-fee.js.map
