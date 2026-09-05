import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { MessageType } from './message-type.js';
import { Uint256Bytes } from './uint256-bytes.js';

class DontHave extends XdrValue {
  type;
  reqHash;
  static schema = struct("DontHave", {
    type: MessageType.schema,
    reqHash: Uint256Bytes.schema
  });
  constructor(input) {
    super();
    this.type = input.type;
    this.reqHash = input.reqHash instanceof Uint256Bytes ? input.reqHash : new Uint256Bytes(input.reqHash);
  }
  toXdrObject() {
    return {
      type: this.type.toXdrObject(),
      reqHash: this.reqHash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new DontHave({
      type: MessageType.fromXdrObject(wire.type),
      reqHash: Uint256Bytes.fromXdrObject(wire.reqHash)
    });
  }
}

export { DontHave };
//# sourceMappingURL=dont-have.js.map
