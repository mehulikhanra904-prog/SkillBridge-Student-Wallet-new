import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';

class ScSpecUdtUnionCaseVoidV0 extends XdrValue {
  doc;
  name;
  static schema = struct(
    "ScSpecUdtUnionCaseVoidV0",
    {
      doc: xdrString(1024),
      name: xdrString(60)
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof XdrString ? input.doc : new XdrString(input.doc);
    this.name = input.name instanceof XdrString ? input.name : new XdrString(input.name);
  }
  toXdrObject() {
    return {
      doc: this.doc,
      name: this.name
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecUdtUnionCaseVoidV0({
      doc: wire.doc,
      name: wire.name
    });
  }
}

export { ScSpecUdtUnionCaseVoidV0 };
//# sourceMappingURL=sc-spec-udt-union-case-void-v0.js.map
