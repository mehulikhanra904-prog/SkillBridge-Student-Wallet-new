import { Keypair } from "../base/index.js";
import type { SignAuthEntry, SignTransaction } from "./types.js";
/**
 * A signing identity: something that can sign, and that knows who it is.
 *
 * A bare {@link SignTransaction} callback carries no identity, so callers have
 * to pass the signer's address alongside it and keep the two in sync. A
 * `Signer` bundles them.
 *
 * `address` is deliberately a plain string rather than an Ed25519 public key:
 * it is a `G…` account address for keypair-backed signers, but may be a `C…`
 * contract address for smart accounts, whose signatures are not Ed25519 at all.
 *
 * `signTransaction` and `signAuthEntry` keep the exact shapes the SDK already
 * accepts (those of SEP-43 wallets such as Freighter), so an existing wallet
 * object becomes a `Signer` by gaining an `address`.
 *
 * `signAuthEntry` is optional because not every wallet implements it; it is
 * only needed for multi-party (non-invoker) auth entry signing.
 *
 * Accepted wherever the SDK takes a signing callback: the `signTransaction` and
 * `signAuthEntry` options on `ClientOptions` and `MethodOptions`, and the
 * per-call overrides on `AssembledTransaction`'s `sign`, `signAndSend`, and
 * `signAuthEntries`.
 */
export interface Signer {
    /** The address this signer signs as: `G…` for accounts, `C…` for contracts. */
    readonly address: string;
    /** Signs a transaction envelope. Matches `signTransaction` from Freighter. */
    signTransaction: SignTransaction;
    /** Signs an auth entry preimage. Matches `signAuthEntry` from Freighter. */
    signAuthEntry?: SignAuthEntry;
}
/**
 * A {@link Signer} backed by a local {@link Keypair}.
 *
 * Suitable for Node applications, scripts, and tests — anywhere the secret key
 * lives in the same process. For browser applications, use the SEP-43 wallet's
 * own `signTransaction`, or wrap it in an object satisfying {@link Signer}.
 *
 * @example
 * ```ts
 * import { Keypair } from "@stellar/stellar-sdk";
 * import { Client, KeypairSigner } from "@stellar/stellar-sdk/contract";
 *
 * const keypair = Keypair.fromSecret(secret);
 * const client = await Client.from({
 *   contractId,
 *   networkPassphrase,
 *   rpcUrl,
 *   publicKey: keypair.publicKey(),
 *   signTransaction: new KeypairSigner(keypair, networkPassphrase),
 * });
 * ```
 */
export declare class KeypairSigner implements Signer {
    private readonly keypair;
    private readonly networkPassphrase;
    /**
     * The keypair's Ed25519 account address (`G…`), always `keypair.publicKey()`.
     */
    readonly address: string;
    /**
     * @param keypair - the {@link Keypair} to sign with. Signing throws
     *    `cannot sign: no secret key available` if it holds only a public key.
     * @param networkPassphrase - passphrase of the network to sign for, used
     *    whenever the caller does not pass one at signing time
     */
    constructor(keypair: Keypair, networkPassphrase: string);
    signTransaction: SignTransaction;
    signAuthEntry: SignAuthEntry;
}
/**
 * Anything accepted where a `signTransaction` callback is expected: the raw
 * SEP-43 callback, a {@link Signer}, or a {@link Keypair}.
 */
export type SignTransactionLike = SignTransaction | Signer | Keypair;
/**
 * Anything accepted where a `signAuthEntry` callback is expected: the raw
 * SEP-43 callback, a {@link Signer}, or a {@link Keypair}.
 */
export type SignAuthEntryLike = SignAuthEntry | Signer | Keypair;
/**
 * Reduces the accepted signing shapes down to a plain callback.
 *
 * Anything that carries no usable callback yields `undefined` — including an
 * absent value, or an object that does not match any accepted shape — so the
 * caller decides how to report a missing signer. This is deliberately lenient:
 * callers reaching the SDK from plain JavaScript are not held to the types, and
 * a clear `NoSigner` beats a `TypeError` from deep inside a normalizer.
 *
 * Internal: called at the entry points that read a caller-supplied signer, so
 * the rest of the code only ever deals with a `SignTransaction`.
 */
export declare function toSignTransaction(value: SignTransactionLike | undefined, networkPassphrase: string): SignTransaction | undefined;
/**
 * Reduces the accepted signing shapes down to a plain callback.
 *
 * A {@link Signer} whose optional `signAuthEntry` is absent yields `undefined`,
 * so the caller reports it the same way it reports a missing option.
 *
 * Internal: see {@link toSignTransaction}.
 */
export declare function toSignAuthEntry(value: SignAuthEntryLike | undefined, networkPassphrase: string): SignAuthEntry | undefined;
