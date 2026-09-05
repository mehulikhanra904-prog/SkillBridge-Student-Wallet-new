'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var poolId = require('./pool-id.js');
var asset = require('./asset.js');

class HashIdPreimageRevokeId extends xdrValue.XdrValue {
  sourceAccount;
  seqNum;
  opNum;
  liquidityPoolId;
  asset;
  static schema = jsXdr.struct(
    "HashIdPreimageRevokeId",
    {
      sourceAccount: publicKey.PublicKey.schema,
      seqNum: jsXdr.int64(),
      opNum: jsXdr.uint32(),
      liquidityPoolId: poolId.PoolId.schema,
      asset: asset.Asset.schema
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
      sourceAccount: publicKey.PublicKey.fromXdrObject(wire.sourceAccount),
      seqNum: wire.seqNum,
      opNum: wire.opNum,
      liquidityPoolId: poolId.PoolId.fromXdrObject(wire.liquidityPoolId),
      asset: asset.Asset.fromXdrObject(wire.asset)
    });
  }
}

exports.HashIdPreimageRevokeId = HashIdPreimageRevokeId;
//# sourceMappingURL=hash-id-preimage-revoke-id.js.map
