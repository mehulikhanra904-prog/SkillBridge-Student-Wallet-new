'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scVal = require('./sc-val.js');
var contractEvent = require('./contract-event.js');

class InvokeHostFunctionSuccessPreImage extends xdrValue.XdrValue {
  returnValue;
  events;
  static schema = jsXdr.struct("InvokeHostFunctionSuccessPreImage", {
    returnValue: scVal.ScVal.schema,
    events: jsXdr.array(contractEvent.ContractEvent.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.returnValue = input.returnValue;
    this.events = input.events;
  }
  toXdrObject() {
    return {
      returnValue: this.returnValue.toXdrObject(),
      events: this.events.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new InvokeHostFunctionSuccessPreImage({
      returnValue: scVal.ScVal.fromXdrObject(wire.returnValue),
      events: wire.events.map((w) => contractEvent.ContractEvent.fromXdrObject(w))
    });
  }
}

exports.InvokeHostFunctionSuccessPreImage = InvokeHostFunctionSuccessPreImage;
//# sourceMappingURL=invoke-host-function-success-pre-image.js.map
