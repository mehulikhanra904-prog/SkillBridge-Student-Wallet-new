import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';

class RestoreFootprintOp extends XdrValue {
  ext;
  static schema = struct(
    "RestoreFootprintOp",
    {
      ext: ExtensionPoint.schema
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new RestoreFootprintOp({
      ext: ExtensionPoint.fromXdrObject(wire.ext)
    });
  }
}

export { RestoreFootprintOp };
//# sourceMappingURL=restore-footprint-op.js.map
