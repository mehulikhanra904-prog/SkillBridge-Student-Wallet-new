import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionResultPair } from './transaction-result-pair.js';

class TransactionResultSet extends XdrValue {
  results;
  static schema = struct(
    "TransactionResultSet",
    {
      results: array(TransactionResultPair.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.results = input.results;
  }
  toXdrObject() {
    return {
      results: this.results.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionResultSet({
      results: wire.results.map((w) => TransactionResultPair.fromXdrObject(w))
    });
  }
}

export { TransactionResultSet };
//# sourceMappingURL=transaction-result-set.js.map
