import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type PeerAddressIpWire = {
    type: 0;
    ipv4: Uint8Array;
} | {
    type: 1;
    ipv6: Uint8Array;
};
export type PeerAddressIpVariantName = "iPv4" | "iPv6";
/**
 * ```xdr
 * union switch (IPAddrType type)
 *     {
 *     case IPv4:
 *         opaque ipv4[4];
 *     case IPv6:
 *         opaque ipv6[16];
 *     }
 * ```
 */
declare abstract class PeerAddressIpBase extends XdrValue {
    abstract readonly type: PeerAddressIpVariantName;
    constructor();
    static readonly schema: XdrType<PeerAddressIpWire>;
    static iPv4(ipv4: Uint8Array): PeerAddressIpIPv4;
    static iPv6(ipv6: Uint8Array): PeerAddressIpIPv6;
    static fromXdrObject(wire: PeerAddressIpWire): PeerAddressIp;
    /**
     * Type guard narrowing an unknown value to a concrete PeerAddressIp variant.
     * Use this instead of `instanceof PeerAddressIp`: the exported `PeerAddressIp` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `PeerAddressIp.is(x)` narrows to the union.
     */
    static is(value: unknown): value is PeerAddressIp;
    abstract toXdrObject(): PeerAddressIpWire;
}
export declare class PeerAddressIpIPv4 extends PeerAddressIpBase {
    readonly type: "iPv4";
    readonly ipv4: Uint8Array;
    constructor(ipv4: Uint8Array);
    get value(): Uint8Array;
    toXdrObject(): Extract<PeerAddressIpWire, {
        type: 0;
    }>;
}
export declare class PeerAddressIpIPv6 extends PeerAddressIpBase {
    readonly type: "iPv6";
    readonly ipv6: Uint8Array;
    constructor(ipv6: Uint8Array);
    get value(): Uint8Array;
    toXdrObject(): Extract<PeerAddressIpWire, {
        type: 1;
    }>;
}
export type PeerAddressIp = PeerAddressIpIPv4 | PeerAddressIpIPv6;
export declare const PeerAddressIp: typeof PeerAddressIpBase;
export {};
