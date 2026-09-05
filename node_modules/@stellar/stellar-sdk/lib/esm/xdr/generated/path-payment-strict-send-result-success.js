import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimAtom } from './claim-atom.js';
import { SimplePaymentResult } from './simple-payment-result.js';

class PathPaymentStrictSendResultSuccess extends XdrValue {
  offers;
  last;
  static schema = struct("PathPaymentStrictSendResultSuccess", {
    offers: array(ClaimAtom.schema, UNBOUNDED_MAX_LENGTH),
    last: SimplePaymentResult.schema
  });
  constructor(input) {
    super();
    this.offers = input.offers;
    this.last = input.last;
  }
  toXdrObject() {
    return {
      offers: this.offers.map((v) => v.toXdrObject()),
      last: this.last.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new PathPaymentStrictSendResultSuccess({
      offers: wire.offers.map((w) => ClaimAtom.fromXdrObject(w)),
      last: SimplePaymentResult.fromXdrObject(wire.last)
    });
  }
}

export { PathPaymentStrictSendResultSuccess };
//# sourceMappingURL=path-payment-strict-send-result-success.js.map
