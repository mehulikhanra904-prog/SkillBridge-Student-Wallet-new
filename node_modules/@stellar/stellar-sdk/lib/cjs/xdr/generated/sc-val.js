'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var contractExecutable = require('./contract-executable.js');
var scValType = require('./sc-val-type.js');
var scError = require('./sc-error.js');
var uint128Parts = require('./uint128-parts.js');
var int128Parts = require('./int128-parts.js');
var uint256Parts = require('./uint256-parts.js');
var int256Parts = require('./int256-parts.js');
var scBytes = require('./sc-bytes.js');
var scAddress = require('./sc-address.js');
var scNonceKey = require('./sc-nonce-key.js');

class ScContractInstance extends xdrValue.XdrValue {
  executable;
  storage;
  static schema = jsXdr.struct(
    "ScContractInstance",
    {
      executable: contractExecutable.ContractExecutable.schema,
      storage: jsXdr.option(
        jsXdr.array(
          jsXdr.lazy(() => ScMapEntry.schema),
          jsXdr.UNBOUNDED_MAX_LENGTH
        )
      )
    }
  );
  constructor(input) {
    super();
    this.executable = input.executable;
    this.storage = input.storage;
  }
  toXdrObject() {
    return {
      executable: this.executable.toXdrObject(),
      storage: this.storage === null ? null : this.storage.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScContractInstance({
      executable: contractExecutable.ContractExecutable.fromXdrObject(wire.executable),
      storage: wire.storage === null ? null : wire.storage.map((w) => ScMapEntry.fromXdrObject(w))
    });
  }
}
class ScMapEntry extends xdrValue.XdrValue {
  key;
  val;
  static schema = jsXdr.struct("ScMapEntry", {
    key: jsXdr.lazy(() => ScVal.schema),
    val: jsXdr.lazy(() => ScVal.schema)
  });
  constructor(input) {
    super();
    this.key = input.key;
    this.val = input.val;
  }
  toXdrObject() {
    return {
      key: this.key.toXdrObject(),
      val: this.val.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScMapEntry({
      key: ScVal.fromXdrObject(wire.key),
      val: ScVal.fromXdrObject(wire.val)
    });
  }
}
class ScValBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ScValBase) {
      throw new TypeError(
        "new xdr.ScVal(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScVal.scvBool(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("ScVal", {
    switchOn: scValType.ScValType.schema,
    cases: [
      jsXdr.case("scvBool", 0, jsXdr.field("b", jsXdr.bool())),
      jsXdr.case("scvVoid", 1, jsXdr.void()),
      jsXdr.case("scvError", 2, jsXdr.field("error", scError.ScError.schema)),
      jsXdr.case("scvU32", 3, jsXdr.field("u32", jsXdr.uint32())),
      jsXdr.case("scvI32", 4, jsXdr.field("i32", jsXdr.int32())),
      jsXdr.case("scvU64", 5, jsXdr.field("u64", jsXdr.uint64())),
      jsXdr.case("scvI64", 6, jsXdr.field("i64", jsXdr.int64())),
      jsXdr.case("scvTimepoint", 7, jsXdr.field("timepoint", jsXdr.uint64())),
      jsXdr.case("scvDuration", 8, jsXdr.field("duration", jsXdr.uint64())),
      jsXdr.case("scvU128", 9, jsXdr.field("u128", uint128Parts.Uint128Parts.schema)),
      jsXdr.case("scvI128", 10, jsXdr.field("i128", int128Parts.Int128Parts.schema)),
      jsXdr.case("scvU256", 11, jsXdr.field("u256", uint256Parts.Uint256Parts.schema)),
      jsXdr.case("scvI256", 12, jsXdr.field("i256", int256Parts.Int256Parts.schema)),
      jsXdr.case("scvBytes", 13, jsXdr.field("bytes", scBytes.ScBytes.schema)),
      jsXdr.case("scvString", 14, jsXdr.field("str", xdrString.xdrString(jsXdr.UNBOUNDED_MAX_LENGTH))),
      jsXdr.case("scvSymbol", 15, jsXdr.field("sym", xdrString.xdrString(32))),
      jsXdr.case(
        "scvVec",
        16,
        jsXdr.field(
          "vec",
          jsXdr.option(
            jsXdr.array(
              jsXdr.lazy(() => ScVal.schema),
              jsXdr.UNBOUNDED_MAX_LENGTH
            )
          )
        )
      ),
      jsXdr.case(
        "scvMap",
        17,
        jsXdr.field(
          "map",
          jsXdr.option(
            jsXdr.array(
              jsXdr.lazy(() => ScMapEntry.schema),
              jsXdr.UNBOUNDED_MAX_LENGTH
            )
          )
        )
      ),
      jsXdr.case("scvAddress", 18, jsXdr.field("address", scAddress.ScAddress.schema)),
      jsXdr.case(
        "scvContractInstance",
        19,
        jsXdr.field(
          "instance",
          jsXdr.lazy(() => ScContractInstance.schema)
        )
      ),
      jsXdr.case("scvLedgerKeyContractInstance", 20, jsXdr.void()),
      jsXdr.case("scvLedgerKeyNonce", 21, jsXdr.field("nonceKey", scNonceKey.ScNonceKey.schema)),
      jsXdr.case(
        "scvExecutableTag",
        22,
        jsXdr.field("executableTag", xdrString.xdrString(jsXdr.UNBOUNDED_MAX_LENGTH))
      )
    ]
  });
  static scvBool(b) {
    return new ScValBool(b);
  }
  static scvVoid() {
    return new ScValVoid();
  }
  static scvError(error) {
    return new ScValError(error);
  }
  static scvU32(u32) {
    return new ScValU32(u32);
  }
  static scvI32(i32) {
    return new ScValI32(i32);
  }
  static scvU64(u64) {
    return new ScValU64(u64);
  }
  static scvI64(i64) {
    return new ScValI64(i64);
  }
  static scvTimepoint(timepoint) {
    return new ScValTimepoint(timepoint);
  }
  static scvDuration(duration) {
    return new ScValDuration(duration);
  }
  static scvU128(u128) {
    return new ScValU128(u128);
  }
  static scvI128(i128) {
    return new ScValI128(i128);
  }
  static scvU256(u256) {
    return new ScValU256(u256);
  }
  static scvI256(i256) {
    return new ScValI256(i256);
  }
  static scvBytes(bytes) {
    return new ScValBytes(bytes);
  }
  static scvString(str) {
    return new ScValString(str);
  }
  static scvSymbol(sym) {
    return new ScValSymbol(sym);
  }
  static scvVec(vec) {
    return new ScValVec(vec);
  }
  static scvMap(map) {
    return new ScValMap(map);
  }
  static scvAddress(address) {
    return new ScValAddress(address);
  }
  static scvContractInstance(instance) {
    return new ScValContractInstance(instance);
  }
  static scvLedgerKeyContractInstance() {
    return new ScValLedgerKeyContractInstance();
  }
  static scvLedgerKeyNonce(nonceKey) {
    return new ScValLedgerKeyNonce(nonceKey);
  }
  static scvExecutableTag(executableTag) {
    return new ScValExecutableTag(executableTag);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ScValBool(wire.b);
      case 1:
        return new ScValVoid();
      case 2:
        return new ScValError(scError.ScError.fromXdrObject(wire.error));
      case 3:
        return new ScValU32(wire.u32);
      case 4:
        return new ScValI32(wire.i32);
      case 5:
        return new ScValU64(wire.u64);
      case 6:
        return new ScValI64(wire.i64);
      case 7:
        return new ScValTimepoint(wire.timepoint);
      case 8:
        return new ScValDuration(wire.duration);
      case 9:
        return new ScValU128(uint128Parts.Uint128Parts.fromXdrObject(wire.u128));
      case 10:
        return new ScValI128(int128Parts.Int128Parts.fromXdrObject(wire.i128));
      case 11:
        return new ScValU256(uint256Parts.Uint256Parts.fromXdrObject(wire.u256));
      case 12:
        return new ScValI256(int256Parts.Int256Parts.fromXdrObject(wire.i256));
      case 13:
        return new ScValBytes(scBytes.ScBytes.fromXdrObject(wire.bytes));
      case 14:
        return new ScValString(wire.str);
      case 15:
        return new ScValSymbol(wire.sym);
      case 16:
        return new ScValVec(
          wire.vec === null ? null : wire.vec.map((w) => ScVal.fromXdrObject(w))
        );
      case 17:
        return new ScValMap(
          wire.map === null ? null : wire.map.map((w) => ScMapEntry.fromXdrObject(w))
        );
      case 18:
        return new ScValAddress(scAddress.ScAddress.fromXdrObject(wire.address));
      case 19:
        return new ScValContractInstance(
          ScContractInstance.fromXdrObject(wire.instance)
        );
      case 20:
        return new ScValLedgerKeyContractInstance();
      case 21:
        return new ScValLedgerKeyNonce(scNonceKey.ScNonceKey.fromXdrObject(wire.nonceKey));
      case 22:
        return new ScValExecutableTag(wire.executableTag);
    }
    throw new jsXdr.XdrError(
      `ScVal: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScVal variant.
   * Use this instead of `instanceof ScVal`: the exported `ScVal` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScVal.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScValBase;
  }
}
class ScValBool extends ScValBase {
  type = "scvBool";
  b;
  constructor(b) {
    super();
    this.b = b;
  }
  get value() {
    return this.b;
  }
  toXdrObject() {
    return { type: 0, b: this.b };
  }
}
class ScValVoid extends ScValBase {
  type = "scvVoid";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 1 };
  }
}
class ScValError extends ScValBase {
  type = "scvError";
  error;
  constructor(error) {
    super();
    this.error = error;
  }
  get value() {
    return this.error;
  }
  toXdrObject() {
    return { type: 2, error: this.error.toXdrObject() };
  }
}
class ScValU32 extends ScValBase {
  type = "scvU32";
  u32;
  constructor(u32) {
    super();
    this.u32 = u32;
  }
  get value() {
    return this.u32;
  }
  toXdrObject() {
    return { type: 3, u32: this.u32 };
  }
}
class ScValI32 extends ScValBase {
  type = "scvI32";
  i32;
  constructor(i32) {
    super();
    this.i32 = i32;
  }
  get value() {
    return this.i32;
  }
  toXdrObject() {
    return { type: 4, i32: this.i32 };
  }
}
class ScValU64 extends ScValBase {
  type = "scvU64";
  u64;
  constructor(u64) {
    super();
    this.u64 = u64;
  }
  get value() {
    return this.u64;
  }
  toXdrObject() {
    return { type: 5, u64: this.u64 };
  }
}
class ScValI64 extends ScValBase {
  type = "scvI64";
  i64;
  constructor(i64) {
    super();
    this.i64 = i64;
  }
  get value() {
    return this.i64;
  }
  toXdrObject() {
    return { type: 6, i64: this.i64 };
  }
}
class ScValTimepoint extends ScValBase {
  type = "scvTimepoint";
  timepoint;
  constructor(timepoint) {
    super();
    this.timepoint = timepoint;
  }
  get value() {
    return this.timepoint;
  }
  toXdrObject() {
    return { type: 7, timepoint: this.timepoint };
  }
}
class ScValDuration extends ScValBase {
  type = "scvDuration";
  duration;
  constructor(duration) {
    super();
    this.duration = duration;
  }
  get value() {
    return this.duration;
  }
  toXdrObject() {
    return { type: 8, duration: this.duration };
  }
}
class ScValU128 extends ScValBase {
  type = "scvU128";
  u128;
  constructor(u128) {
    super();
    this.u128 = u128;
  }
  get value() {
    return this.u128;
  }
  toXdrObject() {
    return { type: 9, u128: this.u128.toXdrObject() };
  }
}
class ScValI128 extends ScValBase {
  type = "scvI128";
  i128;
  constructor(i128) {
    super();
    this.i128 = i128;
  }
  get value() {
    return this.i128;
  }
  toXdrObject() {
    return { type: 10, i128: this.i128.toXdrObject() };
  }
}
class ScValU256 extends ScValBase {
  type = "scvU256";
  u256;
  constructor(u256) {
    super();
    this.u256 = u256;
  }
  get value() {
    return this.u256;
  }
  toXdrObject() {
    return { type: 11, u256: this.u256.toXdrObject() };
  }
}
class ScValI256 extends ScValBase {
  type = "scvI256";
  i256;
  constructor(i256) {
    super();
    this.i256 = i256;
  }
  get value() {
    return this.i256;
  }
  toXdrObject() {
    return { type: 12, i256: this.i256.toXdrObject() };
  }
}
class ScValBytes extends ScValBase {
  type = "scvBytes";
  bytes;
  constructor(bytes) {
    super();
    this.bytes = bytes instanceof scBytes.ScBytes ? bytes : new scBytes.ScBytes(bytes);
  }
  get value() {
    return this.bytes;
  }
  toXdrObject() {
    return { type: 13, bytes: this.bytes.toXdrObject() };
  }
}
class ScValString extends ScValBase {
  type = "scvString";
  str;
  constructor(str) {
    super();
    this.str = str instanceof xdrString.XdrString ? str : new xdrString.XdrString(str);
  }
  get value() {
    return this.str.toString();
  }
  toXdrObject() {
    return { type: 14, str: this.str };
  }
}
class ScValSymbol extends ScValBase {
  type = "scvSymbol";
  sym;
  constructor(sym) {
    super();
    this.sym = sym instanceof xdrString.XdrString ? sym : new xdrString.XdrString(sym);
  }
  get value() {
    return this.sym.toString();
  }
  toXdrObject() {
    return { type: 15, sym: this.sym };
  }
}
class ScValVec extends ScValBase {
  type = "scvVec";
  vec;
  constructor(vec) {
    super();
    this.vec = vec;
  }
  get value() {
    return this.vec;
  }
  toXdrObject() {
    return {
      type: 16,
      vec: this.vec === null ? null : this.vec.map((v) => v.toXdrObject())
    };
  }
}
class ScValMap extends ScValBase {
  type = "scvMap";
  map;
  constructor(map) {
    super();
    this.map = map;
  }
  get value() {
    return this.map;
  }
  toXdrObject() {
    return {
      type: 17,
      map: this.map === null ? null : this.map.map((v) => v.toXdrObject())
    };
  }
}
class ScValAddress extends ScValBase {
  type = "scvAddress";
  address;
  constructor(address) {
    super();
    this.address = address;
  }
  get value() {
    return this.address;
  }
  toXdrObject() {
    return { type: 18, address: this.address.toXdrObject() };
  }
}
class ScValContractInstance extends ScValBase {
  type = "scvContractInstance";
  instance;
  constructor(instance) {
    super();
    this.instance = instance;
  }
  get value() {
    return this.instance;
  }
  toXdrObject() {
    return { type: 19, instance: this.instance.toXdrObject() };
  }
}
class ScValLedgerKeyContractInstance extends ScValBase {
  type = "scvLedgerKeyContractInstance";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 20 };
  }
}
class ScValLedgerKeyNonce extends ScValBase {
  type = "scvLedgerKeyNonce";
  nonceKey;
  constructor(nonceKey) {
    super();
    this.nonceKey = nonceKey;
  }
  get value() {
    return this.nonceKey;
  }
  toXdrObject() {
    return { type: 21, nonceKey: this.nonceKey.toXdrObject() };
  }
}
class ScValExecutableTag extends ScValBase {
  type = "scvExecutableTag";
  executableTag;
  constructor(executableTag) {
    super();
    this.executableTag = executableTag instanceof xdrString.XdrString ? executableTag : new xdrString.XdrString(executableTag);
  }
  get value() {
    return this.executableTag.toString();
  }
  toXdrObject() {
    return { type: 22, executableTag: this.executableTag };
  }
}
const ScVal = ScValBase;

exports.ScContractInstance = ScContractInstance;
exports.ScMapEntry = ScMapEntry;
exports.ScVal = ScVal;
exports.ScValAddress = ScValAddress;
exports.ScValBool = ScValBool;
exports.ScValBytes = ScValBytes;
exports.ScValContractInstance = ScValContractInstance;
exports.ScValDuration = ScValDuration;
exports.ScValError = ScValError;
exports.ScValExecutableTag = ScValExecutableTag;
exports.ScValI128 = ScValI128;
exports.ScValI256 = ScValI256;
exports.ScValI32 = ScValI32;
exports.ScValI64 = ScValI64;
exports.ScValLedgerKeyContractInstance = ScValLedgerKeyContractInstance;
exports.ScValLedgerKeyNonce = ScValLedgerKeyNonce;
exports.ScValMap = ScValMap;
exports.ScValString = ScValString;
exports.ScValSymbol = ScValSymbol;
exports.ScValTimepoint = ScValTimepoint;
exports.ScValU128 = ScValU128;
exports.ScValU256 = ScValU256;
exports.ScValU32 = ScValU32;
exports.ScValU64 = ScValU64;
exports.ScValVec = ScValVec;
exports.ScValVoid = ScValVoid;
//# sourceMappingURL=sc-val.js.map
