import { EnumValue } from "../values/enum-value.js";
export type ManageOfferEffectWire = number;
export type ManageOfferEffectName = "manageOfferCreated" | "manageOfferUpdated" | "manageOfferDeleted";
/**
 * ```xdr
 * enum ManageOfferEffect
 * {
 *     MANAGE_OFFER_CREATED = 0,
 *     MANAGE_OFFER_UPDATED = 1,
 *     MANAGE_OFFER_DELETED = 2
 * };
 * ```
 */
export declare class ManageOfferEffect extends EnumValue<ManageOfferEffectName> {
    static readonly manageOfferCreated: ManageOfferEffect;
    static readonly manageOfferUpdated: ManageOfferEffect;
    static readonly manageOfferDeleted: ManageOfferEffect;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly manageOfferCreated: 0;
        readonly manageOfferUpdated: 1;
        readonly manageOfferDeleted: 2;
    }>> & {
        readonly kind: "enum";
        readonly name: "ManageOfferEffect";
        readonly nameByValue: ReadonlyMap<number, "manageOfferCreated" | "manageOfferUpdated" | "manageOfferDeleted">;
    } & {
        readonly manageOfferCreated: 0;
        readonly manageOfferUpdated: 1;
        readonly manageOfferDeleted: 2;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ManageOfferEffect;
    static fromName(name: ManageOfferEffectName): ManageOfferEffect;
    static fromXdrObject(wire: number): ManageOfferEffect;
}
