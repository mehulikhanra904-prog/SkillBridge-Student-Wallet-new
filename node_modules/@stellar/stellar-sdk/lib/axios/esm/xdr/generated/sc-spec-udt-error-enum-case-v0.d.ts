import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
export interface ScSpecUdtErrorEnumCaseV0Wire {
    doc: XdrString;
    name: XdrString;
    value: number;
}
/**
 * ```xdr
 * struct SCSpecUDTErrorEnumCaseV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string name<60>;
 *     uint32 value;
 * };
 * ```
 */
export declare class ScSpecUdtErrorEnumCaseV0 extends XdrValue {
    readonly doc: XdrString;
    readonly name: XdrString;
    readonly value: number;
    static readonly schema: XdrType<ScSpecUdtErrorEnumCaseV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        value: number;
    });
    toXdrObject(): ScSpecUdtErrorEnumCaseV0Wire;
    static fromXdrObject(wire: ScSpecUdtErrorEnumCaseV0Wire): ScSpecUdtErrorEnumCaseV0;
}
