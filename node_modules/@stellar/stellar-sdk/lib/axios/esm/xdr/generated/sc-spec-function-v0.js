import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScSpecFunctionInputV0 } from './sc-spec-function-input-v0.js';
import { ScSpecTypeDef } from './sc-spec-type-def.js';

class ScSpecFunctionV0 extends XdrValue {
  doc;
  name;
  inputs;
  outputs;
  static schema = struct(
    "ScSpecFunctionV0",
    {
      doc: xdrString(1024),
      name: xdrString(32),
      inputs: array(ScSpecFunctionInputV0.schema, UNBOUNDED_MAX_LENGTH),
      outputs: array(ScSpecTypeDef.schema, 1)
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof XdrString ? input.doc : new XdrString(input.doc);
    this.name = input.name instanceof XdrString ? input.name : new XdrString(input.name);
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
      inputs: wire.inputs.map((w) => ScSpecFunctionInputV0.fromXdrObject(w)),
      outputs: wire.outputs.map((w) => ScSpecTypeDef.fromXdrObject(w))
    });
  }
}

export { ScSpecFunctionV0 };
//# sourceMappingURL=sc-spec-function-v0.js.map
