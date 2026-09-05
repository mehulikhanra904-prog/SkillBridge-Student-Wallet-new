import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { PublicKey } from './public-key.js';
import { DataValue } from './data-value.js';
import { DataEntryExt } from './data-entry-ext.js';

class DataEntry extends XdrValue {
  accountId;
  dataName;
  dataValue;
  ext;
  static schema = struct("DataEntry", {
    accountId: PublicKey.schema,
    dataName: xdrString(64),
    dataValue: DataValue.schema,
    ext: DataEntryExt.schema
  });
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.dataName = input.dataName instanceof XdrString ? input.dataName : new XdrString(input.dataName);
    this.dataValue = input.dataValue instanceof DataValue ? input.dataValue : new DataValue(input.dataValue);
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject(),
      dataName: this.dataName,
      dataValue: this.dataValue.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new DataEntry({
      accountId: PublicKey.fromXdrObject(wire.accountId),
      dataName: wire.dataName,
      dataValue: DataValue.fromXdrObject(wire.dataValue),
      ext: DataEntryExt.fromXdrObject(wire.ext)
    });
  }
}

export { DataEntry };
//# sourceMappingURL=data-entry.js.map
