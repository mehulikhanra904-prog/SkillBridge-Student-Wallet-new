/**
 * Inclusive `[min, max]` for a two's-complement integer of the given width.
 * Single source of truth for 32/64/128/256-bit signed and unsigned bounds,
 * shared by the wide-int constructors, the JSON decoders, and the legacy
 * `Int64`/`Uint64` shims.
 */
export declare function intRange(signed: boolean, bits: number): readonly [bigint, bigint];
/**
 * Validate that an (already bigint-coerced) `value` fits a `bits`-wide
 * signed/unsigned integer, throwing a consistent `XdrError` otherwise. This is
 * the shared range check for the construction / JSON-decode entry points: the
 * wide-int `BigIntValue` constructor, the `*Parts` JSON decoders, and the
 * `Int64`/`Uint64` compatibility shims. (Encode-time validation keyed by wire
 * path uses `assertBigIntRange` in `core/helpers.ts`.)
 */
export declare function assertBigIntFits(value: bigint, signed: boolean, bits: number, name: string): void;
/**
 * Reject decimal strings whose length alone rules out fitting a `bits`-wide
 * integer, BEFORE the string reaches `BigInt(...)`. Parsing an
 * attacker-supplied multi-megabyte string costs work per input byte and
 * produces a value that `assertBigIntFits` is then certain to reject; checking
 * the length first makes that rejection O(1) and keeps the huge value out of
 * the range error message.
 *
 * Budget formula: a `bits`-wide integer has at most
 * `ceil(bits * LOG10_OF_2)` decimal digits — e.g. 20 digits for a 64-bit
 * value. `DIGIT_BUDGET_SLACK` adds room for an optional leading `-` sign plus
 * a digit of rounding headroom, giving 22 for 64 bits. Any longer string
 * cannot possibly denote an in-range value, so no legitimate input is
 * affected. It does, however, reject padding that `BigInt()` itself would
 * tolerate (long runs of leading zeros, `+`, surrounding whitespace) once the
 * string exceeds the budget — intentional, since SEP-51 integer fields carry
 * canonical decimal strings.
 */
export declare function assertDecimalDigitBudget(s: string, bits: number, name: string): void;
/**
 * Reject strings that `BigInt(...)` would accept but that do not denote a
 * decimal integer, BEFORE they reach it.
 *
 * `BigInt` inherits the numeric-literal grammar, so it silently accepts `""`
 * and `" "` as 0, and reads `"0x10"` as 16 — none of which are SEP-51 integer
 * values. Each one decodes without complaint and re-serializes as a different
 * string than it came in as, which is a value change rather than a parse error.
 * `assertDecimalDigitBudget` does not catch these: it only bounds length.
 *
 * The accepted grammar matches the reference implementation
 * (`@stellar/stellar-xdr-json`, which parses these fields with Rust's
 * `from_str`), verified case by case: `"+7"`, `"01"`, `"0007"` and `"-0"` are
 * accepted there and so are accepted here, even though they are not canonical
 * and normalize on the way back out; `""`, `" "`, `"0x10"`, `"1e3"`, `" 7"` and
 * `"7 "` are rejected there and are rejected here.
 */
export declare function assertDecimalString(s: string, name: string): void;
/**
 * Number-valued counterpart of `assertBigIntFits` for the 32-bit `Int32`/
 * `Uint32` shims: validate that `value` is an integer within a `bits`-wide
 * signed/unsigned range, throwing a consistent `XdrError` otherwise.
 */
export declare function assertIntFits(value: number, signed: boolean, bits: number, name: string): void;
export interface Int128Parts {
    readonly hi: bigint;
    readonly lo: bigint;
}
export interface Int256Parts {
    readonly hiHi: bigint;
    readonly hiLo: bigint;
    readonly loHi: bigint;
    readonly loLo: bigint;
}
export declare function bigIntTo128Parts(value: bigint, signed: boolean): Int128Parts;
export declare function partsTo128BigInt(parts: Int128Parts, signed: boolean): bigint;
export declare function bigIntTo256Parts(value: bigint, signed: boolean): Int256Parts;
export declare function partsTo256BigInt(parts: Int256Parts, signed: boolean): bigint;
