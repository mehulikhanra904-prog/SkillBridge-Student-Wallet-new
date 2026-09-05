import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
export interface ScSpecUdtUnionCaseVoidV0Wire {
    doc: XdrString;
    name: XdrString;
}
/**
 * ```xdr
 * struct SCSpecUDTUnionCaseVoidV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string name<60>;
 * };
 * ```
 */
export declare class ScSpecUdtUnionCaseVoidV0 extends XdrValue {
    readonly doc: XdrString;
    readonly name: XdrString;
    static readonly schema: XdrType<ScSpecUdtUnionCaseVoidV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
    });
    toXdrObject(): ScSpecUdtUnionCaseVoidV0Wire;
    static fromXdrObject(wire: ScSpecUdtUnionCaseVoidV0Wire): ScSpecUdtUnionCaseVoidV0;
}
