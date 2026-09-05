import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScSpecUdtStructFieldV0 } from './sc-spec-udt-struct-field-v0.js';

class ScSpecUdtStructV0 extends XdrValue {
  doc;
  lib;
  name;
  fields;
  static schema = struct(
    "ScSpecUdtStructV0",
    {
      doc: xdrString(1024),
      lib: xdrString(80),
      name: xdrString(60),
      fields: array(ScSpecUdtStructFieldV0.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof XdrString ? input.doc : new XdrString(input.doc);
    this.lib = input.lib instanceof XdrString ? input.lib : new XdrString(input.lib);
    this.name = input.name instanceof XdrString ? input.name : new XdrString(input.name);
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
      fields: wire.fields.map((w) => ScSpecUdtStructFieldV0.fromXdrObject(w))
    });
  }
}

export { ScSpecUdtStructV0 };
//# sourceMappingURL=sc-spec-udt-struct-v0.js.map
