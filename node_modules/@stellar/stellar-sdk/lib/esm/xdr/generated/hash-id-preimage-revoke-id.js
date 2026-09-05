import { struct, uint32, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { PoolId } from './pool-id.js';
import { Asset as Asset$1 } from './asset.js';

class HashIdPreimageRevokeId extends XdrValue {
  sourceAccount;
  seqNum;
  opNum;
  liquidityPoolId;
  asset;
  static schema = struct(
    "HashIdPreimageRevokeId",
    {
      sourceAccount: PublicKey.schema,
      seqNum: int64(),
      opNum: uint32(),
      liquidityPoolId: PoolId.schema,
      asset: Asset$1.schema
    }
  );
  constructor(input) {
    super();
    this.sourceAccount = input.sourceAccount;
    this.seqNum = input.seqNum;
    this.opNum = input.opNum;
    this.liquidityPoolId = input.liquidityPoolId;
    this.asset = input.asset;
  }
  toXdrObject() {
    return {
      sourceAccount: this.sourceAccount.toXdrObject(),
      seqNum: this.seqNum,
      opNum: this.opNum,
      liquidityPoolId: this.liquidityPoolId.toXdrObject(),
      asset: this.asset.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new HashIdPreimageRevokeId({
      sourceAccount: PublicKey.fromXdrObject(wire.sourceAccount),
      seqNum: wire.seqNum,
      opNum: wire.opNum,
      liquidityPoolId: PoolId.fromXdrObject(wire.liquidityPoolId),
      asset: Asset$1.fromXdrObject(wire.asset)
    });
  }
}

export { HashIdPreimageRevokeId };
//# sourceMappingURL=hash-id-preimage-revoke-id.js.map
