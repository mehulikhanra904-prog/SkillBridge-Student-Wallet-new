'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class Auth extends xdrValue.XdrValue {
  flags;
  static schema = jsXdr.struct("Auth", {
    flags: jsXdr.int32()
  });
  constructor(input) {
    super();
    this.flags = input.flags;
  }
  toXdrObject() {
    return {
      flags: this.flags
    };
  }
  static fromXdrObject(wire) {
    return new Auth({
      flags: wire.flags
    });
  }
}

exports.Auth = Auth;
//# sourceMappingURL=auth.js.map
