'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class SorobanResourcesExtV0 extends xdrValue.XdrValue {
  archivedSorobanEntries;
  static schema = jsXdr.struct(
    "SorobanResourcesExtV0",
    {
      archivedSorobanEntries: jsXdr.array(jsXdr.uint32(), jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.archivedSorobanEntries = input.archivedSorobanEntries;
  }
  toXdrObject() {
    return {
      archivedSorobanEntries: this.archivedSorobanEntries
    };
  }
  static fromXdrObject(wire) {
    return new SorobanResourcesExtV0({
      archivedSorobanEntries: wire.archivedSorobanEntries
    });
  }
}

exports.SorobanResourcesExtV0 = SorobanResourcesExtV0;
//# sourceMappingURL=soroban-resources-ext-v0.js.map
