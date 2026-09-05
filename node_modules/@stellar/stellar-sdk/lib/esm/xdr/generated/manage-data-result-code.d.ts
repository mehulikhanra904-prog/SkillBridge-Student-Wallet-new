import { EnumValue } from "../values/enum-value.js";
export type ManageDataResultCodeWire = number;
export type ManageDataResultCodeName = "manageDataSuccess" | "manageDataNotSupportedYet" | "manageDataNameNotFound" | "manageDataLowReserve" | "manageDataInvalidName";
/**
 * ```xdr
 * enum ManageDataResultCode
 * {
 *     // codes considered as "success" for the operation
 *     MANAGE_DATA_SUCCESS = 0,
 *     // codes considered as "failure" for the operation
 *     MANAGE_DATA_NOT_SUPPORTED_YET =
 *         -1, // The network hasn't moved to this protocol change yet
 *     MANAGE_DATA_NAME_NOT_FOUND =
 *         -2, // Trying to remove a Data Entry that isn't there
 *     MANAGE_DATA_LOW_RESERVE = -3, // not enough funds to create a new Data Entry
 *     MANAGE_DATA_INVALID_NAME = -4 // Name not a valid string
 * };
 * ```
 */
export declare class ManageDataResultCode extends EnumValue<ManageDataResultCodeName> {
    static readonly manageDataSuccess: ManageDataResultCode;
    static readonly manageDataNotSupportedYet: ManageDataResultCode;
    static readonly manageDataNameNotFound: ManageDataResultCode;
    static readonly manageDataLowReserve: ManageDataResultCode;
    static readonly manageDataInvalidName: ManageDataResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly manageDataSuccess: 0;
        readonly manageDataNotSupportedYet: -1;
        readonly manageDataNameNotFound: -2;
        readonly manageDataLowReserve: -3;
        readonly manageDataInvalidName: -4;
    }>> & {
        readonly kind: "enum";
        readonly name: "ManageDataResultCode";
        readonly nameByValue: ReadonlyMap<number, "manageDataSuccess" | "manageDataNotSupportedYet" | "manageDataNameNotFound" | "manageDataLowReserve" | "manageDataInvalidName">;
    } & {
        readonly manageDataSuccess: 0;
        readonly manageDataNotSupportedYet: -1;
        readonly manageDataNameNotFound: -2;
        readonly manageDataLowReserve: -3;
        readonly manageDataInvalidName: -4;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ManageDataResultCode;
    static fromName(name: ManageDataResultCodeName): ManageDataResultCode;
    static fromXdrObject(wire: number): ManageDataResultCode;
}
