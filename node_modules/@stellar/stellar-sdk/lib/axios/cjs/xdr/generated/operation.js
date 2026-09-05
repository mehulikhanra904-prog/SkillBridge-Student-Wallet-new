'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var muxedAccount = require('./muxed-account.js');
var operationBody = require('./operation-body.js');

class Operation extends xdrValue.XdrValue {
  sourceAccount;
  body;
  static schema = jsXdr.struct("Operation", {
    sourceAccount: jsXdr.option(muxedAccount.MuxedAccount.schema),
    body: operationBody.OperationBody.schema
  });
  constructor(input) {
    super();
    this.sourceAccount = input.sourceAccount;
    this.body = input.body;
  }
  toXdrObject() {
    return {
      sourceAccount: this.sourceAccount === null ? null : this.sourceAccount.toXdrObject(),
      body: this.body.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new Operation({
      sourceAccount: wire.sourceAccount === null ? null : muxedAccount.MuxedAccount.fromXdrObject(wire.sourceAccount),
      body: operationBody.OperationBody.fromXdrObject(wire.body)
    });
  }
}

exports.Operation = Operation;
//# sourceMappingURL=operation.js.map
