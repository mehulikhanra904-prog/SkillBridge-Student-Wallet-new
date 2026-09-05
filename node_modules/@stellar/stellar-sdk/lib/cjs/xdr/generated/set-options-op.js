'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var publicKey = require('./public-key.js');
var signer = require('./signer.js');

class SetOptionsOp extends xdrValue.XdrValue {
  inflationDest;
  clearFlags;
  setFlags;
  masterWeight;
  lowThreshold;
  medThreshold;
  highThreshold;
  homeDomain;
  signer;
  static schema = jsXdr.struct("SetOptionsOp", {
    inflationDest: jsXdr.option(publicKey.PublicKey.schema),
    clearFlags: jsXdr.option(jsXdr.uint32()),
    setFlags: jsXdr.option(jsXdr.uint32()),
    masterWeight: jsXdr.option(jsXdr.uint32()),
    lowThreshold: jsXdr.option(jsXdr.uint32()),
    medThreshold: jsXdr.option(jsXdr.uint32()),
    highThreshold: jsXdr.option(jsXdr.uint32()),
    homeDomain: jsXdr.option(xdrString.xdrString(32)),
    signer: jsXdr.option(signer.Signer.schema)
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
    this.homeDomain = input.homeDomain === null ? null : input.homeDomain instanceof xdrString.XdrString ? input.homeDomain : new xdrString.XdrString(input.homeDomain);
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
      inflationDest: wire.inflationDest === null ? null : publicKey.PublicKey.fromXdrObject(wire.inflationDest),
      clearFlags: wire.clearFlags,
      setFlags: wire.setFlags,
      masterWeight: wire.masterWeight,
      lowThreshold: wire.lowThreshold,
      medThreshold: wire.medThreshold,
      highThreshold: wire.highThreshold,
      homeDomain: wire.homeDomain,
      signer: wire.signer === null ? null : signer.Signer.fromXdrObject(wire.signer)
    });
  }
}

exports.SetOptionsOp = SetOptionsOp;
//# sourceMappingURL=set-options-op.js.map
