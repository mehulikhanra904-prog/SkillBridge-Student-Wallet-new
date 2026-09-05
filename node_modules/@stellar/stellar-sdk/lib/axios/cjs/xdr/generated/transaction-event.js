'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionEventStage = require('./transaction-event-stage.js');
var contractEvent = require('./contract-event.js');

class TransactionEvent extends xdrValue.XdrValue {
  stage;
  event;
  static schema = jsXdr.struct(
    "TransactionEvent",
    {
      stage: transactionEventStage.TransactionEventStage.schema,
      event: contractEvent.ContractEvent.schema
    }
  );
  constructor(input) {
    super();
    this.stage = input.stage;
    this.event = input.event;
  }
  toXdrObject() {
    return {
      stage: this.stage.toXdrObject(),
      event: this.event.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionEvent({
      stage: transactionEventStage.TransactionEventStage.fromXdrObject(wire.stage),
      event: contractEvent.ContractEvent.fromXdrObject(wire.event)
    });
  }
}

exports.TransactionEvent = TransactionEvent;
//# sourceMappingURL=transaction-event.js.map
