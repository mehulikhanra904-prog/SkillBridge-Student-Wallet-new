import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { ScAddress, type ScAddressWire } from "./sc-address.js";
import { ScVal, type ScValWire } from "./sc-val.js";
export interface InvokeContractArgsWire {
    contractAddress: ScAddressWire;
    functionName: XdrString;
    args: ScValWire[];
}
/**
 * ```xdr
 * struct InvokeContractArgs {
 *     SCAddress contractAddress;
 *     SCSymbol functionName;
 *     SCVal args<>;
 * };
 * ```
 */
export declare class InvokeContractArgs extends XdrValue {
    readonly contractAddress: ScAddress;
    readonly functionName: XdrString;
    readonly args: ScVal[];
    static readonly schema: XdrType<InvokeContractArgsWire>;
    constructor(input: {
        contractAddress: ScAddress;
        functionName: XdrString | string | Uint8Array;
        args: ScVal[];
    });
    toXdrObject(): InvokeContractArgsWire;
    static fromXdrObject(wire: InvokeContractArgsWire): InvokeContractArgs;
}
