import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScVal } from './sc-val.js';
import { ContractEvent } from './contract-event.js';

class InvokeHostFunctionSuccessPreImage extends XdrValue {
  returnValue;
  events;
  static schema = struct("InvokeHostFunctionSuccessPreImage", {
    returnValue: ScVal.schema,
    events: array(ContractEvent.schema, UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.returnValue = input.returnValue;
    this.events = input.events;
  }
  toXdrObject() {
    return {
      returnValue: this.returnValue.toXdrObject(),
      events: this.events.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new InvokeHostFunctionSuccessPreImage({
      returnValue: ScVal.fromXdrObject(wire.returnValue),
      events: wire.events.map((w) => ContractEvent.fromXdrObject(w))
    });
  }
}

export { InvokeHostFunctionSuccessPreImage };
//# sourceMappingURL=invoke-host-function-success-pre-image.js.map
