'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scSpecUdtStructFieldV0 = require('./sc-spec-udt-struct-field-v0.js');

class ScSpecUdtStructV0 extends xdrValue.XdrValue {
  doc;
  lib;
  name;
  fields;
  static schema = jsXdr.struct(
    "ScSpecUdtStructV0",
    {
      doc: xdrString.xdrString(1024),
      lib: xdrString.xdrString(80),
      name: xdrString.xdrString(60),
      fields: jsXdr.array(scSpecUdtStructFieldV0.ScSpecUdtStructFieldV0.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof xdrString.XdrString ? input.doc : new xdrString.XdrString(input.doc);
    this.lib = input.lib instanceof xdrString.XdrString ? input.lib : new xdrString.XdrString(input.lib);
    this.name = input.name instanceof xdrString.XdrString ? input.name : new xdrString.XdrString(input.name);
    this.fields = input.fields;
  }
  toXdrObject() {
    return {
      doc: this.doc,
      lib: this.lib,
      name: this.name,
      fields: this.fields.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecUdtStructV0({
      doc: wire.doc,
      lib: wire.lib,
      name: wire.name,
      fields: wire.fields.map((w) => scSpecUdtStructFieldV0.ScSpecUdtStructFieldV0.fromXdrObject(w))
    });
  }
}

exports.ScSpecUdtStructV0 = ScSpecUdtStructV0;
//# sourceMappingURL=sc-spec-udt-struct-v0.js.map
