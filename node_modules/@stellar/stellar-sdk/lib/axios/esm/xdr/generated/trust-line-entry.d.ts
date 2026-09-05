import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { TrustLineAsset, type TrustLineAssetWire } from "./trust-line-asset.js";
import { TrustLineEntryExt, type TrustLineEntryExtWire } from "./trust-line-entry-ext.js";
export interface TrustLineEntryWire {
    accountId: PublicKeyWire;
    asset: TrustLineAssetWire;
    balance: bigint;
    limit: bigint;
    flags: number;
    ext: TrustLineEntryExtWire;
}
/**
 * ```xdr
 * struct TrustLineEntry
 * {
 *     AccountID accountID;  // account this trustline belongs to
 *     TrustLineAsset asset; // type of asset (with issuer)
 *     int64 balance;        // how much of this asset the user has.
 *                           // Asset defines the unit for this;
 *
 *     int64 limit;  // balance cannot be above this
 *     uint32 flags; // see TrustLineFlags
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         struct
 *         {
 *             Liabilities liabilities;
 *
 *             union switch (int v)
 *             {
 *             case 0:
 *                 void;
 *             case 2:
 *                 TrustLineEntryExtensionV2 v2;
 *             }
 *             ext;
 *         } v1;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class TrustLineEntry extends XdrValue {
    readonly accountId: PublicKey;
    readonly asset: TrustLineAsset;
    readonly balance: bigint;
    readonly limit: bigint;
    readonly flags: number;
    readonly ext: TrustLineEntryExt;
    static readonly schema: XdrType<TrustLineEntryWire>;
    constructor(input: {
        accountId: PublicKey;
        asset: TrustLineAsset;
        balance: bigint;
        limit: bigint;
        flags: number;
        ext: TrustLineEntryExt;
    });
    toXdrObject(): TrustLineEntryWire;
    static fromXdrObject(wire: TrustLineEntryWire): TrustLineEntry;
}
