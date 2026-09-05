'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class TxSetComponentType extends enumValue.EnumValue {
  static txsetCompTxsMaybeDiscountedFee = new TxSetComponentType(
    "txsetCompTxsMaybeDiscountedFee",
    0
  );
  static schema = jsXdr.enumType("TxSetComponentType", {
    txsetCompTxsMaybeDiscountedFee: 0
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "TxSetComponentType",
      TxSetComponentType.schema,
      TxSetComponentType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("TxSetComponentType", TxSetComponentType, name);
  }
  static fromXdrObject(wire) {
    return TxSetComponentType.fromValue(wire);
  }
}

exports.TxSetComponentType = TxSetComponentType;
//# sourceMappingURL=tx-set-component-type.js.map
