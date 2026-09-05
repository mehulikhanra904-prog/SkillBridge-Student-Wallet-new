import { BytesValue } from "../values/bytes-value.js";
export type EncryptedBodyWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque EncryptedBody<64000>;
 * ```
 */
export declare class EncryptedBody extends BytesValue<"EncryptedBody"> {
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").VarOpaqueSchema;
    static fromXdrObject(wire: Uint8Array): EncryptedBody;
}
