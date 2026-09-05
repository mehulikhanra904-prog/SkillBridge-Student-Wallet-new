import { BytesValue } from "../values/bytes-value.js";
export type PoolIdWire = Uint8Array;
/**
 * ```xdr
 * typedef Hash PoolID;
 * ```
 */
export declare class PoolId extends BytesValue<"PoolId"> {
    static readonly byteLength = 32;
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").OpaqueSchema;
    static fromXdrObject(wire: Uint8Array): PoolId;
}
