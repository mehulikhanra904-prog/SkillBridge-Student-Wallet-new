import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScSpecFunctionInputV0, type ScSpecFunctionInputV0Wire } from "./sc-spec-function-input-v0.js";
import { ScSpecTypeDef, type ScSpecTypeDefWire } from "./sc-spec-type-def.js";
export interface ScSpecFunctionV0Wire {
    doc: XdrString;
    name: XdrString;
    inputs: ScSpecFunctionInputV0Wire[];
    outputs: ScSpecTypeDefWire[];
}
/**
 * ```xdr
 * struct SCSpecFunctionV0
 * {
 *     string doc<SC_SPEC_DOC_LIMIT>;
 *     SCSymbol name;
 *     SCSpecFunctionInputV0 inputs<>;
 *     SCSpecTypeDef outputs<1>;
 * };
 * ```
 */
export declare class ScSpecFunctionV0 extends XdrValue {
    readonly doc: XdrString;
    readonly name: XdrString;
    readonly inputs: ScSpecFunctionInputV0[];
    readonly outputs: ScSpecTypeDef[];
    static readonly schema: XdrType<ScSpecFunctionV0Wire>;
    constructor(input: {
        doc: XdrString | string | Uint8Array;
        name: XdrString | string | Uint8Array;
        inputs: ScSpecFunctionInputV0[];
        outputs: ScSpecTypeDef[];
    });
    toXdrObject(): ScSpecFunctionV0Wire;
    static fromXdrObject(wire: ScSpecFunctionV0Wire): ScSpecFunctionV0;
}
