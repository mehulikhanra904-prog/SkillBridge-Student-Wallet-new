import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { SignerKey as SignerKey$1 } from './signer-key.js';

class RevokeSponsorshipOpSigner extends XdrValue {
  accountId;
  signerKey;
  static schema = struct(
    "RevokeSponsorshipOpSigner",
    {
      accountId: PublicKey.schema,
      signerKey: SignerKey$1.schema
    }
  );
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.signerKey = input.signerKey;
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject(),
      signerKey: this.signerKey.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new RevokeSponsorshipOpSigner({
      accountId: PublicKey.fromXdrObject(wire.accountId),
      signerKey: SignerKey$1.fromXdrObject(wire.signerKey)
    });
  }
}

export { RevokeSponsorshipOpSigner };
//# sourceMappingURL=revoke-sponsorship-op-signer.js.map
