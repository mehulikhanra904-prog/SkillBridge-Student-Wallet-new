import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PeerAddressIp, type PeerAddressIpWire } from "./peer-address-ip.js";
export interface PeerAddressWire {
    ip: PeerAddressIpWire;
    port: number;
    numFailures: number;
}
/**
 * ```xdr
 * struct PeerAddress
 * {
 *     union switch (IPAddrType type)
 *     {
 *     case IPv4:
 *         opaque ipv4[4];
 *     case IPv6:
 *         opaque ipv6[16];
 *     }
 *     ip;
 *     uint32 port;
 *     uint32 numFailures;
 * };
 * ```
 */
export declare class PeerAddress extends XdrValue {
    readonly ip: PeerAddressIp;
    readonly port: number;
    readonly numFailures: number;
    static readonly schema: XdrType<PeerAddressWire>;
    constructor(input: {
        ip: PeerAddressIp;
        port: number;
        numFailures: number;
    });
    toXdrObject(): PeerAddressWire;
    static fromXdrObject(wire: PeerAddressWire): PeerAddress;
}
