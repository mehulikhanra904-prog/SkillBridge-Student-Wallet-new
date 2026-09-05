'use strict';

var uint8arrayExtras = require('uint8array-extras');
var jsXdr = require('@stellar/js-xdr');
var xdrString = require('./xdr-string.js');
var jsonNames = require('./json-names.js');
var bigintParts = require('./bigint-parts.js');
var strkey = require('../../base/strkey.js');

const OVERRIDES = /* @__PURE__ */ new Map();
function walkToJson(wire, schema) {
  const override = schema.name ? OVERRIDES.get(schema.name) : void 0;
  if (override) return override.toJson(wire);
  const s = schema;
  switch (s.kind) {
    case "bool":
      return wire;
    case "void":
      return null;
    case "int32":
    case "uint32":
      return wire;
    case "float":
    case "double":
      return wire;
    case "int64":
    case "uint64":
      return wire.toString();
    case "string":
      return wire.toJson();
    case "opaque":
    case "varOpaque":
      return uint8arrayExtras.uint8ArrayToHex(wire);
    case "enum": {
      const e = s;
      const name = e.nameByValue.get(wire);
      if (name === void 0) {
        throw new jsXdr.XdrError(
          `${schema.name ?? "enum"}: unknown enum value ${String(wire)}`
        );
      }
      return jsonNames.enumJsonNames(e.memberPrefix, e.nameByValue).bySource.get(name) ?? name;
    }
    case "option":
      return wire === null ? null : walkToJson(wire, s.element);
    case "array":
    case "fixedArray":
      return wire.map((v) => walkToJson(v, s.element));
    case "struct": {
      const rec = wire;
      const out = {};
      for (const [k, fieldSchema] of s.entries) {
        out[jsonNames.structFieldJsonName(k)] = walkToJson(rec[k], fieldSchema);
      }
      return out;
    }
    case "union": {
      const rec = wire;
      const disc = rec[s.switchKey];
      const matched = s.cases.find((c) => c.discriminant === disc);
      if (matched === void 0) {
        if (s.defaultArm !== void 0) {
          throw new jsXdr.XdrError(
            `${schema.name ?? "union"}: default arms are not supported in JSON`
          );
        }
        throw new jsXdr.XdrError(
          `${schema.name ?? "union"}: no case for discriminator ${String(disc)}`
        );
      }
      const arm = matched.arm;
      const names = jsonNames.unionCaseNames(s);
      const jsonKey = names.bySource.get(matched.name) ?? matched.name;
      if (isFieldArm(arm)) {
        return {
          [jsonKey]: walkToJson(rec[arm.name], arm.schema)
        };
      }
      return jsonKey;
    }
    case "lazy":
      return walkToJson(wire, s.getSchema());
    default:
      throw new jsXdr.XdrError(
        `${schema.name ?? schema.kind}: toJson unsupported for kind ${schema.kind}`
      );
  }
}
function walkFromJson(json, schema) {
  const override = schema.name ? OVERRIDES.get(schema.name) : void 0;
  if (override) return override.fromJson(json);
  const s = schema;
  switch (s.kind) {
    case "bool":
      assertJsonType(json, "boolean", schema);
      return json;
    case "void":
      return void 0;
    case "int32":
    case "uint32": {
      assertJsonType(json, "number", schema);
      const value = json;
      const signed = s.kind === "int32";
      const min = signed ? -2147483648 : 0;
      const max = signed ? 2 ** 31 - 1 : 2 ** 32 - 1;
      if (!Number.isInteger(value) || value < min || value > max) {
        throw new jsXdr.XdrError(
          `${schema.name ?? s.kind}: value ${value} is not a valid ${s.kind}`
        );
      }
      return value;
    }
    case "float":
    case "double":
      assertJsonType(json, "number", schema);
      return json;
    case "int64":
    case "uint64": {
      assertJsonType(json, "string", schema);
      bigintParts.assertDecimalDigitBudget(json, 64, schema.name ?? s.kind);
      bigintParts.assertDecimalString(json, schema.name ?? s.kind);
      let value;
      try {
        value = BigInt(json);
      } catch {
        throw new jsXdr.XdrError(
          `${schema.name ?? s.kind}: "${json}" is not a valid ${s.kind}`
        );
      }
      bigintParts.assertBigIntFits(value, s.kind === "int64", 64, schema.name ?? s.kind);
      return value;
    }
    case "string": {
      assertJsonType(json, "string", schema);
      const str = xdrString.XdrString.fromJson(json);
      if (str.length > s.maxLength) {
        throw new jsXdr.XdrError(
          `${schema.name ?? "string"}: length ${str.length} exceeds max ${s.maxLength}`
        );
      }
      return str;
    }
    case "opaque":
    case "varOpaque": {
      assertJsonType(json, "string", schema);
      let bytes;
      try {
        bytes = uint8arrayExtras.hexToUint8Array(json);
      } catch {
        throw new jsXdr.XdrError(`${schema.name ?? s.kind}: expected a hex string`);
      }
      if (s.kind === "opaque" && bytes.length !== s.length) {
        throw new jsXdr.XdrError(
          `${schema.name ?? "opaque"}: expected ${s.length} byte(s), got ${bytes.length}`
        );
      }
      if (s.kind === "varOpaque" && bytes.length > s.maxLength) {
        throw new jsXdr.XdrError(
          `${schema.name ?? "varOpaque"}: length ${bytes.length} exceeds max ${s.maxLength}`
        );
      }
      return bytes;
    }
    case "enum": {
      const e = s;
      assertJsonType(json, "string", schema);
      const target = json;
      const names = jsonNames.enumJsonNames(e.memberPrefix, e.nameByValue);
      const sourceName = names.byJson.get(target);
      if (sourceName !== void 0) {
        for (const [value, name] of e.nameByValue) {
          if (name === sourceName) return value;
        }
      }
      throw new jsXdr.XdrError(
        `${schema.name ?? "enum"}: unknown enum name ${target}`
      );
    }
    case "option":
      return json === null ? null : walkFromJson(json, s.element);
    case "array": {
      if (!Array.isArray(json)) {
        throw new jsXdr.XdrError(
          `${schema.name ?? "array"}: expected JSON array, got ${typeof json}`
        );
      }
      if (json.length > s.maxLength) {
        throw new jsXdr.XdrError(
          `${schema.name ?? "array"}: length ${json.length} exceeds max ${s.maxLength}`
        );
      }
      return json.map((v) => walkFromJson(v, s.element));
    }
    case "fixedArray": {
      if (!Array.isArray(json)) {
        throw new jsXdr.XdrError(
          `${schema.name ?? "fixedArray"}: expected JSON array, got ${typeof json}`
        );
      }
      if (json.length !== s.length) {
        throw new jsXdr.XdrError(
          `${schema.name ?? "fixedArray"}: expected length ${s.length}, got ${json.length}`
        );
      }
      return json.map((v) => walkFromJson(v, s.element));
    }
    case "struct": {
      if (!isPlainObject(json)) {
        throw new jsXdr.XdrError(`${schema.name ?? "struct"}: expected JSON object`);
      }
      const rec = json;
      const out = {};
      const accepted = jsonNames.acceptedStructJsonKeys(s.entries);
      for (const key of Object.keys(rec)) {
        if (!accepted.has(key)) {
          throw new jsXdr.XdrError(
            `${schema.name ?? "struct"}: unknown field ${key}`
          );
        }
      }
      for (const [k, fieldSchema] of s.entries) {
        const snake = jsonNames.structFieldJsonName(k);
        const legacy = jsonNames.legacyStructFieldJsonName(k);
        if (legacy !== void 0 && Object.hasOwn(rec, snake) && Object.hasOwn(rec, legacy)) {
          throw new jsXdr.XdrError(
            `${schema.name ?? "struct"}: field ${k} given as both ${snake} and ${legacy}`
          );
        }
        const lookupKey = Object.hasOwn(rec, snake) ? snake : legacy !== void 0 && Object.hasOwn(rec, legacy) ? legacy : void 0;
        if (lookupKey === void 0) {
          if (unwrapLazy(fieldSchema).kind === "option") {
            out[k] = null;
            continue;
          }
          throw new jsXdr.XdrError(
            `${schema.name ?? "struct"}: missing field ${snake}`
          );
        }
        out[k] = walkFromJson(rec[lookupKey], fieldSchema);
      }
      return out;
    }
    case "union":
      return unionFromJson(json, s);
    case "lazy":
      return walkFromJson(json, s.getSchema());
    default:
      throw new jsXdr.XdrError(
        `${schema.name ?? schema.kind}: fromJson unsupported for kind ${schema.kind}`
      );
  }
}
function unionFromJson(json, schema) {
  let jsonKey;
  let payload;
  if (typeof json === "string") {
    jsonKey = json;
  } else if (isPlainObject(json)) {
    const keys = Object.keys(json);
    if (keys.length !== 1) {
      throw new jsXdr.XdrError(
        `${schema.name ?? "union"}: expected single-key object, got ${keys.length}`
      );
    }
    jsonKey = keys[0];
    payload = json[jsonKey];
  } else {
    throw new jsXdr.XdrError(
      `${schema.name ?? "union"}: expected string or single-key object`
    );
  }
  const names = jsonNames.unionCaseNames(schema);
  const sourceName = names.byJson.get(jsonKey);
  const matched = sourceName === void 0 ? void 0 : schema.cases.find((c) => c.name === sourceName);
  if (matched === void 0) {
    if (schema.defaultArm !== void 0) {
      throw new jsXdr.XdrError(
        `${schema.name ?? "union"}: default arms are not supported in JSON`
      );
    }
    throw new jsXdr.XdrError(`${schema.name ?? "union"}: unknown case ${jsonKey}`);
  }
  const arm = matched.arm;
  const discriminant = matched.discriminant;
  const out = { [schema.switchKey]: discriminant };
  if (isFieldArm(arm)) {
    if (payload === void 0) {
      throw new jsXdr.XdrError(
        `${schema.name ?? "union"}.${jsonKey}: missing arm payload`
      );
    }
    out[arm.name] = walkFromJson(payload, arm.schema);
  } else if (payload !== void 0 && payload !== null) {
    throw new jsXdr.XdrError(
      `${schema.name ?? "union"}.${jsonKey}: unexpected payload for void arm`
    );
  }
  return out;
}
function isFieldArm(arm) {
  return typeof arm === "object" && arm !== null && "schema" in arm;
}
function unwrapLazy(schema) {
  let s = schema;
  while (s.kind === "lazy") {
    s = s.getSchema();
  }
  return s;
}
function assertJsonType(json, expected, schema) {
  if (typeof json !== expected) {
    throw new jsXdr.XdrError(
      `${schema.name ?? schema.kind}: expected JSON ${expected}, got ${typeof json}`
    );
  }
}
function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof Uint8Array);
}
function asDataView(bytes) {
  return new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}
