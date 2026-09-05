'use strict';

function expectUnionVariant(value, type) {
  if (value.type !== type) {
    throw new TypeError(
      `Expected XDR variant '${type}', got '${value.type}' (${value.constructor.name})`
    );
  }
  return value;
}
function isUnionVariant(value, type) {
  return value.type === type;
}

exports.expectUnionVariant = expectUnionVariant;
exports.isUnionVariant = isUnionVariant;
//# sourceMappingURL=util.js.map
