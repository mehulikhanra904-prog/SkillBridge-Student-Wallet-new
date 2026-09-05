import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ScNonceKeyWire {
    nonce: bigint;
}
/**
 * ```xdr
 * struct SCNonceKey {
 *     int64 nonce;
 * };
 * ```
 */
export declare class ScNonceKey extends XdrValue {
    readonly nonce: bigint;
    static readonly schema: XdrType<ScNonceKeyWire>;
    constructor(input: {
        nonce: bigint;
    });
    toXdrObject(): ScNonceKeyWire;
    static fromXdrObject(wire: ScNonceKeyWire): ScNonceKey;
}
