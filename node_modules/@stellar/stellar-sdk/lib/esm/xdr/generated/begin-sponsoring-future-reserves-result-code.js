import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class BeginSponsoringFutureReservesResultCode extends EnumValue {
  static beginSponsoringFutureReservesSuccess = new BeginSponsoringFutureReservesResultCode(
    "beginSponsoringFutureReservesSuccess",
    0
  );
  static beginSponsoringFutureReservesMalformed = new BeginSponsoringFutureReservesResultCode(
    "beginSponsoringFutureReservesMalformed",
    -1
  );
  static beginSponsoringFutureReservesAlreadySponsored = new BeginSponsoringFutureReservesResultCode(
    "beginSponsoringFutureReservesAlreadySponsored",
    -2
  );
  static beginSponsoringFutureReservesRecursive = new BeginSponsoringFutureReservesResultCode(
    "beginSponsoringFutureReservesRecursive",
    -3
  );
  static schema = withMemberPrefix(
    enumType("BeginSponsoringFutureReservesResultCode", {
      beginSponsoringFutureReservesSuccess: 0,
      beginSponsoringFutureReservesMalformed: -1,
      beginSponsoringFutureReservesAlreadySponsored: -2,
      beginSponsoringFutureReservesRecursive: -3
    }),
    "beginSponsoringFutureReserves"
  );
  static fromValue(value) {
    return enumFromValue(
      "BeginSponsoringFutureReservesResultCode",
      BeginSponsoringFutureReservesResultCode.schema,
      BeginSponsoringFutureReservesResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "BeginSponsoringFutureReservesResultCode",
      BeginSponsoringFutureReservesResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return BeginSponsoringFutureReservesResultCode.fromValue(wire);
  }
}

export { BeginSponsoringFutureReservesResultCode };
//# sourceMappingURL=begin-sponsoring-future-reserves-result-code.js.map
