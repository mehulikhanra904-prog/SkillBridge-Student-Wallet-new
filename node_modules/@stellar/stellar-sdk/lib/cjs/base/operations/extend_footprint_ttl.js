'use strict';

var operations = require('../util/operations.js');
require('../../xdr/index.js');
var extendFootprintTtlOp = require('../../xdr/generated/extend-footprint-ttl-op.js');
var extensionPoint = require('../../xdr/generated/extension-point.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function extendFootprintTtl(opts) {
  if ((opts.extendTo ?? -1) <= 0) {
    throw new RangeError("extendTo has to be positive");
  }
  const extendFootprintOp = new extendFootprintTtlOp.ExtendFootprintTtlOp({
    ext: extensionPoint.ExtensionPoint.v0(),
    extendTo: opts.extendTo
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.extendFootprintTtl(extendFootprintOp)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.extendFootprintTtl = extendFootprintTtl;
//# sourceMappingURL=extend_footprint_ttl.js.map
