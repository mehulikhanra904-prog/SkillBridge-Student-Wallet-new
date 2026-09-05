'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class UpgradeType extends bytesValue.BytesValue {
  static encoding = "hex";
  static schema = jsXdr.varOpaque(128, "UpgradeType");
  static fromXdrObject(wire) {
    return new UpgradeType(wire);
  }
}

exports.UpgradeType = UpgradeType;
//# sourceMappingURL=upgrade-type.js.map
