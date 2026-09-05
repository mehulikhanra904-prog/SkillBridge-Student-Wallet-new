import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecUdtStructFieldV0, type ScSpecUdtStructFieldV0Wire } from "./sc-spec-udt-struct-field-v0.js";
export interface ScSpecUdtStructV0Wire {
    doc: XdrString;
    lib: XdrString;
    name: XdrString;
    fields: ScSpecUdtStructFieldV0Wire[];
}
/**
 * ```xdr
 * struct SCSpecUDTStructV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string lib<80>;
 *     string name<60>;
 *     SCSpecUDTStructFieldV0 fields<>;
 * };
 * ```
 */
export declare class ScSpecUdtStructV0 extends XdrValue {
    readonly doc: XdrString;
    readonly lib: XdrString;
    readonly name: XdrString;
    readonly fields: ScSpecUdtStructFieldV0[];
    static readonly schema: XdrType<ScSpecUdtStructV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        lib: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        fields: ScSpecUdtStructFieldV0[];
    });
    toXdrObject(): ScSpecUdtStructV0Wire;
    static fromXdrObject(wire: ScSpecUdtStructV0Wire): ScSpecUdtStructV0;
}
