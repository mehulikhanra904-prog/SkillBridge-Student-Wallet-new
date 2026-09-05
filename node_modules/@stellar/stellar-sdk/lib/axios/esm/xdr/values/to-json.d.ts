import type { XdrType } from "@stellar/js-xdr";
import type { JsonValue } from "./xdr-value.js";
export declare function walkToJson(wire: unknown, schema: XdrType<unknown>): JsonValue;
export declare function walkFromJson(json: JsonValue, schema: XdrType<unknown>): unknown;
