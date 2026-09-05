'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var contractCodeEntryExt = require('./contract-code-entry-ext.js');
var hash = require('./hash.js');

class ContractCodeEntry extends xdrValue.XdrValue {
  ext;
  hash;
  code;
  static schema = jsXdr.struct(
    "ContractCodeEntry",
    {
      ext: contractCodeEntryExt.ContractCodeEntryExt.schema,
      hash: hash.Hash.schema,
      code: jsXdr.varOpaque(jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.hash = input.hash instanceof hash.Hash ? input.hash : new hash.Hash(input.hash);
    this.code = input.code;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      hash: this.hash.toXdrObject(),
      code: this.code
    };
  }
  static fromXdrObject(wire) {
    return new ContractCodeEntry({
      ext: contractCodeEntryExt.ContractCodeEntryExt.fromXdrObject(wire.ext),
      hash: hash.Hash.fromXdrObject(wire.hash),
      code: wire.code
    });
  }
}

exports.ContractCodeEntry = ContractCodeEntry;
//# sourceMappingURL=contract-code-entry.js.map
