import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerKey, type LedgerKeyWire } from "./ledger-key.js";
import { RevokeSponsorshipOpSigner, type RevokeSponsorshipOpSignerWire } from "./revoke-sponsorship-op-signer.js";
export type RevokeSponsorshipOpWire = {
    type: 0;
    ledgerKey: LedgerKeyWire;
} | {
    type: 1;
    signer: RevokeSponsorshipOpSignerWire;
};
export type RevokeSponsorshipOpVariantName = "revokeSponsorshipLedgerEntry" | "revokeSponsorshipSigner";
/**
 * ```xdr
 * union RevokeSponsorshipOp switch (RevokeSponsorshipType type)
 * {
 * case REVOKE_SPONSORSHIP_LEDGER_ENTRY:
 *     LedgerKey ledgerKey;
 * case REVOKE_SPONSORSHIP_SIGNER:
 *     struct
 *     {
 *         AccountID accountID;
 *         SignerKey signerKey;
 *     } signer;
 * };
 * ```
 */
declare abstract class RevokeSponsorshipOpBase extends XdrValue {
    abstract readonly type: RevokeSponsorshipOpVariantName;
    constructor();
    static readonly schema: XdrType<RevokeSponsorshipOpWire>;
    static revokeSponsorshipLedgerEntry(ledgerKey: LedgerKey): RevokeSponsorshipOpLedgerEntry;
    static revokeSponsorshipSigner(signer: RevokeSponsorshipOpSigner): RevokeSponsorshipOpSignerArm;
    static fromXdrObject(wire: RevokeSponsorshipOpWire): RevokeSponsorshipOp;
    /**
     * Type guard narrowing an unknown value to a concrete RevokeSponsorshipOp variant.
     * Use this instead of `instanceof RevokeSponsorshipOp`: the exported `RevokeSponsorshipOp` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `RevokeSponsorshipOp.is(x)` narrows to the union.
     */
    static is(value: unknown): value is RevokeSponsorshipOp;
    abstract toXdrObject(): RevokeSponsorshipOpWire;
}
export declare class RevokeSponsorshipOpLedgerEntry extends RevokeSponsorshipOpBase {
    readonly type: "revokeSponsorshipLedgerEntry";
    readonly ledgerKey: LedgerKey;
    constructor(ledgerKey: LedgerKey);
    get value(): LedgerKey;
    toXdrObject(): Extract<RevokeSponsorshipOpWire, {
        type: 0;
    }>;
}
export declare class RevokeSponsorshipOpSignerArm extends RevokeSponsorshipOpBase {
    readonly type: "revokeSponsorshipSigner";
    readonly signer: RevokeSponsorshipOpSigner;
    constructor(signer: RevokeSponsorshipOpSigner);
    get value(): RevokeSponsorshipOpSigner;
    toXdrObject(): Extract<RevokeSponsorshipOpWire, {
        type: 1;
    }>;
}
export type RevokeSponsorshipOp = RevokeSponsorshipOpLedgerEntry | RevokeSponsorshipOpSignerArm;
export declare const RevokeSponsorshipOp: typeof RevokeSponsorshipOpBase;
export {};
