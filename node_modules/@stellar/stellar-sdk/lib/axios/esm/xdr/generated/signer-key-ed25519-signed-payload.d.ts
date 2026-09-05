import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
export interface SignerKeyEd25519SignedPayloadWire {
    ed25519: Uint256BytesWire;
    payload: Uint8Array;
}
/**
 * ```xdr
 * struct
 *     {
 *         /* Public key that must sign the payload. *\/
 *         uint256 ed25519;
 *         /* Payload to be raw signed by ed25519. *\/
 *         opaque payload<64>;
 *     }
 * ```
 */
export declare class SignerKeyEd25519SignedPayload extends XdrValue {
    readonly ed25519: Uint256Bytes;
    readonly payload: Uint8Array;
    static readonly schema: XdrType<SignerKeyEd25519SignedPayloadWire>;
    constructor(input: {
        ed25519: Uint256Bytes | Uint8Array | string;
        payload: Uint8Array;
    });
    toXdrObject(): SignerKeyEd25519SignedPayloadWire;
    static fromXdrObject(wire: SignerKeyEd25519SignedPayloadWire): SignerKeyEd25519SignedPayload;
}
