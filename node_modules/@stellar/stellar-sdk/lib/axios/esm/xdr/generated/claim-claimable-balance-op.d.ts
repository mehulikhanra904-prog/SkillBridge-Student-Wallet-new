import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimableBalanceId, type ClaimableBalanceIdWire } from "./claimable-balance-id.js";
export interface ClaimClaimableBalanceOpWire {
    balanceId: ClaimableBalanceIdWire;
}
/**
 * ```xdr
 * struct ClaimClaimableBalanceOp
 * {
 *     ClaimableBalanceID balanceID;
 * };
 * ```
 */
export declare class ClaimClaimableBalanceOp extends XdrValue {
    readonly balanceId: ClaimableBalanceId;
    static readonly schema: XdrType<ClaimClaimableBalanceOpWire>;
    constructor(input: {
        balanceId: ClaimableBalanceId;
    });
    toXdrObject(): ClaimClaimableBalanceOpWire;
    static fromXdrObject(wire: ClaimClaimableBalanceOpWire): ClaimClaimableBalanceOp;
}
