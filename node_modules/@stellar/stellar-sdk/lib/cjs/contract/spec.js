'use strict';

var base64 = require('../base/util/base64.js');
var index = require('../xdr/index.js');
require('@noble/hashes/sha2.js');
require('uint8array-extras');
require('../base/signing.js');
require('../base/keypair.js');
require('@exodus/bytes/base32.js');
require('../base/util/continued_fraction.js');
require('../base/util/bignumber.js');
var address = require('../base/address.js');
require('../base/muxed_account.js');
var scval = require('../base/scval.js');
var contract = require('../base/contract.js');
var index$1 = require('../base/numbers/index.js');
var rust_result = require('./rust_result.js');
var utils = require('./utils.js');
var wasm_spec_parser = require('./wasm_spec_parser.js');
var event_spec = require('./event_spec.js');
var xdr_large_int = require('../base/numbers/xdr_large_int.js');
var scSpecTypeDef = require('../xdr/generated/sc-spec-type-def.js');
var scSpecEntry = require('../xdr/generated/sc-spec-entry.js');
var scVal = require('../xdr/generated/sc-val.js');
var scBytes = require('../xdr/generated/sc-bytes.js');

function enumToJsonSchema(udt) {
  const description = udt.doc.toString();
  const cases = udt.cases;
  const oneOf = [];
  cases.forEach((aCase) => {
    const title = aCase.name.toString();
    const desc = aCase.doc.toString();
    oneOf.push({
      description: desc,
      title,
      enum: [aCase.value],
      type: "number"
    });
  });
  const res = { oneOf };
  if (description.length > 0) {
    res.description = description;
  }
  return res;
}
function isNumeric(field) {
  return /^\d+$/.test(field.name.toString());
}
function readObj(args, input) {
  const inputName = input.name.toString();
  const entry = Object.entries(args).find(([name]) => name === inputName);
  if (!entry) {
    throw new Error(`Missing field ${inputName}`);
  }
  return entry[1];
}
function findCase(name) {
  return function matches(entry) {
    switch (entry.type) {
      case "scSpecUdtUnionCaseTupleV0": {
        const tuple = entry.value;
        return tuple.name.toString() === name;
      }
      case "scSpecUdtUnionCaseVoidV0": {
        const voidCase = entry.value;
        return voidCase.name.toString() === name;
      }
      default:
        return false;
    }
  };
}
function stringToScVal(str, ty) {
  switch (ty) {
    case "scSpecTypeString":
      return scVal.ScVal.scvString(str);
    case "scSpecTypeSymbol":
      return scVal.ScVal.scvSymbol(str);
    case "scSpecTypeAddress":
    case "scSpecTypeMuxedAddress":
      return address.Address.fromString(str).toScVal();
    case "scSpecTypeU64":
      return new xdr_large_int.XdrLargeInt("u64", str).toScVal();
    case "scSpecTypeI64":
      return new xdr_large_int.XdrLargeInt("i64", str).toScVal();
    case "scSpecTypeU128":
      return new xdr_large_int.XdrLargeInt("u128", str).toScVal();
    case "scSpecTypeI128":
      return new xdr_large_int.XdrLargeInt("i128", str).toScVal();
    case "scSpecTypeU256":
      return new xdr_large_int.XdrLargeInt("u256", str).toScVal();
    case "scSpecTypeI256":
      return new xdr_large_int.XdrLargeInt("i256", str).toScVal();
    case "scSpecTypeBytes":
    case "scSpecTypeBytesN":
      return scVal.ScVal.scvBytes(new scBytes.ScBytes(base64.base64ToUint8Array(str)));
    case "scSpecTypeTimepoint": {
      return scVal.ScVal.scvTimepoint(index.Uint64(str));
    }
    case "scSpecTypeDuration": {
      return scVal.ScVal.scvDuration(index.Uint64(str));
    }
    default:
      throw new TypeError(`invalid type ${ty} specified for string value`);
  }
}
const PRIMITIVE_DEFINITONS = {
  U32: {
    type: "integer",
    minimum: 0,
    maximum: 4294967295
  },
  I32: {
    type: "integer",
    minimum: -2147483648,
    maximum: 2147483647
  },
  U64: {
    type: "string",
    pattern: "^([1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 20
    // 64-bit max value has 20 digits
  },
  Timepoint: {
    type: "string",
    pattern: "^([1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 20
    // 64-bit max value has 20 digits
  },
  Duration: {
    type: "string",
    pattern: "^([1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 20
    // 64-bit max value has 20 digits
  },
  I64: {
    type: "string",
    pattern: "^(-?[1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 21
    // Includes additional digit for the potential '-'
  },
  U128: {
    type: "string",
    pattern: "^([1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 39
    // 128-bit max value has 39 digits
  },
  I128: {
    type: "string",
    pattern: "^(-?[1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 40
    // Includes additional digit for the potential '-'
  },
  U256: {
    type: "string",
    pattern: "^([1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 78
    // 256-bit max value has 78 digits
  },
  I256: {
    type: "string",
    pattern: "^(-?[1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 79
    // Includes additional digit for the potential '-'
  },
  Address: {
    type: "string",
    format: "address",
    description: "Address can be a public key or contract id"
  },
  MuxedAddress: {
    type: "string",
    format: "address",
    description: "Stellar public key with M prefix combining a G address and unique ID"
  },
  ScString: {
    type: "string",
    description: "ScString is a string"
  },
  ScSymbol: {
    type: "string",
    description: "ScSymbol is a string"
  },
  DataUrl: {
    type: "string",
    pattern: "^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?$"
  }
};
function typeRef(typeDef) {
  let ref;
  switch (typeDef.type) {
    case "scSpecTypeVal": {
      ref = "Val";
      break;
    }
    case "scSpecTypeBool": {
      return { type: "boolean" };
    }
    case "scSpecTypeVoid": {
      return { type: "null" };
    }
    case "scSpecTypeError": {
      ref = "Error";
      break;
    }
    case "scSpecTypeU32": {
      ref = "U32";
      break;
    }
    case "scSpecTypeI32": {
      ref = "I32";
      break;
    }
    case "scSpecTypeU64": {
      ref = "U64";
      break;
    }
    case "scSpecTypeI64": {
      ref = "I64";
      break;
    }
    case "scSpecTypeTimepoint": {
      ref = "Timepoint";
      break;
    }
    case "scSpecTypeDuration": {
      ref = "Duration";
      break;
    }
    case "scSpecTypeU128": {
      ref = "U128";
      break;
    }
    case "scSpecTypeI128": {
      ref = "I128";
      break;
    }
    case "scSpecTypeU256": {
      ref = "U256";
      break;
    }
    case "scSpecTypeI256": {
      ref = "I256";
      break;
    }
    case "scSpecTypeBytes": {
      ref = "DataUrl";
      break;
    }
    case "scSpecTypeString": {
      ref = "ScString";
      break;
    }
    case "scSpecTypeSymbol": {
      ref = "ScSymbol";
      break;
    }
    case "scSpecTypeAddress": {
      ref = "Address";
      break;
    }
    case "scSpecTypeMuxedAddress": {
      ref = "MuxedAddress";
      break;
    }
    case "scSpecTypeOption": {
      const opt = typeDef.value;
      return typeRef(opt.valueType);
    }
    case "scSpecTypeResult": {
      const result = typeDef.value;
      return typeRef(result.okType);
    }
    case "scSpecTypeVec": {
      const arr = typeDef.value;
      const reference = typeRef(arr.elementType);
      return {
        type: "array",
        items: reference
      };
    }
    case "scSpecTypeMap": {
      const map = typeDef.value;
      const items = [typeRef(map.keyType), typeRef(map.valueType)];
      return {
        type: "array",
        items: {
          type: "array",
          items,
          minItems: 2,
          maxItems: 2
        }
      };
    }
    case "scSpecTypeTuple": {
      const tuple = typeDef.value;
      const minItems = tuple.valueTypes.length;
      const maxItems = minItems;
      const items = tuple.valueTypes.map(typeRef);
      return { type: "array", items, minItems, maxItems };
    }
    case "scSpecTypeBytesN": {
      const arr = typeDef.value;
      return {
        $ref: "#/definitions/DataUrl",
        maxLength: arr.n
      };
    }
    case "scSpecTypeUdt": {
      const udt = typeDef.value;
      ref = udt.name.toString();
      break;
    }
  }
  return { $ref: `#/definitions/${ref}` };
}
function isRequired(typeDef) {
  return typeDef.type !== "scSpecTypeOption";
}
function argsAndRequired(input) {
  const properties = {};
  const required = [];
  input.forEach((arg) => {
    const aType = arg.type;
    const name = arg.name.toString();
    properties[name] = typeRef(aType);
    if (isRequired(aType)) {
      required.push(name);
    }
  });
  const res = { properties };
  if (required.length > 0) {
    res.required = required;
  }
  return res;
}
function structToJsonSchema(udt) {
  const fields = udt.fields;
  if (fields.some(isNumeric)) {
    if (!fields.every(isNumeric)) {
      throw new Error(
        "mixed numeric and non-numeric field names are not allowed"
      );
    }
    const items = fields.map((_, i) => typeRef(fields[i].type));
    return {
      type: "array",
      items,
      minItems: fields.length,
      maxItems: fields.length
    };
  }
  const description = udt.doc.toString();
  const { properties, required } = argsAndRequired(fields);
  return {
    description,
    properties,
    required,
    additionalProperties: false,
    type: "object"
  };
}
function functionToJsonSchema(func) {
  const { properties, required } = argsAndRequired(func.inputs);
  const args = {
    additionalProperties: false,
    properties,
    type: "object"
  };
  if (required?.length > 0) {
    args.required = required;
  }
  const input = {
    properties: {
      args
    }
  };
  const outputs = func.outputs;
  const output = outputs.length > 0 ? typeRef(outputs[0]) : typeRef(scSpecTypeDef.ScSpecTypeDef.scSpecTypeVoid());
  const description = func.doc.toString();
  if (description.length > 0) {
    input.description = description;
  }
  input.additionalProperties = false;
  output.additionalProperties = false;
  return {
    input,
    output
  };
}
function unionToJsonSchema(udt) {
  const description = udt.doc.toString();
  const cases = udt.cases;
  const oneOf = [];
  cases.forEach((aCase) => {
    switch (aCase.type) {
      case "scSpecUdtUnionCaseVoidV0": {
        const c = aCase.value;
        const title = c.name.toString();
        oneOf.push({
          type: "object",
          title,
          properties: {
            tag: title
          },
          additionalProperties: false,
          required: ["tag"]
        });
        break;
      }
      case "scSpecUdtUnionCaseTupleV0": {
        const c = aCase.value;
        const title = c.name.toString();
        oneOf.push({
          type: "object",
          title,
          properties: {
            tag: title,
            values: {
              type: "array",
              items: c.type.map(typeRef)
            }
          },
          required: ["tag", "values"],
          additionalProperties: false
        });
      }
    }
  });
  const res = {
    oneOf
  };
  if (description.length > 0) {
    res.description = description;
  }
  return res;
}
class Spec {
  /**
   * The XDR spec entries.
   */
  entries = [];
  /**
   * Generates a Spec instance from the contract's wasm binary.
   *
   * @param wasm - The contract's wasm binary as a Uint8Array.
   * @returns A Promise that resolves to a Spec instance.
   * @throws If the contract spec cannot be obtained from the provided wasm binary.
   */
  static fromWasm(wasm) {
    const spec = wasm_spec_parser.specFromWasm(wasm);
    return new Spec(spec);
  }
  /**
   * Generates a Spec instance from contract specs in any of the following forms:
   * - An XDR encoded stream of ScSpecEntry entries, the format of the spec
   *   stored inside Wasm files.
   * - A base64 XDR encoded stream of ScSpecEntry entries.
   * - An array of ScSpecEntry.
   * - An array of base64 XDR encoded ScSpecEntry.
   *
   * @returns A Promise that resolves to a Client instance.
   * @throws If the contract spec cannot be obtained from the provided wasm binary.
   */
  constructor(entries) {
    if (entries instanceof Uint8Array) {
      this.entries = utils.processSpecEntryStream(entries);
    } else if (typeof entries === "string") {
      this.entries = utils.processSpecEntryStream(base64.base64ToUint8Array(entries));
    } else {
      if (entries.length === 0) {
        throw new Error("Contract spec must have at least one entry");
      }
      const entry = entries[0];
      if (typeof entry === "string") {
        this.entries = entries.map(
          (s) => scSpecEntry.ScSpecEntry.fromXdr(s, "base64")
        );
      } else {
        this.entries = entries;
      }
    }
  }
  /**
   * Gets the XDR functions from the spec.
   * @returns all contract functions
   */
  funcs() {
    return this.entries.filter((entry) => entry.type === "scSpecEntryFunctionV0").map((entry) => entry.value);
  }
  /**
   * Gets the XDR function spec for the given function name.
   *
   * @param name - the name of the function
   * @returns the function spec
   *
   * @throws if no function with the given name exists
   */
  getFunc(name) {
    const entry = this.findEntry(name);
    if (entry.type !== "scSpecEntryFunctionV0") {
      throw new Error(`${name} is not a function`);
    }
    return entry.value;
  }
  /**
   * Converts native JS arguments to ScVals for calling a contract function.
   *
   * @param name - the name of the function
   * @param args - the arguments object
   * @returns the converted arguments
   *
   * @throws if argument is missing or incorrect type
   *
   * @example
   * ```ts
   * const args = {
   *   arg1: 'value1',
   *   arg2: 1234
   * };
   * const scArgs = contractSpec.funcArgsToScVals('funcName', args);
   * ```
   */
  funcArgsToScVals(name, args) {
    const fn = this.getFunc(name);
    return fn.inputs.map(
      (input) => this.nativeToScVal(readObj(args, input), input.type)
    );
  }
  /**
   * Converts the result ScVal of a function call to a native JS value.
   *
   * @param name - the name of the function
   * @param val_or_base64 - the result ScVal or base64 encoded string
   * @returns the converted native value
   *
   * @throws if return type mismatch or invalid input
   *
   * @example
   * ```ts
   * const resultScv = 'AAA=='; // Base64 encoded ScVal
   * const result = contractSpec.funcResToNative('funcName', resultScv);
   * ```
   */
  funcResToNative(name, val_or_base64) {
    const val = typeof val_or_base64 === "string" ? scVal.ScVal.fromXdr(val_or_base64, "base64") : val_or_base64;
    const func = this.getFunc(name);
    const outputs = func.outputs;
    if (outputs.length === 0) {
      if (val.type !== "scvVoid") {
        throw new Error(`Expected void, got ${val.type}`);
      }
      return null;
    }
    if (outputs.length > 1) {
      throw new Error(`Multiple outputs not supported`);
    }
    const output = outputs[0];
    if (output.type === "scSpecTypeResult") {
      if (val.type === "scvError") {
        return new rust_result.Err({
          message: base64.uint8ArrayToBase64(val.value.toXdr())
        });
      }
      return new rust_result.Ok(this.scValToNative(val, output.value.okType));
    }
    return this.scValToNative(val, output);
  }
  /**
   * Finds the XDR spec entry for the given name.
   *
   * @param name - the name to find
   * @returns the entry
   *
   * @throws if no entry with the given name exists
   */
  findEntry(name) {
    const entry = this.entries.find((e) => {
      if (e.type === "scSpecEntryFunctionV0") {
        return e.value.name.toString() === name;
      }
      return e.value.name.toString() === name;
    });
    if (!entry) {
      throw new Error(`no such entry: ${name}`);
    }
    return entry;
  }
  /**
   * Converts a native JS value to an ScVal based on the given type.
   *
   * @param val - the native JS value
   * @param ty - the expected type
   * @returns the converted ScVal
   *
   * @throws if value cannot be converted to the given type
   */
  nativeToScVal(val, ty) {
    const tyType = ty.type;
    if (tyType === "scSpecTypeUdt") {
      const udt = ty.value;
      return this.nativeToUdt(val, udt.name.toString());
    }
    if (tyType === "scSpecTypeOption") {
      const opt = ty.value;
      if (val === null || val === void 0) {
        return scVal.ScVal.scvVoid();
      }
      return this.nativeToScVal(val, opt.valueType);
    }
    if (tyType === "scSpecTypeVal") {
      return scval.nativeToScVal(val);
    }
    switch (typeof val) {
      case "object": {
        if (val === null) {
          switch (tyType) {
            case "scSpecTypeVoid":
              return scVal.ScVal.scvVoid();
            default:
              throw new TypeError(
                `Type ${ty} was not void, but value was null`
              );
          }
        }
        if (scVal.ScVal.is(val)) {
          return val;
        }
        if (val instanceof address.Address) {
          if (ty.type !== "scSpecTypeAddress") {
            throw new TypeError(
              `Type ${ty} was not address, but value was Address`
            );
          }
          return val.toScVal();
        }
        if (val instanceof contract.Contract) {
          if (ty.type !== "scSpecTypeAddress") {
            throw new TypeError(
              `Type ${ty} was not address, but value was Address`
            );
          }
          return val.address().toScVal();
        }
        if (val instanceof Uint8Array) {
          const copy = Uint8Array.from(val);
          switch (tyType) {
            case "scSpecTypeBytesN": {
              const bytesN = ty.value;
              if (copy.length !== bytesN.n) {
                throw new TypeError(
                  `expected ${bytesN.n} bytes, but got ${copy.length}`
                );
              }
              return scVal.ScVal.scvBytes(new scBytes.ScBytes(copy));
            }
            case "scSpecTypeBytes":
              return scVal.ScVal.scvBytes(new scBytes.ScBytes(copy));
            default:
              throw new TypeError(
                `invalid type (${ty}) specified for Bytes and BytesN`
              );
          }
        }
        if (Array.isArray(val)) {
          switch (tyType) {
            case "scSpecTypeVec": {
              const vec = ty.value;
              const elementType = vec.elementType;
              return scVal.ScVal.scvVec(
                val.map((v) => this.nativeToScVal(v, elementType))
              );
            }
            case "scSpecTypeTuple": {
              const tup = ty.value;
              const valTypes = tup.valueTypes;
              if (val.length !== valTypes.length) {
                throw new TypeError(
                  `Tuple expects ${valTypes.length} values, but ${val.length} were provided`
                );
              }
              return scVal.ScVal.scvVec(
                val.map((v, i) => this.nativeToScVal(v, valTypes[i]))
              );
            }
            case "scSpecTypeMap": {
              const map = ty.value;
              const keyType = map.keyType;
              const valueType = map.valueType;
              return scVal.ScVal.scvMap(
                val.map((entry) => {
                  const key = this.nativeToScVal(entry[0], keyType);
                  const mapVal = this.nativeToScVal(entry[1], valueType);
                  return new scVal.ScMapEntry({ key, val: mapVal });
                })
              );
            }
            default:
              throw new TypeError(
                `Type ${ty} was not vec, but value was Array`
              );
          }
        }
        if (val instanceof Map) {
          if (tyType !== "scSpecTypeMap") {
            throw new TypeError(`Type ${ty} was not map, but value was Map`);
          }
          const scMap = ty.value;
          const map = val;
          const entries = [];
          const values = map.entries();
          let res = values.next();
          while (!res.done) {
            const [k, v] = res.value;
            const key = this.nativeToScVal(k, scMap.keyType);
            const mapval = this.nativeToScVal(v, scMap.valueType);
            entries.push(new scVal.ScMapEntry({ key, val: mapval }));
            res = values.next();
          }
          return scVal.ScVal.scvMap(entries);
        }
        const proto = Object.getPrototypeOf(val);
        if (proto !== Object.prototype && proto !== null) {
          throw new TypeError(
            `cannot interpret ${val.constructor?.name} value as ScVal (${JSON.stringify(val)})`
          );
        }
        throw new TypeError(
          `Received object ${val}  did not match the provided type ${ty}`
        );
      }
      case "number":
      case "bigint": {
        switch (tyType) {
          case "scSpecTypeU32":
            if (BigInt(val) < BigInt(index.Uint32.MIN_VALUE) || BigInt(val) > BigInt(index.Uint32.MAX_VALUE)) {
              throw new RangeError(`Value ${val} is out of range for U32`);
            }
            return scVal.ScVal.scvU32(Number(val));
          case "scSpecTypeI32":
            if (BigInt(val) < BigInt(index.Int32.MIN_VALUE) || BigInt(val) > BigInt(index.Int32.MAX_VALUE)) {
              throw new RangeError(`Value ${val} is out of range for I32`);
            }
            return scVal.ScVal.scvI32(Number(val));
          case "scSpecTypeU64":
          case "scSpecTypeI64":
          case "scSpecTypeU128":
          case "scSpecTypeI128":
          case "scSpecTypeU256":
          case "scSpecTypeI256":
          case "scSpecTypeTimepoint":
          case "scSpecTypeDuration": {
            const intType = tyType.substring(10).toLowerCase();
            return new xdr_large_int.XdrLargeInt(intType, val).toScVal();
          }
          default:
            throw new TypeError(`invalid type (${ty}) specified for integer`);
        }
      }
      case "string":
        return stringToScVal(val, tyType);
      case "boolean": {
        if (tyType !== "scSpecTypeBool") {
          throw TypeError(`Type ${ty} was not bool, but value was bool`);
        }
        return scVal.ScVal.scvBool(val);
      }
      case "undefined": {
        if (!ty) {
          return scVal.ScVal.scvVoid();
        }
        switch (tyType) {
          case "scSpecTypeVoid":
            return scVal.ScVal.scvVoid();
          default:
            throw new TypeError(
              `Type ${ty} was not void, but value was undefined`
            );
        }
      }
      case "function":
        return this.nativeToScVal(val(), ty);
      default:
        throw new TypeError(`failed to convert typeof ${typeof val} (${val})`);
    }
  }
  nativeToUdt(val, name) {
    const entry = this.findEntry(name);
    switch (entry.type) {
      case "scSpecEntryUdtEnumV0":
        if (typeof val !== "number") {
          throw new TypeError(
            `expected number for enum ${name}, but got ${typeof val}`
          );
        }
        return this.nativeToEnum(val, entry.value);
      case "scSpecEntryUdtStructV0":
        return this.nativeToStruct(val, entry.value);
      case "scSpecEntryUdtUnionV0":
        return this.nativeToUnion(val, entry.value);
      default:
        throw new Error(`failed to parse udt ${name}`);
    }
  }
  nativeToUnion(val, union_) {
    const entryName = val.tag;
    const caseFound = union_.cases.find((entry) => {
      return entry.value.name.toString() === entryName;
    });
    if (!caseFound) {
      throw new TypeError(`no such enum entry: ${entryName} in ${union_}`);
    }
    const key = scVal.ScVal.scvSymbol(entryName);
    switch (caseFound.type) {
      case "scSpecUdtUnionCaseVoidV0": {
        return scVal.ScVal.scvVec([key]);
      }
      case "scSpecUdtUnionCaseTupleV0": {
        const types = caseFound.value.type;
        if (Array.isArray(val.values)) {
          if (val.values.length !== types.length) {
            throw new TypeError(
              `union ${union_} expects ${types.length} values, but got ${val.values.length}`
            );
          }
          const scvals = val.values.map(
            (v, i) => this.nativeToScVal(v, types[i])
          );
          scvals.unshift(key);
          return scVal.ScVal.scvVec(scvals);
        }
        throw new Error(`failed to parse union case ${caseFound} with ${val}`);
      }
      default:
        throw new Error(`failed to parse union ${union_} with ${val}`);
    }
  }
  nativeToStruct(val, struct) {
    const fields = struct.fields;
    if (fields.some(isNumeric)) {
      if (!fields.every(isNumeric)) {
        throw new Error(
          "mixed numeric and non-numeric field names are not allowed"
        );
      }
      return scVal.ScVal.scvVec(
        fields.map(
          (_, i) => this.nativeToScVal(val[i], fields[i].type)
        )
      );
    }
    return scVal.ScVal.scvMap(
      fields.map((field) => {
        const name = field.name.toString();
        return new scVal.ScMapEntry({
          key: this.nativeToScVal(name, scSpecTypeDef.ScSpecTypeDef.scSpecTypeSymbol()),
          val: this.nativeToScVal(val[name], field.type)
        });
      })
    );
  }
  nativeToEnum(val, enum_) {
    if (enum_.cases.some((entry) => entry.value === val)) {
      return scVal.ScVal.scvU32(val);
    }
    throw new TypeError(`no such enum entry: ${val} in ${enum_}`);
  }
  /**
   * Converts an base64 encoded ScVal back to a native JS value based on the given type.
   *
   * @param scv - the base64 encoded ScVal
   * @param typeDef - the expected type
   * @returns the converted native JS value
   *
   * @throws if ScVal cannot be converted to the given type
   */
  scValStrToNative(scv, typeDef) {
    return this.scValToNative(scVal.ScVal.fromXdr(scv, "base64"), typeDef);
  }
  /**
   * Converts an ScVal back to a native JS value based on the given type.
   *
   * @param scv - the ScVal
   * @param typeDef - the expected type
   * @returns the converted native JS value
   *
   * @throws if ScVal cannot be converted to the given type
   */
  scValToNative(scv, typeDef) {
    const tyType = typeDef.type;
    if (tyType === "scSpecTypeOption") {
      switch (scv.type) {
        case "scvVoid":
          return null;
        default:
          return this.scValToNative(scv, typeDef.value.valueType);
      }
    }
    if (tyType === "scSpecTypeUdt") {
      return this.scValUdtToNative(scv, typeDef.value);
    }
    if (tyType === "scSpecTypeVal") {
      return scval.scValToNative(scv);
    }
    switch (scv.type) {
      case "scvVoid":
        return null;
      // these can be converted to bigints directly
      case "scvU64":
      case "scvI64":
      case "scvTimepoint":
      case "scvDuration":
      // these can be parsed by internal abstractions note that this can also
      // handle the above two cases, but it's not as efficient (another
      // type-check, parsing, etc.)
      case "scvU128":
      case "scvI128":
      case "scvU256":
      case "scvI256":
        return index$1.scValToBigInt(scv);
      case "scvVec": {
        if (tyType === "scSpecTypeVec") {
          const vec = typeDef.value;
          return (scv.value ?? []).map(
            (elm) => this.scValToNative(elm, vec.elementType)
          );
        }
        if (tyType === "scSpecTypeTuple") {
          const tuple = typeDef.value;
          const valTypes = tuple.valueTypes;
          return (scv.value ?? []).map(
            (elm, i) => this.scValToNative(elm, valTypes[i])
          );
        }
        throw new TypeError(`Type ${typeDef} was not vec, but ${scv} is`);
      }
      case "scvAddress":
        return address.Address.fromScVal(scv).toString();
      case "scvMap": {
        const map = scv.value ?? [];
        if (tyType === "scSpecTypeMap") {
          const typed = typeDef.value;
          const keyType = typed.keyType;
          const valueType = typed.valueType;
          const res = map.map((entry) => [
            this.scValToNative(entry.key, keyType),
            this.scValToNative(entry.val, valueType)
          ]);
          return res;
        }
        throw new TypeError(
          `ScSpecType ${tyType} was not map, but ${JSON.stringify(
            scv,
            null,
            2
          )} is`
        );
      }
      // these return the primitive type directly
      case "scvBool":
      case "scvU32":
      case "scvI32":
        return scv.value;
      case "scvBytes":
        return scv.value.value;
      case "scvString":
      case "scvSymbol": {
        if (tyType !== "scSpecTypeString" && tyType !== "scSpecTypeSymbol") {
          throw new Error(
            `ScSpecType ${tyType} was not string or symbol, but ${JSON.stringify(scv, null, 2)} is`
          );
        }
        return scv.value?.toString();
      }
      // in the fallthrough case, just return the underlying value directly
      default:
        throw new TypeError(
          `failed to convert ${JSON.stringify(
            scv,
            null,
            2
          )} to native type from type ${tyType}`
        );
    }
  }
  scValUdtToNative(scv, udt) {
    const entry = this.findEntry(udt.name.toString());
    switch (entry.type) {
      case "scSpecEntryUdtEnumV0":
        return this.enumToNative(scv);
      case "scSpecEntryUdtStructV0":
        return this.structToNative(scv, entry.value);
      case "scSpecEntryUdtUnionV0":
        return this.unionToNative(scv, entry.value);
      default:
        throw new Error(`failed to parse udt ${udt.name.toString()}: ${entry}`);
    }
  }
  unionToNative(val, udt) {
    if (val.type !== "scvVec") {
      throw new Error(`${JSON.stringify(val, null, 2)} is not a vec`);
    }
    const vec = val.value;
    if (!vec) {
      throw new Error(`${JSON.stringify(val, null, 2)} is not a vec`);
    }
    if (vec.length === 0 && udt.cases.length !== 0) {
      throw new Error(
        `${val} has length 0, but the there are at least one case in the union`
      );
    }
    if (vec[0].type !== "scvSymbol") {
      throw new Error(`${vec[0]} is not a symbol`);
    }
    const name = vec[0].value.toString();
    const entry = udt.cases.find(findCase(name));
    if (!entry) {
      throw new Error(
        `failed to find entry ${name} in union ${udt.name.toString()}`
      );
    }
    const res = { tag: name };
    if (entry.type === "scSpecUdtUnionCaseTupleV0") {
      const tuple = entry.value;
      const ty = tuple.type;
      const values = ty.map(
        (e, i) => this.scValToNative(vec[i + 1], e)
      );
      res.values = values;
    }
    return res;
  }
  structToNative(val, udt) {
    const res = {};
    const fields = udt.fields;
    if (fields.some(isNumeric)) {
      if (val.type !== "scvVec") {
        throw new Error(
          `${JSON.stringify(val, null, 2)} is not a vec (expected for tuple-like struct)`
        );
      }
      const vec = val.value ?? [];
      return vec.map(
        (elm, i) => this.scValToNative(elm, fields[i].type)
      );
    }
    if (val.type !== "scvMap") {
      throw new Error(`${JSON.stringify(val, null, 2)} is not a map`);
    }
    const entries = val.value ?? [];
    entries.forEach((entry, i) => {
      const field = fields[i];
      res[field.name.toString()] = this.scValToNative(entry.val, field.type);
    });
    return res;
  }
  enumToNative(scv) {
    if (scv.type !== "scvU32") {
      throw new Error(`Enum must have a u32 value`);
    }
    const num = scv.value;
    return num;
  }
  /**
   * Gets the XDR error cases from the spec.
   *
   * @returns all contract functions
   *
   */
  errorCases() {
    return this.entries.filter((entry) => entry.type === "scSpecEntryUdtErrorEnumV0").flatMap((entry) => entry.value.cases);
  }
  /**
   * Gets the SEP-48 event spec entries from the spec.
   *
   * @returns all contract events
   */
  events() {
    return event_spec.events(this.entries);
  }
  /**
   * Finds the XDR event spec for the given event name.
   *
   * Unlike {@link Spec.findEntry}, a missing event is not an error: this
   * returns `undefined` so callers can probe a contract for an event without
   * wrapping the call in a `try`.
   *
   * @param name - the name of the event
   * @param occurrence - (optional) 0-based index among same-named events, in
   *        declaration order, for contracts that declare the same event name
   *        more than once (defaults to the first)
   * @returns the event spec, or `undefined` if the contract declares no event
   *          with that name (at that occurrence)
   *
   * @throws if `occurrence` is not a non-negative integer
   *
   * @example
   * ```ts
   * if (contractSpec.findEvent("transfer")) {
   *   // the contract declares a "transfer" event
   * }
   * ```
   */
  findEvent(name, occurrence) {
    return event_spec.findEvent(this.entries, name, occurrence);
  }
  /**
   * Attempts to parse an emitted contract event (its topics and data) using
   * the event specs (SEP-48) declared in this contract's spec.
   *
   * An event's topics are `[...prefixTopics, ...topicListParamValues]` (in
   * that order), and its data is decoded according to the event's
   * `dataFormat` (`singleValue`, `vec`, or `map`).
   *
   * @param topics - the event's topics, as `ScVal[]` or base64 XDR strings
   * @param data - the event's data, as an `ScVal` or a base64 XDR string
   * @returns the parsed event (its name plus all decoded params — topic-list
   *          and data-located alike — merged into `data`), or `undefined` if
   *          no event spec matches (e.g. when filtering a mixed stream of
   *          events from multiple contracts/specs)
   *
   * Note that matching compares only the prefix topics and the topic count;
   * if two event specs share both (in particular, events with no prefix
   * topics match on arity alone), the first declared spec whose values
   * decode successfully wins.
   *
   * @example
   * ```ts
   * const parsed = contractSpec.parseEvent(response.topic, response.value);
   * if (parsed) {
   *   console.log(parsed.name, parsed.data);
   * }
   * ```
   */
  parseEvent(topics, data) {
    return event_spec.parseEvent(this, this.entries, topics, data);
  }
  /**
   * Builds a `getEvents` topic filter (a single row of `Api.EventFilter.topics`)
   * for the named event: base64-encoded `scvSymbol`s for the event's prefix
   * topics, followed by one entry per topic-list param — either the
   * base64-encoded ScVal for a value supplied in `topicValues`, or the
   * wildcard `"*"`.
   *
   * @param name - the name of the event
   * @param topicValues - (optional) native values for topic-list params, keyed by param name
   * @param occurrence - (optional) 0-based index among same-named events, in
   *        declaration order, for contracts that declare the same event name
   *        more than once (defaults to the first)
   * @returns a single topic filter row
   *
   * @throws if no event with the given name (at the given occurrence) exists,
   *         or if `occurrence` is not a non-negative integer
   *
   * @example
   * ```ts
   * const topics = contractSpec.eventTopicFilter('transfer', { to: someAddress });
   * ```
   */
  eventTopicFilter(name, topicValues, occurrence) {
    return event_spec.eventTopicFilter(
      this,
      this.entries,
      name,
      topicValues,
      occurrence
    );
  }
  /**
   * Converts the contract spec to a JSON schema.
   *
   * If `funcName` is provided, the schema will be a reference to the function schema.
   *
   * @param funcName - (optional) the name of the function to convert
   * @returns the converted JSON schema
   *
   * @throws if the contract spec is invalid
   */
  jsonSchema(funcName) {
    const definitions = {};
    this.entries.forEach((entry) => {
      switch (entry.type) {
        case "scSpecEntryUdtEnumV0": {
          const udt = entry.value;
          definitions[udt.name.toString()] = enumToJsonSchema(udt);
          break;
        }
        case "scSpecEntryUdtStructV0": {
          const udt = entry.value;
          definitions[udt.name.toString()] = structToJsonSchema(udt);
          break;
        }
        case "scSpecEntryUdtUnionV0": {
          const udt = entry.value;
          definitions[udt.name.toString()] = unionToJsonSchema(udt);
          break;
        }
        case "scSpecEntryFunctionV0": {
          const fn = entry.value;
          const fnName = fn.name.toString();
          const { input } = functionToJsonSchema(fn);
          definitions[fnName] = input;
          break;
        }
      }
    });
    const res = {
      $schema: "http://json-schema.org/draft-07/schema#",
      definitions: { ...PRIMITIVE_DEFINITONS, ...definitions }
    };
    if (funcName) {
      res.$ref = `#/definitions/${funcName}`;
    }
    return res;
  }
}

exports.Spec = Spec;
//# sourceMappingURL=spec.js.map
