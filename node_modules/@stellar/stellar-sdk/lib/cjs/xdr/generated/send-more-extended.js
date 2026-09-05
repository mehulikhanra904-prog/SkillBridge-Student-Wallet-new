'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class SendMoreExtended extends xdrValue.XdrValue {
  numMessages;
  numBytes;
  static schema = jsXdr.struct(
    "SendMoreExtended",
    {
      numMessages: jsXdr.uint32(),
      numBytes: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.numMessages = input.numMessages;
    this.numBytes = input.numBytes;
  }
  toXdrObject() {
    return {
      numMessages: this.numMessages,
      numBytes: this.numBytes
    };
  }
  static fromXdrObject(wire) {
    return new SendMoreExtended({
      numMessages: wire.numMessages,
      numBytes: wire.numBytes
    });
  }
}

exports.SendMoreExtended = SendMoreExtended;
//# sourceMappingURL=send-more-extended.js.map
