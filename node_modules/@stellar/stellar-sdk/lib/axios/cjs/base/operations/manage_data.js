'use strict';

var uint8arrayExtras = require('uint8array-extras');
var operations = require('../util/operations.js');
require('../../xdr/index.js');
var manageDataOp = require('../../xdr/generated/manage-data-op.js');
var dataValue = require('../../xdr/generated/data-value.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function manageData(opts) {
  if (!(typeof opts.name === "string" && opts.name.length <= 64)) {
    throw new Error("name must be a string, up to 64 characters");
  }
  if (typeof opts.value !== "string" && !(opts.value instanceof Uint8Array) && opts.value !== null && opts.value !== void 0) {
    throw new Error("value must be a string, Uint8Array or null");
  }
  let dataValue$1;
  if (typeof opts.value === "string") {
    dataValue$1 = uint8arrayExtras.stringToUint8Array(opts.value);
  } else {
    dataValue$1 = opts.value ?? null;
  }
  if (dataValue$1 !== null && dataValue$1.length > 64) {
    throw new Error("value cannot be longer that 64 bytes");
  }
  const manageDataOp$1 = new manageDataOp.ManageDataOp({
    dataName: opts.name,
    dataValue: dataValue$1 === null ? null : new dataValue.DataValue(Uint8Array.from(dataValue$1))
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.manageData(manageDataOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(
    opAttributes
  );
}

exports.manageData = manageData;
//# sourceMappingURL=manage_data.js.map
