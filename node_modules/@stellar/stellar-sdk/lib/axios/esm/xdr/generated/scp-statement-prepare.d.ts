import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { ScpBallot, type ScpBallotWire } from "./scp-ballot.js";
export interface ScpStatementPrepareWire {
    quorumSetHash: HashWire;
    ballot: ScpBallotWire;
    prepared: ScpBallotWire | null;
    preparedPrime: ScpBallotWire | null;
    nC: number;
    nH: number;
}
/**
 * ```xdr
 * struct
 *         {
 *             Hash quorumSetHash;       // D
 *             SCPBallot ballot;         // b
 *             SCPBallot* prepared;      // p
 *             SCPBallot* preparedPrime; // p'
 *             uint32 nC;                // c.n
 *             uint32 nH;                // h.n
 *         }
 * ```
 */
export declare class ScpStatementPrepare extends XdrValue {
    readonly quorumSetHash: Hash;
    readonly ballot: ScpBallot;
    readonly prepared: ScpBallot | null;
    readonly preparedPrime: ScpBallot | null;
    readonly nC: number;
    readonly nH: number;
    static readonly schema: XdrType<ScpStatementPrepareWire>;
    constructor(input: {
        quorumSetHash: Hash | Uint8Array | string;
        ballot: ScpBallot;
        prepared: ScpBallot | null;
        preparedPrime: ScpBallot | null;
        nC: number;
        nH: number;
    });
    toXdrObject(): ScpStatementPrepareWire;
    static fromXdrObject(wire: ScpStatementPrepareWire): ScpStatementPrepare;
}
