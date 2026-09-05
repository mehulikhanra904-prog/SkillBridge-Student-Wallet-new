'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scSpecTypeDef = require('./sc-spec-type-def.js');

class ScSpecUdtUnionCaseTupleV0 extends xdrValue.XdrValue {
  doc;
  name;
  type;
  static schema = jsXdr.struct(
    "ScSpecUdtUnionCaseTupleV0",
    {
      doc: xdrString.xdrString(1024),
      name: xdrString.xdrString(60),
      type: jsXdr.array(scSpecTypeDef.ScSpecTypeDef.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof xdrString.XdrString ? input.doc : new xdrString.XdrString(input.doc);
    this.name = input.name instanceof xdrString.XdrString ? input.name : new xdrString.XdrString(input.name);
    this.type = input.type;
  }
  toXdrObject() {
    return {
      doc: this.doc,
      name: this.name,
      type: this.type.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecUdtUnionCaseTupleV0({
      doc: wire.doc,
      name: wire.name,
      type: wire.type.map((w) => scSpecTypeDef.ScSpecTypeDef.fromXdrObject(w))
    });
  }
}

exports.ScSpecUdtUnionCaseTupleV0 = ScSpecUdtUnionCaseTupleV0;
//# sourceMappingURL=sc-spec-udt-union-case-tuple-v0.js.map
