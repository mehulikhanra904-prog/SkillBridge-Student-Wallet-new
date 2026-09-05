import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PeerAddressIp } from './peer-address-ip.js';

class PeerAddress extends XdrValue {
  ip;
  port;
  numFailures;
  static schema = struct("PeerAddress", {
    ip: PeerAddressIp.schema,
    port: uint32(),
    numFailures: uint32()
  });
  constructor(input) {
    super();
    this.ip = input.ip;
    this.port = input.port;
    this.numFailures = input.numFailures;
  }
  toXdrObject() {
    return {
      ip: this.ip.toXdrObject(),
      port: this.port,
      numFailures: this.numFailures
    };
  }
  static fromXdrObject(wire) {
    return new PeerAddress({
      ip: PeerAddressIp.fromXdrObject(wire.ip),
      port: wire.port,
      numFailures: wire.numFailures
    });
  }
}

export { PeerAddress };
//# sourceMappingURL=peer-address.js.map
