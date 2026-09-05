import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
import { ScAddress, type ScAddressWire } from "./sc-address.js";
import { ScVal, type ScValWire } from "./sc-val.js";
import { ContractDataDurability, type ContractDataDurabilityWire } from "./contract-data-durability.js";
export interface ContractDataEntryWire {
    ext: ExtensionPointWire;
    contract: ScAddressWire;
    key: ScValWire;
    durability: ContractDataDurabilityWire;
    val: ScValWire;
}
/**
 * ```xdr
 * struct ContractDataEntry {
 *     ExtensionPoint ext;
 *
 *     SCAddress contract;
 *     SCVal key;
 *     ContractDataDurability durability;
 *     SCVal val;
 * };
 * ```
 */
export declare class ContractDataEntry extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly contract: ScAddress;
    readonly key: ScVal;
    readonly durability: ContractDataDurability;
    readonly val: ScVal;
    static readonly schema: XdrType<ContractDataEntryWire>;
    constructor(input: {
        ext: ExtensionPoint;
        contract: ScAddress;
        key: ScVal;
        durability: ContractDataDurability;
        val: ScVal;
    });
    toXdrObject(): ContractDataEntryWire;
    static fromXdrObject(wire: ContractDataEntryWire): ContractDataEntry;
}
