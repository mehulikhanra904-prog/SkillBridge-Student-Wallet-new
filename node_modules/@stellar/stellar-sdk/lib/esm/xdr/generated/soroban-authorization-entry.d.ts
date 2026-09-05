import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanCredentials, type SorobanCredentialsWire } from "./soroban-credentials.js";
import { SorobanAuthorizedInvocation, type SorobanAuthorizedInvocationWire } from "./soroban-authorized-invocation.js";
export interface SorobanAuthorizationEntryWire {
    credentials: SorobanCredentialsWire;
    rootInvocation: SorobanAuthorizedInvocationWire;
}
/**
 * ```xdr
 * struct SorobanAuthorizationEntry
 * {
 *     SorobanCredentials credentials;
 *     SorobanAuthorizedInvocation rootInvocation;
 * };
 * ```
 */
export declare class SorobanAuthorizationEntry extends XdrValue {
    readonly credentials: SorobanCredentials;
    readonly rootInvocation: SorobanAuthorizedInvocation;
    static readonly schema: XdrType<SorobanAuthorizationEntryWire>;
    constructor(input: {
        credentials: SorobanCredentials;
        rootInvocation: SorobanAuthorizedInvocation;
    });
    toXdrObject(): SorobanAuthorizationEntryWire;
    static fromXdrObject(wire: SorobanAuthorizationEntryWire): SorobanAuthorizationEntry;
}
