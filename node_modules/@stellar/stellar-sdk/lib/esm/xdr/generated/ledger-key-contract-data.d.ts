import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScAddress, type ScAddressWire } from "./sc-address.js";
import { ScVal, type ScValWire } from "./sc-val.js";
import { ContractDataDurability, type ContractDataDurabilityWire } from "./contract-data-durability.js";
export interface LedgerKeyContractDataWire {
    contract: ScAddressWire;
    key: ScValWire;
    durability: ContractDataDurabilityWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         SCAddress contract;
 *         SCVal key;
 *         ContractDataDurability durability;
 *     }
 * ```
 */
export declare class LedgerKeyContractData extends XdrValue {
    readonly contract: ScAddress;
    readonly key: ScVal;
    readonly durability: ContractDataDurability;
    static readonly schema: XdrType<LedgerKeyContractDataWire>;
    constructor(input: {
        contract: ScAddress;
        key: ScVal;
        durability: ContractDataDurability;
    });
    toXdrObject(): LedgerKeyContractDataWire;
    static fromXdrObject(wire: LedgerKeyContractDataWire): LedgerKeyContractData;
}
