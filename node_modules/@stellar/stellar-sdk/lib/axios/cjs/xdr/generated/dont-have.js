'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var messageType = require('./message-type.js');
var uint256Bytes = require('./uint256-bytes.js');

class DontHave extends xdrValue.XdrValue {
  type;
  reqHash;
  static schema = jsXdr.struct("DontHave", {
    type: messageType.MessageType.schema,
    reqHash: uint256Bytes.Uint256Bytes.schema
  });
  constructor(input) {
    super();
    this.type = input.type;
    this.reqHash = input.reqHash instanceof uint256Bytes.Uint256Bytes ? input.reqHash : new uint256Bytes.Uint256Bytes(input.reqHash);
  }
  toXdrObject() {
    return {
      type: this.type.toXdrObject(),
      reqHash: this.reqHash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new DontHave({
      type: messageType.MessageType.fromXdrObject(wire.type),
      reqHash: uint256Bytes.Uint256Bytes.fromXdrObject(wire.reqHash)
    });
  }
}

exports.DontHave = DontHave;
//# sourceMappingURL=dont-have.js.map
