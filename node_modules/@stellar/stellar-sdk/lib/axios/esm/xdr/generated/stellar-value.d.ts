import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { UpgradeType, type UpgradeTypeWire } from "./upgrade-type.js";
import { StellarValueExt, type StellarValueExtWire } from "./stellar-value-ext.js";
export interface StellarValueWire {
    txSetHash: HashWire;
    closeTime: bigint;
    upgrades: UpgradeTypeWire[];
    ext: StellarValueExtWire;
}
/**
 * ```xdr
 * struct StellarValue
 * {
 *     Hash txSetHash;      // transaction set to apply to previous ledger
 *     TimePoint closeTime; // network close time
 *
 *     // upgrades to apply to the previous ledger (usually empty)
 *     // this is a vector of encoded 'LedgerUpgrade' so that nodes can drop
 *     // unknown steps during consensus if needed.
 *     // see notes below on 'LedgerUpgrade' for more detail
 *     // max size is dictated by number of upgrade types (+ room for future)
 *     UpgradeType upgrades<6>;
 *
 *     // reserved for future use
 *     union switch (StellarValueType v)
 *     {
 *     case STELLAR_VALUE_BASIC:
 *         void;
 *     case STELLAR_VALUE_SIGNED:
 *         LedgerCloseValueSignature lcValueSignature;
 *     case STELLAR_VALUE_EMPTY_TX_SET:
 *         struct
 *         {
 *             Hash txSetHash;
 *             Hash previousLedgerHash;
 *             uint32 previousLedgerVersion;
 *             LedgerCloseValueSignature lcValueSignature;
 *         } proposedValue;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class StellarValue extends XdrValue {
    readonly txSetHash: Hash;
    readonly closeTime: bigint;
    readonly upgrades: UpgradeType[];
    readonly ext: StellarValueExt;
    static readonly schema: XdrType<StellarValueWire>;
    constructor(input: {
        txSetHash: Hash | Uint8Array | string;
        closeTime: bigint;
        upgrades: (UpgradeType | Uint8Array | string)[];
        ext: StellarValueExt;
    });
    toXdrObject(): StellarValueWire;
    static fromXdrObject(wire: StellarValueWire): StellarValue;
}
