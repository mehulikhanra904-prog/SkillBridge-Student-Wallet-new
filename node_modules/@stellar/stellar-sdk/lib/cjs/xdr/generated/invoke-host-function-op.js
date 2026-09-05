'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hostFunction = require('./host-function.js');
var sorobanAuthorizationEntry = require('./soroban-authorization-entry.js');

class InvokeHostFunctionOp extends xdrValue.XdrValue {
  hostFunction;
  auth;
  static schema = jsXdr.struct(
    "InvokeHostFunctionOp",
    {
      hostFunction: hostFunction.HostFunction.schema,
      auth: jsXdr.array(sorobanAuthorizationEntry.SorobanAuthorizationEntry.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.hostFunction = input.hostFunction;
    this.auth = input.auth;
  }
  toXdrObject() {
    return {
      hostFunction: this.hostFunction.toXdrObject(),
      auth: this.auth.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new InvokeHostFunctionOp({
      hostFunction: hostFunction.HostFunction.fromXdrObject(wire.hostFunction),
      auth: wire.auth.map((w) => sorobanAuthorizationEntry.SorobanAuthorizationEntry.fromXdrObject(w))
    });
  }
}

exports.InvokeHostFunctionOp = InvokeHostFunctionOp;
//# sourceMappingURL=invoke-host-function-op.js.map
