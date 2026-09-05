import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface LedgerKeyAccountWire {
    accountId: PublicKeyWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         AccountID accountID;
 *     }
 * ```
 */
export declare class LedgerKeyAccount extends XdrValue {
    readonly accountId: PublicKey;
    static readonly schema: XdrType<LedgerKeyAccountWire>;
    constructor(input: {
        accountId: PublicKey;
    });
    toXdrObject(): LedgerKeyAccountWire;
    static fromXdrObject(wire: LedgerKeyAccountWire): LedgerKeyAccount;
}
