import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Value, type ValueWire } from "./value.js";
export interface ScpBallotWire {
    counter: number;
    value: ValueWire;
}
/**
 * ```xdr
 * struct SCPBallot
 * {
 *     uint32 counter; // n
 *     Value value;    // x
 * };
 * ```
 */
export declare class ScpBallot extends XdrValue {
    readonly counter: number;
    readonly value: Value;
    static readonly schema: XdrType<ScpBallotWire>;
    constructor(input: {
        counter: number;
        value: Value | Uint8Array | string;
    });
    toXdrObject(): ScpBallotWire;
    static fromXdrObject(wire: ScpBallotWire): ScpBallot;
}
