import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type LedgerHeaderHistoryEntryExtWire = {
    v: 0;
};
export type LedgerHeaderHistoryEntryExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class LedgerHeaderHistoryEntryExtBase extends XdrValue {
    abstract readonly type: LedgerHeaderHistoryEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<LedgerHeaderHistoryEntryExtWire>;
    static v0(): LedgerHeaderHistoryEntryExtV0;
    static fromXdrObject(wire: LedgerHeaderHistoryEntryExtWire): LedgerHeaderHistoryEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerHeaderHistoryEntryExt variant.
     * Use this instead of `instanceof LedgerHeaderHistoryEntryExt`: the exported `LedgerHeaderHistoryEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerHeaderHistoryEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerHeaderHistoryEntryExt;
    abstract toXdrObject(): LedgerHeaderHistoryEntryExtWire;
}
export declare class LedgerHeaderHistoryEntryExtV0 extends LedgerHeaderHistoryEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<LedgerHeaderHistoryEntryExtWire, {
        v: 0;
    }>;
}
export type LedgerHeaderHistoryEntryExt = LedgerHeaderHistoryEntryExtV0;
export declare const LedgerHeaderHistoryEntryExt: typeof LedgerHeaderHistoryEntryExtBase;
export {};
