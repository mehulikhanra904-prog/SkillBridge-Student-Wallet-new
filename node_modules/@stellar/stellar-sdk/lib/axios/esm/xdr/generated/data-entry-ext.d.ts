import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type DataEntryExtWire = {
    v: 0;
};
export type DataEntryExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class DataEntryExtBase extends XdrValue {
    abstract readonly type: DataEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<DataEntryExtWire>;
    static v0(): DataEntryExtV0;
    static fromXdrObject(wire: DataEntryExtWire): DataEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete DataEntryExt variant.
     * Use this instead of `instanceof DataEntryExt`: the exported `DataEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `DataEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is DataEntryExt;
    abstract toXdrObject(): DataEntryExtWire;
}
export declare class DataEntryExtV0 extends DataEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<DataEntryExtWire, {
        v: 0;
    }>;
}
export type DataEntryExt = DataEntryExtV0;
export declare const DataEntryExt: typeof DataEntryExtBase;
export {};
