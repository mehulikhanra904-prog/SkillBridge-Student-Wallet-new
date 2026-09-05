import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { TransactionSignaturePayloadTaggedTransaction } from './transaction-signature-payload-tagged-transaction.js';

class TransactionSignaturePayload extends XdrValue {
  networkId;
  taggedTransaction;
  static schema = struct(
    "TransactionSignaturePayload",
    {
      networkId: Hash.schema,
      taggedTransaction: TransactionSignaturePayloadTaggedTransaction.schema
    }
  );
  constructor(input) {
    super();
    this.networkId = input.networkId instanceof Hash ? input.networkId : new Hash(input.networkId);
    this.taggedTransaction = input.taggedTransaction;
  }
  toXdrObject() {
    return {
      networkId: this.networkId.toXdrObject(),
      taggedTransaction: this.taggedTransaction.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionSignaturePayload({
      networkId: Hash.fromXdrObject(wire.networkId),
      taggedTransaction: TransactionSignaturePayloadTaggedTransaction.fromXdrObject(
        wire.taggedTransaction
      )
    });
  }
}

export { TransactionSignaturePayload };
//# sourceMappingURL=transaction-signature-payload.js.map
