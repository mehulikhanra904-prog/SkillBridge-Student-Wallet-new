'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class TransactionEventStage extends enumValue.EnumValue {
  static transactionEventStageBeforeAllTxs = new TransactionEventStage(
    "transactionEventStageBeforeAllTxs",
    0
  );
  static transactionEventStageAfterTx = new TransactionEventStage(
    "transactionEventStageAfterTx",
    1
  );
  static transactionEventStageAfterAllTxs = new TransactionEventStage(
    "transactionEventStageAfterAllTxs",
    2
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("TransactionEventStage", {
      transactionEventStageBeforeAllTxs: 0,
      transactionEventStageAfterTx: 1,
      transactionEventStageAfterAllTxs: 2
    }),
    "transactionEventStage"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "TransactionEventStage",
      TransactionEventStage.schema,
      TransactionEventStage,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("TransactionEventStage", TransactionEventStage, name);
  }
  static fromXdrObject(wire) {
    return TransactionEventStage.fromValue(wire);
  }
}

exports.TransactionEventStage = TransactionEventStage;
//# sourceMappingURL=transaction-event-stage.js.map
