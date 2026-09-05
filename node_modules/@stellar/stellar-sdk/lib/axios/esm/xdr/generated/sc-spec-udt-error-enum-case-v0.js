import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';

class ScSpecUdtErrorEnumCaseV0 extends XdrValue {
  doc;
  name;
  value;
  static schema = struct(
    "ScSpecUdtErrorEnumCaseV0",
    {
      doc: xdrString(1024),
      name: xdrString(60),
      value: uint32()
    }
  );
  constructor(input) {
    super();
    this.doc = input.doc instanceof XdrString ? input.doc : new XdrString(input.doc);
    this.name = input.name instanceof XdrString ? input.name : new XdrString(input.name);
    this.value = input.value;
  }
  toXdrObject() {
    return {
      doc: this.doc,
      name: this.name,
      value: this.value
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecUdtErrorEnumCaseV0({
      doc: wire.doc,
      name: wire.name,
      value: wire.value
    });
  }
}

export { ScSpecUdtErrorEnumCaseV0 };
//# sourceMappingURL=sc-spec-udt-error-enum-case-v0.js.map
