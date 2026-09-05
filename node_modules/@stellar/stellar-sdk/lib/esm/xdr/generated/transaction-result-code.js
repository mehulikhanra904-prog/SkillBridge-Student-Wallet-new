import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class TransactionResultCode extends EnumValue {
  static txFeeBumpInnerSuccess = new TransactionResultCode(
    "txFeeBumpInnerSuccess",
    1
  );
  static txSuccess = new TransactionResultCode("txSuccess", 0);
  static txFailed = new TransactionResultCode("txFailed", -1);
  static txTooEarly = new TransactionResultCode("txTooEarly", -2);
  static txTooLate = new TransactionResultCode("txTooLate", -3);
  static txMissingOperation = new TransactionResultCode(
    "txMissingOperation",
    -4
  );
  static txBadSeq = new TransactionResultCode("txBadSeq", -5);
  static txBadAuth = new TransactionResultCode("txBadAuth", -6);
  static txInsufficientBalance = new TransactionResultCode(
    "txInsufficientBalance",
    -7
  );
  static txNoAccount = new TransactionResultCode("txNoAccount", -8);
  static txInsufficientFee = new TransactionResultCode(
    "txInsufficientFee",
    -9
  );
  static txBadAuthExtra = new TransactionResultCode(
    "txBadAuthExtra",
    -10
  );
  static txInternalError = new TransactionResultCode(
    "txInternalError",
    -11
  );
  static txNotSupported = new TransactionResultCode(
    "txNotSupported",
    -12
  );
  static txFeeBumpInnerFailed = new TransactionResultCode(
    "txFeeBumpInnerFailed",
    -13
  );
  static txBadSponsorship = new TransactionResultCode(
    "txBadSponsorship",
    -14
  );
  static txBadMinSeqAgeOrGap = new TransactionResultCode(
    "txBadMinSeqAgeOrGap",
    -15
  );
  static txMalformed = new TransactionResultCode("txMalformed", -16);
  static txSorobanInvalid = new TransactionResultCode(
    "txSorobanInvalid",
    -17
  );
  static txFrozenKeyAccessed = new TransactionResultCode(
    "txFrozenKeyAccessed",
    -18
  );
  static schema = enumType("TransactionResultCode", {
    txFeeBumpInnerSuccess: 1,
    txSuccess: 0,
    txFailed: -1,
    txTooEarly: -2,
    txTooLate: -3,
    txMissingOperation: -4,
    txBadSeq: -5,
    txBadAuth: -6,
    txInsufficientBalance: -7,
    txNoAccount: -8,
    txInsufficientFee: -9,
    txBadAuthExtra: -10,
    txInternalError: -11,
    txNotSupported: -12,
    txFeeBumpInnerFailed: -13,
    txBadSponsorship: -14,
    txBadMinSeqAgeOrGap: -15,
    txMalformed: -16,
    txSorobanInvalid: -17,
    txFrozenKeyAccessed: -18
  });
  static fromValue(value) {
    return enumFromValue(
      "TransactionResultCode",
      TransactionResultCode.schema,
      TransactionResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName("TransactionResultCode", TransactionResultCode, name);
  }
  static fromXdrObject(wire) {
    return TransactionResultCode.fromValue(wire);
  }
}

export { TransactionResultCode };
//# sourceMappingURL=transaction-result-code.js.map
