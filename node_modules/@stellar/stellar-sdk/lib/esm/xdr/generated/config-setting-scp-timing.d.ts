import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ConfigSettingScpTimingWire {
    ledgerTargetCloseTimeMilliseconds: number;
    nominationTimeoutInitialMilliseconds: number;
    nominationTimeoutIncrementMilliseconds: number;
    ballotTimeoutInitialMilliseconds: number;
    ballotTimeoutIncrementMilliseconds: number;
}
/**
 * ```xdr
 * struct ConfigSettingSCPTiming {
 *     uint32 ledgerTargetCloseTimeMilliseconds;
 *     uint32 nominationTimeoutInitialMilliseconds;
 *     uint32 nominationTimeoutIncrementMilliseconds;
 *     uint32 ballotTimeoutInitialMilliseconds;
 *     uint32 ballotTimeoutIncrementMilliseconds;
 * };
 * ```
 */
export declare class ConfigSettingScpTiming extends XdrValue {
    readonly ledgerTargetCloseTimeMilliseconds: number;
    readonly nominationTimeoutInitialMilliseconds: number;
    readonly nominationTimeoutIncrementMilliseconds: number;
    readonly ballotTimeoutInitialMilliseconds: number;
    readonly ballotTimeoutIncrementMilliseconds: number;
    static readonly schema: XdrType<ConfigSettingScpTimingWire>;
    constructor(input: {
        ledgerTargetCloseTimeMilliseconds: number;
        nominationTimeoutInitialMilliseconds: number;
        nominationTimeoutIncrementMilliseconds: number;
        ballotTimeoutInitialMilliseconds: number;
        ballotTimeoutIncrementMilliseconds: number;
    });
    toXdrObject(): ConfigSettingScpTimingWire;
    static fromXdrObject(wire: ConfigSettingScpTimingWire): ConfigSettingScpTiming;
}
