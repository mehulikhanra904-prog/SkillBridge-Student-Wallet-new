'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scSpecType = require('./sc-spec-type.js');
var scSpecTypeBytesN = require('./sc-spec-type-bytes-n.js');
var scSpecTypeUdt = require('./sc-spec-type-udt.js');

class ScSpecTypeDefBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ScSpecTypeDefBase) {
      throw new TypeError(
        "new xdr.ScSpecTypeDef(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScSpecTypeDef.scSpecTypeVal() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("ScSpecTypeDef", {
    switchOn: scSpecType.ScSpecType.schema,
    cases: [
      jsXdr.case("scSpecTypeVal", 0, jsXdr.void()),
      jsXdr.case("scSpecTypeBool", 1, jsXdr.void()),
      jsXdr.case("scSpecTypeVoid", 2, jsXdr.void()),
      jsXdr.case("scSpecTypeError", 3, jsXdr.void()),
      jsXdr.case("scSpecTypeU32", 4, jsXdr.void()),
      jsXdr.case("scSpecTypeI32", 5, jsXdr.void()),
      jsXdr.case("scSpecTypeU64", 6, jsXdr.void()),
      jsXdr.case("scSpecTypeI64", 7, jsXdr.void()),
      jsXdr.case("scSpecTypeTimepoint", 8, jsXdr.void()),
      jsXdr.case("scSpecTypeDuration", 9, jsXdr.void()),
      jsXdr.case("scSpecTypeU128", 10, jsXdr.void()),
      jsXdr.case("scSpecTypeI128", 11, jsXdr.void()),
      jsXdr.case("scSpecTypeU256", 12, jsXdr.void()),
      jsXdr.case("scSpecTypeI256", 13, jsXdr.void()),
      jsXdr.case("scSpecTypeBytes", 14, jsXdr.void()),
      jsXdr.case("scSpecTypeString", 16, jsXdr.void()),
      jsXdr.case("scSpecTypeSymbol", 17, jsXdr.void()),
      jsXdr.case("scSpecTypeAddress", 19, jsXdr.void()),
      jsXdr.case("scSpecTypeMuxedAddress", 20, jsXdr.void()),
      jsXdr.case(
        "scSpecTypeOption",
        1e3,
        jsXdr.field(
          "option",
          jsXdr.lazy(() => ScSpecTypeOption.schema)
        )
      ),
      jsXdr.case(
        "scSpecTypeResult",
        1001,
        jsXdr.field(
          "result",
          jsXdr.lazy(() => ScSpecTypeResult.schema)
        )
      ),
      jsXdr.case(
        "scSpecTypeVec",
        1002,
        jsXdr.field(
          "vec",
          jsXdr.lazy(() => ScSpecTypeVec.schema)
        )
      ),
      jsXdr.case(
        "scSpecTypeMap",
        1004,
        jsXdr.field(
          "map",
          jsXdr.lazy(() => ScSpecTypeMap.schema)
        )
      ),
      jsXdr.case(
        "scSpecTypeTuple",
        1005,
        jsXdr.field(
          "tuple",
          jsXdr.lazy(() => ScSpecTypeTuple.schema)
        )
      ),
      jsXdr.case("scSpecTypeBytesN", 1006, jsXdr.field("bytesN", scSpecTypeBytesN.ScSpecTypeBytesN.schema)),
      jsXdr.case("scSpecTypeUdt", 2e3, jsXdr.field("udt", scSpecTypeUdt.ScSpecTypeUdt.schema))
    ]
  });
  static scSpecTypeVal() {
    return new ScSpecTypeDefVal();
  }
  static scSpecTypeBool() {
    return new ScSpecTypeDefBool();
  }
  static scSpecTypeVoid() {
    return new ScSpecTypeDefVoid();
  }
  static scSpecTypeError() {
    return new ScSpecTypeDefError();
  }
  static scSpecTypeU32() {
    return new ScSpecTypeDefU32();
  }
  static scSpecTypeI32() {
    return new ScSpecTypeDefI32();
  }
  static scSpecTypeU64() {
    return new ScSpecTypeDefU64();
  }
  static scSpecTypeI64() {
    return new ScSpecTypeDefI64();
  }
  static scSpecTypeTimepoint() {
    return new ScSpecTypeDefTimepoint();
  }
  static scSpecTypeDuration() {
    return new ScSpecTypeDefDuration();
  }
  static scSpecTypeU128() {
    return new ScSpecTypeDefU128();
  }
  static scSpecTypeI128() {
    return new ScSpecTypeDefI128();
  }
  static scSpecTypeU256() {
    return new ScSpecTypeDefU256();
  }
  static scSpecTypeI256() {
    return new ScSpecTypeDefI256();
  }
  static scSpecTypeBytes() {
    return new ScSpecTypeDefBytes();
  }
  static scSpecTypeString() {
    return new ScSpecTypeDefString();
  }
  static scSpecTypeSymbol() {
    return new ScSpecTypeDefSymbol();
  }
  static scSpecTypeAddress() {
    return new ScSpecTypeDefAddress();
  }
  static scSpecTypeMuxedAddress() {
    return new ScSpecTypeDefMuxedAddress();
  }
  static scSpecTypeOption(option) {
    return new ScSpecTypeDefOption(option);
  }
  static scSpecTypeResult(result) {
    return new ScSpecTypeDefResult(result);
  }
  static scSpecTypeVec(vec) {
    return new ScSpecTypeDefVec(vec);
  }
  static scSpecTypeMap(map) {
    return new ScSpecTypeDefMap(map);
  }
  static scSpecTypeTuple(tuple) {
    return new ScSpecTypeDefTuple(tuple);
  }
  static scSpecTypeBytesN(bytesN) {
    return new ScSpecTypeDefBytesN(bytesN);
  }
  static scSpecTypeUdt(udt) {
    return new ScSpecTypeDefUdt(udt);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ScSpecTypeDefVal();
      case 1:
        return new ScSpecTypeDefBool();
      case 2:
        return new ScSpecTypeDefVoid();
      case 3:
        return new ScSpecTypeDefError();
      case 4:
        return new ScSpecTypeDefU32();
      case 5:
        return new ScSpecTypeDefI32();
      case 6:
        return new ScSpecTypeDefU64();
      case 7:
        return new ScSpecTypeDefI64();
      case 8:
        return new ScSpecTypeDefTimepoint();
      case 9:
        return new ScSpecTypeDefDuration();
      case 10:
        return new ScSpecTypeDefU128();
      case 11:
        return new ScSpecTypeDefI128();
      case 12:
        return new ScSpecTypeDefU256();
      case 13:
        return new ScSpecTypeDefI256();
      case 14:
        return new ScSpecTypeDefBytes();
      case 16:
        return new ScSpecTypeDefString();
      case 17:
        return new ScSpecTypeDefSymbol();
      case 19:
        return new ScSpecTypeDefAddress();
      case 20:
        return new ScSpecTypeDefMuxedAddress();
      case 1e3:
        return new ScSpecTypeDefOption(
          ScSpecTypeOption.fromXdrObject(wire.option)
        );
      case 1001:
        return new ScSpecTypeDefResult(
          ScSpecTypeResult.fromXdrObject(wire.result)
        );
      case 1002:
        return new ScSpecTypeDefVec(ScSpecTypeVec.fromXdrObject(wire.vec));
      case 1004:
        return new ScSpecTypeDefMap(ScSpecTypeMap.fromXdrObject(wire.map));
      case 1005:
        return new ScSpecTypeDefTuple(
          ScSpecTypeTuple.fromXdrObject(wire.tuple)
        );
      case 1006:
        return new ScSpecTypeDefBytesN(
          scSpecTypeBytesN.ScSpecTypeBytesN.fromXdrObject(wire.bytesN)
        );
      case 2e3:
        return new ScSpecTypeDefUdt(scSpecTypeUdt.ScSpecTypeUdt.fromXdrObject(wire.udt));
    }
    throw new jsXdr.XdrError(
      `ScSpecTypeDef: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScSpecTypeDef variant.
   * Use this instead of `instanceof ScSpecTypeDef`: the exported `ScSpecTypeDef` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScSpecTypeDef.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScSpecTypeDefBase;
  }
}
class ScSpecTypeDefVal extends ScSpecTypeDefBase {
  type = "scSpecTypeVal";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 0 };
  }
}
class ScSpecTypeDefBool extends ScSpecTypeDefBase {
  type = "scSpecTypeBool";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 1 };
  }
}
class ScSpecTypeDefVoid extends ScSpecTypeDefBase {
  type = "scSpecTypeVoid";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 2 };
  }
}
class ScSpecTypeDefError extends ScSpecTypeDefBase {
  type = "scSpecTypeError";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 3 };
  }
}
class ScSpecTypeDefU32 extends ScSpecTypeDefBase {
  type = "scSpecTypeU32";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 4 };
  }
}
class ScSpecTypeDefI32 extends ScSpecTypeDefBase {
  type = "scSpecTypeI32";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 5 };
  }
}
class ScSpecTypeDefU64 extends ScSpecTypeDefBase {
  type = "scSpecTypeU64";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 6 };
  }
}
class ScSpecTypeDefI64 extends ScSpecTypeDefBase {
  type = "scSpecTypeI64";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 7 };
  }
}
class ScSpecTypeDefTimepoint extends ScSpecTypeDefBase {
  type = "scSpecTypeTimepoint";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 8 };
  }
}
class ScSpecTypeDefDuration extends ScSpecTypeDefBase {
  type = "scSpecTypeDuration";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 9 };
  }
}
class ScSpecTypeDefU128 extends ScSpecTypeDefBase {
  type = "scSpecTypeU128";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 10 };
  }
}
class ScSpecTypeDefI128 extends ScSpecTypeDefBase {
  type = "scSpecTypeI128";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 11 };
  }
}
class ScSpecTypeDefU256 extends ScSpecTypeDefBase {
  type = "scSpecTypeU256";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 12 };
  }
}
class ScSpecTypeDefI256 extends ScSpecTypeDefBase {
  type = "scSpecTypeI256";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 13 };
  }
}
class ScSpecTypeDefBytes extends ScSpecTypeDefBase {
  type = "scSpecTypeBytes";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 14 };
  }
}
class ScSpecTypeDefString extends ScSpecTypeDefBase {
  type = "scSpecTypeString";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 16 };
  }
}
class ScSpecTypeDefSymbol extends ScSpecTypeDefBase {
  type = "scSpecTypeSymbol";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 17 };
  }
}
class ScSpecTypeDefAddress extends ScSpecTypeDefBase {
  type = "scSpecTypeAddress";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 19 };
  }
}
class ScSpecTypeDefMuxedAddress extends ScSpecTypeDefBase {
  type = "scSpecTypeMuxedAddress";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 20 };
  }
}
class ScSpecTypeDefOption extends ScSpecTypeDefBase {
  type = "scSpecTypeOption";
  option;
  constructor(option) {
    super();
    this.option = option;
  }
  get value() {
    return this.option;
  }
  toXdrObject() {
    return { type: 1e3, option: this.option.toXdrObject() };
  }
}
class ScSpecTypeDefResult extends ScSpecTypeDefBase {
  type = "scSpecTypeResult";
  result;
  constructor(result) {
    super();
    this.result = result;
  }
  get value() {
    return this.result;
  }
  toXdrObject() {
    return { type: 1001, result: this.result.toXdrObject() };
  }
}
class ScSpecTypeDefVec extends ScSpecTypeDefBase {
  type = "scSpecTypeVec";
  vec;
  constructor(vec) {
    super();
    this.vec = vec;
  }
  get value() {
    return this.vec;
  }
  toXdrObject() {
    return { type: 1002, vec: this.vec.toXdrObject() };
  }
}
class ScSpecTypeDefMap extends ScSpecTypeDefBase {
  type = "scSpecTypeMap";
  map;
  constructor(map) {
    super();
    this.map = map;
  }
  get value() {
    return this.map;
  }
  toXdrObject() {
    return { type: 1004, map: this.map.toXdrObject() };
  }
}
class ScSpecTypeDefTuple extends ScSpecTypeDefBase {
  type = "scSpecTypeTuple";
  tuple;
  constructor(tuple) {
    super();
    this.tuple = tuple;
  }
  get value() {
    return this.tuple;
  }
  toXdrObject() {
    return { type: 1005, tuple: this.tuple.toXdrObject() };
  }
}
class ScSpecTypeDefBytesN extends ScSpecTypeDefBase {
  type = "scSpecTypeBytesN";
  bytesN;
  constructor(bytesN) {
    super();
    this.bytesN = bytesN;
  }
  get value() {
    return this.bytesN;
  }
  toXdrObject() {
    return { type: 1006, bytesN: this.bytesN.toXdrObject() };
  }
}
class ScSpecTypeDefUdt extends ScSpecTypeDefBase {
  type = "scSpecTypeUdt";
  udt;
  constructor(udt) {
    super();
    this.udt = udt;
  }
  get value() {
    return this.udt;
  }
  toXdrObject() {
    return { type: 2e3, udt: this.udt.toXdrObject() };
  }
}
const ScSpecTypeDef = ScSpecTypeDefBase;
class ScSpecTypeMap extends xdrValue.XdrValue {
  keyType;
  valueType;
  static schema = jsXdr.struct("ScSpecTypeMap", {
    keyType: jsXdr.lazy(() => ScSpecTypeDef.schema),
    valueType: jsXdr.lazy(() => ScSpecTypeDef.schema)
  });
  constructor(input) {
    super();
    this.keyType = input.keyType;
    this.valueType = input.valueType;
  }
  toXdrObject() {
    return {
      keyType: this.keyType.toXdrObject(),
      valueType: this.valueType.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecTypeMap({
      keyType: ScSpecTypeDef.fromXdrObject(wire.keyType),
      valueType: ScSpecTypeDef.fromXdrObject(wire.valueType)
    });
  }
}
class ScSpecTypeOption extends xdrValue.XdrValue {
  valueType;
  static schema = jsXdr.struct(
    "ScSpecTypeOption",
    {
      valueType: jsXdr.lazy(() => ScSpecTypeDef.schema)
    }
  );
  constructor(input) {
    super();
    this.valueType = input.valueType;
  }
  toXdrObject() {
    return {
      valueType: this.valueType.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecTypeOption({
      valueType: ScSpecTypeDef.fromXdrObject(wire.valueType)
    });
  }
}
class ScSpecTypeResult extends xdrValue.XdrValue {
  okType;
  errorType;
  static schema = jsXdr.struct(
    "ScSpecTypeResult",
    {
      okType: jsXdr.lazy(() => ScSpecTypeDef.schema),
      errorType: jsXdr.lazy(() => ScSpecTypeDef.schema)
    }
  );
  constructor(input) {
    super();
    this.okType = input.okType;
    this.errorType = input.errorType;
  }
  toXdrObject() {
    return {
      okType: this.okType.toXdrObject(),
      errorType: this.errorType.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecTypeResult({
      okType: ScSpecTypeDef.fromXdrObject(wire.okType),
      errorType: ScSpecTypeDef.fromXdrObject(wire.errorType)
    });
  }
}
class ScSpecTypeTuple extends xdrValue.XdrValue {
  valueTypes;
  static schema = jsXdr.struct(
    "ScSpecTypeTuple",
    {
      valueTypes: jsXdr.array(
        jsXdr.lazy(() => ScSpecTypeDef.schema),
        12
      )
    }
  );
  constructor(input) {
    super();
    this.valueTypes = input.valueTypes;
  }
  toXdrObject() {
    return {
      valueTypes: this.valueTypes.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecTypeTuple({
      valueTypes: wire.valueTypes.map((w) => ScSpecTypeDef.fromXdrObject(w))
    });
  }
}
class ScSpecTypeVec extends xdrValue.XdrValue {
  elementType;
  static schema = jsXdr.struct("ScSpecTypeVec", {
    elementType: jsXdr.lazy(() => ScSpecTypeDef.schema)
  });
  constructor(input) {
    super();
    this.elementType = input.elementType;
  }
  toXdrObject() {
    return {
      elementType: this.elementType.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecTypeVec({
      elementType: ScSpecTypeDef.fromXdrObject(wire.elementType)
    });
  }
}

exports.ScSpecTypeDef = ScSpecTypeDef;
exports.ScSpecTypeDefAddress = ScSpecTypeDefAddress;
exports.ScSpecTypeDefBool = ScSpecTypeDefBool;
exports.ScSpecTypeDefBytes = ScSpecTypeDefBytes;
exports.ScSpecTypeDefBytesN = ScSpecTypeDefBytesN;
exports.ScSpecTypeDefDuration = ScSpecTypeDefDuration;
exports.ScSpecTypeDefError = ScSpecTypeDefError;
exports.ScSpecTypeDefI128 = ScSpecTypeDefI128;
exports.ScSpecTypeDefI256 = ScSpecTypeDefI256;
exports.ScSpecTypeDefI32 = ScSpecTypeDefI32;
exports.ScSpecTypeDefI64 = ScSpecTypeDefI64;
exports.ScSpecTypeDefMap = ScSpecTypeDefMap;
exports.ScSpecTypeDefMuxedAddress = ScSpecTypeDefMuxedAddress;
exports.ScSpecTypeDefOption = ScSpecTypeDefOption;
exports.ScSpecTypeDefResult = ScSpecTypeDefResult;
exports.ScSpecTypeDefString = ScSpecTypeDefString;
exports.ScSpecTypeDefSymbol = ScSpecTypeDefSymbol;
exports.ScSpecTypeDefTimepoint = ScSpecTypeDefTimepoint;
exports.ScSpecTypeDefTuple = ScSpecTypeDefTuple;
exports.ScSpecTypeDefU128 = ScSpecTypeDefU128;
exports.ScSpecTypeDefU256 = ScSpecTypeDefU256;
exports.ScSpecTypeDefU32 = ScSpecTypeDefU32;
exports.ScSpecTypeDefU64 = ScSpecTypeDefU64;
exports.ScSpecTypeDefUdt = ScSpecTypeDefUdt;
exports.ScSpecTypeDefVal = ScSpecTypeDefVal;
exports.ScSpecTypeDefVec = ScSpecTypeDefVec;
exports.ScSpecTypeDefVoid = ScSpecTypeDefVoid;
exports.ScSpecTypeMap = ScSpecTypeMap;
exports.ScSpecTypeOption = ScSpecTypeOption;
exports.ScSpecTypeResult = ScSpecTypeResult;
exports.ScSpecTypeTuple = ScSpecTypeTuple;
exports.ScSpecTypeVec = ScSpecTypeVec;
//# sourceMappingURL=sc-spec-type-def.js.map
