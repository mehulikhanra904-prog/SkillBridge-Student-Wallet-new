import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScpBallot, type ScpBallotWire } from "./scp-ballot.js";
import { Hash, type HashWire } from "./hash.js";
export interface ScpStatementConfirmWire {
    ballot: ScpBallotWire;
    nPrepared: number;
    nCommit: number;
    nH: number;
    quorumSetHash: HashWire;
}
/**
 * ```xdr
 * struct
 *         {
 *             SCPBallot ballot;   // b
 *             uint32 nPrepared;   // p.n
 *             uint32 nCommit;     // c.n
 *             uint32 nH;          // h.n
 *             Hash quorumSetHash; // D
 *         }
 * ```
 */
export declare class ScpStatementConfirm extends XdrValue {
    readonly ballot: ScpBallot;
    readonly nPrepared: number;
    readonly nCommit: number;
    readonly nH: number;
    readonly quorumSetHash: Hash;
    static readonly schema: XdrType<ScpStatementConfirmWire>;
    constructor(input: {
        ballot: ScpBallot;
        nPrepared: number;
        nCommit: number;
        nH: number;
        quorumSetHash: Hash | Uint8Array | string;
    });
    toXdrObject(): ScpStatementConfirmWire;
    static fromXdrObject(wire: ScpStatementConfirmWire): ScpStatementConfirm;
}
