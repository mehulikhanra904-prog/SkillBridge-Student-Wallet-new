import { BytesValue } from "../values/bytes-value.js";
export type HashWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque Hash[32];
 * ```
 */
export declare class Hash extends BytesValue<"Hash"> {
    static readonly byteLength = 32;
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").OpaqueSchema;
    static fromXdrObject(wire: Uint8Array): Hash;
}
