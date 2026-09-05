import '../../xdr/index.js';
import { Keypair } from '../keypair.js';
import { setSourceAccount } from '../util/operations.js';
import { SetTrustLineFlagsOp } from '../../xdr/generated/set-trust-line-flags-op.js';
import { TrustLineFlags } from '../../xdr/generated/trust-line-flags.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function setTrustLineFlags(opts) {
  if (typeof opts.flags !== "object" || Object.keys(opts.flags).length === 0) {
    throw new Error("opts.flags must be a map of boolean flags to modify");
  }
  const mapping = {
    authorized: TrustLineFlags.authorizedFlag,
    authorizedToMaintainLiabilities: TrustLineFlags.authorizedToMaintainLiabilitiesFlag,
    clawbackEnabled: TrustLineFlags.trustlineClawbackEnabledFlag
  };
  let clearFlag = 0;
  let setFlag = 0;
  Object.keys(opts.flags).forEach((flagName) => {
    if (!Object.prototype.hasOwnProperty.call(mapping, flagName)) {
      throw new Error(`unsupported flag name specified: ${flagName}`);
    }
    const flagValue = opts.flags[flagName];
    const bit = mapping[flagName];
    if (!bit) {
      throw new Error(`Invalid flag name: ${flagName}`);
    }
    if (typeof flagValue !== "boolean" && typeof flagValue !== "undefined") {
      throw new TypeError(
        `opts.flags.${flagName} must be a boolean (got ${typeof flagValue})`
      );
    }
    if (flagValue === true) {
      setFlag |= bit.value;
    } else if (flagValue === false) {
      clearFlag |= bit.value;
    }
  });
  const trustor = Keypair.fromPublicKey(opts.trustor).xdrAccountId();
  const asset = opts.asset.toXdrObject();
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.setTrustLineFlags(
      new SetTrustLineFlagsOp({
        trustor,
        asset,
        clearFlags: clearFlag,
        setFlags: setFlag
      })
    )
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { setTrustLineFlags };
//# sourceMappingURL=set_trustline_flags.js.map