function med25519ToStrkey(w) {
  const payload = new Uint8Array(40);
  payload.set(w.ed25519, 0);
  asDataView(payload).setBigUint64(32, w.id);
  return strkey.StrKey.encodeMed25519PublicKey(payload);
}
function med25519FromStrkey(json) {
  const raw = strkey.StrKey.decodeMed25519PublicKey(json);
  return {
    id: asDataView(raw).getBigUint64(32),
    ed25519: raw.subarray(0, 32)
  };
}
function signedPayloadToStrkey(w) {
  const buf = new Uint8Array(32 + 4 + roundUp4(w.payload.length));
  buf.set(w.ed25519, 0);
  asDataView(buf).setUint32(32, w.payload.length);
  buf.set(w.payload, 36);
  return strkey.StrKey.encodeSignedPayload(buf);
}
function signedPayloadFromStrkey(json) {
  const raw = strkey.StrKey.decodeSignedPayload(json);
  return {
    ed25519: raw.subarray(0, 32),
    payload: raw.subarray(36, 36 + asDataView(raw).getUint32(32))
  };
}
OVERRIDES.set("PublicKey", {
  toJson(wire) {
    const w = wire;
    if (w.type !== 0) {
      throw new jsXdr.XdrError(
        `PublicKey: unsupported variant ${w.type} for JSON output`
      );
    }
    return strkey.StrKey.encodeEd25519PublicKey(w.ed25519);
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("PublicKey: expected G-strkey string");
    }
    return {
      type: 0,
      ed25519: strkey.StrKey.decodeEd25519PublicKey(json)
    };
  }
});
OVERRIDES.set("MuxedAccount", {
  toJson(wire) {
    const w = wire;
    if (w.type === 0) {
      return strkey.StrKey.encodeEd25519PublicKey(w.ed25519);
    }
    return med25519ToStrkey(w.med25519);
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("MuxedAccount: expected strkey string");
    }
    if (json.startsWith("G")) {
      return {
        type: 0,
        ed25519: strkey.StrKey.decodeEd25519PublicKey(json)
      };
    }
    if (json.startsWith("M")) {
      return { type: 256, med25519: med25519FromStrkey(json) };
    }
    throw new jsXdr.XdrError(`MuxedAccount: unsupported strkey prefix in ${json}`);
  }
});
const MED25519_OVERRIDE = {
  toJson(wire) {
    return med25519ToStrkey(wire);
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("med25519 account: expected M-strkey string");
    }
    return med25519FromStrkey(json);
  }
};
OVERRIDES.set("MuxedEd25519Account", MED25519_OVERRIDE);
OVERRIDES.set("MuxedAccountMed25519", MED25519_OVERRIDE);
OVERRIDES.set("SignerKey", {
  toJson(wire) {
    const w = wire;
    switch (w.type) {
      case 0:
        return strkey.StrKey.encodeEd25519PublicKey(w.ed25519);
      case 1:
        return strkey.StrKey.encodePreAuthTx(w.preAuthTx);
      case 2:
        return strkey.StrKey.encodeSha256Hash(w.hashX);
      case 3:
        return signedPayloadToStrkey(w.ed25519SignedPayload);
    }
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("SignerKey: expected strkey string");
    }
    if (json.startsWith("G")) {
      return {
        type: 0,
        ed25519: strkey.StrKey.decodeEd25519PublicKey(json)
      };
    }
    if (json.startsWith("T")) {
      return {
        type: 1,
        preAuthTx: strkey.StrKey.decodePreAuthTx(json)
      };
    }
    if (json.startsWith("X")) {
      return { type: 2, hashX: strkey.StrKey.decodeSha256Hash(json) };
    }
    if (json.startsWith("P")) {
      return { type: 3, ed25519SignedPayload: signedPayloadFromStrkey(json) };
    }
    throw new jsXdr.XdrError(`SignerKey: unsupported strkey prefix in ${json}`);
  }
});
OVERRIDES.set("SignerKeyEd25519SignedPayload", {
  toJson(wire) {
    return signedPayloadToStrkey(wire);
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError(
        "SignerKeyEd25519SignedPayload: expected P-strkey string"
      );
    }
    return signedPayloadFromStrkey(json);
  }
});
OVERRIDES.set("ScAddress", {
  toJson(wire) {
    const w = wire;
    switch (w.type) {
      case 0:
        return strkey.StrKey.encodeEd25519PublicKey(w.accountId.ed25519);
      case 1:
        return strkey.StrKey.encodeContract(w.contractId);
      case 2:
        return med25519ToStrkey(w.muxedAccount);
      case 3: {
        const cb = w.claimableBalanceId;
        const raw = new Uint8Array(1 + 32);
        raw.set(cb.v0, 1);
        return strkey.StrKey.encodeClaimableBalance(raw);
      }
      case 4:
        return strkey.StrKey.encodeLiquidityPool(w.liquidityPoolId);
    }
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("ScAddress: expected strkey string");
    }
    if (json.startsWith("G")) {
      return {
        type: 0,
        accountId: {
          type: 0,
          ed25519: strkey.StrKey.decodeEd25519PublicKey(json)
        }
      };
    }
    if (json.startsWith("C")) {
      return { type: 1, contractId: strkey.StrKey.decodeContract(json) };
    }
    if (json.startsWith("M")) {
      return { type: 2, muxedAccount: med25519FromStrkey(json) };
    }
    if (json.startsWith("B")) {
      const raw = strkey.StrKey.decodeClaimableBalance(json);
      return {
        type: 3,
        claimableBalanceId: {
          type: raw[0],
          v0: raw.subarray(1)
        }
      };
    }
    if (json.startsWith("L")) {
      return {
        type: 4,
        liquidityPoolId: strkey.StrKey.decodeLiquidityPool(json)
      };
    }
    throw new jsXdr.XdrError(`ScAddress: unsupported strkey prefix in ${json}`);
  }
});
OVERRIDES.set("ClaimableBalanceId", {
  toJson(wire) {
    const w = wire;
    const raw = new Uint8Array(1 + 32);
    raw.set(w.v0, 1);
    return strkey.StrKey.encodeClaimableBalance(raw);
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("ClaimableBalanceId: expected B-strkey string");
    }
    const raw = strkey.StrKey.decodeClaimableBalance(json);
    return { type: raw[0], v0: raw.subarray(1) };
  }
});
OVERRIDES.set("PoolId", {
  toJson(wire) {
    return strkey.StrKey.encodeLiquidityPool(wire);
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("PoolId: expected L-strkey string");
    }
    return strkey.StrKey.decodeLiquidityPool(json);
  }
});
OVERRIDES.set("ContractId", {
  toJson(wire) {
    return strkey.StrKey.encodeContract(wire);
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("ContractId: expected C-strkey string");
    }
    return strkey.StrKey.decodeContract(json);
  }
});
OVERRIDES.set("AssetCode4", {
  toJson(wire) {
    return new xdrString.XdrString(trimTrailingZeros(wire, 0)).toJson();
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("AssetCode4: expected escaped-string JSON");
    }
    return padRightZeros(xdrString.XdrString.fromJson(json).bytes, 4);
  }
});
OVERRIDES.set("AssetCode12", {
  toJson(wire) {
    return new xdrString.XdrString(trimTrailingZeros(wire, 5)).toJson();
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("AssetCode12: expected escaped-string JSON");
    }
    const bytes = xdrString.XdrString.fromJson(json).bytes;
    if (bytes.length < 5) {
      throw new jsXdr.XdrError(
        "AssetCode12: code must be at least 5 bytes; use AssetCode4 for shorter codes"
      );
    }
    return padRightZeros(bytes, 12);
  }
});
OVERRIDES.set("AssetCode", {
  toJson(wire) {
    const w = wire;
    return w.assetCode4 !== void 0 ? new xdrString.XdrString(trimTrailingZeros(w.assetCode4, 0)).toJson() : new xdrString.XdrString(
      trimTrailingZeros(w.assetCode12, 5)
    ).toJson();
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("AssetCode: expected escaped-string JSON");
    }
    const bytes = xdrString.XdrString.fromJson(json).bytes;
    return bytes.length <= 4 ? { type: 1, assetCode4: padRightZeros(bytes, 4) } : { type: 2, assetCode12: padRightZeros(bytes, 12) };
  }
});
function trimTrailingZeros(bytes, minLen) {
  let end = bytes.length;
  while (end > minLen && bytes[end - 1] === 0) end -= 1;
  return end === bytes.length ? bytes : bytes.slice(0, end);
}
function padRightZeros(bytes, length) {
  if (bytes.length >= length) return bytes;
  const out = new Uint8Array(length);
  out.set(bytes);
  return out;
}
OVERRIDES.set("Int128Parts", {
  toJson(wire) {
    return bigintParts.partsTo128BigInt(wire, true).toString();
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("Int128Parts: expected decimal string");
    }
    bigintParts.assertDecimalDigitBudget(json, 128, "Int128Parts");
    bigintParts.assertDecimalString(json, "Int128Parts");
    const value = BigInt(json);
    bigintParts.assertBigIntFits(value, true, 128, "Int128Parts");
    return bigintParts.bigIntTo128Parts(value, true);
  }
});
OVERRIDES.set("Uint128Parts", {
  toJson(wire) {
    return bigintParts.partsTo128BigInt(wire, false).toString();
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("Uint128Parts: expected decimal string");
    }
    bigintParts.assertDecimalDigitBudget(json, 128, "Uint128Parts");
    bigintParts.assertDecimalString(json, "Uint128Parts");
    const value = BigInt(json);
    bigintParts.assertBigIntFits(value, false, 128, "Uint128Parts");
    return bigintParts.bigIntTo128Parts(value, false);
  }
});
OVERRIDES.set("Int256Parts", {
  toJson(wire) {
    return bigintParts.partsTo256BigInt(wire, true).toString();
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("Int256Parts: expected decimal string");
    }
    bigintParts.assertDecimalDigitBudget(json, 256, "Int256Parts");
    bigintParts.assertDecimalString(json, "Int256Parts");
    const value = BigInt(json);
    bigintParts.assertBigIntFits(value, true, 256, "Int256Parts");
    return bigintParts.bigIntTo256Parts(value, true);
  }
});
OVERRIDES.set("Uint256Parts", {
  toJson(wire) {
    return bigintParts.partsTo256BigInt(wire, false).toString();
  },
  fromJson(json) {
    if (typeof json !== "string") {
      throw new jsXdr.XdrError("Uint256Parts: expected decimal string");
    }
    bigintParts.assertDecimalDigitBudget(json, 256, "Uint256Parts");
    bigintParts.assertDecimalString(json, "Uint256Parts");
    const value = BigInt(json);
    bigintParts.assertBigIntFits(value, false, 256, "Uint256Parts");
    return bigintParts.bigIntTo256Parts(value, false);
  }
});
function roundUp4(n) {
  return n + (4 - n % 4) % 4;
}

exports.walkFromJson = walkFromJson;
exports.walkToJson = walkToJson;
//# sourceMappingURL=to-json.js.map
