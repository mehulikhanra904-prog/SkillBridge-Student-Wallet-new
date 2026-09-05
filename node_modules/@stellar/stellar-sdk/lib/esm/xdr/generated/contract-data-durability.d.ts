import { EnumValue } from "../values/enum-value.js";
export type ContractDataDurabilityWire = number;
export type ContractDataDurabilityName = "temporary" | "persistent";
/**
 * ```xdr
 * enum ContractDataDurability {
 *     TEMPORARY = 0,
 *     PERSISTENT = 1
 * };
 * ```
 */
export declare class ContractDataDurability extends EnumValue<ContractDataDurabilityName> {
    static readonly temporary: ContractDataDurability;
    static readonly persistent: ContractDataDurability;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"ContractDataDurability", {
        readonly temporary: 0;
        readonly persistent: 1;
    }>;
    static fromValue(value: number): ContractDataDurability;
    static fromName(name: ContractDataDurabilityName): ContractDataDurability;
    static fromXdrObject(wire: number): ContractDataDurability;
}
