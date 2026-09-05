import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class IpAddrType extends EnumValue {
  static iPv4 = new IpAddrType("iPv4", 0);
  static iPv6 = new IpAddrType("iPv6", 1);
  static schema = enumType("IpAddrType", {
    iPv4: 0,
    iPv6: 1
  });
  static fromValue(value) {
    return enumFromValue("IpAddrType", IpAddrType.schema, IpAddrType, value);
  }
  static fromName(name) {
    return enumFromName("IpAddrType", IpAddrType, name);
  }
  static fromXdrObject(wire) {
    return IpAddrType.fromValue(wire);
  }
}

export { IpAddrType };
//# sourceMappingURL=ip-addr-type.js.map
