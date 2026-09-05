import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { EncodedLedgerKey, type EncodedLedgerKeyWire } from "./encoded-ledger-key.js";
export interface FrozenLedgerKeysDeltaWire {
    keysToFreeze: EncodedLedgerKeyWire[];
    keysToUnfreeze: EncodedLedgerKeyWire[];
}
/**
 * ```xdr
 * struct FrozenLedgerKeysDelta {
 *     EncodedLedgerKey keysToFreeze<>;
 *     EncodedLedgerKey keysToUnfreeze<>;
 * };
 * ```
 */
export declare class FrozenLedgerKeysDelta extends XdrValue {
    readonly keysToFreeze: EncodedLedgerKey[];
    readonly keysToUnfreeze: EncodedLedgerKey[];
    static readonly schema: XdrType<FrozenLedgerKeysDeltaWire>;
    constructor(input: {
        keysToFreeze: (EncodedLedgerKey | Uint8Array | string)[];
        keysToUnfreeze: (EncodedLedgerKey | Uint8Array | string)[];
    });
    toXdrObject(): FrozenLedgerKeysDeltaWire;
    static fromXdrObject(wire: FrozenLedgerKeysDeltaWire): FrozenLedgerKeysDelta;
}
