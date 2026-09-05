'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');
var contractId = require('./contract-id.js');
var contractEventType = require('./contract-event-type.js');
var contractEventBody = require('./contract-event-body.js');

class ContractEvent extends xdrValue.XdrValue {
  ext;
  contractId;
  type;
  body;
  static schema = jsXdr.struct("ContractEvent", {
    ext: extensionPoint.ExtensionPoint.schema,
    contractId: jsXdr.option(contractId.ContractId.schema),
    type: contractEventType.ContractEventType.schema,
    body: contractEventBody.ContractEventBody.schema
  });
  constructor(input) {
    super();
    this.ext = input.ext;
    this.contractId = input.contractId;
    this.type = input.type;
    this.body = input.body;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      contractId: this.contractId === null ? null : this.contractId.toXdrObject(),
      type: this.type.toXdrObject(),
      body: this.body.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractEvent({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      contractId: wire.contractId === null ? null : contractId.ContractId.fromXdrObject(wire.contractId),
      type: contractEventType.ContractEventType.fromXdrObject(wire.type),
      body: contractEventBody.ContractEventBody.fromXdrObject(wire.body)
    });
  }
}

exports.ContractEvent = ContractEvent;
//# sourceMappingURL=contract-event.js.map
