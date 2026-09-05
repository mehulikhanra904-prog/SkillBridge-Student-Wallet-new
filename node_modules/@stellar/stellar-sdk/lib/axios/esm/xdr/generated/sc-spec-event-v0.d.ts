import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecEventParamV0, type ScSpecEventParamV0Wire } from "./sc-spec-event-param-v0.js";
import { ScSpecEventDataFormat, type ScSpecEventDataFormatWire } from "./sc-spec-event-data-format.js";
export interface ScSpecEventV0Wire {
    doc: XdrString;
    lib: XdrString;
    name: XdrString;
    prefixTopics: XdrString[];
    params: ScSpecEventParamV0Wire[];
    dataFormat: ScSpecEventDataFormatWire;
}
/**
 * ```xdr
 * struct SCSpecEventV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string lib<80>;
 *     SCSymbol name;
 *     SCSymbol prefixTopics<2>;
 *     SCSpecEventParamV0 params<>;
 *     SCSpecEventDataFormat dataFormat;
 * };
 * ```
 */
export declare class ScSpecEventV0 extends XdrValue {
    readonly doc: XdrString;
    readonly lib: XdrString;
    readonly name: XdrString;
    readonly prefixTopics: XdrString[];
    readonly params: ScSpecEventParamV0[];
    readonly dataFormat: ScSpecEventDataFormat;
    static readonly schema: XdrType<ScSpecEventV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        lib: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        prefixTopics: (XdrString | string | Uint8Array)[];
        params: ScSpecEventParamV0[];
        dataFormat: ScSpecEventDataFormat;
    });
    toXdrObject(): ScSpecEventV0Wire;
    static fromXdrObject(wire: ScSpecEventV0Wire): ScSpecEventV0;
}
