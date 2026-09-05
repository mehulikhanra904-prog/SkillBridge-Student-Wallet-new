'use strict';

require('../../xdr/index.js');
var strkey = require('../strkey.js');
var keypair = require('../keypair.js');
var operations = require('../util/operations.js');
var beginSponsoringFutureReservesOp = require('../../xdr/generated/begin-sponsoring-future-reserves-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function beginSponsoringFutureReserves(opts) {
  if (!strkey.StrKey.isValidEd25519PublicKey(opts.sponsoredId)) {
    throw new Error("sponsoredId is invalid");
  }
  const op = new beginSponsoringFutureReservesOp.BeginSponsoringFutureReservesOp({
    sponsoredId: keypair.Keypair.fromPublicKey(opts.sponsoredId).xdrAccountId()
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.beginSponsoringFutureReserves(op)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.beginSponsoringFutureReserves = beginSponsoringFutureReserves;
//# sourceMappingURL=begin_sponsoring_future_reserves.js.map
