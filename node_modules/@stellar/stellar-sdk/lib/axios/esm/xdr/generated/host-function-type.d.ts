import { EnumValue } from "../values/enum-value.js";
export type HostFunctionTypeWire = number;
export type HostFunctionTypeName = "hostFunctionTypeInvokeContract" | "hostFunctionTypeCreateContract" | "hostFunctionTypeUploadContractWasm" | "hostFunctionTypeCreateContractV2";
/**
 * ```xdr
 * enum HostFunctionType
 * {
 *     HOST_FUNCTION_TYPE_INVOKE_CONTRACT = 0,
 *     HOST_FUNCTION_TYPE_CREATE_CONTRACT = 1,
 *     HOST_FUNCTION_TYPE_UPLOAD_CONTRACT_WASM = 2,
 *     HOST_FUNCTION_TYPE_CREATE_CONTRACT_V2 = 3
 * };
 * ```
 */
export declare class HostFunctionType extends EnumValue<HostFunctionTypeName> {
    static readonly hostFunctionTypeInvokeContract: HostFunctionType;
    static readonly hostFunctionTypeCreateContract: HostFunctionType;
    static readonly hostFunctionTypeUploadContractWasm: HostFunctionType;
    static readonly hostFunctionTypeCreateContractV2: HostFunctionType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly hostFunctionTypeInvokeContract: 0;
        readonly hostFunctionTypeCreateContract: 1;
        readonly hostFunctionTypeUploadContractWasm: 2;
        readonly hostFunctionTypeCreateContractV2: 3;
    }>> & {
        readonly kind: "enum";
        readonly name: "HostFunctionType";
        readonly nameByValue: ReadonlyMap<number, "hostFunctionTypeInvokeContract" | "hostFunctionTypeCreateContract" | "hostFunctionTypeUploadContractWasm" | "hostFunctionTypeCreateContractV2">;
    } & {
        readonly hostFunctionTypeInvokeContract: 0;
        readonly hostFunctionTypeCreateContract: 1;
        readonly hostFunctionTypeUploadContractWasm: 2;
        readonly hostFunctionTypeCreateContractV2: 3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): HostFunctionType;
    static fromName(name: HostFunctionTypeName): HostFunctionType;
    static fromXdrObject(wire: number): HostFunctionType;
}
