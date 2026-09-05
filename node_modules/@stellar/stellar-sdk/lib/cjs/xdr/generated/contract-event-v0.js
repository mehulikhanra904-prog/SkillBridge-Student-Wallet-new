'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scVal = require('./sc-val.js');

class ContractEventV0 extends xdrValue.XdrValue {
  topics;
  data;
  static schema = jsXdr.struct(
    "ContractEventV0",
    {
      topics: jsXdr.array(scVal.ScVal.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      data: scVal.ScVal.schema
    }
  );
  constructor(input) {
    super();
    this.topics = input.topics;
    this.data = input.data;
  }
  toXdrObject() {
    return {
      topics: this.topics.map((v) => v.toXdrObject()),
      data: this.data.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractEventV0({
      topics: wire.topics.map((w) => scVal.ScVal.fromXdrObject(w)),
      data: scVal.ScVal.fromXdrObject(wire.data)
    });
  }
}

exports.ContractEventV0 = ContractEventV0;
//# sourceMappingURL=contract-event-v0.js.map
