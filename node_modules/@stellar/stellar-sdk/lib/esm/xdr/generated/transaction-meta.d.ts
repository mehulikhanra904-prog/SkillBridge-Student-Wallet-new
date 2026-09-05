import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { OperationMeta, type OperationMetaWire } from "./operation-meta.js";
import { TransactionMetaV1, type TransactionMetaV1Wire } from "./transaction-meta-v1.js";
import { TransactionMetaV2, type TransactionMetaV2Wire } from "./transaction-meta-v2.js";
import { TransactionMetaV3, type TransactionMetaV3Wire } from "./transaction-meta-v3.js";
import { TransactionMetaV4, type TransactionMetaV4Wire } from "./transaction-meta-v4.js";
export type TransactionMetaWire = {
    v: 0;
    operations: OperationMetaWire[];
} | {
    v: 1;
    v1: TransactionMetaV1Wire;
} | {
    v: 2;
    v2: TransactionMetaV2Wire;
} | {
    v: 3;
    v3: TransactionMetaV3Wire;
} | {
    v: 4;
    v4: TransactionMetaV4Wire;
};
export type TransactionMetaVariantName = "operations" | "v1" | "v2" | "v3" | "v4";
/**
 * ```xdr
 * union TransactionMeta switch (int v)
 * {
 * case 0:
 *     OperationMeta operations<>;
 * case 1:
 *     TransactionMetaV1 v1;
 * case 2:
 *     TransactionMetaV2 v2;
 * case 3:
 *     TransactionMetaV3 v3;
 * case 4:
 *     TransactionMetaV4 v4;
 * };
 * ```
 */
declare abstract class TransactionMetaBase extends XdrValue {
    abstract readonly type: TransactionMetaVariantName;
    constructor();
    static readonly schema: XdrType<TransactionMetaWire>;
    static operations(operations: OperationMeta[]): TransactionMetaOperations;
    static v1(v1: TransactionMetaV1): TransactionMetaV1Arm;
    static v2(v2: TransactionMetaV2): TransactionMetaV2Arm;
    static v3(v3: TransactionMetaV3): TransactionMetaV3Arm;
    static v4(v4: TransactionMetaV4): TransactionMetaV4Arm;
    static fromXdrObject(wire: TransactionMetaWire): TransactionMeta;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionMeta variant.
     * Use this instead of `instanceof TransactionMeta`: the exported `TransactionMeta` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionMeta.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionMeta;
    abstract toXdrObject(): TransactionMetaWire;
}
export declare class TransactionMetaOperations extends TransactionMetaBase {
    readonly type: "operations";
    readonly operations: OperationMeta[];
    constructor(operations: OperationMeta[]);
    get value(): OperationMeta[];
    toXdrObject(): Extract<TransactionMetaWire, {
        v: 0;
    }>;
}
export declare class TransactionMetaV1Arm extends TransactionMetaBase {
    readonly type: "v1";
    readonly v1: TransactionMetaV1;
    constructor(v1: TransactionMetaV1);
    get value(): TransactionMetaV1;
    toXdrObject(): Extract<TransactionMetaWire, {
        v: 1;
    }>;
}
export declare class TransactionMetaV2Arm extends TransactionMetaBase {
    readonly type: "v2";
    readonly v2: TransactionMetaV2;
    constructor(v2: TransactionMetaV2);
    get value(): TransactionMetaV2;
    toXdrObject(): Extract<TransactionMetaWire, {
        v: 2;
    }>;
}
export declare class TransactionMetaV3Arm extends TransactionMetaBase {
    readonly type: "v3";
    readonly v3: TransactionMetaV3;
    constructor(v3: TransactionMetaV3);
    get value(): TransactionMetaV3;
    toXdrObject(): Extract<TransactionMetaWire, {
        v: 3;
    }>;
}
export declare class TransactionMetaV4Arm extends TransactionMetaBase {
    readonly type: "v4";
    readonly v4: TransactionMetaV4;
    constructor(v4: TransactionMetaV4);
    get value(): TransactionMetaV4;
    toXdrObject(): Extract<TransactionMetaWire, {
        v: 4;
    }>;
}
export type TransactionMeta = TransactionMetaOperations | TransactionMetaV1Arm | TransactionMetaV2Arm | TransactionMetaV3Arm | TransactionMetaV4Arm;
export declare const TransactionMeta: typeof TransactionMetaBase;
export {};
