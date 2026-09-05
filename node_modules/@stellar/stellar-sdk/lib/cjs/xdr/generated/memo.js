'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var memoType = require('./memo-type.js');
var hash = require('./hash.js');

class MemoBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === MemoBase) {
      throw new TypeError(
        "new xdr.Memo(...) is not supported: XDR unions are built from per-variant factories. Call xdr.Memo.memoNone() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("Memo", {
    switchOn: memoType.MemoType.schema,
    cases: [
      jsXdr.case("memoNone", 0, jsXdr.void()),
      jsXdr.case("memoText", 1, jsXdr.field("text", xdrString.xdrString(28))),
      jsXdr.case("memoId", 2, jsXdr.field("id", jsXdr.uint64())),
      jsXdr.case("memoHash", 3, jsXdr.field("hash", hash.Hash.schema)),
      jsXdr.case("memoReturn", 4, jsXdr.field("retHash", hash.Hash.schema))
    ]
  });
  static memoNone() {
    return new MemoNone();
  }
  static memoText(text) {
    return new MemoText(text);
  }
  static memoId(id) {
    return new MemoId(id);
  }
  static memoHash(hash) {
    return new MemoHash(hash);
  }
  static memoReturn(retHash) {
    return new MemoReturn(retHash);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new MemoNone();
      case 1:
        return new MemoText(wire.text);
      case 2:
        return new MemoId(wire.id);
      case 3:
        return new MemoHash(hash.Hash.fromXdrObject(wire.hash));
      case 4:
        return new MemoReturn(hash.Hash.fromXdrObject(wire.retHash));
    }
    throw new jsXdr.XdrError(
      `Memo: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete Memo variant.
   * Use this instead of `instanceof Memo`: the exported `Memo` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `Memo.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof MemoBase;
  }
}
class MemoNone extends MemoBase {
  type = "memoNone";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 0 };
  }
}
class MemoText extends MemoBase {
  type = "memoText";
  text;
  constructor(text) {
    super();
    this.text = text instanceof xdrString.XdrString ? text : new xdrString.XdrString(text);
  }
  get value() {
    return this.text.toString();
  }
  toXdrObject() {
    return { type: 1, text: this.text };
  }
}
class MemoId extends MemoBase {
  type = "memoId";
  id;
  constructor(id) {
    super();
    this.id = id;
  }
  get value() {
    return this.id;
  }
  toXdrObject() {
    return { type: 2, id: this.id };
  }
}
class MemoHash extends MemoBase {
  type = "memoHash";
  hash;
  constructor(hash$1) {
    super();
    this.hash = hash$1 instanceof hash.Hash ? hash$1 : new hash.Hash(hash$1);
  }
  get value() {
    return this.hash;
  }
  toXdrObject() {
    return { type: 3, hash: this.hash.toXdrObject() };
  }
}
class MemoReturn extends MemoBase {
  type = "memoReturn";
  retHash;
  constructor(retHash) {
    super();
    this.retHash = retHash instanceof hash.Hash ? retHash : new hash.Hash(retHash);
  }
  get value() {
    return this.retHash;
  }
  toXdrObject() {
    return { type: 4, retHash: this.retHash.toXdrObject() };
  }
}
const Memo$1 = MemoBase;

exports.Memo = Memo$1;
exports.MemoHash = MemoHash;
exports.MemoId = MemoId;
exports.MemoNone = MemoNone;
exports.MemoReturn = MemoReturn;
exports.MemoText = MemoText;
//# sourceMappingURL=memo.js.map
