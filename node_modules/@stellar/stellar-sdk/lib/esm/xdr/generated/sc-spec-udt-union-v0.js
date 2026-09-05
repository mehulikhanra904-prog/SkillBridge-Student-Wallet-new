import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScSpecUdtUnionCaseV0 } from './sc-spec-udt-union-case-v0.js';

class ScSpecUdtUnionV0 extends XdrValue {
  doc;
  lib;
  name;
  cases;
  static schema = struct(
    "ScSpecUdtUnionV0",
    {
      doc: xdrString(1024),
      lib: xdrString(80),
      name: xdrString(60),
      cases: array(ScSpecUdtUnionCaseV0.schema, UNBOUNDED_MAX_LENGTH)
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
    return new ScSpecUdtUnionV0({
      doc: wire.doc,
      lib: wire.lib,
      name: wire.name,
      cases: wire.cases.map((w) => ScSpecUdtUnionCaseV0.fromXdrObject(w))
    });
  }
}

export { ScSpecUdtUnionV0 };
//# sourceMappingURL=sc-spec-udt-union-v0.js.map
