'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class SendMore extends xdrValue.XdrValue {
  numMessages;
  static schema = jsXdr.struct("SendMore", {
    numMessages: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.numMessages = input.numMessages;
  }
  toXdrObject() {
    return {
      numMessages: this.numMessages
    };
  }
  static fromXdrObject(wire) {
    return new SendMore({
      numMessages: wire.numMessages
    });
  }
}

exports.SendMore = SendMore;
//# sourceMappingURL=send-more.js.map
