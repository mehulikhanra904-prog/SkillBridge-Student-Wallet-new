'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var errorCode = require('./error-code.js');

class Error extends xdrValue.XdrValue {
  code;
  msg;
  static schema = jsXdr.struct("Error", {
    code: errorCode.ErrorCode.schema,
    msg: xdrString.xdrString(100)
  });
  constructor(input) {
    super();
    this.code = input.code;
    this.msg = input.msg instanceof xdrString.XdrString ? input.msg : new xdrString.XdrString(input.msg);
  }
  toXdrObject() {
    return {
      code: this.code.toXdrObject(),
      msg: this.msg
    };
  }
  static fromXdrObject(wire) {
    return new Error({
      code: errorCode.ErrorCode.fromXdrObject(wire.code),
      msg: wire.msg
    });
  }
}

exports.Error = Error;
//# sourceMappingURL=error.js.map
