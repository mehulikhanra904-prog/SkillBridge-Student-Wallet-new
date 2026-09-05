'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionEnvelope = require('./transaction-envelope.js');

class ParallelTxsComponent extends xdrValue.XdrValue {
  baseFee;
  executionStages;
  static schema = jsXdr.struct(
    "ParallelTxsComponent",
    {
      baseFee: jsXdr.option(jsXdr.int64()),
      executionStages: jsXdr.array(
        jsXdr.array(
          jsXdr.array(transactionEnvelope.TransactionEnvelope.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
          jsXdr.UNBOUNDED_MAX_LENGTH
        ),
        jsXdr.UNBOUNDED_MAX_LENGTH
      )
    }
  );
  constructor(input) {
    super();
    this.baseFee = input.baseFee;
    this.executionStages = input.executionStages;
  }
  toXdrObject() {
    return {
      baseFee: this.baseFee,
      executionStages: this.executionStages.map(
        (v) => v.map((v1) => v1.map((v2) => v2.toXdrObject()))
      )
    };
  }
  static fromXdrObject(wire) {
    return new ParallelTxsComponent({
      baseFee: wire.baseFee,
      executionStages: wire.executionStages.map(
        (w) => w.map((w1) => w1.map((w2) => transactionEnvelope.TransactionEnvelope.fromXdrObject(w2)))
      )
    });
  }
}

exports.ParallelTxsComponent = ParallelTxsComponent;
//# sourceMappingURL=parallel-txs-component.js.map
