import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { SorobanAuthorizedInvocation, type SorobanAuthorizedInvocationWire } from "./soroban-authorized-invocation.js";
export interface HashIdPreimageSorobanAuthorizationWire {
    networkId: HashWire;
    nonce: bigint;
    signatureExpirationLedger: number;
    invocation: SorobanAuthorizedInvocationWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         Hash networkID;
 *         int64 nonce;
 *         uint32 signatureExpirationLedger;
 *         SorobanAuthorizedInvocation invocation;
 *     }
 * ```
 */
export declare class HashIdPreimageSorobanAuthorization extends XdrValue {
    readonly networkId: Hash;
    readonly nonce: bigint;
    readonly signatureExpirationLedger: number;
    readonly invocation: SorobanAuthorizedInvocation;
    static readonly schema: XdrType<HashIdPreimageSorobanAuthorizationWire>;
    constructor(input: {
        networkId: Hash | Uint8Array | string;
        nonce: bigint;
        signatureExpirationLedger: number;
        invocation: SorobanAuthorizedInvocation;
    });
    toXdrObject(): HashIdPreimageSorobanAuthorizationWire;
    static fromXdrObject(wire: HashIdPreimageSorobanAuthorizationWire): HashIdPreimageSorobanAuthorization;
}
