'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scAddress = require('./sc-address.js');

class ContractExecutableExternalRef extends xdrValue.XdrValue {
  executableOwner;
  tag;
  static schema = jsXdr.struct(
    "ContractExecutableExternalRef",
    {
      executableOwner: scAddress.ScAddress.schema,
      tag: xdrString.xdrString(jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.executableOwner = input.executableOwner;
    this.tag = input.tag instanceof xdrString.XdrString ? input.tag : new xdrString.XdrString(input.tag);
  }
  toXdrObject() {
    return {
      executableOwner: this.executableOwner.toXdrObject(),
      tag: this.tag
    };
  }
  static fromXdrObject(wire) {
    return new ContractExecutableExternalRef({
      executableOwner: scAddress.ScAddress.fromXdrObject(wire.executableOwner),
      tag: wire.tag
    });
  }
}

exports.ContractExecutableExternalRef = ContractExecutableExternalRef;
//# sourceMappingURL=contract-executable-external-ref.js.map
