'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scSpecTypeDef = require('./sc-spec-type-def.js');

class ScSpecUdtStructFieldV0 extends xdrValue.XdrValue {
  doc;
  name;
  type;
  static schema = jsXdr.struct(
    "ScSpecUdtStructFieldV0",
    {
      doc: xdrString.xdrString(1024),
      name: xdrString.xdrString(30),
      type: scSpecTypeDef.ScSpecTypeDef.schema
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
      type: this.type.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecUdtStructFieldV0({
      doc: wire.doc,
      name: wire.name,
      type: scSpecTypeDef.ScSpecTypeDef.fromXdrObject(wire.type)
    });
  }
}

exports.ScSpecUdtStructFieldV0 = ScSpecUdtStructFieldV0;
//# sourceMappingURL=sc-spec-udt-struct-field-v0.js.map
