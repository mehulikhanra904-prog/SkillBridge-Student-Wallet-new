import { struct, option } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { DataValue } from './data-value.js';

class ManageDataOp extends XdrValue {
  dataName;
  dataValue;
  static schema = struct("ManageDataOp", {
    dataName: xdrString(64),
    dataValue: option(DataValue.schema)
  });
  constructor(input) {
    super();
    this.dataName = input.dataName instanceof XdrString ? input.dataName : new XdrString(input.dataName);
    this.dataValue = input.dataValue === null ? null : input.dataValue instanceof DataValue ? input.dataValue : new DataValue(input.dataValue);
  }
  toXdrObject() {
    return {
      dataName: this.dataName,
      dataValue: this.dataValue === null ? null : this.dataValue.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ManageDataOp({
      dataName: wire.dataName,
      dataValue: wire.dataValue === null ? null : DataValue.fromXdrObject(wire.dataValue)
    });
  }
}

export { ManageDataOp };
//# sourceMappingURL=manage-data-op.js.map
