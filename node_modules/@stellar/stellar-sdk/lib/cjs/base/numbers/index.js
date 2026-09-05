'use strict';

var xdr_large_int = require('./xdr_large_int.js');
require('../../xdr/index.js');

function scValToBigInt(scv) {
  const switchName = scv.type;
  const scIntType = xdr_large_int.XdrLargeInt.getType(switchName);
  const value = "value" in scv ? scv.value : null;
  if (value === null) {
    throw TypeError(`unexpected null value for ${switchName}`);
  }
  switch (switchName) {
    case "scvU32":
    case "scvI32":
      return BigInt(value);
    case "scvU64":
    case "scvI64":
    case "scvTimepoint":
    case "scvDuration":
      if (scIntType === void 0) {
        throw TypeError(`invalid integer type for ${switchName}`);
      }
      return new xdr_large_int.XdrLargeInt(scIntType, value).toBigInt();
    case "scvU128":
    case "scvI128": {
      if (scIntType === void 0) {
        throw TypeError(`invalid integer type for ${switchName}`);
      }
      const parts = value;
      return new xdr_large_int.XdrLargeInt(scIntType, [parts.lo, parts.hi]).toBigInt();
    }
    case "scvU256":
    case "scvI256": {
      if (scIntType === void 0) {
        throw TypeError(`invalid integer type for ${switchName}`);
      }
      const parts = value;
      return new xdr_large_int.XdrLargeInt(scIntType, [
        parts.loLo,
        parts.loHi,
        parts.hiLo,
        parts.hiHi
      ]).toBigInt();
    }
    default:
      throw TypeError(`expected integer type, got ${switchName}`);
  }
}

exports.XdrLargeInt = xdr_large_int.XdrLargeInt;
exports.scValToBigInt = scValToBigInt;
//# sourceMappingURL=index.js.map
