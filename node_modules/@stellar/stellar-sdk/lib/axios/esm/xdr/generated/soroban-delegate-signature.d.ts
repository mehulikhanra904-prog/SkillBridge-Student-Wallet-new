import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScAddress, type ScAddressWire } from "./sc-address.js";
import { ScVal, type ScValWire } from "./sc-val.js";
export interface SorobanDelegateSignatureWire {
    address: ScAddressWire;
    signature: ScValWire;
    nestedDelegates: SorobanDelegateSignatureWire[];
}
/**
 * ```xdr
 * struct SorobanDelegateSignature
 * {
 *     SCAddress address;
 *     SCVal signature;
 *     SorobanDelegateSignature nestedDelegates<>;
 * };
 * ```
 */
export declare class SorobanDelegateSignature extends XdrValue {
    readonly address: ScAddress;
    readonly signature: ScVal;
    readonly nestedDelegates: SorobanDelegateSignature[];
    static readonly schema: XdrType<SorobanDelegateSignatureWire>;
    constructor(input: {
        address: ScAddress;
        signature: ScVal;
        nestedDelegates: SorobanDelegateSignature[];
    });
    toXdrObject(): SorobanDelegateSignatureWire;
    static fromXdrObject(wire: SorobanDelegateSignatureWire): SorobanDelegateSignature;
}
