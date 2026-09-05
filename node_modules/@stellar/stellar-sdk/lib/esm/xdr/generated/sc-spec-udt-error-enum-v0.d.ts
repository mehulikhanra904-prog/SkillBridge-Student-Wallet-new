import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecUdtErrorEnumCaseV0, type ScSpecUdtErrorEnumCaseV0Wire } from "./sc-spec-udt-error-enum-case-v0.js";
export interface ScSpecUdtErrorEnumV0Wire {
    doc: XdrString;
    lib: XdrString;
    name: XdrString;
    cases: ScSpecUdtErrorEnumCaseV0Wire[];
}
/**
 * ```xdr
 * struct SCSpecUDTErrorEnumV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string lib<80>;
 *     string name<60>;
 *     SCSpecUDTErrorEnumCaseV0 cases<>;
 * };
 * ```
 */
export declare class ScSpecUdtErrorEnumV0 extends XdrValue {
    readonly doc: XdrString;
    readonly lib: XdrString;
    readonly name: XdrString;
    readonly cases: ScSpecUdtErrorEnumCaseV0[];
    static readonly schema: XdrType<ScSpecUdtErrorEnumV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        lib: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        cases: ScSpecUdtErrorEnumCaseV0[];
    });
    toXdrObject(): ScSpecUdtErrorEnumV0Wire;
    static fromXdrObject(wire: ScSpecUdtErrorEnumV0Wire): ScSpecUdtErrorEnumV0;
}
