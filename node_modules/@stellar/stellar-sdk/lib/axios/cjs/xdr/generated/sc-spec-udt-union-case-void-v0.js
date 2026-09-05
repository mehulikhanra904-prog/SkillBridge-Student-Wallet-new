'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');

class ScSpecUdtUnionCaseVoidV0 extends xdrValue.XdrValue {
  doc;
  name;
  static schema = jsXdr.struct(
    "ScSpecUdtUnionCaseVoidV0",
    {
      doc: xdrString.xdrString(1024),
      name: xdrString.xdrString(60)
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof xdrString.XdrString ? input.doc : new xdrString.XdrString(input.doc);
    this.name = input.name instanceof xdrString.XdrString ? input.name : new xdrString.XdrString(input.name);
  }
  toXdrObject() {
    return {
      doc: this.doc,
      name: this.name
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecUdtUnionCaseVoidV0({
      doc: wire.doc,
      name: wire.name
    });
  }
}

exports.ScSpecUdtUnionCaseVoidV0 = ScSpecUdtUnionCaseVoidV0;
//# sourceMappingURL=sc-spec-udt-union-case-void-v0.js.map
