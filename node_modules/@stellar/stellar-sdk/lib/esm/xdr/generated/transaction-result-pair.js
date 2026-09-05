import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { TransactionResult } from './transaction-result.js';

class TransactionResultPair extends XdrValue {
  transactionHash;
  result;
  static schema = struct(
    "TransactionResultPair",
    {
      transactionHash: Hash.schema,
      result: TransactionResult.schema
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
    return new TransactionResultPair({
      transactionHash: Hash.fromXdrObject(wire.transactionHash),
      result: TransactionResult.fromXdrObject(wire.result)
    });
  }
}

export { TransactionResultPair };
//# sourceMappingURL=transaction-result-pair.js.map
