'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanAuthorizedFunction = require('./soroban-authorized-function.js');

class SorobanAuthorizedInvocation extends xdrValue.XdrValue {
  function;
  subInvocations;
  static schema = jsXdr.struct(
    "SorobanAuthorizedInvocation",
    {
      function: sorobanAuthorizedFunction.SorobanAuthorizedFunction.schema,
      subInvocations: jsXdr.array(
        jsXdr.lazy(() => SorobanAuthorizedInvocation.schema),
        jsXdr.UNBOUNDED_MAX_LENGTH
      )
    }
  );
  constructor(input) {
    super();
    this.function = input.function;
    this.subInvocations = input.subInvocations;
  }
  toXdrObject() {
    return {
      function: this.function.toXdrObject(),
      subInvocations: this.subInvocations.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new SorobanAuthorizedInvocation({
      function: sorobanAuthorizedFunction.SorobanAuthorizedFunction.fromXdrObject(wire.function),
      subInvocations: wire.subInvocations.map(
        (w) => SorobanAuthorizedInvocation.fromXdrObject(w)
      )
    });
  }
}

exports.SorobanAuthorizedInvocation = SorobanAuthorizedInvocation;
//# sourceMappingURL=soroban-authorized-invocation.js.map
