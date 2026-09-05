import type { XdrType } from "@stellar/js-xdr";
export type XdrFormat = "raw" | "hex" | "base64";
export type JsonValue = string | number | boolean | null | readonly JsonValue[] | {
    readonly [key: string]: JsonValue;
};
/**
 * Bridge a concrete `XdrValue` subclass to its wire shape. Every subclass
 * declares `static readonly schema` and `static fromXdrObject(wire)`, which
 * is everything `XdrValue.fromXdr` needs to round-trip bytes through the class.
 */
export interface XdrValueConstructor<Wire, Instance extends XdrValue> {
    readonly schema: XdrType<Wire>;
    readonly name: string;
    fromXdrObject(wire: Wire): Instance;
}
/**
 * Base class for every generated XDR type. Subclasses supply:
 *   - `static readonly schema: XdrType<Wire>` describing the wire shape
 *   - `toXdrObject(): Wire` converting `this` into the wire shape (public so
 *     nested classes can compose without breaking access modifiers)
 *   - `static fromXdrObject(wire: Wire): InstanceType` going the other way
 *   - `toJson(): JsonValue`
 *
 * Inherited helpers (`toXdr`, `fromXdr`, `validateXdr`, `toString`, `equals`)
 * handle the rest.
 */
export declare abstract class XdrValue {
    abstract toXdrObject(): unknown;
    toXdr(): Uint8Array;
    toXdr(format: "raw"): Uint8Array;
    toXdr(format: "hex" | "base64"): string;
    /**
     * @deprecated Use {@link toXdr} instead.
     * Deprecated in version v17
     */
    toXDR(): Uint8Array;
    /**
     * @deprecated Use {@link toXdr} instead.
     * Deprecated in version v17
     */ toXDR(format: "raw"): Uint8Array;
    /**
     * @deprecated Use {@link toXdr} instead.
     * Deprecated in version v17
     */ toXDR(format: "hex" | "base64"): string;
    toString(): string;
    toJson(): JsonValue;
    /**
     * JavaScript-standard `JSON.stringify` hook — delegates to {@link toJson};
     * call that instead. Without this hook, stringify would throw on bigint
     * fields (`int64`/`uint64`) and dump raw byte internals. To substitute a
     * custom encoding, pass a replacer to `JSON.stringify` (its `this[key]` is
     * the original instance).
     */
    toJSON(): JsonValue;
    equals(other: XdrValue): boolean;
    static fromXdr<Wire, Instance extends XdrValue>(this: XdrValueConstructor<Wire, Instance>, input: Uint8Array): Instance;
    static fromXdr<Wire, Instance extends XdrValue>(this: XdrValueConstructor<Wire, Instance>, input: string, format: "hex" | "base64"): Instance;
    /**
     * @deprecated Use {@link XdrValue.fromXdr} instead.
     * Deprecated in version v17.0.0
     */
    static fromXDR<Wire, Instance extends XdrValue>(this: XdrValueConstructor<Wire, Instance>, input: Uint8Array): Instance;
    /**
     * @deprecated Use {@link XdrValue.fromXdr} instead.
     * Deprecated in version v17.0.0
     */
    static fromXDR<Wire, Instance extends XdrValue>(this: XdrValueConstructor<Wire, Instance>, input: string, format: "hex" | "base64"): Instance;
    /**
     * Check whether `input` decodes as this type — {@link XdrValue.fromXdr}
     * without the throw. Returns `false` on any failure (bad hex/base64, wrong
     * shape, trailing bytes) and discards the error detail; decode directly
     * when you need the reason.
     *
     * @throws a `TypeError` when the type itself carries no static schema. Only
     * invalid *data* returns `false`; a type that cannot decode is a caller
     * mistake and is not reported as a validation failure.
     */
    static validateXdr<Wire, Instance extends XdrValue>(this: XdrValueConstructor<Wire, Instance>, input: Uint8Array): boolean;
    static validateXdr<Wire, Instance extends XdrValue>(this: XdrValueConstructor<Wire, Instance>, input: string, format: "hex" | "base64"): boolean;
    /**
     * @deprecated Use {@link XdrValue.validateXdr} instead.
     * Deprecated in version v17.0.0
     */
    static validateXDR<Wire, Instance extends XdrValue>(this: XdrValueConstructor<Wire, Instance>, input: Uint8Array): boolean;
    /**
     * @deprecated Use {@link XdrValue.validateXdr} instead.
     * Deprecated in version v17.0.0
     */
    static validateXDR<Wire, Instance extends XdrValue>(this: XdrValueConstructor<Wire, Instance>, input: string, format: "hex" | "base64"): boolean;
    static fromJson<Wire, Instance extends XdrValue>(this: XdrValueConstructor<Wire, Instance>, json: JsonValue): Instance;
}
/**
 * Decode a buffer containing several XDR values of one type, concatenated
 * back-to-back (e.g. a contract spec's `ScSpecEntry` stream). Throws
 * `XdrError` if the buffer ends mid-value.
 *
 * @throws a `TypeError` when `type` carries no static schema, or no static
 * `fromXdrObject` to build values with
 */
