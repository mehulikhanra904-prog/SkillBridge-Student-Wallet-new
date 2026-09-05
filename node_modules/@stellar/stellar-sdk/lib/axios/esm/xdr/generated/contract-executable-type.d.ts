import { EnumValue } from "../values/enum-value.js";
export type ContractExecutableTypeWire = number;
export type ContractExecutableTypeName = "contractExecutableWasm" | "contractExecutableStellarAsset" | "contractExecutableExternalRef";
/**
 * ```xdr
 * enum ContractExecutableType
 * {
 *     CONTRACT_EXECUTABLE_WASM = 0,
 *     CONTRACT_EXECUTABLE_STELLAR_ASSET = 1,
 *     CONTRACT_EXECUTABLE_EXTERNAL_REF = 2
 * };
 * ```
 */
export declare class ContractExecutableType extends EnumValue<ContractExecutableTypeName> {
    static readonly contractExecutableWasm: ContractExecutableType;
    static readonly contractExecutableStellarAsset: ContractExecutableType;
    static readonly contractExecutableExternalRef: ContractExecutableType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly contractExecutableWasm: 0;
        readonly contractExecutableStellarAsset: 1;
        readonly contractExecutableExternalRef: 2;
    }>> & {
        readonly kind: "enum";
        readonly name: "ContractExecutableType";
        readonly nameByValue: ReadonlyMap<number, "contractExecutableWasm" | "contractExecutableStellarAsset" | "contractExecutableExternalRef">;
    } & {
        readonly contractExecutableWasm: 0;
        readonly contractExecutableStellarAsset: 1;
        readonly contractExecutableExternalRef: 2;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ContractExecutableType;
    static fromName(name: ContractExecutableTypeName): ContractExecutableType;
    static fromXdrObject(wire: number): ContractExecutableType;
}
