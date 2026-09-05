import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecTypeDef, type ScSpecTypeDefWire } from "./sc-spec-type-def.js";
export interface ScSpecUdtUnionCaseTupleV0Wire {
    doc: XdrString;
    name: XdrString;
    type: ScSpecTypeDefWire[];
}
/**
 * ```xdr
 * struct SCSpecUDTUnionCaseTupleV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string name<60>;
 *     SCSpecTypeDef type<>;
 * };
 * ```
 */
export declare class ScSpecUdtUnionCaseTupleV0 extends XdrValue {
    readonly doc: XdrString;
    readonly name: XdrString;
    readonly type: ScSpecTypeDef[];
    static readonly schema: XdrType<ScSpecUdtUnionCaseTupleV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        type: ScSpecTypeDef[];
    });
    toXdrObject(): ScSpecUdtUnionCaseTupleV0Wire;
    static fromXdrObject(wire: ScSpecUdtUnionCaseTupleV0Wire): ScSpecUdtUnionCaseTupleV0;
}
