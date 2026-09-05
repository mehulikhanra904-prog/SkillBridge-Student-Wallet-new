import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecTypeDef, type ScSpecTypeDefWire } from "./sc-spec-type-def.js";
export interface ScSpecFunctionInputV0Wire {
    doc: XdrString;
    name: XdrString;
    type: ScSpecTypeDefWire;
}
/**
 * ```xdr
 * struct SCSpecFunctionInputV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string name<30>;
 *     SCSpecTypeDef type;
 * };
 * ```
 */
export declare class ScSpecFunctionInputV0 extends XdrValue {
    readonly doc: XdrString;
    readonly name: XdrString;
    readonly type: ScSpecTypeDef;
    static readonly schema: XdrType<ScSpecFunctionInputV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        type: ScSpecTypeDef;
    });
    toXdrObject(): ScSpecFunctionInputV0Wire;
    static fromXdrObject(wire: ScSpecFunctionInputV0Wire): ScSpecFunctionInputV0;
}
