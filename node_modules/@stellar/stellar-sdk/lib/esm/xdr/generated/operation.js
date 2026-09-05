import { struct, option } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { MuxedAccount } from './muxed-account.js';
import { OperationBody } from './operation-body.js';

class Operation extends XdrValue {
  sourceAccount;
  body;
  static schema = struct("Operation", {
    sourceAccount: option(MuxedAccount.schema),
    body: OperationBody.schema
  });
  constructor(input) {
    super();
    this.sourceAccount = input.sourceAccount;
    this.body = input.body;
  }
  toXdrObject() {
    return {
      sourceAccount: this.sourceAccount === null ? null : this.sourceAccount.toXdrObject(),
      body: this.body.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new Operation({
      sourceAccount: wire.sourceAccount === null ? null : MuxedAccount.fromXdrObject(wire.sourceAccount),
      body: OperationBody.fromXdrObject(wire.body)
    });
  }
}

export { Operation };
//# sourceMappingURL=operation.js.map
