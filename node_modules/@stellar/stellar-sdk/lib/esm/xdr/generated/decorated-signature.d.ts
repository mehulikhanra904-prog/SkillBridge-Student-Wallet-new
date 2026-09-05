import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SignatureHint, type SignatureHintWire } from "./signature-hint.js";
import { Signature, type SignatureWire } from "./signature.js";
export interface DecoratedSignatureWire {
    hint: SignatureHintWire;
    signature: SignatureWire;
}
/**
 * ```xdr
 * struct DecoratedSignature
 * {
 *     SignatureHint hint;  // last 4 bytes of the public key, used as a hint
 *     Signature signature; // actual signature
 * };
 * ```
 */
export declare class DecoratedSignature extends XdrValue {
    readonly hint: SignatureHint;
    readonly signature: Signature;
    static readonly schema: XdrType<DecoratedSignatureWire>;
    constructor(input: {
        hint: SignatureHint | Uint8Array | string;
        signature: Signature | Uint8Array | string;
    });
    toXdrObject(): DecoratedSignatureWire;
    static fromXdrObject(wire: DecoratedSignatureWire): DecoratedSignature;
}
