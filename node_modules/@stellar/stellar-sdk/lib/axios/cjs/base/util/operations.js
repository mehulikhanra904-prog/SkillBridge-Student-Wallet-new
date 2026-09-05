'use strict';

var index = require('../../xdr/index.js');
var continued_fraction = require('./continued_fraction.js');
var decode_encode_muxed_account = require('./decode_encode_muxed_account.js');
var bignumber = require('./bignumber.js');
var price = require('../../xdr/generated/price.js');

const ONE = 1e7;
const MAX_INT64 = "9223372036854775807";
function setSourceAccount(opAttributes, opts) {
  if (opts.source) {
    try {
      opAttributes.sourceAccount = decode_encode_muxed_account.decodeAddressToMuxedAccount(opts.source);
    } catch {
      throw new Error("Source address is invalid");
    }
  }
}
function checkUnsignedIntValue(name, value, isValidFunction = null) {
  if (typeof value === "undefined") {
    return void 0;
  }
  const numValue = typeof value === "string" ? value.trim() === "" ? NaN : Number(value) : value;
  if (typeof numValue !== "number" || !Number.isFinite(numValue) || numValue % 1 !== 0) {
    throw new Error(`${name} value is invalid`);
  }
  if (numValue < 0) {
    throw new Error(`${name} value must be unsigned`);
  }
  if (!isValidFunction || isValidFunction(numValue, name)) {
    return numValue;
  }
  throw new Error(`${name} value is invalid`);
}
function toXdrAmount(value) {
  const amount = new bignumber.default(value).times(ONE);
  return index.Int64.fromString(amount.toString());
}
function fromXdrAmount(value) {
  return new bignumber.default(value.toString()).div(ONE).toFixed(7);
}
function fromXdrPrice(price) {
  const n = new bignumber.default(price.n);
  return n.div(new bignumber.default(price.d)).toString();
}
function toXdrPrice(price$1) {
  let xdrObject;
  if (typeof price$1 === "object" && "n" in price$1 && "d" in price$1) {
    xdrObject = new price.Price(price$1);
  } else {
    const priceBN = new bignumber.default(price$1);
    if (!priceBN.gt(0) || !priceBN.isFinite()) {
      throw new Error("price must be positive");
    }
    const approx = continued_fraction.best_r(price$1);
    xdrObject = new price.Price({
      n: parseInt(String(approx[0]), 10),
      d: parseInt(String(approx[1]), 10)
    });
  }
  if (xdrObject.n < 0 || xdrObject.d <= 0) {
    throw new Error("price must be positive");
  }
  return xdrObject;
}
function isValidAmount(value, allowZero = false) {
  if (typeof value !== "string") {
    return false;
  }
  let amount;
  try {
    amount = new bignumber.default(value);
  } catch {
    return false;
  }
  if (
    // == 0
    !allowZero && amount.isZero() || // < 0
    amount.isNegative() || // > Max value
    amount.times(ONE).gt(new bignumber.default(MAX_INT64).toString()) || // Decimal places (max 7)
    (amount.decimalPlaces() ?? 0) > 7 || // NaN or Infinity
    amount.isNaN() || !amount.isFinite()
  ) {
    return false;
  }
  return true;
}
function constructAmountRequirementsError(arg) {
  return `${arg} argument must be of type String, represent a positive number and have at most 7 digits after the decimal`;
}

exports.ONE = ONE;
exports.checkUnsignedIntValue = checkUnsignedIntValue;
exports.constructAmountRequirementsError = constructAmountRequirementsError;
exports.fromXdrAmount = fromXdrAmount;
exports.fromXdrPrice = fromXdrPrice;
exports.isValidAmount = isValidAmount;
exports.setSourceAccount = setSourceAccount;
exports.toXdrAmount = toXdrAmount;
exports.toXdrPrice = toXdrPrice;
//# sourceMappingURL=operations.js.map
