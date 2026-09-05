'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class TimeBounds extends xdrValue.XdrValue {
  minTime;
  maxTime;
  static schema = jsXdr.struct("TimeBounds", {
    minTime: jsXdr.uint64(),
    maxTime: jsXdr.uint64()
  });
  constructor(input) {
    super();
    this.minTime = input.minTime;
    this.maxTime = input.maxTime;
  }
  toXdrObject() {
    return {
      minTime: this.minTime,
      maxTime: this.maxTime
    };
  }
  static fromXdrObject(wire) {
    return new TimeBounds({
      minTime: wire.minTime,
      maxTime: wire.maxTime
    });
  }
}

exports.TimeBounds = TimeBounds;
//# sourceMappingURL=time-bounds.js.map
