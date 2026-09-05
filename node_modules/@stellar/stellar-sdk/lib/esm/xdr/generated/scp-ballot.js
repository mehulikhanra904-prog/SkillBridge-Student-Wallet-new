import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Value } from './value.js';

class ScpBallot extends XdrValue {
  counter;
  value;
  static schema = struct("ScpBallot", {
    counter: uint32(),
    value: Value.schema
  });
  constructor(input) {
    super();
    this.counter = input.counter;
    this.value = input.value instanceof Value ? input.value : new Value(input.value);
  }
  toXdrObject() {
    return {
      counter: this.counter,
      value: this.value.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScpBallot({
      counter: wire.counter,
      value: Value.fromXdrObject(wire.value)
    });
  }
}

export { ScpBallot };
//# sourceMappingURL=scp-ballot.js.map
