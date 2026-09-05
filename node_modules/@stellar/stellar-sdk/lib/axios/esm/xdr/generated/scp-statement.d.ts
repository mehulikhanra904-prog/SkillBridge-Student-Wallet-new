import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { ScpStatementPledges, type ScpStatementPledgesWire } from "./scp-statement-pledges.js";
export interface ScpStatementWire {
    nodeId: PublicKeyWire;
    slotIndex: bigint;
    pledges: ScpStatementPledgesWire;
}
/**
 * ```xdr
 * struct SCPStatement
 * {
 *     NodeID nodeID;    // v
 *     uint64 slotIndex; // i
 *
 *     union switch (SCPStatementType type)
 *     {
 *     case SCP_ST_PREPARE:
 *         struct
 *         {
 *             Hash quorumSetHash;       // D
 *             SCPBallot ballot;         // b
 *             SCPBallot* prepared;      // p
 *             SCPBallot* preparedPrime; // p'
 *             uint32 nC;                // c.n
 *             uint32 nH;                // h.n
 *         } prepare;
 *     case SCP_ST_CONFIRM:
 *         struct
 *         {
 *             SCPBallot ballot;   // b
 *             uint32 nPrepared;   // p.n
 *             uint32 nCommit;     // c.n
 *             uint32 nH;          // h.n
 *             Hash quorumSetHash; // D
 *         } confirm;
 *     case SCP_ST_EXTERNALIZE:
 *         struct
 *         {
 *             SCPBallot commit;         // c
 *             uint32 nH;                // h.n
 *             Hash commitQuorumSetHash; // D used before EXTERNALIZE
 *         } externalize;
 *     case SCP_ST_NOMINATE:
 *         SCPNomination nominate;
 *     }
 *     pledges;
 * };
 * ```
 */
export declare class ScpStatement extends XdrValue {
    readonly nodeId: PublicKey;
    readonly slotIndex: bigint;
    readonly pledges: ScpStatementPledges;
    static readonly schema: XdrType<ScpStatementWire>;
    constructor(input: {
        nodeId: PublicKey;
        slotIndex: bigint;
        pledges: ScpStatementPledges;
    });
    toXdrObject(): ScpStatementWire;
    static fromXdrObject(wire: ScpStatementWire): ScpStatement;
}
