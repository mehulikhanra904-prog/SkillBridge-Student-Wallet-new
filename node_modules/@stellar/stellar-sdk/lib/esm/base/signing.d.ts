/**
 * Derives an Ed25519 public key from a secret key.
 *
 * @param secretKey - the raw Ed25519 secret key
 */
export declare function generate(secretKey: Uint8Array): Uint8Array;
/**
 * Signs data using an Ed25519 secret key.
 *
 * @param data - the data to sign
 * @param rawSecret - the raw Ed25519 secret key
 */
export declare function sign(data: Uint8Array, rawSecret: Uint8Array): Uint8Array;
/**
 * Verifies an Ed25519 signature against the given data and public key.
 *
 * @param data - the original signed data
 * @param signature - the signature to verify
 * @param rawPublicKey - the raw Ed25519 public key
 */
export declare function verify(data: Uint8Array, signature: Uint8Array, rawPublicKey: Uint8Array): boolean;
