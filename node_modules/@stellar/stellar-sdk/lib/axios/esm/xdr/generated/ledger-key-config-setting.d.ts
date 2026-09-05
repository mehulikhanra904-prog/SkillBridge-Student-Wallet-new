import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ConfigSettingId, type ConfigSettingIdWire } from "./config-setting-id.js";
export interface LedgerKeyConfigSettingWire {
    configSettingId: ConfigSettingIdWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         ConfigSettingID configSettingID;
 *     }
 * ```
 */
export declare class LedgerKeyConfigSetting extends XdrValue {
    readonly configSettingId: ConfigSettingId;
    static readonly schema: XdrType<LedgerKeyConfigSettingWire>;
    constructor(input: {
        configSettingId: ConfigSettingId;
    });
    toXdrObject(): LedgerKeyConfigSettingWire;
    static fromXdrObject(wire: LedgerKeyConfigSettingWire): LedgerKeyConfigSetting;
}
