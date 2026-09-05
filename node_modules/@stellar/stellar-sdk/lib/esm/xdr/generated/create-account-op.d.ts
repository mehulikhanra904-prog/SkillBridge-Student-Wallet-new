import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface CreateAccountOpWire {
    destination: PublicKeyWire;
    startingBalance: bigint;
}
/**
 * ```xdr
 * struct CreateAccountOp
 * {
 *     AccountID destination; // account to create
 *     int64 startingBalance; // amount they end up with
 * };
 * ```
 */
export declare class CreateAccountOp extends XdrValue {
    readonly destination: PublicKey;
    readonly startingBalance: bigint;
    static readonly schema: XdrType<CreateAccountOpWire>;
    constructor(input: {
        destination: PublicKey;
        startingBalance: bigint;
    });
    toXdrObject(): CreateAccountOpWire;
    static fromXdrObject(wire: CreateAccountOpWire): CreateAccountOp;
}
