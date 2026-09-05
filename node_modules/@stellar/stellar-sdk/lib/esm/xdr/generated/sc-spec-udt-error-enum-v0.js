import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScSpecUdtErrorEnumCaseV0 } from './sc-spec-udt-error-enum-case-v0.js';

class ScSpecUdtErrorEnumV0 extends XdrValue {
  doc;
  lib;
  name;
  cases;
  static schema = struct(
    "ScSpecUdtErrorEnumV0",
    {
      doc: xdrString(1024),
      lib: xdrString(80),
      name: xdrString(60),
      cases: array(ScSpecUdtErrorEnumCaseV0.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof XdrString ? input.doc : new XdrString(input.doc);
    this.lib = input.lib instanceof XdrString ? input.lib : new XdrString(input.lib);
    this.name = input.name instanceof XdrString ? input.name : new XdrString(input.name);
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
    return new ScSpecUdtErrorEnumV0({
      doc: wire.doc,
      lib: wire.lib,
      name: wire.name,
      cases: wire.cases.map((w) => ScSpecUdtErrorEnumCaseV0.fromXdrObject(w))
    });
  }
}

export { ScSpecUdtErrorEnumV0 };
//# sourceMappingURL=sc-spec-udt-error-enum-v0.js.map
