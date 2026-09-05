/**
 * Obtains the contract spec XDR from a contract's wasm binary.
 * @param wasm - The contract's wasm binary as a Uint8Array.
 * @returns The XDR bytes representing the contract spec.
 * @throws If the contract spec cannot be obtained from the provided wasm binary.
 */
export declare function specFromWasm(wasm: Uint8Array): Uint8Array;
