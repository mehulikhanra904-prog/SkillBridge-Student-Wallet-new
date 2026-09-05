'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scSpecUdtUnionCaseV0 = require('./sc-spec-udt-union-case-v0.js');

class ScSpecUdtUnionV0 extends xdrValue.XdrValue {
  doc;
  lib;
  name;
  cases;
  static schema = jsXdr.struct(
    "ScSpecUdtUnionV0",
    {
      doc: xdrString.xdrString(1024),
      lib: xdrString.xdrString(80),
      name: xdrString.xdrString(60),
      cases: jsXdr.array(scSpecUdtUnionCaseV0.ScSpecUdtUnionCaseV0.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof xdrString.XdrString ? input.doc : new xdrString.XdrString(input.doc);
    this.lib = input.lib instanceof xdrString.XdrString ? input.lib : new xdrString.XdrString(input.lib);
    this.name = input.name instanceof xdrString.XdrString ? input.name : new xdrString.XdrString(input.name);
    this.cases = input.cases;
  }
  toXdrObject() {
    return {
      doc: this.doc,
      lib: this.lib,
      name: this.name,
      cases: this.cases.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecUdtUnionV0({
      doc: wire.doc,
      lib: wire.lib,
      name: wire.name,
      cases: wire.cases.map((w) => scSpecUdtUnionCaseV0.ScSpecUdtUnionCaseV0.fromXdrObject(w))
    });
  }
}

exports.ScSpecUdtUnionV0 = ScSpecUdtUnionV0;
//# sourceMappingURL=sc-spec-udt-union-v0.js.map
