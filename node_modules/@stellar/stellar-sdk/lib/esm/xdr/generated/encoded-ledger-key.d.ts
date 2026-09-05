import { BytesValue } from "../values/bytes-value.js";
export type EncodedLedgerKeyWire = Uint8Array;
/**
 * ```xdr
 * typedef opaque EncodedLedgerKey<>;
 * ```
 */
export declare class EncodedLedgerKey extends BytesValue<"EncodedLedgerKey"> {
    static readonly encoding: "hex";
    static readonly schema: import("@stellar/js-xdr").VarOpaqueSchema;
    static fromXdrObject(wire: Uint8Array): EncodedLedgerKey;
}
