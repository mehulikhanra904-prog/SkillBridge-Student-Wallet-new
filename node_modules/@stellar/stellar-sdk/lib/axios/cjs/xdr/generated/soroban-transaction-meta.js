'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanTransactionMetaExt = require('./soroban-transaction-meta-ext.js');
var contractEvent = require('./contract-event.js');
var scVal = require('./sc-val.js');
var diagnosticEvent = require('./diagnostic-event.js');

class SorobanTransactionMeta extends xdrValue.XdrValue {
  ext;
  events;
  returnValue;
  diagnosticEvents;
  static schema = jsXdr.struct(
    "SorobanTransactionMeta",
    {
      ext: sorobanTransactionMetaExt.SorobanTransactionMetaExt.schema,
      events: jsXdr.array(contractEvent.ContractEvent.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      returnValue: scVal.ScVal.schema,
      diagnosticEvents: jsXdr.array(diagnosticEvent.DiagnosticEvent.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.events = input.events;
    this.returnValue = input.returnValue;
    this.diagnosticEvents = input.diagnosticEvents;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      events: this.events.map((v) => v.toXdrObject()),
      returnValue: this.returnValue.toXdrObject(),
      diagnosticEvents: this.diagnosticEvents.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new SorobanTransactionMeta({
      ext: sorobanTransactionMetaExt.SorobanTransactionMetaExt.fromXdrObject(wire.ext),
      events: wire.events.map((w) => contractEvent.ContractEvent.fromXdrObject(w)),
      returnValue: scVal.ScVal.fromXdrObject(wire.returnValue),
      diagnosticEvents: wire.diagnosticEvents.map(
        (w) => diagnosticEvent.DiagnosticEvent.fromXdrObject(w)
      )
    });
  }
}

exports.SorobanTransactionMeta = SorobanTransactionMeta;
//# sourceMappingURL=soroban-transaction-meta.js.map
