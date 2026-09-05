import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ConfigSettingEntry, type ConfigSettingEntryWire } from "./config-setting-entry.js";
export interface ConfigUpgradeSetWire {
    updatedEntry: ConfigSettingEntryWire[];
}
/**
 * ```xdr
 * struct ConfigUpgradeSet {
 *     ConfigSettingEntry updatedEntry<>;
 * };
 * ```
 */
export declare class ConfigUpgradeSet extends XdrValue {
    readonly updatedEntry: ConfigSettingEntry[];
    static readonly schema: XdrType<ConfigUpgradeSetWire>;
    constructor(input: {
        updatedEntry: ConfigSettingEntry[];
    });
    toXdrObject(): ConfigUpgradeSetWire;
    static fromXdrObject(wire: ConfigUpgradeSetWire): ConfigUpgradeSet;
}
