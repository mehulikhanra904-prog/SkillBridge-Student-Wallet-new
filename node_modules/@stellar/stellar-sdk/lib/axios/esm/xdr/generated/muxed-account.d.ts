import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
import { MuxedAccountMed25519, type MuxedAccountMed25519Wire } from "./muxed-account-med25519.js";
export type MuxedAccountWire = {
    type: 0;
    ed25519: Uint256BytesWire;
} | {
    type: 256;
    med25519: MuxedAccountMed25519Wire;
};
export type MuxedAccountVariantName = "keyTypeEd25519" | "keyTypeMuxedEd25519";
/**
 * ```xdr
 * union MuxedAccount switch (CryptoKeyType type)
 * {
 * case KEY_TYPE_ED25519:
 *     uint256 ed25519;
 * case KEY_TYPE_MUXED_ED25519:
 *     struct
 *     {
 *         uint64 id;
 *         uint256 ed25519;
 *     } med25519;
 * };
 * ```
 */
declare abstract class MuxedAccountBase extends XdrValue {
    abstract readonly type: MuxedAccountVariantName;
    constructor();
    static readonly schema: XdrType<MuxedAccountWire>;
    static keyTypeEd25519(ed25519: Uint256Bytes | Uint8Array | string): MuxedAccountEd25519;
    static keyTypeMuxedEd25519(med25519: MuxedAccountMed25519): MuxedAccountMuxedEd25519;
    static fromXdrObject(wire: MuxedAccountWire): MuxedAccount;
    /**
     * Type guard narrowing an unknown value to a concrete MuxedAccount variant.
     * Use this instead of `instanceof MuxedAccount`: the exported `MuxedAccount` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `MuxedAccount.is(x)` narrows to the union.
     */
    static is(value: unknown): value is MuxedAccount;
    abstract toXdrObject(): MuxedAccountWire;
}
export declare class MuxedAccountEd25519 extends MuxedAccountBase {
    readonly type: "keyTypeEd25519";
    readonly ed25519: Uint256Bytes;
    constructor(ed25519: Uint256Bytes | Uint8Array | string);
    get value(): Uint256Bytes;
    toXdrObject(): Extract<MuxedAccountWire, {
        type: 0;
    }>;
}
export declare class MuxedAccountMuxedEd25519 extends MuxedAccountBase {
    readonly type: "keyTypeMuxedEd25519";
    readonly med25519: MuxedAccountMed25519;
    constructor(med25519: MuxedAccountMed25519);
    get value(): MuxedAccountMed25519;
    toXdrObject(): Extract<MuxedAccountWire, {
        type: 256;
    }>;
}
export type MuxedAccount = MuxedAccountEd25519 | MuxedAccountMuxedEd25519;
export declare const MuxedAccount: typeof MuxedAccountBase;
export {};
