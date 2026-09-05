'use strict';

var operations = require('../util/operations.js');
require('../../xdr/index.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function endSponsoringFutureReserves(opts = {}) {
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.endSponsoringFutureReserves()
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.endSponsoringFutureReserves = endSponsoringFutureReserves;
//# sourceMappingURL=end_sponsoring_future_reserves.js.map
