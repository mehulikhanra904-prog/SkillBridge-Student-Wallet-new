'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');

class HashIdPreimageOperationId extends xdrValue.XdrValue {
  sourceAccount;
  seqNum;
  opNum;
  static schema = jsXdr.struct(
    "HashIdPreimageOperationId",
    {
      sourceAccount: publicKey.PublicKey.schema,
      seqNum: jsXdr.int64(),
      opNum: jsXdr.uint32()
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
      sourceAccount: publicKey.PublicKey.fromXdrObject(wire.sourceAccount),
      seqNum: wire.seqNum,
      opNum: wire.opNum
    });
  }
}

exports.HashIdPreimageOperationId = HashIdPreimageOperationId;
//# sourceMappingURL=hash-id-preimage-operation-id.js.map
