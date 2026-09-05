import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScVal, type ScValWire } from "./sc-val.js";
import { ContractEvent, type ContractEventWire } from "./contract-event.js";
export interface InvokeHostFunctionSuccessPreImageWire {
    returnValue: ScValWire;
    events: ContractEventWire[];
}
/**
 * ```xdr
 * struct InvokeHostFunctionSuccessPreImage
 * {
 *     SCVal returnValue;
 *     ContractEvent events<>;
 * };
 * ```
 */
export declare class InvokeHostFunctionSuccessPreImage extends XdrValue {
    readonly returnValue: ScVal;
    readonly events: ContractEvent[];
    static readonly schema: XdrType<InvokeHostFunctionSuccessPreImageWire>;
    constructor(input: {
        returnValue: ScVal;
        events: ContractEvent[];
    });
    toXdrObject(): InvokeHostFunctionSuccessPreImageWire;
    static fromXdrObject(wire: InvokeHostFunctionSuccessPreImageWire): InvokeHostFunctionSuccessPreImage;
}
