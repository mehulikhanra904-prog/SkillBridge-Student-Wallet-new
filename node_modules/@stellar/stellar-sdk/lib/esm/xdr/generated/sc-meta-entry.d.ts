import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScMetaV0, type ScMetaV0Wire } from "./sc-meta-v0.js";
export type ScMetaEntryWire = {
    kind: 0;
    v0: ScMetaV0Wire;
};
export type ScMetaEntryVariantName = "scMetaV0";
/**
 * ```xdr
 * union SCMetaEntry switch (SCMetaKind kind)
 * {
 * case SC_META_V0:
 *     SCMetaV0 v0;
 * };
 * ```
 */
declare abstract class ScMetaEntryBase extends XdrValue {
    abstract readonly type: ScMetaEntryVariantName;
    constructor();
    static readonly schema: XdrType<ScMetaEntryWire>;
    static scMetaV0(v0: ScMetaV0): ScMetaEntryScMetaV0;
    static fromXdrObject(wire: ScMetaEntryWire): ScMetaEntry;
    /**
     * Type guard narrowing an unknown value to a concrete ScMetaEntry variant.
     * Use this instead of `instanceof ScMetaEntry`: the exported `ScMetaEntry` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScMetaEntry.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScMetaEntry;
    abstract toXdrObject(): ScMetaEntryWire;
}
export declare class ScMetaEntryScMetaV0 extends ScMetaEntryBase {
    readonly type: "scMetaV0";
    readonly v0: ScMetaV0;
    constructor(v0: ScMetaV0);
    get value(): ScMetaV0;
    toXdrObject(): Extract<ScMetaEntryWire, {
        kind: 0;
    }>;
}
export type ScMetaEntry = ScMetaEntryScMetaV0;
export declare const ScMetaEntry: typeof ScMetaEntryBase;
export {};
