import { EnumValue } from "../values/enum-value.js";
export type ClaimPredicateTypeWire = number;
export type ClaimPredicateTypeName = "claimPredicateUnconditional" | "claimPredicateAnd" | "claimPredicateOr" | "claimPredicateNot" | "claimPredicateBeforeAbsoluteTime" | "claimPredicateBeforeRelativeTime";
/**
 * ```xdr
 * enum ClaimPredicateType
 * {
 *     CLAIM_PREDICATE_UNCONDITIONAL = 0,
 *     CLAIM_PREDICATE_AND = 1,
 *     CLAIM_PREDICATE_OR = 2,
 *     CLAIM_PREDICATE_NOT = 3,
 *     CLAIM_PREDICATE_BEFORE_ABSOLUTE_TIME = 4,
 *     CLAIM_PREDICATE_BEFORE_RELATIVE_TIME = 5
 * };
 * ```
 */
export declare class ClaimPredicateType extends EnumValue<ClaimPredicateTypeName> {
    static readonly claimPredicateUnconditional: ClaimPredicateType;
    static readonly claimPredicateAnd: ClaimPredicateType;
    static readonly claimPredicateOr: ClaimPredicateType;
    static readonly claimPredicateNot: ClaimPredicateType;
    static readonly claimPredicateBeforeAbsoluteTime: ClaimPredicateType;
    static readonly claimPredicateBeforeRelativeTime: ClaimPredicateType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly claimPredicateUnconditional: 0;
        readonly claimPredicateAnd: 1;
        readonly claimPredicateOr: 2;
        readonly claimPredicateNot: 3;
        readonly claimPredicateBeforeAbsoluteTime: 4;
        readonly claimPredicateBeforeRelativeTime: 5;
    }>> & {
        readonly kind: "enum";
        readonly name: "ClaimPredicateType";
        readonly nameByValue: ReadonlyMap<number, "claimPredicateUnconditional" | "claimPredicateAnd" | "claimPredicateOr" | "claimPredicateNot" | "claimPredicateBeforeAbsoluteTime" | "claimPredicateBeforeRelativeTime">;
    } & {
        readonly claimPredicateUnconditional: 0;
        readonly claimPredicateAnd: 1;
        readonly claimPredicateOr: 2;
        readonly claimPredicateNot: 3;
        readonly claimPredicateBeforeAbsoluteTime: 4;
        readonly claimPredicateBeforeRelativeTime: 5;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ClaimPredicateType;
    static fromName(name: ClaimPredicateTypeName): ClaimPredicateType;
    static fromXdrObject(wire: number): ClaimPredicateType;
}
