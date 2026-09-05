/** A bidirectional map between source (member/arm) names and JSON names. */
export interface JsonNameMap {
    readonly bySource: ReadonlyMap<string, string>;
    readonly byJson: ReadonlyMap<string, string>;
}
/** Struct field → its SEP-0051 JSON key. */
export declare function structFieldJsonName(field: string): string;
/**
 * Legacy escaped JSON key for a struct field, if one exists. The Rust
 * `stellar-xdr` crate emits keyword fields with a trailing `_` (`type_`);
 * fromJson accepts that spelling for backwards compatibility.
 */
export declare function legacyStructFieldJsonName(field: string): string | undefined;
/**
 * Every JSON key a struct schema accepts: the snake_case name for each field,
 * plus the legacy Rust keyword-escaped form (`type_`) where one exists.
 * Memoized per schema — `StructType` assigns `entries` once in its
 * constructor, so the array identity is stable for the schema's lifetime.
 */
export declare function acceptedStructJsonKeys(entries: ReadonlyArray<readonly [string, unknown]>): ReadonlySet<string>;
/**
 * Canonical JSON names for an enum's members. Strips the enum's camelized
 * `member_prefix` (attached as `memberPrefix` for enums with one, e.g.
 * `scvBool` − `scv` → `bool`) when present, then `snake_case`s. Enums without a
 * prefix just `snake_case` the member name (`createAccount` → `create_account`).
 */
export declare function enumJsonNames(memberPrefix: string | undefined, nameByValue: ReadonlyMap<number, string>): JsonNameMap;
interface UnionView {
    readonly switchOn: unknown;
    readonly cases: ReadonlyArray<{
        readonly name: string;
        readonly discriminant: unknown;
    }>;
}
/**
 * Union JSON keys, mapped by the union's *arm* name (the rest of the walker
 * keys off that). For enum-switched unions the canonical key is the
 * discriminant enum member's name (NOT the arm name) — e.g. `OperationBody`'s
 * `createClaimableBalance` arm renders as `create_claimable_balance` (from
 * `OperationType`), and `tx`/`op` prefixes survive (`tx_success`).
 * Int-switched ext/version unions use `v<discriminant>` (`v0`/`v1`).
 */
export declare function unionCaseNames(schema: UnionView): JsonNameMap;
export {};
