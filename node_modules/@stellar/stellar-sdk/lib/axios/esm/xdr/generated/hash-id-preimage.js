import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { EnvelopeType } from './envelope-type.js';
import { HashIdPreimageOperationId } from './hash-id-preimage-operation-id.js';
import { HashIdPreimageRevokeId } from './hash-id-preimage-revoke-id.js';
import { HashIdPreimageContractId } from './hash-id-preimage-contract-id.js';
import { HashIdPreimageSorobanAuthorization } from './hash-id-preimage-soroban-authorization.js';
import { HashIdPreimageSorobanAuthorizationWithAddress } from './hash-id-preimage-soroban-authorization-with-address.js';

class HashIdPreimageBase extends XdrValue {
  constructor() {
    super();
    if (new.target === HashIdPreimageBase) {
      throw new TypeError(
        "new xdr.HashIdPreimage(...) is not supported: XDR unions are built from per-variant factories. Call xdr.HashIdPreimage.envelopeTypeOpId(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "HashIdPreimage",
    {
      switchOn: EnvelopeType.schema,
      cases: [
        _case(
          "envelopeTypeOpId",
          6,
          field("operationId", HashIdPreimageOperationId.schema)
        ),
        _case(
          "envelopeTypePoolRevokeOpId",
          7,
          field("revokeId", HashIdPreimageRevokeId.schema)
        ),
        _case(
          "envelopeTypeContractId",
          8,
          field("contractId", HashIdPreimageContractId.schema)
        ),
        _case(
          "envelopeTypeSorobanAuthorization",
          9,
          field(
            "sorobanAuthorization",
            HashIdPreimageSorobanAuthorization.schema
          )
        ),
        _case(
          "envelopeTypeSorobanAuthorizationWithAddress",
          10,
          field(
            "sorobanAuthorizationWithAddress",
            HashIdPreimageSorobanAuthorizationWithAddress.schema
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
          HashIdPreimageOperationId.fromXdrObject(wire.operationId)
        );
      case 7:
        return new HashIdPreimagePoolRevokeOpId(
          HashIdPreimageRevokeId.fromXdrObject(wire.revokeId)
        );
      case 8:
        return new HashIdPreimageContractIdArm(
          HashIdPreimageContractId.fromXdrObject(wire.contractId)
        );
      case 9:
        return new HashIdPreimageSorobanAuthorizationArm(
          HashIdPreimageSorobanAuthorization.fromXdrObject(
            wire.sorobanAuthorization
          )
        );
      case 10:
        return new HashIdPreimageSorobanAuthorizationWithAddressArm(
          HashIdPreimageSorobanAuthorizationWithAddress.fromXdrObject(
            wire.sorobanAuthorizationWithAddress
          )
        );
    }
    throw new XdrError(
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

export { HashIdPreimage, HashIdPreimageContractIdArm, HashIdPreimageOpId, HashIdPreimagePoolRevokeOpId, HashIdPreimageSorobanAuthorizationArm, HashIdPreimageSorobanAuthorizationWithAddressArm };
//# sourceMappingURL=hash-id-preimage.js.map
