import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class Liabilities extends XdrValue {
  buying;
  selling;
  static schema = struct("Liabilities", {
    buying: int64(),
    selling: int64()
  });
  constructor(input) {
    super();
    this.buying = input.buying;
    this.selling = input.selling;
  }
  toXdrObject() {
    return {
      buying: this.buying,
      selling: this.selling
    };
  }
  static fromXdrObject(wire) {
    return new Liabilities({
      buying: wire.buying,
      selling: wire.selling
    });
  }
}

export { Liabilities };
//# sourceMappingURL=liabilities.js.map
