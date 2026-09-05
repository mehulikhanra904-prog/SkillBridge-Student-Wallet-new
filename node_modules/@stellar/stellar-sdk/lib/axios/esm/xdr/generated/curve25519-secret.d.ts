import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface Curve25519SecretWire {
    key: Uint8Array;
}
/**
 * ```xdr
 * struct Curve25519Secret
 * {
 *     opaque key[32];
 * };
 * ```
 */
export declare class Curve25519Secret extends XdrValue {
    readonly key: Uint8Array;
    static readonly schema: XdrType<Curve25519SecretWire>;
    constructor(input: {
        key: Uint8Array;
    });
    toXdrObject(): Curve25519SecretWire;
    static fromXdrObject(wire: Curve25519SecretWire): Curve25519Secret;
}
