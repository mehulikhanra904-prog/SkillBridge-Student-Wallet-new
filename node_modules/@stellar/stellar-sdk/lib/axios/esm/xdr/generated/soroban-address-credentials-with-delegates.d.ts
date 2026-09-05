import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanAddressCredentials, type SorobanAddressCredentialsWire } from "./soroban-address-credentials.js";
import { SorobanDelegateSignature, type SorobanDelegateSignatureWire } from "./soroban-delegate-signature.js";
export interface SorobanAddressCredentialsWithDelegatesWire {
    addressCredentials: SorobanAddressCredentialsWire;
    delegates: SorobanDelegateSignatureWire[];
}
/**
 * ```xdr
 * struct SorobanAddressCredentialsWithDelegates
 * {
 *     SorobanAddressCredentials addressCredentials;
 *     SorobanDelegateSignature delegates<>;
 * };
 * ```
 */
export declare class SorobanAddressCredentialsWithDelegates extends XdrValue {
    readonly addressCredentials: SorobanAddressCredentials;
    readonly delegates: SorobanDelegateSignature[];
    static readonly schema: XdrType<SorobanAddressCredentialsWithDelegatesWire>;
    constructor(input: {
        addressCredentials: SorobanAddressCredentials;
        delegates: SorobanDelegateSignature[];
    });
    toXdrObject(): SorobanAddressCredentialsWithDelegatesWire;
    static fromXdrObject(wire: SorobanAddressCredentialsWithDelegatesWire): SorobanAddressCredentialsWithDelegates;
}
