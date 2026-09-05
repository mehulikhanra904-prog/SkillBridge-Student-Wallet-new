import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScAddress, type ScAddressWire } from "./sc-address.js";
import { ScVal, type ScValWire } from "./sc-val.js";
export interface SorobanAddressCredentialsWire {
    address: ScAddressWire;
    nonce: bigint;
    signatureExpirationLedger: number;
    signature: ScValWire;
}
/**
 * ```xdr
 * struct SorobanAddressCredentials
 * {
 *     SCAddress address;
 *     int64 nonce;
 *     uint32 signatureExpirationLedger;
 *     SCVal signature;
 * };
 * ```
 */
export declare class SorobanAddressCredentials extends XdrValue {
    readonly address: ScAddress;
    readonly nonce: bigint;
    readonly signatureExpirationLedger: number;
    readonly signature: ScVal;
    static readonly schema: XdrType<SorobanAddressCredentialsWire>;
    constructor(input: {
        address: ScAddress;
        nonce: bigint;
        signatureExpirationLedger: number;
        signature: ScVal;
    });
    toXdrObject(): SorobanAddressCredentialsWire;
    static fromXdrObject(wire: SorobanAddressCredentialsWire): SorobanAddressCredentials;
}
