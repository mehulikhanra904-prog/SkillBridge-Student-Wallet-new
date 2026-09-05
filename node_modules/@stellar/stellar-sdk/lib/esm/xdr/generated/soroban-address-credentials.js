import { struct, uint32, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScAddress } from './sc-address.js';
import { ScVal } from './sc-val.js';

class SorobanAddressCredentials extends XdrValue {
  address;
  nonce;
  signatureExpirationLedger;
  signature;
  static schema = struct(
    "SorobanAddressCredentials",
    {
      address: ScAddress.schema,
      nonce: int64(),
      signatureExpirationLedger: uint32(),
      signature: ScVal.schema
    }
  );
  constructor(input) {
    super();
    this.address = input.address;
    this.nonce = input.nonce;
    this.signatureExpirationLedger = input.signatureExpirationLedger;
    this.signature = input.signature;
  }
  toXdrObject() {
    return {
      address: this.address.toXdrObject(),
      nonce: this.nonce,
      signatureExpirationLedger: this.signatureExpirationLedger,
      signature: this.signature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SorobanAddressCredentials({
      address: ScAddress.fromXdrObject(wire.address),
      nonce: wire.nonce,
      signatureExpirationLedger: wire.signatureExpirationLedger,
      signature: ScVal.fromXdrObject(wire.signature)
    });
  }
}

export { SorobanAddressCredentials };
//# sourceMappingURL=soroban-address-credentials.js.map
