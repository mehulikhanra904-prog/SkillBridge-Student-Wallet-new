'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ScEnvMetaKind extends enumValue.EnumValue {
  static scEnvMetaKindInterfaceVersion = new ScEnvMetaKind(
    "scEnvMetaKindInterfaceVersion",
    0
  );
  static schema = jsXdr.enumType("ScEnvMetaKind", {
    scEnvMetaKindInterfaceVersion: 0
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ScEnvMetaKind",
      ScEnvMetaKind.schema,
      ScEnvMetaKind,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ScEnvMetaKind", ScEnvMetaKind, name);
  }
  static fromXdrObject(wire) {
    return ScEnvMetaKind.fromValue(wire);
  }
}

exports.ScEnvMetaKind = ScEnvMetaKind;
//# sourceMappingURL=sc-env-meta-kind.js.map
