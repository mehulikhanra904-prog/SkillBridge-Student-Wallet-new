import { union, case as _case, void as _void, field, lazy, XdrError, struct, array } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScSpecType } from './sc-spec-type.js';
import { ScSpecTypeBytesN } from './sc-spec-type-bytes-n.js';
import { ScSpecTypeUdt } from './sc-spec-type-udt.js';

class ScSpecTypeDefBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ScSpecTypeDefBase) {
      throw new TypeError(
        "new xdr.ScSpecTypeDef(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScSpecTypeDef.scSpecTypeVal() (or another arm factory) instead."
      );
    }
  }
  static schema = union("ScSpecTypeDef", {
    switchOn: ScSpecType.schema,
    cases: [
      _case("scSpecTypeVal", 0, _void()),
      _case("scSpecTypeBool", 1, _void()),
      _case("scSpecTypeVoid", 2, _void()),
      _case("scSpecTypeError", 3, _void()),
      _case("scSpecTypeU32", 4, _void()),
      _case("scSpecTypeI32", 5, _void()),
      _case("scSpecTypeU64", 6, _void()),
      _case("scSpecTypeI64", 7, _void()),
      _case("scSpecTypeTimepoint", 8, _void()),
      _case("scSpecTypeDuration", 9, _void()),
      _case("scSpecTypeU128", 10, _void()),
      _case("scSpecTypeI128", 11, _void()),
      _case("scSpecTypeU256", 12, _void()),
      _case("scSpecTypeI256", 13, _void()),
      _case("scSpecTypeBytes", 14, _void()),
      _case("scSpecTypeString", 16, _void()),
      _case("scSpecTypeSymbol", 17, _void()),
      _case("scSpecTypeAddress", 19, _void()),
      _case("scSpecTypeMuxedAddress", 20, _void()),
      _case(
        "scSpecTypeOption",
        1e3,
        field(
          "option",
          lazy(() => ScSpecTypeOption.schema)
        )
      ),
      _case(
        "scSpecTypeResult",
        1001,
        field(
          "result",
          lazy(() => ScSpecTypeResult.schema)
        )
      ),
      _case(
        "scSpecTypeVec",
        1002,
        field(
          "vec",
          lazy(() => ScSpecTypeVec.schema)
        )
      ),
      _case(
        "scSpecTypeMap",
        1004,
        field(
          "map",
          lazy(() => ScSpecTypeMap.schema)
        )
      ),
      _case(
        "scSpecTypeTuple",
        1005,
        field(
          "tuple",
          lazy(() => ScSpecTypeTuple.schema)
        )
      ),
      _case("scSpecTypeBytesN", 1006, field("bytesN", ScSpecTypeBytesN.schema)),
      _case("scSpecTypeUdt", 2e3, field("udt", ScSpecTypeUdt.schema))
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
          ScSpecTypeBytesN.fromXdrObject(wire.bytesN)
        );
      case 2e3:
        return new ScSpecTypeDefUdt(ScSpecTypeUdt.fromXdrObject(wire.udt));
    }
    throw new XdrError(
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
class ScSpecTypeMap extends XdrValue {
  keyType;
  valueType;
  static schema = struct("ScSpecTypeMap", {
    keyType: lazy(() => ScSpecTypeDef.schema),
    valueType: lazy(() => ScSpecTypeDef.schema)
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
class ScSpecTypeOption extends XdrValue {
  valueType;
  static schema = struct(
    "ScSpecTypeOption",
    {
      valueType: lazy(() => ScSpecTypeDef.schema)
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
class ScSpecTypeResult extends XdrValue {
  okType;
  errorType;
  static schema = struct(
    "ScSpecTypeResult",
    {
      okType: lazy(() => ScSpecTypeDef.schema),
      errorType: lazy(() => ScSpecTypeDef.schema)
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
class ScSpecTypeTuple extends XdrValue {
  valueTypes;
  static schema = struct(
    "ScSpecTypeTuple",
    {
      valueTypes: array(
        lazy(() => ScSpecTypeDef.schema),
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
class ScSpecTypeVec extends XdrValue {
  elementType;
  static schema = struct("ScSpecTypeVec", {
    elementType: lazy(() => ScSpecTypeDef.schema)
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

export { ScSpecTypeDef, ScSpecTypeDefAddress, ScSpecTypeDefBool, ScSpecTypeDefBytes, ScSpecTypeDefBytesN, ScSpecTypeDefDuration, ScSpecTypeDefError, ScSpecTypeDefI128, ScSpecTypeDefI256, ScSpecTypeDefI32, ScSpecTypeDefI64, ScSpecTypeDefMap, ScSpecTypeDefMuxedAddress, ScSpecTypeDefOption, ScSpecTypeDefResult, ScSpecTypeDefString, ScSpecTypeDefSymbol, ScSpecTypeDefTimepoint, ScSpecTypeDefTuple, ScSpecTypeDefU128, ScSpecTypeDefU256, ScSpecTypeDefU32, ScSpecTypeDefU64, ScSpecTypeDefUdt, ScSpecTypeDefVal, ScSpecTypeDefVec, ScSpecTypeDefVoid, ScSpecTypeMap, ScSpecTypeOption, ScSpecTypeResult, ScSpecTypeTuple, ScSpecTypeVec };
//# sourceMappingURL=sc-spec-type-def.js.map
