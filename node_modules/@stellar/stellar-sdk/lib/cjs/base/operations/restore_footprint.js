'use strict';

var operations = require('../util/operations.js');
require('../../xdr/index.js');
var restoreFootprintOp = require('../../xdr/generated/restore-footprint-op.js');
var extensionPoint = require('../../xdr/generated/extension-point.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function restoreFootprint(opts = {}) {
  const op = new restoreFootprintOp.RestoreFootprintOp({
    ext: extensionPoint.ExtensionPoint.v0()
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.restoreFootprint(op)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.restoreFootprint = restoreFootprint;
//# sourceMappingURL=restore_footprint.js.map
