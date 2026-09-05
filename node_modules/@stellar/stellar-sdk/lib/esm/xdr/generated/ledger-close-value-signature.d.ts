import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { Signature, type SignatureWire } from "./signature.js";
export interface LedgerCloseValueSignatureWire {
    nodeId: PublicKeyWire;
    signature: SignatureWire;
}
/**
 * ```xdr
 * struct LedgerCloseValueSignature
 * {
 *     NodeID nodeID;       // which node introduced the value
 *     Signature signature; // nodeID's signature
 * };
 * ```
 */
export declare class LedgerCloseValueSignature extends XdrValue {
    readonly nodeId: PublicKey;
    readonly signature: Signature;
    static readonly schema: XdrType<LedgerCloseValueSignatureWire>;
    constructor(input: {
        nodeId: PublicKey;
        signature: Signature | Uint8Array | string;
    });
    toXdrObject(): LedgerCloseValueSignatureWire;
    static fromXdrObject(wire: LedgerCloseValueSignatureWire): LedgerCloseValueSignature;
}
