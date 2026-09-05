import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
export interface RestoreFootprintOpWire {
    ext: ExtensionPointWire;
}
/**
 * ```xdr
 * struct RestoreFootprintOp
 * {
 *     ExtensionPoint ext;
 * };
 * ```
 */
export declare class RestoreFootprintOp extends XdrValue {
    readonly ext: ExtensionPoint;
    static readonly schema: XdrType<RestoreFootprintOpWire>;
    constructor(input: {
        ext: ExtensionPoint;
    });
    toXdrObject(): RestoreFootprintOpWire;
    static fromXdrObject(wire: RestoreFootprintOpWire): RestoreFootprintOp;
}
