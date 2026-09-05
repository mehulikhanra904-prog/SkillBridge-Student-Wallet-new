import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Curve25519Public, type Curve25519PublicWire } from "./curve25519-public.js";
import { Signature, type SignatureWire } from "./signature.js";
export interface AuthCertWire {
    pubkey: Curve25519PublicWire;
    expiration: bigint;
    sig: SignatureWire;
}
/**
 * ```xdr
 * struct AuthCert
 * {
 *     Curve25519Public pubkey;
 *     uint64 expiration;
 *     Signature sig;
 * };
 * ```
 */
export declare class AuthCert extends XdrValue {
    readonly pubkey: Curve25519Public;
    readonly expiration: bigint;
    readonly sig: Signature;
    static readonly schema: XdrType<AuthCertWire>;
    constructor(input: {
        pubkey: Curve25519Public;
        expiration: bigint;
        sig: Signature | Uint8Array | string;
    });
    toXdrObject(): AuthCertWire;
    static fromXdrObject(wire: AuthCertWire): AuthCert;
}
