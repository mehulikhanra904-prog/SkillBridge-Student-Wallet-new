import { BytesValue } from "../values/bytes-value.js";
export type Uint256BytesWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque uint256[32];
 * ```
 */
export declare class Uint256Bytes extends BytesValue<"Uint256Bytes"> {
    static readonly byteLength = 32;
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").OpaqueSchema;
    static fromXdrObject(wire: Uint8Array): Uint256Bytes;
}
