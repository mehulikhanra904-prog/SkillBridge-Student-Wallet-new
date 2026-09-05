import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class SorobanCredentialsType extends EnumValue {
  static sorobanCredentialsSourceAccount = new SorobanCredentialsType(
    "sorobanCredentialsSourceAccount",
    0
  );
  static sorobanCredentialsAddress = new SorobanCredentialsType(
    "sorobanCredentialsAddress",
    1
  );
  static sorobanCredentialsAddressV2 = new SorobanCredentialsType(
    "sorobanCredentialsAddressV2",
    2
  );
  static sorobanCredentialsAddressWithDelegates = new SorobanCredentialsType("sorobanCredentialsAddressWithDelegates", 3);
  static schema = withMemberPrefix(
    enumType("SorobanCredentialsType", {
      sorobanCredentialsSourceAccount: 0,
      sorobanCredentialsAddress: 1,
      sorobanCredentialsAddressV2: 2,
      sorobanCredentialsAddressWithDelegates: 3
    }),
    "sorobanCredentials"
  );
  static fromValue(value) {
    return enumFromValue(
      "SorobanCredentialsType",
      SorobanCredentialsType.schema,
      SorobanCredentialsType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("SorobanCredentialsType", SorobanCredentialsType, name);
  }
  static fromXdrObject(wire) {
    return SorobanCredentialsType.fromValue(wire);
  }
}

export { SorobanCredentialsType };
//# sourceMappingURL=soroban-credentials-type.js.map
