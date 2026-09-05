import { struct, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Curve25519Public } from './curve25519-public.js';
import { Signature } from './signature.js';

class AuthCert extends XdrValue {
  pubkey;
  expiration;
  sig;
  static schema = struct("AuthCert", {
    pubkey: Curve25519Public.schema,
    expiration: uint64(),
    sig: Signature.schema
  });
  constructor(input) {
    super();
    this.pubkey = input.pubkey;
    this.expiration = input.expiration;
    this.sig = input.sig instanceof Signature ? input.sig : new Signature(input.sig);
  }
  toXdrObject() {
    return {
      pubkey: this.pubkey.toXdrObject(),
      expiration: this.expiration,
      sig: this.sig.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AuthCert({
      pubkey: Curve25519Public.fromXdrObject(wire.pubkey),
      expiration: wire.expiration,
      sig: Signature.fromXdrObject(wire.sig)
    });
  }
}

export { AuthCert };
//# sourceMappingURL=auth-cert.js.map
