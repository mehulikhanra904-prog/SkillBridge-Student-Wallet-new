import { EnumValue } from "../values/enum-value.js";
export type SorobanCredentialsTypeWire = number;
export type SorobanCredentialsTypeName = "sorobanCredentialsSourceAccount" | "sorobanCredentialsAddress" | "sorobanCredentialsAddressV2" | "sorobanCredentialsAddressWithDelegates";
/**
 * ```xdr
 * enum SorobanCredentialsType
 * {
 *     SOROBAN_CREDENTIALS_SOURCE_ACCOUNT = 0,
 *     SOROBAN_CREDENTIALS_ADDRESS = 1,
 *     SOROBAN_CREDENTIALS_ADDRESS_V2 = 2,
 *     SOROBAN_CREDENTIALS_ADDRESS_WITH_DELEGATES = 3
 * };
 * ```
 */
export declare class SorobanCredentialsType extends EnumValue<SorobanCredentialsTypeName> {
    static readonly sorobanCredentialsSourceAccount: SorobanCredentialsType;
    static readonly sorobanCredentialsAddress: SorobanCredentialsType;
    static readonly sorobanCredentialsAddressV2: SorobanCredentialsType;
    static readonly sorobanCredentialsAddressWithDelegates: SorobanCredentialsType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly sorobanCredentialsSourceAccount: 0;
        readonly sorobanCredentialsAddress: 1;
        readonly sorobanCredentialsAddressV2: 2;
        readonly sorobanCredentialsAddressWithDelegates: 3;
    }>> & {
        readonly kind: "enum";
        readonly name: "SorobanCredentialsType";
        readonly nameByValue: ReadonlyMap<number, "sorobanCredentialsSourceAccount" | "sorobanCredentialsAddress" | "sorobanCredentialsAddressV2" | "sorobanCredentialsAddressWithDelegates">;
    } & {
        readonly sorobanCredentialsSourceAccount: 0;
        readonly sorobanCredentialsAddress: 1;
        readonly sorobanCredentialsAddressV2: 2;
        readonly sorobanCredentialsAddressWithDelegates: 3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): SorobanCredentialsType;
    static fromName(name: SorobanCredentialsTypeName): SorobanCredentialsType;
    static fromXdrObject(wire: number): SorobanCredentialsType;
}
