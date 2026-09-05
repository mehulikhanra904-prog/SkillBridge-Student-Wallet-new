'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ScMetaKind extends enumValue.EnumValue {
  static scMetaV0 = new ScMetaKind("scMetaV0", 0);
  static schema = jsXdr.enumType("ScMetaKind", {
    scMetaV0: 0
  });
  static fromValue(value) {
    return enumValue.enumFromValue("ScMetaKind", ScMetaKind.schema, ScMetaKind, value);
  }
  static fromName(name) {
    return enumValue.enumFromName("ScMetaKind", ScMetaKind, name);
  }
  static fromXdrObject(wire) {
    return ScMetaKind.fromValue(wire);
  }
}

exports.ScMetaKind = ScMetaKind;
//# sourceMappingURL=sc-meta-kind.js.map
