import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { Thresholds, type ThresholdsWire } from "./thresholds.js";
import { Signer, type SignerWire } from "./signer.js";
import { AccountEntryExt, type AccountEntryExtWire } from "./account-entry-ext.js";
export interface AccountEntryWire {
    accountId: PublicKeyWire;
    balance: bigint;
    seqNum: bigint;
    numSubEntries: number;
    inflationDest: PublicKeyWire | null;
    flags: number;
    homeDomain: XdrString;
    thresholds: ThresholdsWire;
    signers: SignerWire[];
    ext: AccountEntryExtWire;
}
/**
 * ```xdr
 * struct AccountEntry
 * {
 *     AccountID accountID;      // master public key for this account
 *     int64 balance;            // in stroops
 *     SequenceNumber seqNum;    // last sequence number used for this account
 *     uint32 numSubEntries;     // number of sub-entries this account has
 *                               // drives the reserve
 *     AccountID* inflationDest; // Account to vote for during inflation
 *     uint32 flags;             // see AccountFlags
 *
 *     string32 homeDomain; // can be used for reverse federation and memo lookup
 *
 *     // fields used for signatures
 *     // thresholds stores unsigned bytes: [weight of master|low|medium|high]
 *     Thresholds thresholds;
 *
 *     Signer signers<MAX_SIGNERS>; // possible signers for this account
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         AccountEntryExtensionV1 v1;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class AccountEntry extends XdrValue {
    readonly accountId: PublicKey;
    readonly balance: bigint;
    readonly seqNum: bigint;
    readonly numSubEntries: number;
    readonly inflationDest: PublicKey | null;
    readonly flags: number;
    readonly homeDomain: XdrString;
    readonly thresholds: Thresholds;
    readonly signers: Signer[];
    readonly ext: AccountEntryExt;
    static readonly schema: XdrType<AccountEntryWire>;
    constructor(input: {
        accountId: PublicKey;
        balance: bigint;
        seqNum: bigint;
        numSubEntries: number;
        inflationDest: PublicKey | null;
        flags: number;
        homeDomain: XdrString | string | Uint8Array;
        thresholds: Thresholds | Uint8Array | string;
        signers: Signer[];
        ext: AccountEntryExt;
    });
    toXdrObject(): AccountEntryWire;
    static fromXdrObject(wire: AccountEntryWire): AccountEntry;
}
