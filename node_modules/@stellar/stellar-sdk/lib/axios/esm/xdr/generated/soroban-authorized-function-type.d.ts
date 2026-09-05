import { EnumValue } from "../values/enum-value.js";
export type SorobanAuthorizedFunctionTypeWire = number;
export type SorobanAuthorizedFunctionTypeName = "sorobanAuthorizedFunctionTypeContractFn" | "sorobanAuthorizedFunctionTypeCreateContractHostFn" | "sorobanAuthorizedFunctionTypeCreateContractV2HostFn";
/**
 * ```xdr
 * enum SorobanAuthorizedFunctionType
 * {
 *     SOROBAN_AUTHORIZED_FUNCTION_TYPE_CONTRACT_FN = 0,
 *     SOROBAN_AUTHORIZED_FUNCTION_TYPE_CREATE_CONTRACT_HOST_FN = 1,
 *     SOROBAN_AUTHORIZED_FUNCTION_TYPE_CREATE_CONTRACT_V2_HOST_FN = 2
 * };
 * ```
 */
export declare class SorobanAuthorizedFunctionType extends EnumValue<SorobanAuthorizedFunctionTypeName> {
    static readonly sorobanAuthorizedFunctionTypeContractFn: SorobanAuthorizedFunctionType;
    static readonly sorobanAuthorizedFunctionTypeCreateContractHostFn: SorobanAuthorizedFunctionType;
    static readonly sorobanAuthorizedFunctionTypeCreateContractV2HostFn: SorobanAuthorizedFunctionType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly sorobanAuthorizedFunctionTypeContractFn: 0;
        readonly sorobanAuthorizedFunctionTypeCreateContractHostFn: 1;
        readonly sorobanAuthorizedFunctionTypeCreateContractV2HostFn: 2;
    }>> & {
        readonly kind: "enum";
        readonly name: "SorobanAuthorizedFunctionType";
        readonly nameByValue: ReadonlyMap<number, "sorobanAuthorizedFunctionTypeContractFn" | "sorobanAuthorizedFunctionTypeCreateContractHostFn" | "sorobanAuthorizedFunctionTypeCreateContractV2HostFn">;
    } & {
        readonly sorobanAuthorizedFunctionTypeContractFn: 0;
        readonly sorobanAuthorizedFunctionTypeCreateContractHostFn: 1;
        readonly sorobanAuthorizedFunctionTypeCreateContractV2HostFn: 2;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): SorobanAuthorizedFunctionType;
    static fromName(name: SorobanAuthorizedFunctionTypeName): SorobanAuthorizedFunctionType;
    static fromXdrObject(wire: number): SorobanAuthorizedFunctionType;
}
