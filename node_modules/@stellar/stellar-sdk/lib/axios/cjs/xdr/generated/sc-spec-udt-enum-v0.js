'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scSpecUdtEnumCaseV0 = require('./sc-spec-udt-enum-case-v0.js');

class ScSpecUdtEnumV0 extends xdrValue.XdrValue {
  doc;
  lib;
  name;
  cases;
  static schema = jsXdr.struct(
    "ScSpecUdtEnumV0",
    {
      doc: xdrString.xdrString(1024),
      lib: xdrString.xdrString(80),
      name: xdrString.xdrString(60),
      cases: jsXdr.array(scSpecUdtEnumCaseV0.ScSpecUdtEnumCaseV0.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
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
    return new ScSpecUdtEnumV0({
      doc: wire.doc,
      lib: wire.lib,
      name: wire.name,
      cases: wire.cases.map((w) => scSpecUdtEnumCaseV0.ScSpecUdtEnumCaseV0.fromXdrObject(w))
    });
  }
}

exports.ScSpecUdtEnumV0 = ScSpecUdtEnumV0;
//# sourceMappingURL=sc-spec-udt-enum-v0.js.map
