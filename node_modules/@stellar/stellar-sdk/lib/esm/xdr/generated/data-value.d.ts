import { BytesValue } from "../values/bytes-value.js";
export type DataValueWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque DataValue<64>;
 * ```
 */
export declare class DataValue extends BytesValue<"DataValue"> {
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").VarOpaqueSchema;
    static fromXdrObject(wire: Uint8Array): DataValue;
}
