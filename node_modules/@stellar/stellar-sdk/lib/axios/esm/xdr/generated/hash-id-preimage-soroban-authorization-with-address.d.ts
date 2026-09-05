import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { ScAddress, type ScAddressWire } from "./sc-address.js";
import { SorobanAuthorizedInvocation, type SorobanAuthorizedInvocationWire } from "./soroban-authorized-invocation.js";
export interface HashIdPreimageSorobanAuthorizationWithAddressWire {
    networkId: HashWire;
    nonce: bigint;
    signatureExpirationLedger: number;
    address: ScAddressWire;
    invocation: SorobanAuthorizedInvocationWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         Hash networkID;
 *         int64 nonce;
 *         uint32 signatureExpirationLedger;
 *         SCAddress address;
 *         SorobanAuthorizedInvocation invocation;
 *     }
 * ```
 */
export declare class HashIdPreimageSorobanAuthorizationWithAddress extends XdrValue {
    readonly networkId: Hash;
    readonly nonce: bigint;
    readonly signatureExpirationLedger: number;
    readonly address: ScAddress;
    readonly invocation: SorobanAuthorizedInvocation;
    static readonly schema: XdrType<HashIdPreimageSorobanAuthorizationWithAddressWire>;
    constructor(input: {
        networkId: Hash | Uint8Array | string;
        nonce: bigint;
        signatureExpirationLedger: number;
        address: ScAddress;
        invocation: SorobanAuthorizedInvocation;
    });
    toXdrObject(): HashIdPreimageSorobanAuthorizationWithAddressWire;
    static fromXdrObject(wire: HashIdPreimageSorobanAuthorizationWithAddressWire): HashIdPreimageSorobanAuthorizationWithAddress;
}
