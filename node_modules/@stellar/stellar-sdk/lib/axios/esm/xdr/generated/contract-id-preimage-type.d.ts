import { EnumValue } from "../values/enum-value.js";
export type ContractIdPreimageTypeWire = number;
export type ContractIdPreimageTypeName = "contractIdPreimageFromAddress" | "contractIdPreimageFromAsset";
/**
 * ```xdr
 * enum ContractIDPreimageType
 * {
 *     CONTRACT_ID_PREIMAGE_FROM_ADDRESS = 0,
 *     CONTRACT_ID_PREIMAGE_FROM_ASSET = 1
 * };
 * ```
 */
export declare class ContractIdPreimageType extends EnumValue<ContractIdPreimageTypeName> {
    static readonly contractIdPreimageFromAddress: ContractIdPreimageType;
    static readonly contractIdPreimageFromAsset: ContractIdPreimageType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly contractIdPreimageFromAddress: 0;
        readonly contractIdPreimageFromAsset: 1;
    }>> & {
        readonly kind: "enum";
        readonly name: "ContractIdPreimageType";
        readonly nameByValue: ReadonlyMap<number, "contractIdPreimageFromAddress" | "contractIdPreimageFromAsset">;
    } & {
        readonly contractIdPreimageFromAddress: 0;
        readonly contractIdPreimageFromAsset: 1;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ContractIdPreimageType;
    static fromName(name: ContractIdPreimageTypeName): ContractIdPreimageType;
    static fromXdrObject(wire: number): ContractIdPreimageType;
}
