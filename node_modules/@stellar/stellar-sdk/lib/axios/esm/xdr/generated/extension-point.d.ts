import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type ExtensionPointWire = {
    v: 0;
};
export type ExtensionPointVariantName = "v0";
/**
 * ```xdr
 * union ExtensionPoint switch (int v)
 * {
 * case 0:
 *     void;
 * };
 * ```
 */
declare abstract class ExtensionPointBase extends XdrValue {
    abstract readonly type: ExtensionPointVariantName;
    constructor();
    static readonly schema: XdrType<ExtensionPointWire>;
    static v0(): ExtensionPointV0;
    static fromXdrObject(wire: ExtensionPointWire): ExtensionPoint;
    /**
     * Type guard narrowing an unknown value to a concrete ExtensionPoint variant.
     * Use this instead of `instanceof ExtensionPoint`: the exported `ExtensionPoint` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ExtensionPoint.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ExtensionPoint;
    abstract toXdrObject(): ExtensionPointWire;
}
export declare class ExtensionPointV0 extends ExtensionPointBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<ExtensionPointWire, {
        v: 0;
    }>;
}
export type ExtensionPoint = ExtensionPointV0;
export declare const ExtensionPoint: typeof ExtensionPointBase;
export {};
