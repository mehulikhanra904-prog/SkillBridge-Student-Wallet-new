import { stringToUint8Array } from 'uint8array-extras';
import { setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { ManageDataOp } from '../../xdr/generated/manage-data-op.js';
import { DataValue } from '../../xdr/generated/data-value.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function manageData(opts) {
  if (!(typeof opts.name === "string" && opts.name.length <= 64)) {
    throw new Error("name must be a string, up to 64 characters");
  }
  if (typeof opts.value !== "string" && !(opts.value instanceof Uint8Array) && opts.value !== null && opts.value !== void 0) {
    throw new Error("value must be a string, Uint8Array or null");
  }
  let dataValue;
  if (typeof opts.value === "string") {
    dataValue = stringToUint8Array(opts.value);
  } else {
    dataValue = opts.value ?? null;
  }
  if (dataValue !== null && dataValue.length > 64) {
    throw new Error("value cannot be longer that 64 bytes");
  }
  const manageDataOp = new ManageDataOp({
    dataName: opts.name,
    dataValue: dataValue === null ? null : new DataValue(Uint8Array.from(dataValue))
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.manageData(manageDataOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(
    opAttributes
  );
}

export { manageData };
//# sourceMappingURL=manage_data.js.map
