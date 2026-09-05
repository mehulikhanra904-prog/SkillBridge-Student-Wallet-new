import { AccountId, DecoratedSignature, MuxedAccount, PublicKey, Signature } from "../xdr/index.js";
/**
 * `Keypair` represents public (and secret) keys of the account.
 *
 * Currently `Keypair` only supports ed25519 but in a future this class can be abstraction layer for other
 * public-key signature systems.
 *
 * Use more convenient methods to create `Keypair` object:
 * * `{@link Keypair.fromPublicKey}`
 * * `{@link Keypair.fromSecret}`
 * * `{@link Keypair.random}`
 */
export declare class Keypair {
    readonly type: "ed25519";
    private _publicKey;
    private _secretSeed?;
    private _secretKey?;
    /**
     * @param keys - at least one of keys must be provided.
     *   - `type`: public-key signature system name (currently only `ed25519` keys are supported)
     *   - `publicKey`: raw public key
     *   - `secretKey`: raw secret key (32-byte secret seed in ed25519)
     */
    constructor(keys: {
        type: "ed25519";
        secretKey: Uint8Array | string;
        publicKey?: Uint8Array | string;
    } | {
        type: "ed25519";
        publicKey: Uint8Array | string;
    });
    /**
     * Creates a new `Keypair` instance from secret. This can either be secret key or secret seed depending
     * on underlying public-key signature system. Currently `Keypair` only supports ed25519.
     * @param secret - secret key (ex. `SDAK....`)
     */
    static fromSecret(secret: string): Keypair;
    /**
     * Creates a new `Keypair` object from ed25519 secret key seed raw bytes.
     *
     * @param rawSeed - raw 32-byte ed25519 secret key seed
     */
    static fromRawEd25519Seed(rawSeed: Uint8Array): Keypair;
    /**
     * Returns `Keypair` object representing network master key.
     * @param networkPassphrase - passphrase of the target stellar network (e.g. "Public Global Stellar Network ; September 2015")
     */
    static master(networkPassphrase: string): Keypair;
    /**
     * Creates a new `Keypair` object from public key.
     * @param publicKey - public key (ex. `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`)
     */
    static fromPublicKey(publicKey: string): Keypair;
    /**
     * Create a random `Keypair` object.
     */
    static random(): Keypair;
    /** Returns this public key as an xdr.AccountId. */
    xdrAccountId(): AccountId;
    /** Returns this public key as an xdr.PublicKey. */
    xdrPublicKey(): PublicKey;
    /**
     * Creates a {@link xdr.MuxedAccount} object from the public key.
     *
     * You will get a different type of muxed account depending on whether or not
     * you pass an ID.
     *
     * @param id - stringified integer indicating the underlying muxed
     *     ID of the new account object
     */
    xdrMuxedAccount(id?: string): MuxedAccount;
    /**
     * Returns raw public key bytes
     */
    rawPublicKey(): Uint8Array;
    /**
     * Returns the signature hint for this keypair.
     * The hint is the last 4 bytes of the account ID XDR representation.
     */
    signatureHint(): Uint8Array;
    /**
     * Returns public key associated with this `Keypair` object.
     */
    publicKey(): string;
    /**
     * Returns secret key associated with this `Keypair` object.
     *
     * The secret key is encoded in Stellar format (e.g., `SDAK....`).
     *
     * @throws if no secret key is available
     */
    secret(): string;
    /**
     * Returns raw secret key bytes.
     *
     * @throws if no secret seed is available
     */
    rawSecretKey(): Uint8Array;
    /**
     * Returns `true` if this `Keypair` object contains secret key and can sign.
     */
    canSign(): boolean;
    /**
     * Signs data.
     *
     * @param data - data to sign
     * @throws if no secret key is available
     */
    sign(data: Uint8Array): Uint8Array;
    /**
     * Verifies if `signature` for `data` is valid.
     *
     * A well-formed signature that doesn't match returns `false`; an argument of
     * an unaccepted type throws, because reporting it as an invalid signature
     * would be indistinguishable from a forgery.
     *
     * @param data - signed data
     * @param signature - signature to verify, either raw bytes or the
     *    `xdr.Signature` wrapper that `DecoratedSignature.signature` holds
     * @throws a `TypeError` if `data` is not a `Uint8Array`, or if `signature` is
     *    neither a `Uint8Array` nor an `xdr.Signature` — a hex/base64 string, a
     *    plain array of byte values, or the `xdr.DecoratedSignature` that
     *    `tx.signatures[0]` holds is rejected rather than reported as an invalid
     *    signature.
     */
    verify(data: Uint8Array, signature: Uint8Array | Signature): boolean;
    /**
     * Signs an arbitrary message per SEP-53.
     *
     * The message is UTF-8 encoded (if a string), prefixed with the fixed
     * `"Stellar Signed Message:\n"` marker, hashed with SHA-256, and that hash is
     * signed with this keypair's ed25519 secret key.
     *
     * @param message - the message to sign (a UTF-8 string or raw bytes)
     * @returns the 64-byte ed25519 signature
     * @throws an `Error` if no secret key is available, or a `TypeError` if
     *    `message` is neither a string nor a `Uint8Array`
     * @see https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0053.md
     */
    signMessage(message: string | Uint8Array): Uint8Array;
    /**
     * Verifies a SEP-53 signed message against this keypair's public key.
     *
     * @param message - the original message (a UTF-8 string or raw bytes)
     * @param signature - the 64-byte signature to verify, either raw bytes or an
     *    `xdr.Signature` wrapper
     * @returns `true` if `signature` is valid for `message` and this key
     * @throws a `TypeError` if `message` is neither a string nor a `Uint8Array`,
     *    or if `signature` is neither a `Uint8Array` nor an `xdr.Signature` (e.g.
     *    a hex/base64 signature string): an unaccepted type is rejected rather
     *    than reported as an invalid signature.
     * @see https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0053.md
     */
    verifyMessage(message: string | Uint8Array, signature: Uint8Array | Signature): boolean;
    /**
     * Computes the SEP-53 message hash:
     * `SHA-256("Stellar Signed Message:\n" + message)`.
     */
    private _hashMessage;
    /**
     * Returns the decorated signature (hint+sig) for arbitrary data.
     *
     * The returned structure can be added directly to a transaction envelope.
     *
     * @param data - arbitrary data to sign
     *
     * @see TransactionBase.addDecoratedSignature
     */
    signDecorated(data: Uint8Array): DecoratedSignature;
    /**
     * Returns the raw decorated signature (hint+sig) for a signed payload signer.
     *
     *  The hint is defined as the last 4 bytes of the signer key XORed with last
     *  4 bytes of the payload (zero-left-padded if necessary).
     *
     * @param data - data to both sign and treat as the payload
     *
     * @see https://github.com/stellar/stellar-protocol/blob/master/core/cap-0040.md#signature-hint
     * @see TransactionBase.addDecoratedSignature
     */
    signPayloadDecorated(data: Uint8Array): DecoratedSignature;
}
