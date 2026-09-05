import { EnumValue } from "../values/enum-value.js";
export type OfferEntryFlagsWire = number;
export type OfferEntryFlagsName = "passiveFlag";
/**
 * ```xdr
 * enum OfferEntryFlags
 * {
 *     // an offer with this flag will not act on and take a reverse offer of equal
 *     // price
 *     PASSIVE_FLAG = 1
 * };
 * ```
 */
export declare class OfferEntryFlags extends EnumValue<OfferEntryFlagsName> {
    static readonly passiveFlag: OfferEntryFlags;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"OfferEntryFlags", {
        readonly passiveFlag: 1;
    }>;
    static fromValue(value: number): OfferEntryFlags;
    static fromName(name: OfferEntryFlagsName): OfferEntryFlags;
    static fromXdrObject(wire: number): OfferEntryFlags;
}
