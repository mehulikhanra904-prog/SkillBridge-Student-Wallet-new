import { struct, option, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { PublicKey } from './public-key.js';
import { Signer } from './signer.js';

class SetOptionsOp extends XdrValue {
  inflationDest;
  clearFlags;
  setFlags;
  masterWeight;
  lowThreshold;
  medThreshold;
  highThreshold;
  homeDomain;
  signer;
  static schema = struct("SetOptionsOp", {
    inflationDest: option(PublicKey.schema),
    clearFlags: option(uint32()),
    setFlags: option(uint32()),
    masterWeight: option(uint32()),
    lowThreshold: option(uint32()),
    medThreshold: option(uint32()),
    highThreshold: option(uint32()),
    homeDomain: option(xdrString(32)),
    signer: option(Signer.schema)
  });
  constructor(input) {
    super();
    this.inflationDest = input.inflationDest;
    this.clearFlags = input.clearFlags;
    this.setFlags = input.setFlags;
    this.masterWeight = input.masterWeight;
    this.lowThreshold = input.lowThreshold;
    this.medThreshold = input.medThreshold;
    this.highThreshold = input.highThreshold;
    this.homeDomain = input.homeDomain === null ? null : input.homeDomain instanceof XdrString ? input.homeDomain : new XdrString(input.homeDomain);
    this.signer = input.signer;
  }
  toXdrObject() {
    return {
      inflationDest: this.inflationDest === null ? null : this.inflationDest.toXdrObject(),
      clearFlags: this.clearFlags,
      setFlags: this.setFlags,
      masterWeight: this.masterWeight,
      lowThreshold: this.lowThreshold,
      medThreshold: this.medThreshold,
      highThreshold: this.highThreshold,
      homeDomain: this.homeDomain,
      signer: this.signer === null ? null : this.signer.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SetOptionsOp({
      inflationDest: wire.inflationDest === null ? null : PublicKey.fromXdrObject(wire.inflationDest),
      clearFlags: wire.clearFlags,
      setFlags: wire.setFlags,
      masterWeight: wire.masterWeight,
      lowThreshold: wire.lowThreshold,
      medThreshold: wire.medThreshold,
      highThreshold: wire.highThreshold,
      homeDomain: wire.homeDomain,
      signer: wire.signer === null ? null : Signer.fromXdrObject(wire.signer)
    });
  }
}

export { SetOptionsOp };
//# sourceMappingURL=set-options-op.js.map
