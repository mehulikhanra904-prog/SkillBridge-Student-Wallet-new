import { EnumValue } from "../values/enum-value.js";
export type CreateAccountResultCodeWire = number;
export type CreateAccountResultCodeName = "createAccountSuccess" | "createAccountMalformed" | "createAccountUnderfunded" | "createAccountLowReserve" | "createAccountAlreadyExist";
/**
 * ```xdr
 * enum CreateAccountResultCode
 * {
 *     // codes considered as "success" for the operation
 *     CREATE_ACCOUNT_SUCCESS = 0, // account was created
 *
 *     // codes considered as "failure" for the operation
 *     CREATE_ACCOUNT_MALFORMED = -1,   // invalid destination
 *     CREATE_ACCOUNT_UNDERFUNDED = -2, // not enough funds in source account
 *     CREATE_ACCOUNT_LOW_RESERVE =
 *         -3, // would create an account below the min reserve
 *     CREATE_ACCOUNT_ALREADY_EXIST = -4 // account already exists
 * };
 * ```
 */
export declare class CreateAccountResultCode extends EnumValue<CreateAccountResultCodeName> {
    static readonly createAccountSuccess: CreateAccountResultCode;
    static readonly createAccountMalformed: CreateAccountResultCode;
    static readonly createAccountUnderfunded: CreateAccountResultCode;
    static readonly createAccountLowReserve: CreateAccountResultCode;
    static readonly createAccountAlreadyExist: CreateAccountResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly createAccountSuccess: 0;
        readonly createAccountMalformed: -1;
        readonly createAccountUnderfunded: -2;
        readonly createAccountLowReserve: -3;
        readonly createAccountAlreadyExist: -4;
    }>> & {
        readonly kind: "enum";
        readonly name: "CreateAccountResultCode";
        readonly nameByValue: ReadonlyMap<number, "createAccountSuccess" | "createAccountMalformed" | "createAccountUnderfunded" | "createAccountLowReserve" | "createAccountAlreadyExist">;
    } & {
        readonly createAccountSuccess: 0;
        readonly createAccountMalformed: -1;
        readonly createAccountUnderfunded: -2;
        readonly createAccountLowReserve: -3;
        readonly createAccountAlreadyExist: -4;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): CreateAccountResultCode;
    static fromName(name: CreateAccountResultCodeName): CreateAccountResultCode;
    static fromXdrObject(wire: number): CreateAccountResultCode;
}
