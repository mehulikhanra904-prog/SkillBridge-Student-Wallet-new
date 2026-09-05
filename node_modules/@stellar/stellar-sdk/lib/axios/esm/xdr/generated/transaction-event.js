import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionEventStage } from './transaction-event-stage.js';
import { ContractEvent } from './contract-event.js';

class TransactionEvent extends XdrValue {
  stage;
  event;
  static schema = struct(
    "TransactionEvent",
    {
      stage: TransactionEventStage.schema,
      event: ContractEvent.schema
    }
  );
  constructor(input) {
    super();
    this.stage = input.stage;
    this.event = input.event;
  }
  toXdrObject() {
    return {
      stage: this.stage.toXdrObject(),
      event: this.event.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionEvent({
      stage: TransactionEventStage.fromXdrObject(wire.stage),
      event: ContractEvent.fromXdrObject(wire.event)
    });
  }
}

export { TransactionEvent };
//# sourceMappingURL=transaction-event.js.map
