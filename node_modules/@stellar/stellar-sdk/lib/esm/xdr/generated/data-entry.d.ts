import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { DataValue, type DataValueWire } from "./data-value.js";
import { DataEntryExt, type DataEntryExtWire } from "./data-entry-ext.js";
export interface DataEntryWire {
    accountId: PublicKeyWire;
    dataName: XdrString;
    dataValue: DataValueWire;
    ext: DataEntryExtWire;
}
/**
 * ```xdr
 * struct DataEntry
 * {
 *     AccountID accountID; // account this data belongs to
 *     string64 dataName;
 *     DataValue dataValue;
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class DataEntry extends XdrValue {
    readonly accountId: PublicKey;
    readonly dataName: XdrString;
    readonly dataValue: DataValue;
    readonly ext: DataEntryExt;
    static readonly schema: XdrType<DataEntryWire>;
    constructor(input: {
        accountId: PublicKey;
        dataName: XdrString | string | Uint8Array;
        dataValue: DataValue | Uint8Array | string;
        ext: DataEntryExt;
    });
    toXdrObject(): DataEntryWire;
    static fromXdrObject(wire: DataEntryWire): DataEntry;
}
