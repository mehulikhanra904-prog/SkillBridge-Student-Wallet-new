import { type XdrType } from "@stellar/js-xdr";
declare const TAG: unique symbol;
export declare class XdrString {
    readonly [TAG]: true;
    readonly bytes: Uint8Array;
    constructor(input: string | Uint8Array | XdrString);
    get length(): number;
    /**
     * Strict UTF-8 decode. Throws if the bytes aren't valid UTF-8.
     * Use this when you know the content is text and want to fail loudly
     * if a binary payload sneaks in. Note that implicit JS string coercion
     * (e.g. template literals) calls the lenient `toString()` instead.
     */
    toStringStrict(): string;
    /**
     * Lenient UTF-8 decode. Invalid sequences are replaced with U+FFFD, but no error is thrown. Use this when you want to be resilient to binary payloads
     * and just want something readable out of the bytes, even if it's not the
     * original intended string.
     */
    toString(): string;
    /**
     * Best-effort decode. Returns a JS string if the bytes are valid UTF-8,
     * otherwise returns the raw bytes. Lets callers pattern-match on what
     * came back without try/catch.
     */
    asStringOrBytes(): string | Uint8Array;
    /**
     * SEP-0051 escape form — printable ASCII passes through, control bytes
     * and high bytes are escaped (`\0` `\t` `\n` `\r` `\\` `\xNN`). Suitable
     * for log lines and JSON embedding; reversible via `XdrString.fromJson`.
     */
    toJson(): string;
    /**
     * JavaScript-standard `JSON.stringify` hook — delegates to {@link toJson};
     * call that instead. (Duplicated from `XdrValue` because `XdrString` does
     * not extend it.)
     */
    toJSON(): string;
    /** Inverse of `toJson` — parse a SEP-0051 escape string to an XdrString. */
    static fromJson(escaped: string): XdrString;
    equals(other: XdrString): boolean;
}
export declare function xdrString(maxLength: number): XdrType<XdrString>;
export {};
