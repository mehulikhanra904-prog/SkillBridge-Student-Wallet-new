import { struct, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { StellarMessage } from './stellar-message.js';
import { HmacSha256Mac } from './hmac-sha256-mac.js';

class AuthenticatedMessageV0 extends XdrValue {
  sequence;
  message;
  mac;
  static schema = struct(
    "AuthenticatedMessageV0",
    {
      sequence: uint64(),
      message: StellarMessage.schema,
      mac: HmacSha256Mac.schema
    }
  );
  constructor(input) {
    super();
    this.sequence = input.sequence;
    this.message = input.message;
    this.mac = input.mac;
  }
  toXdrObject() {
    return {
      sequence: this.sequence,
      message: this.message.toXdrObject(),
      mac: this.mac.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AuthenticatedMessageV0({
      sequence: wire.sequence,
      message: StellarMessage.fromXdrObject(wire.message),
      mac: HmacSha256Mac.fromXdrObject(wire.mac)
    });
  }
}

export { AuthenticatedMessageV0 };
//# sourceMappingURL=authenticated-message-v0.js.map
