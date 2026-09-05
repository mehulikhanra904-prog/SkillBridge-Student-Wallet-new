import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimableBalanceId, type ClaimableBalanceIdWire } from "./claimable-balance-id.js";
export interface ClawbackClaimableBalanceOpWire {
    balanceId: ClaimableBalanceIdWire;
}
/**
 * ```xdr
 * struct ClawbackClaimableBalanceOp
 * {
 *     ClaimableBalanceID balanceID;
 * };
 * ```
 */
export declare class ClawbackClaimableBalanceOp extends XdrValue {
    readonly balanceId: ClaimableBalanceId;
    static readonly schema: XdrType<ClawbackClaimableBalanceOpWire>;
    constructor(input: {
        balanceId: ClaimableBalanceId;
    });
    toXdrObject(): ClawbackClaimableBalanceOpWire;
    static fromXdrObject(wire: ClawbackClaimableBalanceOpWire): ClawbackClaimableBalanceOp;
}
