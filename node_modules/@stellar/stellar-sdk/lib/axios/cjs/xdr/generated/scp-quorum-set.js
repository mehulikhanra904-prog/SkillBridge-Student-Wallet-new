'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');

class ScpQuorumSet extends xdrValue.XdrValue {
  threshold;
  validators;
  innerSets;
  static schema = jsXdr.struct("ScpQuorumSet", {
    threshold: jsXdr.uint32(),
    validators: jsXdr.array(publicKey.PublicKey.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
    innerSets: jsXdr.array(
      jsXdr.lazy(() => ScpQuorumSet.schema),
      jsXdr.UNBOUNDED_MAX_LENGTH
    )
  });
  constructor(input) {
    super();
    this.threshold = input.threshold;
    this.validators = input.validators;
    this.innerSets = input.innerSets;
  }
  toXdrObject() {
    return {
      threshold: this.threshold,
      validators: this.validators.map((v) => v.toXdrObject()),
      innerSets: this.innerSets.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScpQuorumSet({
      threshold: wire.threshold,
      validators: wire.validators.map((w) => publicKey.PublicKey.fromXdrObject(w)),
      innerSets: wire.innerSets.map((w) => ScpQuorumSet.fromXdrObject(w))
    });
  }
}

exports.ScpQuorumSet = ScpQuorumSet;
//# sourceMappingURL=scp-quorum-set.js.map
