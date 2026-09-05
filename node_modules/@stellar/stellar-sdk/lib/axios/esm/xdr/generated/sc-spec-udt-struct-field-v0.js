import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScSpecTypeDef } from './sc-spec-type-def.js';

class ScSpecUdtStructFieldV0 extends XdrValue {
  doc;
  name;
  type;
  static schema = struct(
    "ScSpecUdtStructFieldV0",
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
    return new ScSpecUdtStructFieldV0({
      doc: wire.doc,
      name: wire.name,
      type: ScSpecTypeDef.fromXdrObject(wire.type)
    });
  }
}

export { ScSpecUdtStructFieldV0 };
//# sourceMappingURL=sc-spec-udt-struct-field-v0.js.map
