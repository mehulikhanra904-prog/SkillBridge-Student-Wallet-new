import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface Curve25519PublicWire {
    key: Uint8Array;
}
/**
 * ```xdr
 * struct Curve25519Public
 * {
 *     opaque key[32];
 * };
 * ```
 */
export declare class Curve25519Public extends XdrValue {
    readonly key: Uint8Array;
    static readonly schema: XdrType<Curve25519PublicWire>;
    constructor(input: {
        key: Uint8Array;
    });
    toXdrObject(): Curve25519PublicWire;
    static fromXdrObject(wire: Curve25519PublicWire): Curve25519Public;
}
