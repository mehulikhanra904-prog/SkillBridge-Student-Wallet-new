import { struct, uint32, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { SorobanAuthorizedInvocation } from './soroban-authorized-invocation.js';

class HashIdPreimageSorobanAuthorization extends XdrValue {
  networkId;
  nonce;
  signatureExpirationLedger;
  invocation;
  static schema = struct("HashIdPreimageSorobanAuthorization", {
    networkId: Hash.schema,
    nonce: int64(),
    signatureExpirationLedger: uint32(),
    invocation: SorobanAuthorizedInvocation.schema
  });
  constructor(input) {
    super();
    this.networkId = input.networkId instanceof Hash ? input.networkId : new Hash(input.networkId);
    this.nonce = input.nonce;
    this.signatureExpirationLedger = input.signatureExpirationLedger;
    this.invocation = input.invocation;
  }
  toXdrObject() {
    return {
      networkId: this.networkId.toXdrObject(),
      nonce: this.nonce,
      signatureExpirationLedger: this.signatureExpirationLedger,
      invocation: this.invocation.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new HashIdPreimageSorobanAuthorization({
      networkId: Hash.fromXdrObject(wire.networkId),
      nonce: wire.nonce,
      signatureExpirationLedger: wire.signatureExpirationLedger,
      invocation: SorobanAuthorizedInvocation.fromXdrObject(wire.invocation)
    });
  }
}

export { HashIdPreimageSorobanAuthorization };
//# sourceMappingURL=hash-id-preimage-soroban-authorization.js.map
