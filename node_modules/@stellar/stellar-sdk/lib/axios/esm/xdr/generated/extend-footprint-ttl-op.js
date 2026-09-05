import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';

class ExtendFootprintTtlOp extends XdrValue {
  ext;
  extendTo;
  static schema = struct(
    "ExtendFootprintTtlOp",
    {
      ext: ExtensionPoint.schema,
      extendTo: uint32()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.extendTo = input.extendTo;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      extendTo: this.extendTo
    };
  }
  static fromXdrObject(wire) {
    return new ExtendFootprintTtlOp({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      extendTo: wire.extendTo
    });
  }
}

export { ExtendFootprintTtlOp };
//# sourceMappingURL=extend-footprint-ttl-op.js.map
