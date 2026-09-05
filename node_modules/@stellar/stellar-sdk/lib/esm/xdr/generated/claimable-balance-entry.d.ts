import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimableBalanceId, type ClaimableBalanceIdWire } from "./claimable-balance-id.js";
import { Claimant, type ClaimantWire } from "./claimant.js";
import { Asset, type AssetWire } from "./asset.js";
import { ClaimableBalanceEntryExt, type ClaimableBalanceEntryExtWire } from "./claimable-balance-entry-ext.js";
export interface ClaimableBalanceEntryWire {
    balanceId: ClaimableBalanceIdWire;
    claimants: ClaimantWire[];
    asset: AssetWire;
    amount: bigint;
    ext: ClaimableBalanceEntryExtWire;
}
/**
 * ```xdr
 * struct ClaimableBalanceEntry
 * {
 *     // Unique identifier for this ClaimableBalanceEntry
 *     ClaimableBalanceID balanceID;
 *
 *     // List of claimants with associated predicate
 *     Claimant claimants<10>;
 *
 *     // Any asset including native
 *     Asset asset;
 *
 *     // Amount of asset
 *     int64 amount;
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         ClaimableBalanceEntryExtensionV1 v1;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class ClaimableBalanceEntry extends XdrValue {
    readonly balanceId: ClaimableBalanceId;
    readonly claimants: Claimant[];
    readonly asset: Asset;
    readonly amount: bigint;
    readonly ext: ClaimableBalanceEntryExt;
    static readonly schema: XdrType<ClaimableBalanceEntryWire>;
    constructor(input: {
        balanceId: ClaimableBalanceId;
        claimants: Claimant[];
        asset: Asset;
        amount: bigint;
        ext: ClaimableBalanceEntryExt;
    });
    toXdrObject(): ClaimableBalanceEntryWire;
    static fromXdrObject(wire: ClaimableBalanceEntryWire): ClaimableBalanceEntry;
}
