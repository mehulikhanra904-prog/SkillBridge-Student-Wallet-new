import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { XdrString } from "../values/xdr-string.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface PeerStatsWire {
    id: PublicKeyWire;
    versionStr: XdrString;
    messagesRead: bigint;
    messagesWritten: bigint;
    bytesRead: bigint;
    bytesWritten: bigint;
    secondsConnected: bigint;
    uniqueFloodBytesRecv: bigint;
    duplicateFloodBytesRecv: bigint;
    uniqueFetchBytesRecv: bigint;
    duplicateFetchBytesRecv: bigint;
    uniqueFloodMessageRecv: bigint;
    duplicateFloodMessageRecv: bigint;
    uniqueFetchMessageRecv: bigint;
    duplicateFetchMessageRecv: bigint;
}
/**
 * ```xdr
 * struct PeerStats
 * {
 *     NodeID id;
 *     string versionStr<100>;
 *     uint64 messagesRead;
 *     uint64 messagesWritten;
 *     uint64 bytesRead;
 *     uint64 bytesWritten;
 *     uint64 secondsConnected;
 *
 *     uint64 uniqueFloodBytesRecv;
 *     uint64 duplicateFloodBytesRecv;
 *     uint64 uniqueFetchBytesRecv;
 *     uint64 duplicateFetchBytesRecv;
 *
 *     uint64 uniqueFloodMessageRecv;
 *     uint64 duplicateFloodMessageRecv;
 *     uint64 uniqueFetchMessageRecv;
 *     uint64 duplicateFetchMessageRecv;
 * };
 * ```
 */
export declare class PeerStats extends XdrValue {
    readonly id: PublicKey;
    readonly versionStr: XdrString;
    readonly messagesRead: bigint;
    readonly messagesWritten: bigint;
    readonly bytesRead: bigint;
    readonly bytesWritten: bigint;
    readonly secondsConnected: bigint;
    readonly uniqueFloodBytesRecv: bigint;
    readonly duplicateFloodBytesRecv: bigint;
    readonly uniqueFetchBytesRecv: bigint;
    readonly duplicateFetchBytesRecv: bigint;
    readonly uniqueFloodMessageRecv: bigint;
    readonly duplicateFloodMessageRecv: bigint;
    readonly uniqueFetchMessageRecv: bigint;
    readonly duplicateFetchMessageRecv: bigint;
    static readonly schema: XdrType<PeerStatsWire>;
    constructor(input: {
        id: PublicKey;
        versionStr: XdrString | string | Uint8Array;
        messagesRead: bigint;
        messagesWritten: bigint;
        bytesRead: bigint;
        bytesWritten: bigint;
        secondsConnected: bigint;
        uniqueFloodBytesRecv: bigint;
        duplicateFloodBytesRecv: bigint;
        uniqueFetchBytesRecv: bigint;
        duplicateFetchBytesRecv: bigint;
        uniqueFloodMessageRecv: bigint;
        duplicateFloodMessageRecv: bigint;
        uniqueFetchMessageRecv: bigint;
        duplicateFetchMessageRecv: bigint;
    });
    toXdrObject(): PeerStatsWire;
    static fromXdrObject(wire: PeerStatsWire): PeerStats;
}
