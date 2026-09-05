import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScVal } from './sc-val.js';

class ContractEventV0 extends XdrValue {
  topics;
  data;
  static schema = struct(
    "ContractEventV0",
    {
      topics: array(ScVal.schema, UNBOUNDED_MAX_LENGTH),
      data: ScVal.schema
    }
  );
  constructor(input) {
    super();
    this.topics = input.topics;
    this.data = input.data;
  }
  toXdrObject() {
    return {
      topics: this.topics.map((v) => v.toXdrObject()),
      data: this.data.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractEventV0({
      topics: wire.topics.map((w) => ScVal.fromXdrObject(w)),
      data: ScVal.fromXdrObject(wire.data)
    });
  }
}

export { ContractEventV0 };
//# sourceMappingURL=contract-event-v0.js.map
