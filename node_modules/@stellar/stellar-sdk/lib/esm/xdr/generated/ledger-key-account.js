import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';

class LedgerKeyAccount extends XdrValue {
  accountId;
  static schema = struct(
    "LedgerKeyAccount",
    {
      accountId: PublicKey.schema
    }
  );
  constructor(input) {
    super();
    this.accountId = input.accountId;
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyAccount({
      accountId: PublicKey.fromXdrObject(wire.accountId)
    });
  }
}

export { LedgerKeyAccount };
//# sourceMappingURL=ledger-key-account.js.map
