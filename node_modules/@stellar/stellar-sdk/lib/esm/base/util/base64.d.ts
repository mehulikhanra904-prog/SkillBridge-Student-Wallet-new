/**
 * Fast base64 to/from Uint8Array conversions.
 *
 * `uint8array-extras` implements these portably but its decoder runs a
 * per-byte JS callback through `Uint8Array.from`, which sits under every
 * `fromXdr` call, so decode with `atob` plus a preallocated `charCodeAt` loop
 * instead. The encoder keeps upstream's chunked-`btoa` shape (same chunk
 * size); the only change is `String.fromCharCode` in place of
 * `String.fromCodePoint`, safe because `atob`-domain bytes are all `<=` 0xff.
 */
/**
 * Decode a base64 string into bytes. Accepts base64url input (`-`/`_`) too.
 * @param base64 - the base64-encoded input
 * @returns the decoded bytes
 * @throws TypeError if the input is not a string
 * @throws if the input is not valid base64
 */
export declare function base64ToUint8Array(base64: string): Uint8Array;
/**
 * Encode bytes as a base64 string.
 * @param bytes - the bytes to encode
 * @returns the base64-encoded output
 * @throws TypeError if the input is not a Uint8Array
 */
export declare function uint8ArrayToBase64(bytes: Uint8Array): string;
