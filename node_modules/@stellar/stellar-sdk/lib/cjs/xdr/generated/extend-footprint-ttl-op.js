'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');

class ExtendFootprintTtlOp extends xdrValue.XdrValue {
  ext;
  extendTo;
  static schema = jsXdr.struct(
    "ExtendFootprintTtlOp",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      extendTo: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.extendTo = input.extendTo;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      extendTo: this.extendTo
    };
  }
  static fromXdrObject(wire) {
    return new ExtendFootprintTtlOp({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      extendTo: wire.extendTo
    });
  }
}

exports.ExtendFootprintTtlOp = ExtendFootprintTtlOp;
//# sourceMappingURL=extend-footprint-ttl-op.js.map
