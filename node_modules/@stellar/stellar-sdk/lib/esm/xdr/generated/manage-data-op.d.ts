import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { DataValue, type DataValueWire } from "./data-value.js";
export interface ManageDataOpWire {
    dataName: XdrString;
    dataValue: DataValueWire | null;
}
/**
 * ```xdr
 * struct ManageDataOp
 * {
 *     string64 dataName;
 *     DataValue* dataValue; // set to null to clear
 * };
 * ```
 */
export declare class ManageDataOp extends XdrValue {
    readonly dataName: XdrString;
    readonly dataValue: DataValue | null;
    static readonly schema: XdrType<ManageDataOpWire>;
    constructor(input: {
        dataName: XdrString | string | Uint8Array;
        dataValue: DataValue | Uint8Array | string | null;
    });
    toXdrObject(): ManageDataOpWire;
    static fromXdrObject(wire: ManageDataOpWire): ManageDataOp;
}
