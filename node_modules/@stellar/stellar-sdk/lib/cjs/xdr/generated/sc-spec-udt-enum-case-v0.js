'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');

class ScSpecUdtEnumCaseV0 extends xdrValue.XdrValue {
  doc;
  name;
  value;
  static schema = jsXdr.struct(
    "ScSpecUdtEnumCaseV0",
    {
      doc: xdrString.xdrString(1024),
      name: xdrString.xdrString(60),
      value: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof xdrString.XdrString ? input.doc : new xdrString.XdrString(input.doc);
    this.name = input.name instanceof xdrString.XdrString ? input.name : new xdrString.XdrString(input.name);
    this.value = input.value;
  }
  toXdrObject() {
    return {
      doc: this.doc,
      name: this.name,
      value: this.value
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecUdtEnumCaseV0({
      doc: wire.doc,
      name: wire.name,
      value: wire.value
    });
  }
}

exports.ScSpecUdtEnumCaseV0 = ScSpecUdtEnumCaseV0;
//# sourceMappingURL=sc-spec-udt-enum-case-v0.js.map
