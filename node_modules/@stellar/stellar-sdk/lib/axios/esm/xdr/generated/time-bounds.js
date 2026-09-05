import { struct, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class TimeBounds extends XdrValue {
  minTime;
  maxTime;
  static schema = struct("TimeBounds", {
    minTime: uint64(),
    maxTime: uint64()
  });
  constructor(input) {
    super();
    this.minTime = input.minTime;
    this.maxTime = input.maxTime;
  }
  toXdrObject() {
    return {
      minTime: this.minTime,
      maxTime: this.maxTime
    };
  }
  static fromXdrObject(wire) {
    return new TimeBounds({
      minTime: wire.minTime,
      maxTime: wire.maxTime
    });
  }
}

export { TimeBounds };
//# sourceMappingURL=time-bounds.js.map
