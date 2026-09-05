import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
export interface ExtendFootprintTtlOpWire {
    ext: ExtensionPointWire;
    extendTo: number;
}
/**
 * ```xdr
 * struct ExtendFootprintTTLOp
 * {
 *     ExtensionPoint ext;
 *     uint32 extendTo;
 * };
 * ```
 */
export declare class ExtendFootprintTtlOp extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly extendTo: number;
    static readonly schema: XdrType<ExtendFootprintTtlOpWire>;
    constructor(input: {
        ext: ExtensionPoint;
        extendTo: number;
    });
    toXdrObject(): ExtendFootprintTtlOpWire;
    static fromXdrObject(wire: ExtendFootprintTtlOpWire): ExtendFootprintTtlOp;
}
