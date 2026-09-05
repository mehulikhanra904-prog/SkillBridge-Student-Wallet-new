import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface InflationPayoutWire {
    destination: PublicKeyWire;
    amount: bigint;
}
/**
 * ```xdr
 * struct InflationPayout // or use PaymentResultAtom to limit types?
 * {
 *     AccountID destination;
 *     int64 amount;
 * };
 * ```
 */
export declare class InflationPayout extends XdrValue {
    readonly destination: PublicKey;
    readonly amount: bigint;
    static readonly schema: XdrType<InflationPayoutWire>;
    constructor(input: {
        destination: PublicKey;
        amount: bigint;
    });
    toXdrObject(): InflationPayoutWire;
    static fromXdrObject(wire: InflationPayoutWire): InflationPayout;
}
