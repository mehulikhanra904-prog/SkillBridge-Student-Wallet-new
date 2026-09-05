import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TrustLineEntryExtensionV2, type TrustLineEntryExtensionV2Wire } from "./trust-line-entry-extension-v2.js";
export type TrustLineEntryV1ExtWire = {
    v: 0;
} | {
    v: 2;
    v2: TrustLineEntryExtensionV2Wire;
};
export type TrustLineEntryV1ExtVariantName = "v0" | "v2";
/**
 * ```xdr
 * union switch (int v)
 *             {
 *             case 0:
 *                 void;
 *             case 2:
 *                 TrustLineEntryExtensionV2 v2;
 *             }
 * ```
 */
declare abstract class TrustLineEntryV1ExtBase extends XdrValue {
    abstract readonly type: TrustLineEntryV1ExtVariantName;
    constructor();
    static readonly schema: XdrType<TrustLineEntryV1ExtWire>;
    static v0(): TrustLineEntryV1ExtV0;
    static v2(v2: TrustLineEntryExtensionV2): TrustLineEntryV1ExtV2;
    static fromXdrObject(wire: TrustLineEntryV1ExtWire): TrustLineEntryV1Ext;
    /**
     * Type guard narrowing an unknown value to a concrete TrustLineEntryV1Ext variant.
     * Use this instead of `instanceof TrustLineEntryV1Ext`: the exported `TrustLineEntryV1Ext` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TrustLineEntryV1Ext.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TrustLineEntryV1Ext;
    abstract toXdrObject(): TrustLineEntryV1ExtWire;
}
export declare class TrustLineEntryV1ExtV0 extends TrustLineEntryV1ExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<TrustLineEntryV1ExtWire, {
        v: 0;
    }>;
}
export declare class TrustLineEntryV1ExtV2 extends TrustLineEntryV1ExtBase {
    readonly type: "v2";
    readonly v2: TrustLineEntryExtensionV2;
    constructor(v2: TrustLineEntryExtensionV2);
    get value(): TrustLineEntryExtensionV2;
    toXdrObject(): Extract<TrustLineEntryV1ExtWire, {
        v: 2;
    }>;
}
export type TrustLineEntryV1Ext = TrustLineEntryV1ExtV0 | TrustLineEntryV1ExtV2;
export declare const TrustLineEntryV1Ext: typeof TrustLineEntryV1ExtBase;
export {};
