import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { Value, type ValueWire } from "./value.js";
export interface ScpNominationWire {
    quorumSetHash: HashWire;
    votes: ValueWire[];
    accepted: ValueWire[];
}
/**
 * ```xdr
 * struct SCPNomination
 * {
 *     Hash quorumSetHash; // D
 *     Value votes<>;      // X
 *     Value accepted<>;   // Y
 * };
 * ```
 */
export declare class ScpNomination extends XdrValue {
    readonly quorumSetHash: Hash;
    readonly votes: Value[];
    readonly accepted: Value[];
    static readonly schema: XdrType<ScpNominationWire>;
    constructor(input: {
        quorumSetHash: Hash | Uint8Array | string;
        votes: (Value | Uint8Array | string)[];
        accepted: (Value | Uint8Array | string)[];
    });
    toXdrObject(): ScpNominationWire;
    static fromXdrObject(wire: ScpNominationWire): ScpNomination;
}
