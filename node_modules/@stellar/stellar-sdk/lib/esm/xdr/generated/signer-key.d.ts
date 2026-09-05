import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
import { SignerKeyEd25519SignedPayload, type SignerKeyEd25519SignedPayloadWire } from "./signer-key-ed25519-signed-payload.js";
export type SignerKeyWire = {
    type: 0;
    ed25519: Uint256BytesWire;
} | {
    type: 1;
    preAuthTx: Uint256BytesWire;
} | {
    type: 2;
    hashX: Uint256BytesWire;
} | {
    type: 3;
    ed25519SignedPayload: SignerKeyEd25519SignedPayloadWire;
};
export type SignerKeyVariantName = "signerKeyTypeEd25519" | "signerKeyTypePreAuthTx" | "signerKeyTypeHashX" | "signerKeyTypeEd25519SignedPayload";
/**
 * ```xdr
 * union SignerKey switch (SignerKeyType type)
 * {
 * case SIGNER_KEY_TYPE_ED25519:
 *     uint256 ed25519;
 * case SIGNER_KEY_TYPE_PRE_AUTH_TX:
 *     /* SHA-256 Hash of TransactionSignaturePayload structure *\/
 *     uint256 preAuthTx;
 * case SIGNER_KEY_TYPE_HASH_X:
 *     /* Hash of random 256 bit preimage X *\/
 *     uint256 hashX;
 * case SIGNER_KEY_TYPE_ED25519_SIGNED_PAYLOAD:
 *     struct
 *     {
 *         /* Public key that must sign the payload. *\/
 *         uint256 ed25519;
 *         /* Payload to be raw signed by ed25519. *\/
 *         opaque payload<64>;
 *     } ed25519SignedPayload;
 * };
 * ```
 */
declare abstract class SignerKeyBase extends XdrValue {
    abstract readonly type: SignerKeyVariantName;
    constructor();
    static readonly schema: XdrType<SignerKeyWire>;
    static signerKeyTypeEd25519(ed25519: Uint256Bytes | Uint8Array | string): SignerKeyEd25519;
    static signerKeyTypePreAuthTx(preAuthTx: Uint256Bytes | Uint8Array | string): SignerKeyPreAuthTx;
    static signerKeyTypeHashX(hashX: Uint256Bytes | Uint8Array | string): SignerKeyHashX;
    static signerKeyTypeEd25519SignedPayload(ed25519SignedPayload: SignerKeyEd25519SignedPayload): SignerKeyEd25519SignedPayloadArm;
    static fromXdrObject(wire: SignerKeyWire): SignerKey;
    /**
     * Type guard narrowing an unknown value to a concrete SignerKey variant.
     * Use this instead of `instanceof SignerKey`: the exported `SignerKey` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `SignerKey.is(x)` narrows to the union.
     */
    static is(value: unknown): value is SignerKey;
    abstract toXdrObject(): SignerKeyWire;
}
export declare class SignerKeyEd25519 extends SignerKeyBase {
    readonly type: "signerKeyTypeEd25519";
    readonly ed25519: Uint256Bytes;
    constructor(ed25519: Uint256Bytes | Uint8Array | string);
    get value(): Uint256Bytes;
    toXdrObject(): Extract<SignerKeyWire, {
        type: 0;
    }>;
}
export declare class SignerKeyPreAuthTx extends SignerKeyBase {
    readonly type: "signerKeyTypePreAuthTx";
    readonly preAuthTx: Uint256Bytes;
    constructor(preAuthTx: Uint256Bytes | Uint8Array | string);
    get value(): Uint256Bytes;
    toXdrObject(): Extract<SignerKeyWire, {
        type: 1;
    }>;
}
export declare class SignerKeyHashX extends SignerKeyBase {
    readonly type: "signerKeyTypeHashX";
    readonly hashX: Uint256Bytes;
    constructor(hashX: Uint256Bytes | Uint8Array | string);
    get value(): Uint256Bytes;
    toXdrObject(): Extract<SignerKeyWire, {
        type: 2;
    }>;
}
export declare class SignerKeyEd25519SignedPayloadArm extends SignerKeyBase {
    readonly type: "signerKeyTypeEd25519SignedPayload";
    readonly ed25519SignedPayload: SignerKeyEd25519SignedPayload;
    constructor(ed25519SignedPayload: SignerKeyEd25519SignedPayload);
    get value(): SignerKeyEd25519SignedPayload;
    toXdrObject(): Extract<SignerKeyWire, {
        type: 3;
    }>;
}
export type SignerKey = SignerKeyEd25519 | SignerKeyPreAuthTx | SignerKeyHashX | SignerKeyEd25519SignedPayloadArm;
export declare const SignerKey: typeof SignerKeyBase;
export {};
