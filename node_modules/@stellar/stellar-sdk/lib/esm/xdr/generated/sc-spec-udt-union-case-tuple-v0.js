import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScSpecTypeDef } from './sc-spec-type-def.js';

class ScSpecUdtUnionCaseTupleV0 extends XdrValue {
  doc;
  name;
  type;
  static schema = struct(
    "ScSpecUdtUnionCaseTupleV0",
    {
      doc: xdrString(1024),
      name: xdrString(60),
      type: array(ScSpecTypeDef.schema, UNBOUNDED_MAX_LENGTH)
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
      type: this.type.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecUdtUnionCaseTupleV0({
      doc: wire.doc,
      name: wire.name,
      type: wire.type.map((w) => ScSpecTypeDef.fromXdrObject(w))
    });
  }
}

export { ScSpecUdtUnionCaseTupleV0 };
//# sourceMappingURL=sc-spec-udt-union-case-tuple-v0.js.map
