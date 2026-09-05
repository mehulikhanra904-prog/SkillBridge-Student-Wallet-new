import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type LedgerHeaderExtensionV1ExtWire = {
    v: 0;
};
export type LedgerHeaderExtensionV1ExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class LedgerHeaderExtensionV1ExtBase extends XdrValue {
    abstract readonly type: LedgerHeaderExtensionV1ExtVariantName;
    constructor();
    static readonly schema: XdrType<LedgerHeaderExtensionV1ExtWire>;
    static v0(): LedgerHeaderExtensionV1ExtV0;
    static fromXdrObject(wire: LedgerHeaderExtensionV1ExtWire): LedgerHeaderExtensionV1Ext;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerHeaderExtensionV1Ext variant.
     * Use this instead of `instanceof LedgerHeaderExtensionV1Ext`: the exported `LedgerHeaderExtensionV1Ext` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerHeaderExtensionV1Ext.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerHeaderExtensionV1Ext;
    abstract toXdrObject(): LedgerHeaderExtensionV1ExtWire;
}
export declare class LedgerHeaderExtensionV1ExtV0 extends LedgerHeaderExtensionV1ExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<LedgerHeaderExtensionV1ExtWire, {
        v: 0;
    }>;
}
export type LedgerHeaderExtensionV1Ext = LedgerHeaderExtensionV1ExtV0;
export declare const LedgerHeaderExtensionV1Ext: typeof LedgerHeaderExtensionV1ExtBase;
export {};
