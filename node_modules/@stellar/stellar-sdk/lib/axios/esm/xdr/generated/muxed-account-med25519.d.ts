import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
export interface MuxedAccountMed25519Wire {
    id: bigint;
    ed25519: Uint256BytesWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         uint64 id;
 *         uint256 ed25519;
 *     }
 * ```
 */
export declare class MuxedAccountMed25519 extends XdrValue {
    readonly id: bigint;
    readonly ed25519: Uint256Bytes;
    static readonly schema: XdrType<MuxedAccountMed25519Wire>;
    constructor(input: {
        id: bigint;
        ed25519: Uint256Bytes | Uint8Array | string;
    });
    toXdrObject(): MuxedAccountMed25519Wire;
    static fromXdrObject(wire: MuxedAccountMed25519Wire): MuxedAccountMed25519;
}
