import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class SendMore extends XdrValue {
  numMessages;
  static schema = struct("SendMore", {
    numMessages: uint32()
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

export { SendMore };
//# sourceMappingURL=send-more.js.map
