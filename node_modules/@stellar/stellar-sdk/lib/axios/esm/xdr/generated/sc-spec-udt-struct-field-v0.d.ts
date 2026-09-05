import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecTypeDef, type ScSpecTypeDefWire } from "./sc-spec-type-def.js";
export interface ScSpecUdtStructFieldV0Wire {
    doc: XdrString;
    name: XdrString;
    type: ScSpecTypeDefWire;
}
/**
 * ```xdr
 * struct SCSpecUDTStructFieldV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string name<30>;
 *     SCSpecTypeDef type;
 * };
 * ```
 */
export declare class ScSpecUdtStructFieldV0 extends XdrValue {
    readonly doc: XdrString;
    readonly name: XdrString;
    readonly type: ScSpecTypeDef;
    static readonly schema: XdrType<ScSpecUdtStructFieldV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        type: ScSpecTypeDef;
    });
    toXdrObject(): ScSpecUdtStructFieldV0Wire;
    static fromXdrObject(wire: ScSpecUdtStructFieldV0Wire): ScSpecUdtStructFieldV0;
}
