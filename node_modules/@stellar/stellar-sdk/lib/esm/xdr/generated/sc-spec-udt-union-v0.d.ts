import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecUdtUnionCaseV0, type ScSpecUdtUnionCaseV0Wire } from "./sc-spec-udt-union-case-v0.js";
export interface ScSpecUdtUnionV0Wire {
    doc: XdrString;
    lib: XdrString;
    name: XdrString;
    cases: ScSpecUdtUnionCaseV0Wire[];
}
/**
 * ```xdr
 * struct SCSpecUDTUnionV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string lib<80>;
 *     string name<60>;
 *     SCSpecUDTUnionCaseV0 cases<>;
 * };
 * ```
 */
export declare class ScSpecUdtUnionV0 extends XdrValue {
    readonly doc: XdrString;
    readonly lib: XdrString;
    readonly name: XdrString;
    readonly cases: ScSpecUdtUnionCaseV0[];
    static readonly schema: XdrType<ScSpecUdtUnionV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        lib: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        cases: ScSpecUdtUnionCaseV0[];
    });
    toXdrObject(): ScSpecUdtUnionV0Wire;
    static fromXdrObject(wire: ScSpecUdtUnionV0Wire): ScSpecUdtUnionV0;
}
