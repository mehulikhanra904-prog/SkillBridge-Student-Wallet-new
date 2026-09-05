'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');

class RestoreFootprintOp extends xdrValue.XdrValue {
  ext;
  static schema = jsXdr.struct(
    "RestoreFootprintOp",
    {
      ext: extensionPoint.ExtensionPoint.schema
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new RestoreFootprintOp({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext)
    });
  }
}

exports.RestoreFootprintOp = RestoreFootprintOp;
//# sourceMappingURL=restore-footprint-op.js.map
