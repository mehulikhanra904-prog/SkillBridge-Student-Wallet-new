import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { EncodedLedgerKey, type EncodedLedgerKeyWire } from "./encoded-ledger-key.js";
export interface FrozenLedgerKeysWire {
    keys: EncodedLedgerKeyWire[];
}
/**
 * ```xdr
 * struct FrozenLedgerKeys {
 *     EncodedLedgerKey keys<>;
 * };
 * ```
 */
export declare class FrozenLedgerKeys extends XdrValue {
    readonly keys: EncodedLedgerKey[];
    static readonly schema: XdrType<FrozenLedgerKeysWire>;
    constructor(input: {
        keys: (EncodedLedgerKey | Uint8Array | string)[];
    });
    toXdrObject(): FrozenLedgerKeysWire;
    static fromXdrObject(wire: FrozenLedgerKeysWire): FrozenLedgerKeys;
}
