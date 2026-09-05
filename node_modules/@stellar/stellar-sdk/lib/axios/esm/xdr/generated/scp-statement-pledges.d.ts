import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScpStatementPrepare, type ScpStatementPrepareWire } from "./scp-statement-prepare.js";
import { ScpStatementConfirm, type ScpStatementConfirmWire } from "./scp-statement-confirm.js";
import { ScpStatementExternalize, type ScpStatementExternalizeWire } from "./scp-statement-externalize.js";
import { ScpNomination, type ScpNominationWire } from "./scp-nomination.js";
export type ScpStatementPledgesWire = {
    type: 0;
    prepare: ScpStatementPrepareWire;
} | {
    type: 1;
    confirm: ScpStatementConfirmWire;
} | {
    type: 2;
    externalize: ScpStatementExternalizeWire;
} | {
    type: 3;
    nominate: ScpNominationWire;
};
export type ScpStatementPledgesVariantName = "scpStPrepare" | "scpStConfirm" | "scpStExternalize" | "scpStNominate";
/**
 * ```xdr
 * union switch (SCPStatementType type)
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
 * ```
 */
declare abstract class ScpStatementPledgesBase extends XdrValue {
    abstract readonly type: ScpStatementPledgesVariantName;
    constructor();
    static readonly schema: XdrType<ScpStatementPledgesWire>;
    static scpStPrepare(prepare: ScpStatementPrepare): ScpStatementPledgesPrepare;
    static scpStConfirm(confirm: ScpStatementConfirm): ScpStatementPledgesConfirm;
    static scpStExternalize(externalize: ScpStatementExternalize): ScpStatementPledgesExternalize;
    static scpStNominate(nominate: ScpNomination): ScpStatementPledgesNominate;
    static fromXdrObject(wire: ScpStatementPledgesWire): ScpStatementPledges;
    /**
     * Type guard narrowing an unknown value to a concrete ScpStatementPledges variant.
     * Use this instead of `instanceof ScpStatementPledges`: the exported `ScpStatementPledges` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ScpStatementPledges.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ScpStatementPledges;
    abstract toXdrObject(): ScpStatementPledgesWire;
}
export declare class ScpStatementPledgesPrepare extends ScpStatementPledgesBase {
    readonly type: "scpStPrepare";
    readonly prepare: ScpStatementPrepare;
    constructor(prepare: ScpStatementPrepare);
    get value(): ScpStatementPrepare;
    toXdrObject(): Extract<ScpStatementPledgesWire, {
        type: 0;
    }>;
}
export declare class ScpStatementPledgesConfirm extends ScpStatementPledgesBase {
    readonly type: "scpStConfirm";
    readonly confirm: ScpStatementConfirm;
    constructor(confirm: ScpStatementConfirm);
    get value(): ScpStatementConfirm;
    toXdrObject(): Extract<ScpStatementPledgesWire, {
        type: 1;
    }>;
}
export declare class ScpStatementPledgesExternalize extends ScpStatementPledgesBase {
    readonly type: "scpStExternalize";
    readonly externalize: ScpStatementExternalize;
    constructor(externalize: ScpStatementExternalize);
    get value(): ScpStatementExternalize;
    toXdrObject(): Extract<ScpStatementPledgesWire, {
        type: 2;
    }>;
}
export declare class ScpStatementPledgesNominate extends ScpStatementPledgesBase {
    readonly type: "scpStNominate";
    readonly nominate: ScpNomination;
    constructor(nominate: ScpNomination);
    get value(): ScpNomination;
    toXdrObject(): Extract<ScpStatementPledgesWire, {
        type: 3;
    }>;
}
export type ScpStatementPledges = ScpStatementPledgesPrepare | ScpStatementPledgesConfirm | ScpStatementPledgesExternalize | ScpStatementPledgesNominate;
export declare const ScpStatementPledges: typeof ScpStatementPledgesBase;
export {};
