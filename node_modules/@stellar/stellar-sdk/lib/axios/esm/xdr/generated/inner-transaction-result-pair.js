import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { InnerTransactionResult } from './inner-transaction-result.js';

class InnerTransactionResultPair extends XdrValue {
  transactionHash;
  result;
  static schema = struct(
    "InnerTransactionResultPair",
    {
      transactionHash: Hash.schema,
      result: InnerTransactionResult.schema
    }
  );
  constructor(input) {
    super();
    this.transactionHash = input.transactionHash instanceof Hash ? input.transactionHash : new Hash(input.transactionHash);
    this.result = input.result;
  }
  toXdrObject() {
    return {
      transactionHash: this.transactionHash.toXdrObject(),
      result: this.result.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new InnerTransactionResultPair({
      transactionHash: Hash.fromXdrObject(wire.transactionHash),
      result: InnerTransactionResult.fromXdrObject(wire.result)
    });
  }
}

export { InnerTransactionResultPair };
//# sourceMappingURL=inner-transaction-result-pair.js.map
