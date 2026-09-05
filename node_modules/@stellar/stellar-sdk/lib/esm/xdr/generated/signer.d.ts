import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SignerKey, type SignerKeyWire } from "./signer-key.js";
export interface SignerWire {
    key: SignerKeyWire;
    weight: number;
}
/**
 * ```xdr
 * struct Signer
 * {
 *     SignerKey key;
 *     uint32 weight; // really only need 1 byte
 * };
 * ```
 */
export declare class Signer extends XdrValue {
    readonly key: SignerKey;
    readonly weight: number;
    static readonly schema: XdrType<SignerWire>;
    constructor(input: {
        key: SignerKey;
        weight: number;
    });
    toXdrObject(): SignerWire;
    static fromXdrObject(wire: SignerWire): Signer;
}
