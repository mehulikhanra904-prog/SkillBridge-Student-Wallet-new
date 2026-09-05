import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class EndSponsoringFutureReservesResultCode extends EnumValue {
  static endSponsoringFutureReservesSuccess = new EndSponsoringFutureReservesResultCode(
    "endSponsoringFutureReservesSuccess",
    0
  );
  static endSponsoringFutureReservesNotSponsored = new EndSponsoringFutureReservesResultCode(
    "endSponsoringFutureReservesNotSponsored",
    -1
  );
  static schema = withMemberPrefix(
    enumType("EndSponsoringFutureReservesResultCode", {
      endSponsoringFutureReservesSuccess: 0,
      endSponsoringFutureReservesNotSponsored: -1
    }),
    "endSponsoringFutureReserves"
  );
  static fromValue(value) {
    return enumFromValue(
      "EndSponsoringFutureReservesResultCode",
      EndSponsoringFutureReservesResultCode.schema,
      EndSponsoringFutureReservesResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "EndSponsoringFutureReservesResultCode",
      EndSponsoringFutureReservesResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return EndSponsoringFutureReservesResultCode.fromValue(wire);
  }
}

export { EndSponsoringFutureReservesResultCode };
//# sourceMappingURL=end-sponsoring-future-reserves-result-code.js.map
