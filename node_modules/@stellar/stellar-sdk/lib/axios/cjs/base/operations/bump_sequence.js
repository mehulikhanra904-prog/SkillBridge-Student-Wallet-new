'use strict';

var bignumber = require('../util/bignumber.js');
var operations = require('../util/operations.js');
var index = require('../../xdr/index.js');
var bumpSequenceOp = require('../../xdr/generated/bump-sequence-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function bumpSequence(opts) {
  if (typeof opts.bumpTo !== "string") {
    throw new Error("bumpTo must be a string");
  }
  try {
    new bignumber.default(opts.bumpTo);
  } catch {
    throw new Error("bumpTo must be a stringified number");
  }
  const bumpTo = index.Int64.fromString(opts.bumpTo);
  const bumpSequenceOp$1 = new bumpSequenceOp.BumpSequenceOp({ bumpTo });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.bumpSequence(bumpSequenceOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.bumpSequence = bumpSequence;
//# sourceMappingURL=bump_sequence.js.map
