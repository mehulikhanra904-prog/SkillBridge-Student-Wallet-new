import '../../xdr/index.js';
import { Keypair } from '../keypair.js';
import { StrKey } from '../strkey.js';
import { stringToUint8Array } from 'uint8array-extras';
import { setSourceAccount } from '../util/operations.js';
import { AssetCode } from '../../xdr/generated/asset-code.js';
import { AssetCode4 } from '../../xdr/generated/asset-code4.js';
import { AssetCode12 } from '../../xdr/generated/asset-code12.js';
import { TrustLineFlags } from '../../xdr/generated/trust-line-flags.js';
import { AllowTrustOp } from '../../xdr/generated/allow-trust-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function allowTrust(opts) {
  if (!StrKey.isValidEd25519PublicKey(opts.trustor)) {
    throw new Error("trustor is invalid");
  }
  const trustor = Keypair.fromPublicKey(opts.trustor).xdrAccountId();
  let asset;
  if (opts.assetCode.length <= 4) {
    const code = stringToUint8Array(opts.assetCode.padEnd(4, "\0"));
    asset = AssetCode.assetTypeCreditAlphanum4(new AssetCode4(code));
  } else if (opts.assetCode.length <= 12) {
    const code = stringToUint8Array(opts.assetCode.padEnd(12, "\0"));
    asset = AssetCode.assetTypeCreditAlphanum12(new AssetCode12(code));
  } else {
    throw new Error("Asset code must be 12 characters at max.");
  }
  let authorize;
  if (typeof opts.authorize === "boolean") {
    if (opts.authorize) {
      authorize = TrustLineFlags.authorizedFlag.value;
    } else {
      authorize = 0;
    }
  } else if (opts.authorize == null) {
    throw new Error("authorize is required");
  } else {
    authorize = opts.authorize;
  }
  const allowTrustOp = new AllowTrustOp({
    trustor,
    asset,
    authorize
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.allowTrust(allowTrustOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { allowTrust };
//# sourceMappingURL=allow_trust.js.map
