'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');

class ScSpecTypeUdt extends xdrValue.XdrValue {
  name;
  static schema = jsXdr.struct("ScSpecTypeUdt", {
    name: xdrString.xdrString(60)
  });
  constructor(input) {
    super();
    this.name = input.name instanceof xdrString.XdrString ? input.name : new xdrString.XdrString(input.name);
  }
  toXdrObject() {
    return {
      name: this.name
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecTypeUdt({
      name: wire.name
    });
  }
}

exports.ScSpecTypeUdt = ScSpecTypeUdt;
//# sourceMappingURL=sc-spec-type-udt.js.map
