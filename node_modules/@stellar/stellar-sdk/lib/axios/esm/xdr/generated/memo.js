import { union, case as _case, void as _void, field, uint64, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { MemoType } from './memo-type.js';
import { Hash } from './hash.js';

class MemoBase extends XdrValue {
  constructor() {
    super();
    if (new.target === MemoBase) {
      throw new TypeError(
        "new xdr.Memo(...) is not supported: XDR unions are built from per-variant factories. Call xdr.Memo.memoNone() (or another arm factory) instead."
      );
    }
  }
  static schema = union("Memo", {
    switchOn: MemoType.schema,
    cases: [
      _case("memoNone", 0, _void()),
      _case("memoText", 1, field("text", xdrString(28))),
      _case("memoId", 2, field("id", uint64())),
      _case("memoHash", 3, field("hash", Hash.schema)),
      _case("memoReturn", 4, field("retHash", Hash.schema))
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
        return new MemoHash(Hash.fromXdrObject(wire.hash));
      case 4:
        return new MemoReturn(Hash.fromXdrObject(wire.retHash));
    }
    throw new XdrError(
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
    this.text = text instanceof XdrString ? text : new XdrString(text);
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
  constructor(hash) {
    super();
    this.hash = hash instanceof Hash ? hash : new Hash(hash);
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
    this.retHash = retHash instanceof Hash ? retHash : new Hash(retHash);
  }
  get value() {
    return this.retHash;
  }
  toXdrObject() {
    return { type: 4, retHash: this.retHash.toXdrObject() };
  }
}
const Memo$1 = MemoBase;

export { Memo$1 as Memo, MemoHash, MemoId, MemoNone, MemoReturn, MemoText };
//# sourceMappingURL=memo.js.map
