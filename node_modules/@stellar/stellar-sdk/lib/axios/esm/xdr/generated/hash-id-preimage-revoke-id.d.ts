import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { PoolId, type PoolIdWire } from "./pool-id.js";
import { Asset, type AssetWire } from "./asset.js";
export interface HashIdPreimageRevokeIdWire {
    sourceAccount: PublicKeyWire;
    seqNum: bigint;
    opNum: number;
    liquidityPoolId: PoolIdWire;
    asset: AssetWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         AccountID sourceAccount;
 *         SequenceNumber seqNum;
 *         uint32 opNum;
 *         PoolID liquidityPoolID;
 *         Asset asset;
 *     }
 * ```
 */
export declare class HashIdPreimageRevokeId extends XdrValue {
    readonly sourceAccount: PublicKey;
    readonly seqNum: bigint;
    readonly opNum: number;
    readonly liquidityPoolId: PoolId;
    readonly asset: Asset;
    static readonly schema: XdrType<HashIdPreimageRevokeIdWire>;
    constructor(input: {
        sourceAccount: PublicKey;
        seqNum: bigint;
        opNum: number;
        liquidityPoolId: PoolId;
        asset: Asset;
    });
    toXdrObject(): HashIdPreimageRevokeIdWire;
    static fromXdrObject(wire: HashIdPreimageRevokeIdWire): HashIdPreimageRevokeId;
}
