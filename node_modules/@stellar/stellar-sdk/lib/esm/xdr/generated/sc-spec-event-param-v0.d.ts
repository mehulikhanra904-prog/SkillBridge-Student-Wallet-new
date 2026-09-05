import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecTypeDef, type ScSpecTypeDefWire } from "./sc-spec-type-def.js";
import { ScSpecEventParamLocationV0, type ScSpecEventParamLocationV0Wire } from "./sc-spec-event-param-location-v0.js";
export interface ScSpecEventParamV0Wire {
    doc: XdrString;
    name: XdrString;
    type: ScSpecTypeDefWire;
    location: ScSpecEventParamLocationV0Wire;
}
/**
 * ```xdr
 * struct SCSpecEventParamV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     string name<30>;
 *     SCSpecTypeDef type;
 *     SCSpecEventParamLocationV0 location;
 * };
 * ```
 */
export declare class ScSpecEventParamV0 extends XdrValue {
    readonly doc: XdrString;
    readonly name: XdrString;
    readonly type: ScSpecTypeDef;
    readonly location: ScSpecEventParamLocationV0;
    static readonly schema: XdrType<ScSpecEventParamV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        type: ScSpecTypeDef;
        location: ScSpecEventParamLocationV0;
    });
    toXdrObject(): ScSpecEventParamV0Wire;
    static fromXdrObject(wire: ScSpecEventParamV0Wire): ScSpecEventParamV0;
}
