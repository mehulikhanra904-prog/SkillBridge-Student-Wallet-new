import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type TrustLineEntryExtensionV2ExtWire = {
    v: 0;
};
export type TrustLineEntryExtensionV2ExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class TrustLineEntryExtensionV2ExtBase extends XdrValue {
    abstract readonly type: TrustLineEntryExtensionV2ExtVariantName;
    constructor();
    static readonly schema: XdrType<TrustLineEntryExtensionV2ExtWire>;
    static v0(): TrustLineEntryExtensionV2ExtV0;
    static fromXdrObject(wire: TrustLineEntryExtensionV2ExtWire): TrustLineEntryExtensionV2Ext;
    /**
     * Type guard narrowing an unknown value to a concrete TrustLineEntryExtensionV2Ext variant.
     * Use this instead of `instanceof TrustLineEntryExtensionV2Ext`: the exported `TrustLineEntryExtensionV2Ext` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TrustLineEntryExtensionV2Ext.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TrustLineEntryExtensionV2Ext;
    abstract toXdrObject(): TrustLineEntryExtensionV2ExtWire;
}
export declare class TrustLineEntryExtensionV2ExtV0 extends TrustLineEntryExtensionV2ExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<TrustLineEntryExtensionV2ExtWire, {
        v: 0;
    }>;
}
export type TrustLineEntryExtensionV2Ext = TrustLineEntryExtensionV2ExtV0;
export declare const TrustLineEntryExtensionV2Ext: typeof TrustLineEntryExtensionV2ExtBase;
export {};
