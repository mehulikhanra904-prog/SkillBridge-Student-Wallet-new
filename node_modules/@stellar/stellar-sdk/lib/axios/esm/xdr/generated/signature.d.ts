import { BytesValue } from "../values/bytes-value.js";
export type SignatureWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque Signature<64>;
 * ```
 */
export declare class Signature extends BytesValue<"Signature"> {
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").VarOpaqueSchema;
    static fromXdrObject(wire: Uint8Array): Signature;
}
