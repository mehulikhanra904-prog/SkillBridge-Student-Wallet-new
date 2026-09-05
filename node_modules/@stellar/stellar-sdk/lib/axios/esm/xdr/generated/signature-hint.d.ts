import { BytesValue } from "../values/bytes-value.js";
export type SignatureHintWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque SignatureHint[4];
 * ```
 */
export declare class SignatureHint extends BytesValue<"SignatureHint"> {
    static readonly byteLength = 4;
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").OpaqueSchema;
    static fromXdrObject(wire: Uint8Array): SignatureHint;
}
