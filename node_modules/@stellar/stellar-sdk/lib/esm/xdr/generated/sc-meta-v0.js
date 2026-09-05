import { struct, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';

class ScMetaV0 extends XdrValue {
  key;
  val;
  static schema = struct("ScMetaV0", {
    key: xdrString(UNBOUNDED_MAX_LENGTH),
    val: xdrString(UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.key = input.key instanceof XdrString ? input.key : new XdrString(input.key);
    this.val = input.val instanceof XdrString ? input.val : new XdrString(input.val);
  }
  toXdrObject() {
    return {
      key: this.key,
      val: this.val
    };
  }
  static fromXdrObject(wire) {
    return new ScMetaV0({
      key: wire.key,
      val: wire.val
    });
  }
}

export { ScMetaV0 };
//# sourceMappingURL=sc-meta-v0.js.map
