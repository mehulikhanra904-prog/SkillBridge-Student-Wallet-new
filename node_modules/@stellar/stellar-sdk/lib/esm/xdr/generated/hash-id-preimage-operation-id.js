import { struct, uint32, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';

class HashIdPreimageOperationId extends XdrValue {
  sourceAccount;
  seqNum;
  opNum;
  static schema = struct(
    "HashIdPreimageOperationId",
    {
      sourceAccount: PublicKey.schema,
      seqNum: int64(),
      opNum: uint32()
    }
  );
  constructor(input) {
    super();
    this.sourceAccount = input.sourceAccount;
    this.seqNum = input.seqNum;
    this.opNum = input.opNum;
  }
  toXdrObject() {
    return {
      sourceAccount: this.sourceAccount.toXdrObject(),
      seqNum: this.seqNum,
      opNum: this.opNum
    };
  }
  static fromXdrObject(wire) {
    return new HashIdPreimageOperationId({
      sourceAccount: PublicKey.fromXdrObject(wire.sourceAccount),
      seqNum: wire.seqNum,
      opNum: wire.opNum
    });
  }
}

export { HashIdPreimageOperationId };
//# sourceMappingURL=hash-id-preimage-operation-id.js.map
