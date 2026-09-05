'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanCredentials = require('./soroban-credentials.js');
var sorobanAuthorizedInvocation = require('./soroban-authorized-invocation.js');

class SorobanAuthorizationEntry extends xdrValue.XdrValue {
  credentials;
  rootInvocation;
  static schema = jsXdr.struct(
    "SorobanAuthorizationEntry",
    {
      credentials: sorobanCredentials.SorobanCredentials.schema,
      rootInvocation: sorobanAuthorizedInvocation.SorobanAuthorizedInvocation.schema
    }
  );
  constructor(input) {
    super();
    this.credentials = input.credentials;
    this.rootInvocation = input.rootInvocation;
  }
  toXdrObject() {
    return {
      credentials: this.credentials.toXdrObject(),
      rootInvocation: this.rootInvocation.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SorobanAuthorizationEntry({
      credentials: sorobanCredentials.SorobanCredentials.fromXdrObject(wire.credentials),
      rootInvocation: sorobanAuthorizedInvocation.SorobanAuthorizedInvocation.fromXdrObject(
        wire.rootInvocation
      )
    });
  }
}

exports.SorobanAuthorizationEntry = SorobanAuthorizationEntry;
//# sourceMappingURL=soroban-authorization-entry.js.map