export declare function decodeStream<Wire, Instance extends XdrValue>(type: XdrValueConstructor<Wire, Instance>, input: Uint8Array): Instance[];
export declare function decodeStream<Wire, Instance extends XdrValue>(type: XdrValueConstructor<Wire, Instance>, input: string, format: "hex" | "base64"): Instance[];
/** Options shared by {@link encodeArray} and {@link decodeArray}. */
export interface XdrArrayOptions {
    /**
     * Largest element count to accept, defaulting to the XDR maximum of
     * 2^32 - 1. Both encoding and decoding throw `XdrError` past this many
     * elements. Pass the bound from the XDR definition, so a field declared
     * `TimeSlicedPeerData peers<25>` decodes with `maxLength: 25`, or any cap
     * you want to enforce, to reject an oversized array before its elements are
     * decoded.
     */
    maxLength?: number;
    /**
     * How many nested schemas may be entered, counting the array itself as the
     * first level.
     */
    maxDepth?: number;
}
/**
 * Encode a list of XDR values as a single length-prefixed XDR variable-length
 * array (`T values<>` — a 4-byte count followed by the elements). This is the
 * wire format of the removed array typedef classes (`LedgerEntryChanges`,
 * `SorobanAuthorizationEntries`, …); use it where a protocol expects the whole
 * list as one blob, such as Horizon's `fee_meta_xdr`. For lists exchanged as
 * one string per element, encode each element with `value.toXdr(format)`
 * instead.
 *
 * @throws a `TypeError` when `type` carries no static schema
 */
export declare function encodeArray<Wire, Instance extends XdrValue>(type: XdrValueConstructor<Wire, Instance>, values: readonly Instance[], options?: XdrArrayOptions): Uint8Array;
export declare function encodeArray<Wire, Instance extends XdrValue>(type: XdrValueConstructor<Wire, Instance>, values: readonly Instance[], format: "raw", options?: XdrArrayOptions): Uint8Array;
export declare function encodeArray<Wire, Instance extends XdrValue>(type: XdrValueConstructor<Wire, Instance>, values: readonly Instance[], format: "hex" | "base64", options?: XdrArrayOptions): string;
/**
 * Decode a single length-prefixed XDR variable-length array (`T values<>`)
 * into a list of values — the inverse of {@link encodeArray}. Throws
 * `XdrError` on a short buffer, trailing bytes, or a count that doesn't match
 * the payload. For a buffer of values concatenated with no length prefix, use
 * {@link decodeStream}.
 *
 * @throws a `TypeError` when `type` carries no static schema, or no static
 * `fromXdrObject` to build values with
 */
export declare function decodeArray<Wire, Instance extends XdrValue>(type: XdrValueConstructor<Wire, Instance>, input: Uint8Array, options?: XdrArrayOptions): Instance[];
export declare function decodeArray<Wire, Instance extends XdrValue>(type: XdrValueConstructor<Wire, Instance>, input: string, format: "hex" | "base64", options?: XdrArrayOptions): Instance[];
/**
 * Encode raw bytes into the requested {@link XdrFormat}: the bytes themselves
 * for `"raw"`, or a `"hex"` / `"base64"` string. This is the encoder behind
 * every `toXdr(format)` call, exported so consumers can format any
 * `Uint8Array` the SDK hands back (hashes, signatures, raw keys) without a
 * helper library.
 *
 * ```ts
 * encodeBytes(new Uint8Array([0xde, 0xad, 0xbe, 0xef]), "hex");    // "deadbeef"
 * encodeBytes(new Uint8Array([0xde, 0xad, 0xbe, 0xef]), "base64"); // "3q2+7w=="
 * ```
 *
 * @param bytes - the bytes to encode
 * @param format - `"raw"` returns `bytes` unchanged; `"hex"` and `"base64"`
 *   return a string
 * @throws an {@link XdrError} on an unknown format
 * @see {@link decodeBytes} for the reverse direction
 */
export declare function encodeBytes(bytes: Uint8Array, format: "raw"): Uint8Array;
export declare function encodeBytes(bytes: Uint8Array, format: "hex" | "base64"): string;
export declare function encodeBytes(bytes: Uint8Array, format: XdrFormat): Uint8Array | string;
/**
 * Decode a `"hex"` or `"base64"` string into bytes; a `Uint8Array` input
 * passes through unchanged. This is the decoder behind every
 * `fromXdr(input, format)` call, exported so consumers can parse encoded
 * byte strings without a helper library.
 *
 * ```ts
 * decodeBytes("deadbeef", "hex");  // Uint8Array [0xde, 0xad, 0xbe, 0xef]
 * decodeBytes("3q2+7w==", "base64");
 * ```
 *
 * Decoding is strict: malformed input throws instead of being silently
 * truncated the way `Buffer.from(str, "hex")` was.
 *
 * @param input - the bytes or encoded string to decode
 * @param format - required when `input` is a string; ignored for `Uint8Array`
 * @throws an {@link XdrError} when `input` is not valid `format`, when a string
 *   arrives without a `"hex"` / `"base64"` format, or when the format is
 *   unknown; a `TypeError` when `input` is neither a string nor a `Uint8Array`
 * @see {@link encodeBytes} for the reverse direction
 */
export declare function decodeBytes(input: Uint8Array | string, format: "raw" | "hex" | "base64" | undefined): Uint8Array;
