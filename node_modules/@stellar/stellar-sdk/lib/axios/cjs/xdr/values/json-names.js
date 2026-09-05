'use strict';

function snakeCase(input) {
  let out = "";
  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];
    const prev = i > 0 ? input[i - 1] : "";
    const next = i + 1 < input.length ? input[i + 1] : "";
    const isCamelBoundary = isUpperAscii(ch) && (isLowerAscii(prev) || isDigitAscii(prev));
    const isAcronymBoundary = isUpperAscii(ch) && isUpperAscii(prev) && isLowerAscii(next);
    if (i > 0 && (isCamelBoundary || isAcronymBoundary)) out += "_";
    out += ch.toLowerCase();
  }
  return out;
}
const RUST_KEYWORD_FIELDS = /* @__PURE__ */ new Set([
  "type",
  "ref",
  "move",
  "box",
  "self",
  "match",
  "loop",
  "fn",
  "mod",
  "in",
  "as"
]);
function structFieldJsonName(field) {
  return snakeCase(field);
}
function legacyStructFieldJsonName(field) {
  const name = snakeCase(field);
  return RUST_KEYWORD_FIELDS.has(name) ? `${name}_` : void 0;
}
const ENUM_NAME_CACHE = /* @__PURE__ */ new WeakMap();
const UNION_NAME_CACHE = /* @__PURE__ */ new WeakMap();
const ACCEPTED_KEY_CACHE = /* @__PURE__ */ new WeakMap();
function acceptedStructJsonKeys(entries) {
  const cached = ACCEPTED_KEY_CACHE.get(entries);
  if (cached) return cached;
  const accepted = /* @__PURE__ */ new Set();
  for (const [k] of entries) {
    accepted.add(structFieldJsonName(k));
    const legacy = legacyStructFieldJsonName(k);
    if (legacy !== void 0) accepted.add(legacy);
  }
  ACCEPTED_KEY_CACHE.set(entries, accepted);
  return accepted;
}
function enumJsonNames(memberPrefix, nameByValue) {
  const cached = ENUM_NAME_CACHE.get(nameByValue);
  if (cached) return cached;
  const bySource = /* @__PURE__ */ new Map();
  const byJson = /* @__PURE__ */ new Map();
  for (const member of nameByValue.values()) {
    const stripped = memberPrefix && member.startsWith(memberPrefix) ? member.slice(memberPrefix.length) : member;
    const jsonName = snakeCase(stripped);
    bySource.set(member, jsonName);
    byJson.set(jsonName, member);
  }
  const result = { bySource, byJson };
  ENUM_NAME_CACHE.set(nameByValue, result);
  return result;
}
function unionCaseNames(schema) {
  const cached = UNION_NAME_CACHE.get(schema);
  if (cached) return cached;
  const result = buildUnionCaseNames(schema);
  UNION_NAME_CACHE.set(schema, result);
  return result;
}
function buildUnionCaseNames(schema) {
  const switchOn = schema.switchOn;
  const bySource = /* @__PURE__ */ new Map();
  const byJson = /* @__PURE__ */ new Map();
  if (switchOn.kind === "enum" && switchOn.nameByValue) {
    const enumNames = enumJsonNames(
      switchOn.memberPrefix,
      switchOn.nameByValue
    );
    for (const c of schema.cases) {
      const member = switchOn.nameByValue.get(c.discriminant);
      const jsonName = (member && enumNames.bySource.get(member)) ?? snakeCase(c.name);
      bySource.set(c.name, jsonName);
      byJson.set(jsonName, c.name);
    }
    return { bySource, byJson };
  }
  if (switchOn.kind === "int32" || switchOn.kind === "uint32") {
    for (const c of schema.cases) {
      const jsonName = typeof c.discriminant === "number" ? `v${c.discriminant}` : snakeCase(c.name);
      bySource.set(c.name, jsonName);
      byJson.set(jsonName, c.name);
    }
    return { bySource, byJson };
  }
  for (const c of schema.cases) {
    const jsonName = snakeCase(c.name);
    bySource.set(c.name, jsonName);
    byJson.set(jsonName, c.name);
  }
  return { bySource, byJson };
}
function isLowerAscii(ch) {
  return ch >= "a" && ch <= "z";
}
function isUpperAscii(ch) {
  return ch >= "A" && ch <= "Z";
}
function isDigitAscii(ch) {
  return ch >= "0" && ch <= "9";
}

exports.acceptedStructJsonKeys = acceptedStructJsonKeys;
exports.enumJsonNames = enumJsonNames;
exports.legacyStructFieldJsonName = legacyStructFieldJsonName;
exports.structFieldJsonName = structFieldJsonName;
exports.unionCaseNames = unionCaseNames;
//# sourceMappingURL=json-names.js.map
