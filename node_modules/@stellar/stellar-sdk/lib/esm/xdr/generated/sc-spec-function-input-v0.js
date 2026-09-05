import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScSpecTypeDef } from './sc-spec-type-def.js';

class ScSpecFunctionInputV0 extends XdrValue {
  doc;
  name;
  type;
  static schema = struct(
    "ScSpecFunctionInputV0",
    {
      doc: xdrString(1024),
      name: xdrString(30),
      type: ScSpecTypeDef.schema
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof XdrString ? input.doc : new XdrString(input.doc);
    this.name = input.name instanceof XdrString ? input.name : new XdrString(input.name);
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
    return new ScSpecFunctionInputV0({
      doc: wire.doc,
      name: wire.name,
      type: ScSpecTypeDef.fromXdrObject(wire.type)
    });
  }
}

export { ScSpecFunctionInputV0 };
//# sourceMappingURL=sc-spec-function-input-v0.js.map
