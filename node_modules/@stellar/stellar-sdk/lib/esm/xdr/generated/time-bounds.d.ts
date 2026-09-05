import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface TimeBoundsWire {
    minTime: bigint;
    maxTime: bigint;
}
/**
 * ```xdr
 * struct TimeBounds
 * {
 *     TimePoint minTime;
 *     TimePoint maxTime; // 0 here means no maxTime
 * };
 * ```
 */
export declare class TimeBounds extends XdrValue {
    readonly minTime: bigint;
    readonly maxTime: bigint;
    static readonly schema: XdrType<TimeBoundsWire>;
    constructor(input: {
        minTime: bigint;
        maxTime: bigint;
    });
    toXdrObject(): TimeBoundsWire;
    static fromXdrObject(wire: TimeBoundsWire): TimeBounds;
}
