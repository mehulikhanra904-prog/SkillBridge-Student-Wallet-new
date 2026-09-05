import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { Hash, type HashWire } from "./hash.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { AuthCert, type AuthCertWire } from "./auth-cert.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
export interface HelloWire {
    ledgerVersion: number;
    overlayVersion: number;
    overlayMinVersion: number;
    networkId: HashWire;
    versionStr: XdrString;
    listeningPort: number;
    peerId: PublicKeyWire;
    cert: AuthCertWire;
    nonce: Uint256BytesWire;
}
/**
 * ```xdr
 * struct Hello
 * {
 *     uint32 ledgerVersion;
 *     uint32 overlayVersion;
 *     uint32 overlayMinVersion;
 *     Hash networkID;
 *     string versionStr<100>;
 *     int listeningPort;
 *     NodeID peerID;
 *     AuthCert cert;
 *     uint256 nonce;
 * };
 * ```
 */
export declare class Hello extends XdrValue {
    readonly ledgerVersion: number;
    readonly overlayVersion: number;
    readonly overlayMinVersion: number;
    readonly networkId: Hash;
    readonly versionStr: XdrString;
    readonly listeningPort: number;
    readonly peerId: PublicKey;
    readonly cert: AuthCert;
    readonly nonce: Uint256Bytes;
    static readonly schema: XdrType<HelloWire>;
    constructor(input: {
        ledgerVersion: number;
        overlayVersion: number;
        overlayMinVersion: number;
        networkId: Hash | Uint8Array | string;
        versionStr: XdrString | string | Uint8Array;
        listeningPort: number;
        peerId: PublicKey;
        cert: AuthCert;
        nonce: Uint256Bytes | Uint8Array | string;
    });
    toXdrObject(): HelloWire;
    static fromXdrObject(wire: HelloWire): Hello;
}
