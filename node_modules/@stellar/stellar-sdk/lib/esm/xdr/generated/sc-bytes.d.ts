import { BytesValue } from "../values/bytes-value.js";
export type ScBytesWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque SCBytes<>;
 * ```
 */
export declare class ScBytes extends BytesValue<"ScBytes"> {
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").VarOpaqueSchema;
    static fromXdrObject(wire: Uint8Array): ScBytes;
}
