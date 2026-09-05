import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScpBallot, type ScpBallotWire } from "./scp-ballot.js";
import { Hash, type HashWire } from "./hash.js";
export interface ScpStatementExternalizeWire {
    commit: ScpBallotWire;
    nH: number;
    commitQuorumSetHash: HashWire;
}
/**
 * ```xdr
 * struct
 *         {
 *             SCPBallot commit;         // c
 *             uint32 nH;                // h.n
 *             Hash commitQuorumSetHash; // D used before EXTERNALIZE
 *         }
 * ```
 */
export declare class ScpStatementExternalize extends XdrValue {
    readonly commit: ScpBallot;
    readonly nH: number;
    readonly commitQuorumSetHash: Hash;
    static readonly schema: XdrType<ScpStatementExternalizeWire>;
    constructor(input: {
        commit: ScpBallot;
        nH: number;
        commitQuorumSetHash: Hash | Uint8Array | string;
    });
    toXdrObject(): ScpStatementExternalizeWire;
    static fromXdrObject(wire: ScpStatementExternalizeWire): ScpStatementExternalize;
}
