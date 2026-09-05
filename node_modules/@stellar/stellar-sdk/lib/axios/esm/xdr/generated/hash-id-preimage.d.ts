import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { HashIdPreimageOperationId, type HashIdPreimageOperationIdWire } from "./hash-id-preimage-operation-id.js";
import { HashIdPreimageRevokeId, type HashIdPreimageRevokeIdWire } from "./hash-id-preimage-revoke-id.js";
import { HashIdPreimageContractId, type HashIdPreimageContractIdWire } from "./hash-id-preimage-contract-id.js";
import { HashIdPreimageSorobanAuthorization, type HashIdPreimageSorobanAuthorizationWire } from "./hash-id-preimage-soroban-authorization.js";
import { HashIdPreimageSorobanAuthorizationWithAddress, type HashIdPreimageSorobanAuthorizationWithAddressWire } from "./hash-id-preimage-soroban-authorization-with-address.js";
export type HashIdPreimageWire = {
    type: 6;
    operationId: HashIdPreimageOperationIdWire;
} | {
    type: 7;
    revokeId: HashIdPreimageRevokeIdWire;
} | {
    type: 8;
    contractId: HashIdPreimageContractIdWire;
} | {
    type: 9;
    sorobanAuthorization: HashIdPreimageSorobanAuthorizationWire;
} | {
    type: 10;
    sorobanAuthorizationWithAddress: HashIdPreimageSorobanAuthorizationWithAddressWire;
};
export type HashIdPreimageVariantName = "envelopeTypeOpId" | "envelopeTypePoolRevokeOpId" | "envelopeTypeContractId" | "envelopeTypeSorobanAuthorization" | "envelopeTypeSorobanAuthorizationWithAddress";
/**
 * ```xdr
 * union HashIDPreimage switch (EnvelopeType type)
 * {
 * case ENVELOPE_TYPE_OP_ID:
 *     struct
 *     {
 *         AccountID sourceAccount;
 *         SequenceNumber seqNum;
 *         uint32 opNum;
 *     } operationID;
 * case ENVELOPE_TYPE_POOL_REVOKE_OP_ID:
 *     struct
 *     {
 *         AccountID sourceAccount;
 *         SequenceNumber seqNum;
 *         uint32 opNum;
 *         PoolID liquidityPoolID;
 *         Asset asset;
 *     } revokeID;
 * case ENVELOPE_TYPE_CONTRACT_ID:
 *     struct
 *     {
 *         Hash networkID;
 *         ContractIDPreimage contractIDPreimage;
 *     } contractID;
 * case ENVELOPE_TYPE_SOROBAN_AUTHORIZATION:
 *     struct
 *     {
 *         Hash networkID;
 *         int64 nonce;
 *         uint32 signatureExpirationLedger;
 *         SorobanAuthorizedInvocation invocation;
 *     } sorobanAuthorization;
 * case ENVELOPE_TYPE_SOROBAN_AUTHORIZATION_WITH_ADDRESS:
 *     struct
 *     {
 *         Hash networkID;
 *         int64 nonce;
 *         uint32 signatureExpirationLedger;
 *         SCAddress address;
 *         SorobanAuthorizedInvocation invocation;
 *     } sorobanAuthorizationWithAddress;
 * };
 * ```
 */
declare abstract class HashIdPreimageBase extends XdrValue {
    abstract readonly type: HashIdPreimageVariantName;
    constructor();
    static readonly schema: XdrType<HashIdPreimageWire>;
    static envelopeTypeOpId(operationId: HashIdPreimageOperationId): HashIdPreimageOpId;
    static envelopeTypePoolRevokeOpId(revokeId: HashIdPreimageRevokeId): HashIdPreimagePoolRevokeOpId;
    static envelopeTypeContractId(contractId: HashIdPreimageContractId): HashIdPreimageContractIdArm;
    static envelopeTypeSorobanAuthorization(sorobanAuthorization: HashIdPreimageSorobanAuthorization): HashIdPreimageSorobanAuthorizationArm;
    static envelopeTypeSorobanAuthorizationWithAddress(sorobanAuthorizationWithAddress: HashIdPreimageSorobanAuthorizationWithAddress): HashIdPreimageSorobanAuthorizationWithAddressArm;
    static fromXdrObject(wire: HashIdPreimageWire): HashIdPreimage;
    /**
     * Type guard narrowing an unknown value to a concrete HashIdPreimage variant.
     * Use this instead of `instanceof HashIdPreimage`: the exported `HashIdPreimage` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `HashIdPreimage.is(x)` narrows to the union.
     */
    static is(value: unknown): value is HashIdPreimage;
    abstract toXdrObject(): HashIdPreimageWire;
}
export declare class HashIdPreimageOpId extends HashIdPreimageBase {
    readonly type: "envelopeTypeOpId";
    readonly operationId: HashIdPreimageOperationId;
    constructor(operationId: HashIdPreimageOperationId);
    get value(): HashIdPreimageOperationId;
    toXdrObject(): Extract<HashIdPreimageWire, {
        type: 6;
    }>;
}
export declare class HashIdPreimagePoolRevokeOpId extends HashIdPreimageBase {
    readonly type: "envelopeTypePoolRevokeOpId";
    readonly revokeId: HashIdPreimageRevokeId;
    constructor(revokeId: HashIdPreimageRevokeId);
    get value(): HashIdPreimageRevokeId;
    toXdrObject(): Extract<HashIdPreimageWire, {
        type: 7;
    }>;
}
export declare class HashIdPreimageContractIdArm extends HashIdPreimageBase {
    readonly type: "envelopeTypeContractId";
    readonly contractId: HashIdPreimageContractId;
    constructor(contractId: HashIdPreimageContractId);
    get value(): HashIdPreimageContractId;
    toXdrObject(): Extract<HashIdPreimageWire, {
        type: 8;
    }>;
}
export declare class HashIdPreimageSorobanAuthorizationArm extends HashIdPreimageBase {
    readonly type: "envelopeTypeSorobanAuthorization";
    readonly sorobanAuthorization: HashIdPreimageSorobanAuthorization;
    constructor(sorobanAuthorization: HashIdPreimageSorobanAuthorization);
    get value(): HashIdPreimageSorobanAuthorization;
    toXdrObject(): Extract<HashIdPreimageWire, {
        type: 9;
    }>;
}
export declare class HashIdPreimageSorobanAuthorizationWithAddressArm extends HashIdPreimageBase {
    readonly type: "envelopeTypeSorobanAuthorizationWithAddress";
    readonly sorobanAuthorizationWithAddress: HashIdPreimageSorobanAuthorizationWithAddress;
    constructor(sorobanAuthorizationWithAddress: HashIdPreimageSorobanAuthorizationWithAddress);
    get value(): HashIdPreimageSorobanAuthorizationWithAddress;
    toXdrObject(): Extract<HashIdPreimageWire, {
        type: 10;
    }>;
}
export type HashIdPreimage = HashIdPreimageOpId | HashIdPreimagePoolRevokeOpId | HashIdPreimageContractIdArm | HashIdPreimageSorobanAuthorizationArm | HashIdPreimageSorobanAuthorizationWithAddressArm;
export declare const HashIdPreimage: typeof HashIdPreimageBase;
export {};
