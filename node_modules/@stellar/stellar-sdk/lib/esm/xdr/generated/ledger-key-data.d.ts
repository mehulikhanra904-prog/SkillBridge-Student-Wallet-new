import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface LedgerKeyDataWire {
    accountId: PublicKeyWire;
    dataName: XdrString;
}
/**
 * ```xdr
 * struct
 *     {
 *         AccountID accountID;
 *         string64 dataName;
 *     }
 * ```
 */
export declare class LedgerKeyData extends XdrValue {
    readonly accountId: PublicKey;
    readonly dataName: XdrString;
    static readonly schema: XdrType<LedgerKeyDataWire>;
    constructor(input: {
        accountId: PublicKey;
        dataName: XdrString | string | Uint8Array;
    });
    toXdrObject(): LedgerKeyDataWire;
    static fromXdrObject(wire: LedgerKeyDataWire): LedgerKeyData;
}
