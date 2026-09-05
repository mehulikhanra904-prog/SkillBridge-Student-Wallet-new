import { struct, uint32, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { ScAddress } from './sc-address.js';
import { SorobanAuthorizedInvocation } from './soroban-authorized-invocation.js';

class HashIdPreimageSorobanAuthorizationWithAddress extends XdrValue {
  networkId;
  nonce;
  signatureExpirationLedger;
  address;
  invocation;
  static schema = struct("HashIdPreimageSorobanAuthorizationWithAddress", {
    networkId: Hash.schema,
    nonce: int64(),
    signatureExpirationLedger: uint32(),
    address: ScAddress.schema,
    invocation: SorobanAuthorizedInvocation.schema
  });
  constructor(input) {
    super();
    this.networkId = input.networkId instanceof Hash ? input.networkId : new Hash(input.networkId);
    this.nonce = input.nonce;
    this.signatureExpirationLedger = input.signatureExpirationLedger;
    this.address = input.address;
    this.invocation = input.invocation;
  }
  toXdrObject() {
    return {
      networkId: this.networkId.toXdrObject(),
      nonce: this.nonce,
      signatureExpirationLedger: this.signatureExpirationLedger,
      address: this.address.toXdrObject(),
      invocation: this.invocation.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new HashIdPreimageSorobanAuthorizationWithAddress({
      networkId: Hash.fromXdrObject(wire.networkId),
      nonce: wire.nonce,
      signatureExpirationLedger: wire.signatureExpirationLedger,
      address: ScAddress.fromXdrObject(wire.address),
      invocation: SorobanAuthorizedInvocation.fromXdrObject(wire.invocation)
    });
  }
}

export { HashIdPreimageSorobanAuthorizationWithAddress };
//# sourceMappingURL=hash-id-preimage-soroban-authorization-with-address.js.map
