import { SignerKey as XdrSignerKey } from "../xdr/index.js";
/**
 * A container class with helpers to convert between signer keys
 * (`xdr.SignerKey`) and {@link StrKey}s.
 *
 * It's primarily used for manipulating the `extraSigners` precondition on a
 * {@link Transaction}.
 *
 * @see {@link TransactionBuilder.setExtraSigners}
 */
export declare class SignerKey {
    /**
     * Decodes a StrKey address into an xdr.SignerKey instance.
     *
     * Only ED25519 public keys (G...), pre-auth transactions (T...), hashes
     * (H...), and signed payloads (P...) can be signer keys.
     *
     * @param address - a StrKey-encoded signer address
     */
    static decodeAddress(address: string): XdrSignerKey;
    /**
     * Encodes a signer key into its StrKey equivalent.
     *
     * @param signerKey - the signer
     */
    static encodeSignerKey(signerKey: XdrSignerKey): string;
}
