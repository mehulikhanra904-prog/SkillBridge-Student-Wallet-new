import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScpHistoryEntryV0, type ScpHistoryEntryV0Wire } from "./scp-history-entry-v0.js";
export type ScpHistoryEntryWire = {
    v: 0;
    v0: ScpHistoryEntryV0Wire;
};
export type ScpHistoryEntryVariantName = "v0";
/**
 * ```xdr
 * union SCPHistoryEntry switch (int v)
 * {
 * case 0:
 *     SCPHistoryEntryV0 v0;
 * };
 * ```
 */
declare abstract class ScpHistoryEntryBase extends XdrValue {
    abstract readonly type: ScpHistoryEntryVariantName;
    constructor();
    static readonly schema: XdrType<ScpHistoryEntryWire>;
    static v0(v0: ScpHistoryEntryV0): ScpHistoryEntryV0Arm;
    static fromXdrObject(wire: ScpHistoryEntryWire): ScpHistoryEntry;
    /**
     * Type guard narrowing an unknown value to a concrete ScpHistoryEntry variant.
     * Use this instead of `instanceof ScpHistoryEntry`: the exported `ScpHistoryEntry` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScpHistoryEntry.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScpHistoryEntry;
    abstract toXdrObject(): ScpHistoryEntryWire;
}
export declare class ScpHistoryEntryV0Arm extends ScpHistoryEntryBase {
    readonly type: "v0";
    readonly v0: ScpHistoryEntryV0;
    constructor(v0: ScpHistoryEntryV0);
    get value(): ScpHistoryEntryV0;
    toXdrObject(): Extract<ScpHistoryEntryWire, {
        v: 0;
    }>;
}
export type ScpHistoryEntry = ScpHistoryEntryV0Arm;
export declare const ScpHistoryEntry: typeof ScpHistoryEntryBase;
export {};
