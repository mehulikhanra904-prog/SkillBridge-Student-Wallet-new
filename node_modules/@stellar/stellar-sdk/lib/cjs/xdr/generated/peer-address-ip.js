'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ipAddrType = require('./ip-addr-type.js');

class PeerAddressIpBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === PeerAddressIpBase) {
      throw new TypeError(
        "new xdr.PeerAddressIp(...) is not supported: XDR unions are built from per-variant factories. Call xdr.PeerAddressIp.iPv4(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("PeerAddressIp", {
    switchOn: ipAddrType.IpAddrType.schema,
    cases: [
      jsXdr.case("iPv4", 0, jsXdr.field("ipv4", jsXdr.opaque(4))),
      jsXdr.case("iPv6", 1, jsXdr.field("ipv6", jsXdr.opaque(16)))
    ]
  });
  static iPv4(ipv4) {
    return new PeerAddressIpIPv4(ipv4);
  }
  static iPv6(ipv6) {
    return new PeerAddressIpIPv6(ipv6);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new PeerAddressIpIPv4(wire.ipv4);
      case 1:
        return new PeerAddressIpIPv6(wire.ipv6);
    }
    throw new jsXdr.XdrError(
      `PeerAddressIp: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete PeerAddressIp variant.
   * Use this instead of `instanceof PeerAddressIp`: the exported `PeerAddressIp` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `PeerAddressIp.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof PeerAddressIpBase;
  }
}
class PeerAddressIpIPv4 extends PeerAddressIpBase {
  type = "iPv4";
  ipv4;
  constructor(ipv4) {
    super();
    this.ipv4 = ipv4;
  }
  get value() {
    return this.ipv4;
  }
  toXdrObject() {
    return { type: 0, ipv4: this.ipv4 };
  }
}
class PeerAddressIpIPv6 extends PeerAddressIpBase {
  type = "iPv6";
  ipv6;
  constructor(ipv6) {
    super();
    this.ipv6 = ipv6;
  }
  get value() {
    return this.ipv6;
  }
  toXdrObject() {
    return { type: 1, ipv6: this.ipv6 };
  }
}
const PeerAddressIp = PeerAddressIpBase;

exports.PeerAddressIp = PeerAddressIp;
exports.PeerAddressIpIPv4 = PeerAddressIpIPv4;
exports.PeerAddressIpIPv6 = PeerAddressIpIPv6;
//# sourceMappingURL=peer-address-ip.js.map
