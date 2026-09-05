import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
export interface MuxedEd25519AccountWire {
    id: bigint;
    ed25519: Uint256BytesWire;
}
/**
 * ```xdr
 * struct MuxedEd25519Account
 * {
 *     uint64 id;
 *     uint256 ed25519;
 * };
 * ```
 */
export declare class MuxedEd25519Account extends XdrValue {
    readonly id: bigint;
    readonly ed25519: Uint256Bytes;
    static readonly schema: XdrType<MuxedEd25519AccountWire>;
    constructor(input: {
        id: bigint;
        ed25519: Uint256Bytes | Uint8Array | string;
    });
    toXdrObject(): MuxedEd25519AccountWire;
    static fromXdrObject(wire: MuxedEd25519AccountWire): MuxedEd25519Account;
}
