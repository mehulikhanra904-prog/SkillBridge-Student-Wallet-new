import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ContractId, type ContractIdWire } from "./contract-id.js";
import { Hash, type HashWire } from "./hash.js";
export interface ConfigUpgradeSetKeyWire {
    contractId: ContractIdWire;
    contentHash: HashWire;
}
/**
 * ```xdr
 * struct ConfigUpgradeSetKey {
 *     ContractID contractID;
 *     Hash contentHash;
 * };
 * ```
 */
export declare class ConfigUpgradeSetKey extends XdrValue {
    readonly contractId: ContractId;
    readonly contentHash: Hash;
    static readonly schema: XdrType<ConfigUpgradeSetKeyWire>;
    constructor(input: {
        contractId: ContractId;
        contentHash: Hash | Uint8Array | string;
    });
    toXdrObject(): ConfigUpgradeSetKeyWire;
    static fromXdrObject(wire: ConfigUpgradeSetKeyWire): ConfigUpgradeSetKey;
}
