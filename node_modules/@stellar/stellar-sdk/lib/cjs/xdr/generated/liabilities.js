'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class Liabilities extends xdrValue.XdrValue {
  buying;
  selling;
  static schema = jsXdr.struct("Liabilities", {
    buying: jsXdr.int64(),
    selling: jsXdr.int64()
  });
  constructor(input) {
    super();
    this.buying = input.buying;
    this.selling = input.selling;
  }
  toXdrObject() {
    return {
      buying: this.buying,
      selling: this.selling
    };
  }
  static fromXdrObject(wire) {
    return new Liabilities({
      buying: wire.buying,
      selling: wire.selling
    });
  }
}

exports.Liabilities = Liabilities;
//# sourceMappingURL=liabilities.js.map
