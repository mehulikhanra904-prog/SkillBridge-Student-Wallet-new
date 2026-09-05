import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { MessageType, type MessageTypeWire } from "./message-type.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
export interface DontHaveWire {
    type: MessageTypeWire;
    reqHash: Uint256BytesWire;
}
/**
 * ```xdr
 * struct DontHave
 * {
 *     MessageType type;
 *     uint256 reqHash;
 * };
 * ```
 */
export declare class DontHave extends XdrValue {
    readonly type: MessageType;
    readonly reqHash: Uint256Bytes;
    static readonly schema: XdrType<DontHaveWire>;
    constructor(input: {
        type: MessageType;
        reqHash: Uint256Bytes | Uint8Array | string;
    });
    toXdrObject(): DontHaveWire;
    static fromXdrObject(wire: DontHaveWire): DontHave;
}
