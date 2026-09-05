import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
export interface ScSpecTypeUdtWire {
    name: XdrString;
}
/**
 * ```xdr
 * struct SCSpecTypeUDT
 * {
 *     string name<60>;
 * };
 * ```
 */
export declare class ScSpecTypeUdt extends XdrValue {
    readonly name: XdrString;
    static readonly schema: XdrType<ScSpecTypeUdtWire>;
    constructor(input: {
        name: XdrString | string | Uint8Array;
    });
    toXdrObject(): ScSpecTypeUdtWire;
    static fromXdrObject(wire: ScSpecTypeUdtWire): ScSpecTypeUdt;
}
