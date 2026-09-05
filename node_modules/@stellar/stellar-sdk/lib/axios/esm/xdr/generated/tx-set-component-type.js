import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class TxSetComponentType extends EnumValue {
  static txsetCompTxsMaybeDiscountedFee = new TxSetComponentType(
    "txsetCompTxsMaybeDiscountedFee",
    0
  );
  static schema = enumType("TxSetComponentType", {
    txsetCompTxsMaybeDiscountedFee: 0
  });
  static fromValue(value) {
    return enumFromValue(
      "TxSetComponentType",
      TxSetComponentType.schema,
      TxSetComponentType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("TxSetComponentType", TxSetComponentType, name);
  }
  static fromXdrObject(wire) {
    return TxSetComponentType.fromValue(wire);
  }
}

export { TxSetComponentType };
//# sourceMappingURL=tx-set-component-type.js.map
