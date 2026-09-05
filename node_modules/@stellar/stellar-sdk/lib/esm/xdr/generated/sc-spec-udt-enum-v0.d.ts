import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecUdtEnumCaseV0, type ScSpecUdtEnumCaseV0Wire } from "./sc-spec-udt-enum-case-v0.js";
export interface ScSpecUdtEnumV0Wire {
    doc: XdrString;
    lib: XdrString;
    name: XdrString;
    cases: ScSpecUdtEnumCaseV0Wire[];
}
/**
 * ```xdr
 * struct SCSpecUDTEnumV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string lib<80>;
 *     string name<60>;
 *     SCSpecUDTEnumCaseV0 cases<>;
 * };
 * ```
 */
export declare class ScSpecUdtEnumV0 extends XdrValue {
    readonly doc: XdrString;
    readonly lib: XdrString;
    readonly name: XdrString;
    readonly cases: ScSpecUdtEnumCaseV0[];
    static readonly schema: XdrType<ScSpecUdtEnumV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        lib: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        cases: ScSpecUdtEnumCaseV0[];
    });
    toXdrObject(): ScSpecUdtEnumV0Wire;
    static fromXdrObject(wire: ScSpecUdtEnumV0Wire): ScSpecUdtEnumV0;
}
