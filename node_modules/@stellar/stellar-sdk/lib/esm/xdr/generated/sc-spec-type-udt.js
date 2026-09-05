import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';

class ScSpecTypeUdt extends XdrValue {
  name;
  static schema = struct("ScSpecTypeUdt", {
    name: xdrString(60)
  });
  constructor(input) {
    super();
    this.name = input.name instanceof XdrString ? input.name : new XdrString(input.name);
  }
  toXdrObject() {
    return {
      name: this.name
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecTypeUdt({
      name: wire.name
    });
  }
}

export { ScSpecTypeUdt };
//# sourceMappingURL=sc-spec-type-udt.js.map
