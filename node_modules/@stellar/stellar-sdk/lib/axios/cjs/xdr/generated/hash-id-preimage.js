'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var envelopeType = require('./envelope-type.js');
var hashIdPreimageOperationId = require('./hash-id-preimage-operation-id.js');
var hashIdPreimageRevokeId = require('./hash-id-preimage-revoke-id.js');
var hashIdPreimageContractId = require('./hash-id-preimage-contract-id.js');
var hashIdPreimageSorobanAuthorization = require('./hash-id-preimage-soroban-authorization.js');
var hashIdPreimageSorobanAuthorizationWithAddress = require('./hash-id-preimage-soroban-authorization-with-address.js');

class HashIdPreimageBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === HashIdPreimageBase) {
      throw new TypeError(
        "new xdr.HashIdPreimage(...) is not supported: XDR unions are built from per-variant factories. Call xdr.HashIdPreimage.envelopeTypeOpId(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "HashIdPreimage",
    {
      switchOn: envelopeType.EnvelopeType.schema,
      cases: [
        jsXdr.case(
          "envelopeTypeOpId",
          6,
          jsXdr.field("operationId", hashIdPreimageOperationId.HashIdPreimageOperationId.schema)
        ),
        jsXdr.case(
          "envelopeTypePoolRevokeOpId",
          7,
          jsXdr.field("revokeId", hashIdPreimageRevokeId.HashIdPreimageRevokeId.schema)
        ),
        jsXdr.case(
          "envelopeTypeContractId",
          8,
          jsXdr.field("contractId", hashIdPreimageContractId.HashIdPreimageContractId.schema)
        ),
        jsXdr.case(
          "envelopeTypeSorobanAuthorization",
          9,
          jsXdr.field(
            "sorobanAuthorization",
            hashIdPreimageSorobanAuthorization.HashIdPreimageSorobanAuthorization.schema
          )
        ),
        jsXdr.case(
          "envelopeTypeSorobanAuthorizationWithAddress",
          10,
          jsXdr.field(
            "sorobanAuthorizationWithAddress",
            hashIdPreimageSorobanAuthorizationWithAddress.HashIdPreimageSorobanAuthorizationWithAddress.schema
          )
        )
      ]
    }
  );
  static envelopeTypeOpId(operationId) {
    return new HashIdPreimageOpId(operationId);
  }
  static envelopeTypePoolRevokeOpId(revokeId) {
    return new HashIdPreimagePoolRevokeOpId(revokeId);
  }
  static envelopeTypeContractId(contractId) {
    return new HashIdPreimageContractIdArm(contractId);
  }
  static envelopeTypeSorobanAuthorization(sorobanAuthorization) {
    return new HashIdPreimageSorobanAuthorizationArm(sorobanAuthorization);
  }
  static envelopeTypeSorobanAuthorizationWithAddress(sorobanAuthorizationWithAddress) {
    return new HashIdPreimageSorobanAuthorizationWithAddressArm(
      sorobanAuthorizationWithAddress
    );
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 6:
        return new HashIdPreimageOpId(
          hashIdPreimageOperationId.HashIdPreimageOperationId.fromXdrObject(wire.operationId)
        );
      case 7:
        return new HashIdPreimagePoolRevokeOpId(
          hashIdPreimageRevokeId.HashIdPreimageRevokeId.fromXdrObject(wire.revokeId)
        );
      case 8:
        return new HashIdPreimageContractIdArm(
          hashIdPreimageContractId.HashIdPreimageContractId.fromXdrObject(wire.contractId)
        );
      case 9:
        return new HashIdPreimageSorobanAuthorizationArm(
          hashIdPreimageSorobanAuthorization.HashIdPreimageSorobanAuthorization.fromXdrObject(
            wire.sorobanAuthorization
          )
        );
      case 10:
        return new HashIdPreimageSorobanAuthorizationWithAddressArm(
          hashIdPreimageSorobanAuthorizationWithAddress.HashIdPreimageSorobanAuthorizationWithAddress.fromXdrObject(
            wire.sorobanAuthorizationWithAddress
          )
        );
    }
    throw new jsXdr.XdrError(
      `HashIdPreimage: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete HashIdPreimage variant.
   * Use this instead of `instanceof HashIdPreimage`: the exported `HashIdPreimage` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `HashIdPreimage.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof HashIdPreimageBase;
  }
}
class HashIdPreimageOpId extends HashIdPreimageBase {
  type = "envelopeTypeOpId";
  operationId;
  constructor(operationId) {
    super();
    this.operationId = operationId;
  }
  get value() {
    return this.operationId;
  }
  toXdrObject() {
    return { type: 6, operationId: this.operationId.toXdrObject() };
  }
}
class HashIdPreimagePoolRevokeOpId extends HashIdPreimageBase {
  type = "envelopeTypePoolRevokeOpId";
  revokeId;
  constructor(revokeId) {
    super();
    this.revokeId = revokeId;
  }
  get value() {
    return this.revokeId;
  }
  toXdrObject() {
    return { type: 7, revokeId: this.revokeId.toXdrObject() };
  }
}
class HashIdPreimageContractIdArm extends HashIdPreimageBase {
  type = "envelopeTypeContractId";
  contractId;
  constructor(contractId) {
    super();
    this.contractId = contractId;
  }
  get value() {
    return this.contractId;
  }
  toXdrObject() {
    return { type: 8, contractId: this.contractId.toXdrObject() };
  }
}
class HashIdPreimageSorobanAuthorizationArm extends HashIdPreimageBase {
  type = "envelopeTypeSorobanAuthorization";
  sorobanAuthorization;
  constructor(sorobanAuthorization) {
    super();
    this.sorobanAuthorization = sorobanAuthorization;
  }
  get value() {
    return this.sorobanAuthorization;
  }
  toXdrObject() {
    return {
      type: 9,
      sorobanAuthorization: this.sorobanAuthorization.toXdrObject()
    };
  }
}
class HashIdPreimageSorobanAuthorizationWithAddressArm extends HashIdPreimageBase {
  type = "envelopeTypeSorobanAuthorizationWithAddress";
  sorobanAuthorizationWithAddress;
  constructor(sorobanAuthorizationWithAddress) {
    super();
    this.sorobanAuthorizationWithAddress = sorobanAuthorizationWithAddress;
  }
  get value() {
    return this.sorobanAuthorizationWithAddress;
  }
  toXdrObject() {
    return {
      type: 10,
      sorobanAuthorizationWithAddress: this.sorobanAuthorizationWithAddress.toXdrObject()
    };
  }
}
const HashIdPreimage = HashIdPreimageBase;

exports.HashIdPreimage = HashIdPreimage;
exports.HashIdPreimageContractIdArm = HashIdPreimageContractIdArm;
exports.HashIdPreimageOpId = HashIdPreimageOpId;
exports.HashIdPreimagePoolRevokeOpId = HashIdPreimagePoolRevokeOpId;
exports.HashIdPreimageSorobanAuthorizationArm = HashIdPreimageSorobanAuthorizationArm;
exports.HashIdPreimageSorobanAuthorizationWithAddressArm = HashIdPreimageSorobanAuthorizationWithAddressArm;
//# sourceMappingURL=hash-id-preimage.js.map
