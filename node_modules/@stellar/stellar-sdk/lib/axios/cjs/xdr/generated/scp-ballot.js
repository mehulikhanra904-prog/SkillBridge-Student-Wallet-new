'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var value = require('./value.js');

class ScpBallot extends xdrValue.XdrValue {
  counter;
  value;
  static schema = jsXdr.struct("ScpBallot", {
    counter: jsXdr.uint32(),
    value: value.Value.schema
  });
  constructor(input) {
    super();
    this.counter = input.counter;
    this.value = input.value instanceof value.Value ? input.value : new value.Value(input.value);
  }
  toXdrObject() {
    return {
      counter: this.counter,
      value: this.value.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScpBallot({
      counter: wire.counter,
      value: value.Value.fromXdrObject(wire.value)
    });
  }
}

exports.ScpBallot = ScpBallot;
//# sourceMappingURL=scp-ballot.js.map
