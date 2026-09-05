import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimableBalanceId, type ClaimableBalanceIdWire } from "./claimable-balance-id.js";
export interface LedgerKeyClaimableBalanceWire {
    balanceId: ClaimableBalanceIdWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         ClaimableBalanceID balanceID;
 *     }
 * ```
 */
export declare class LedgerKeyClaimableBalance extends XdrValue {
    readonly balanceId: ClaimableBalanceId;
    static readonly schema: XdrType<LedgerKeyClaimableBalanceWire>;
    constructor(input: {
        balanceId: ClaimableBalanceId;
    });
    toXdrObject(): LedgerKeyClaimableBalanceWire;
    static fromXdrObject(wire: LedgerKeyClaimableBalanceWire): LedgerKeyClaimableBalance;
}
