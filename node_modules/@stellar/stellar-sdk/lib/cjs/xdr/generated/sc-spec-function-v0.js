'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scSpecFunctionInputV0 = require('./sc-spec-function-input-v0.js');
var scSpecTypeDef = require('./sc-spec-type-def.js');

class ScSpecFunctionV0 extends xdrValue.XdrValue {
  doc;
  name;
  inputs;
  outputs;
  static schema = jsXdr.struct(
    "ScSpecFunctionV0",
    {
      doc: xdrString.xdrString(1024),
      name: xdrString.xdrString(32),
      inputs: jsXdr.array(scSpecFunctionInputV0.ScSpecFunctionInputV0.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      outputs: jsXdr.array(scSpecTypeDef.ScSpecTypeDef.schema, 1)
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof xdrString.XdrString ? input.doc : new xdrString.XdrString(input.doc);
    this.name = input.name instanceof xdrString.XdrString ? input.name : new xdrString.XdrString(input.name);
    this.inputs = input.inputs;
    this.outputs = input.outputs;
  }
  toXdrObject() {
    return {
      doc: this.doc,
      name: this.name,
      inputs: this.inputs.map((v) => v.toXdrObject()),
      outputs: this.outputs.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecFunctionV0({
      doc: wire.doc,
      name: wire.name,
      inputs: wire.inputs.map((w) => scSpecFunctionInputV0.ScSpecFunctionInputV0.fromXdrObject(w)),
      outputs: wire.outputs.map((w) => scSpecTypeDef.ScSpecTypeDef.fromXdrObject(w))
    });
  }
}

exports.ScSpecFunctionV0 = ScSpecFunctionV0;
//# sourceMappingURL=sc-spec-function-v0.js.map
