import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Asset, type AssetWire } from "./asset.js";
import { Claimant, type ClaimantWire } from "./claimant.js";
export interface CreateClaimableBalanceOpWire {
    asset: AssetWire;
    amount: bigint;
    claimants: ClaimantWire[];
}
/**
 * ```xdr
 * struct CreateClaimableBalanceOp
 * {
 *     Asset asset;
 *     int64 amount;
 *     Claimant claimants<10>;
 * };
 * ```
 */
export declare class CreateClaimableBalanceOp extends XdrValue {
    readonly asset: Asset;
    readonly amount: bigint;
    readonly claimants: Claimant[];
    static readonly schema: XdrType<CreateClaimableBalanceOpWire>;
    constructor(input: {
        asset: Asset;
        amount: bigint;
        claimants: Claimant[];
    });
    toXdrObject(): CreateClaimableBalanceOpWire;
    static fromXdrObject(wire: CreateClaimableBalanceOpWire): CreateClaimableBalanceOp;
}
