import { EnumValue } from "../values/enum-value.js";
export type ContractEventTypeWire = number;
export type ContractEventTypeName = "system" | "contract" | "diagnostic";
/**
 * ```xdr
 * enum ContractEventType
 * {
 *     SYSTEM = 0,
 *     CONTRACT = 1,
 *     DIAGNOSTIC = 2
 * };
 * ```
 */
export declare class ContractEventType extends EnumValue<ContractEventTypeName> {
    static readonly system: ContractEventType;
    static readonly contract: ContractEventType;
    static readonly diagnostic: ContractEventType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"ContractEventType", {
        readonly system: 0;
        readonly contract: 1;
        readonly diagnostic: 2;
    }>;
    static fromValue(value: number): ContractEventType;
    static fromName(name: ContractEventTypeName): ContractEventType;
    static fromXdrObject(wire: number): ContractEventType;
}
