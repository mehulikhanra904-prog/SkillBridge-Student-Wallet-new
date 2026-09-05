'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class IpAddrType extends enumValue.EnumValue {
  static iPv4 = new IpAddrType("iPv4", 0);
  static iPv6 = new IpAddrType("iPv6", 1);
  static schema = jsXdr.enumType("IpAddrType", {
    iPv4: 0,
    iPv6: 1
  });
  static fromValue(value) {
    return enumValue.enumFromValue("IpAddrType", IpAddrType.schema, IpAddrType, value);
  }
  static fromName(name) {
    return enumValue.enumFromName("IpAddrType", IpAddrType, name);
  }
  static fromXdrObject(wire) {
    return IpAddrType.fromValue(wire);
  }
}

exports.IpAddrType = IpAddrType;
//# sourceMappingURL=ip-addr-type.js.map
