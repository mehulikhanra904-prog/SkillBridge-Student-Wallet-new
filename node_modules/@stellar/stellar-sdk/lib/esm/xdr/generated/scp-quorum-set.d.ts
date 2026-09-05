import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface ScpQuorumSetWire {
    threshold: number;
    validators: PublicKeyWire[];
    innerSets: ScpQuorumSetWire[];
}
/**
 * ```xdr
 * struct SCPQuorumSet
 * {
 *     uint32 threshold;
 *     NodeID validators<>;
 *     SCPQuorumSet innerSets<>;
 * };
 * ```
 */
export declare class ScpQuorumSet extends XdrValue {
    readonly threshold: number;
    readonly validators: PublicKey[];
    readonly innerSets: ScpQuorumSet[];
    static readonly schema: XdrType<ScpQuorumSetWire>;
    constructor(input: {
        threshold: number;
        validators: PublicKey[];
        innerSets: ScpQuorumSet[];
    });
    toXdrObject(): ScpQuorumSetWire;
    static fromXdrObject(wire: ScpQuorumSetWire): ScpQuorumSet;
}
