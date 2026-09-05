'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var contractEvent = require('./contract-event.js');

class DiagnosticEvent extends xdrValue.XdrValue {
  inSuccessfulContractCall;
  event;
  static schema = jsXdr.struct(
    "DiagnosticEvent",
    {
      inSuccessfulContractCall: jsXdr.bool(),
      event: contractEvent.ContractEvent.schema
    }
  );
  constructor(input) {
    super();
    this.inSuccessfulContractCall = input.inSuccessfulContractCall;
    this.event = input.event;
  }
  toXdrObject() {
    return {
      inSuccessfulContractCall: this.inSuccessfulContractCall,
      event: this.event.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new DiagnosticEvent({
      inSuccessfulContractCall: wire.inSuccessfulContractCall,
      event: contractEvent.ContractEvent.fromXdrObject(wire.event)
    });
  }
}

exports.DiagnosticEvent = DiagnosticEvent;
//# sourceMappingURL=diagnostic-event.js.map
