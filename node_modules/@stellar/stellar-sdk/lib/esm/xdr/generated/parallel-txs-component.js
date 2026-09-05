import { struct, array, UNBOUNDED_MAX_LENGTH, option, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionEnvelope } from './transaction-envelope.js';

class ParallelTxsComponent extends XdrValue {
  baseFee;
  executionStages;
  static schema = struct(
    "ParallelTxsComponent",
    {
      baseFee: option(int64()),
      executionStages: array(
        array(
          array(TransactionEnvelope.schema, UNBOUNDED_MAX_LENGTH),
          UNBOUNDED_MAX_LENGTH
        ),
        UNBOUNDED_MAX_LENGTH
      )
    }
  );
  constructor(input) {
    super();
    this.baseFee = input.baseFee;
    this.executionStages = input.executionStages;
  }
  toXdrObject() {
    return {
      baseFee: this.baseFee,
      executionStages: this.executionStages.map(
        (v) => v.map((v1) => v1.map((v2) => v2.toXdrObject()))
      )
    };
  }
  static fromXdrObject(wire) {
    return new ParallelTxsComponent({
      baseFee: wire.baseFee,
      executionStages: wire.executionStages.map(
        (w) => w.map((w1) => w1.map((w2) => TransactionEnvelope.fromXdrObject(w2)))
      )
    });
  }
}

export { ParallelTxsComponent };
//# sourceMappingURL=parallel-txs-component.js.map
