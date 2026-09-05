import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
import { ContractId, type ContractIdWire } from "./contract-id.js";
import { ContractEventType, type ContractEventTypeWire } from "./contract-event-type.js";
import { ContractEventBody, type ContractEventBodyWire } from "./contract-event-body.js";
export interface ContractEventWire {
    ext: ExtensionPointWire;
    contractId: ContractIdWire | null;
    type: ContractEventTypeWire;
    body: ContractEventBodyWire;
}
/**
 * ```xdr
 * struct ContractEvent
 * {
 *     // We can use this to add more fields, or because it
 *     // is first, to change ContractEvent into a union.
 *     ExtensionPoint ext;
 *
 *     ContractID* contractID;
 *     ContractEventType type;
 *
 *     union switch (int v)
 *     {
 *     case 0:
 *         struct
 *         {
 *             SCVal topics<>;
 *             SCVal data;
 *         } v0;
 *     }
 *     body;
 * };
 * ```
 */
export declare class ContractEvent extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly contractId: ContractId | null;
    readonly type: ContractEventType;
    readonly body: ContractEventBody;
    static readonly schema: XdrType<ContractEventWire>;
    constructor(input: {
        ext: ExtensionPoint;
        contractId: ContractId | null;
        type: ContractEventType;
        body: ContractEventBody;
    });
    toXdrObject(): ContractEventWire;
    static fromXdrObject(wire: ContractEventWire): ContractEvent;
}
