import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface HashIdPreimageOperationIdWire {
    sourceAccount: PublicKeyWire;
    seqNum: bigint;
    opNum: number;
}
/**
 * ```xdr
 * struct
 *     {
 *         AccountID sourceAccount;
 *         SequenceNumber seqNum;
 *         uint32 opNum;
 *     }
 * ```
 */
export declare class HashIdPreimageOperationId extends XdrValue {
    readonly sourceAccount: PublicKey;
    readonly seqNum: bigint;
    readonly opNum: number;
    static readonly schema: XdrType<HashIdPreimageOperationIdWire>;
    constructor(input: {
        sourceAccount: PublicKey;
        seqNum: bigint;
        opNum: number;
    });
    toXdrObject(): HashIdPreimageOperationIdWire;
    static fromXdrObject(wire: HashIdPreimageOperationIdWire): HashIdPreimageOperationId;
}
