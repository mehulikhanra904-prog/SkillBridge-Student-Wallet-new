'use strict';

var operations = require('../util/operations.js');
require('../../xdr/index.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function inflation(opts = {}) {
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.inflation()
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.inflation = inflation;
//# sourceMappingURL=inflation.js.map
