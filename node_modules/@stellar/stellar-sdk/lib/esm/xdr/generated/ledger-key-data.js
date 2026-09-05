import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { PublicKey } from './public-key.js';

class LedgerKeyData extends XdrValue {
  accountId;
  dataName;
  static schema = struct("LedgerKeyData", {
    accountId: PublicKey.schema,
    dataName: xdrString(64)
  });
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.dataName = input.dataName instanceof XdrString ? input.dataName : new XdrString(input.dataName);
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject(),
      dataName: this.dataName
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyData({
      accountId: PublicKey.fromXdrObject(wire.accountId),
      dataName: wire.dataName
    });
  }
}

export { LedgerKeyData };
//# sourceMappingURL=ledger-key-data.js.map
