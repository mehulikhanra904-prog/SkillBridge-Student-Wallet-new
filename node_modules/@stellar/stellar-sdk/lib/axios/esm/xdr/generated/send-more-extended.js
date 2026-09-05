import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class SendMoreExtended extends XdrValue {
  numMessages;
  numBytes;
  static schema = struct(
    "SendMoreExtended",
    {
      numMessages: uint32(),
      numBytes: uint32()
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

export { SendMoreExtended };
//# sourceMappingURL=send-more-extended.js.map
