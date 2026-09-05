import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class TransactionEventStage extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("TransactionEventStage", {
      transactionEventStageBeforeAllTxs: 0,
      transactionEventStageAfterTx: 1,
      transactionEventStageAfterAllTxs: 2
    }),
    "transactionEventStage"
  );
  static fromValue(value) {
    return enumFromValue(
      "TransactionEventStage",
      TransactionEventStage.schema,
      TransactionEventStage,
      value
    );
  }
  static fromName(name) {
    return enumFromName("TransactionEventStage", TransactionEventStage, name);
  }
  static fromXdrObject(wire) {
    return TransactionEventStage.fromValue(wire);
  }
}

export { TransactionEventStage };
//# sourceMappingURL=transaction-event-stage.js.map
