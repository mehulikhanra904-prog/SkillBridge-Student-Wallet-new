import { EnumValue } from "../values/enum-value.js";
export type ContractCostTypeWire = number;
export type ContractCostTypeName = "wasmInsnExec" | "memAlloc" | "memCpy" | "memCmp" | "dispatchHostFunction" | "visitObject" | "valSer" | "valDeser" | "computeSha256Hash" | "computeEd25519PubKey" | "verifyEd25519Sig" | "vmInstantiation" | "vmCachedInstantiation" | "invokeVmFunction" | "computeKeccak256Hash" | "decodeEcdsaCurve256Sig" | "recoverEcdsaSecp256k1Key" | "int256AddSub" | "int256Mul" | "int256Div" | "int256Pow" | "int256Shift" | "chaCha20DrawBytes" | "parseWasmInstructions" | "parseWasmFunctions" | "parseWasmGlobals" | "parseWasmTableEntries" | "parseWasmTypes" | "parseWasmDataSegments" | "parseWasmElemSegments" | "parseWasmImports" | "parseWasmExports" | "parseWasmDataSegmentBytes" | "instantiateWasmInstructions" | "instantiateWasmFunctions" | "instantiateWasmGlobals" | "instantiateWasmTableEntries" | "instantiateWasmTypes" | "instantiateWasmDataSegments" | "instantiateWasmElemSegments" | "instantiateWasmImports" | "instantiateWasmExports" | "instantiateWasmDataSegmentBytes" | "sec1DecodePointUncompressed" | "verifyEcdsaSecp256r1Sig" | "bls12381EncodeFp" | "bls12381DecodeFp" | "bls12381G1CheckPointOnCurve" | "bls12381G1CheckPointInSubgroup" | "bls12381G2CheckPointOnCurve" | "bls12381G2CheckPointInSubgroup" | "bls12381G1ProjectiveToAffine" | "bls12381G2ProjectiveToAffine" | "bls12381G1Add" | "bls12381G1Mul" | "bls12381G1Msm" | "bls12381MapFpToG1" | "bls12381HashToG1" | "bls12381G2Add" | "bls12381G2Mul" | "bls12381G2Msm" | "bls12381MapFp2ToG2" | "bls12381HashToG2" | "bls12381Pairing" | "bls12381FrFromU256" | "bls12381FrToU256" | "bls12381FrAddSub" | "bls12381FrMul" | "bls12381FrPow" | "bls12381FrInv" | "bn254EncodeFp" | "bn254DecodeFp" | "bn254G1CheckPointOnCurve" | "bn254G2CheckPointOnCurve" | "bn254G2CheckPointInSubgroup" | "bn254G1ProjectiveToAffine" | "bn254G1Add" | "bn254G1Mul" | "bn254Pairing" | "bn254FrFromU256" | "bn254FrToU256" | "bn254FrAddSub" | "bn254FrMul" | "bn254FrPow" | "bn254FrInv" | "bn254G1Msm";
/**
 * ```xdr
 * enum ContractCostType {
 *     // Cost of running 1 wasm instruction
 *     WasmInsnExec = 0,
 *     // Cost of allocating a slice of memory (in bytes)
 *     MemAlloc = 1,
 *     // Cost of copying a slice of bytes into a pre-allocated memory
 *     MemCpy = 2,
 *     // Cost of comparing two slices of memory
 *     MemCmp = 3,
 *     // Cost of a host function dispatch, not including the actual work done by
 *     // the function nor the cost of VM invocation machinary
 *     DispatchHostFunction = 4,
 *     // Cost of visiting a host object from the host object storage. Exists to
 *     // make sure some baseline cost coverage, i.e. repeatly visiting objects
 *     // by the guest will always incur some charges.
 *     VisitObject = 5,
 *     // Cost of serializing an xdr object to bytes
 *     ValSer = 6,
 *     // Cost of deserializing an xdr object from bytes
 *     ValDeser = 7,
 *     // Cost of computing the sha256 hash from bytes
 *     ComputeSha256Hash = 8,
 *     // Cost of computing the ed25519 pubkey from bytes
 *     ComputeEd25519PubKey = 9,
 *     // Cost of verifying ed25519 signature of a payload.
 *     VerifyEd25519Sig = 10,
 *     // Cost of instantiation a VM from wasm bytes code.
 *     VmInstantiation = 11,
 *     // Cost of instantiation a VM from a cached state.
 *     VmCachedInstantiation = 12,
 *     // Cost of invoking a function on the VM. If the function is a host function,
 *     // additional cost will be covered by `DispatchHostFunction`.
 *     InvokeVmFunction = 13,
 *     // Cost of computing a keccak256 hash from bytes.
 *     ComputeKeccak256Hash = 14,
 *     // Cost of decoding an ECDSA signature computed from a 256-bit prime modulus
 *     // curve (e.g. secp256k1 and secp256r1)
 *     DecodeEcdsaCurve256Sig = 15,
 *     // Cost of recovering an ECDSA secp256k1 key from a signature.
 *     RecoverEcdsaSecp256k1Key = 16,
 *     // Cost of int256 addition (`+`) and subtraction (`-`) operations
 *     Int256AddSub = 17,
 *     // Cost of int256 multiplication (`*`) operation
 *     Int256Mul = 18,
 *     // Cost of int256 division (`/`) operation
 *     Int256Div = 19,
 *     // Cost of int256 power (`exp`) operation
 *     Int256Pow = 20,
 *     // Cost of int256 shift (`shl`, `shr`) operation
 *     Int256Shift = 21,
 *     // Cost of drawing random bytes using a ChaCha20 PRNG
 *     ChaCha20DrawBytes = 22,
 *
 *     // Cost of parsing wasm bytes that only encode instructions.
 *     ParseWasmInstructions = 23,
 *     // Cost of parsing a known number of wasm functions.
 *     ParseWasmFunctions = 24,
 *     // Cost of parsing a known number of wasm globals.
 *     ParseWasmGlobals = 25,
 *     // Cost of parsing a known number of wasm table entries.
 *     ParseWasmTableEntries = 26,
 *     // Cost of parsing a known number of wasm types.
 *     ParseWasmTypes = 27,
 *     // Cost of parsing a known number of wasm data segments.
 *     ParseWasmDataSegments = 28,
 *     // Cost of parsing a known number of wasm element segments.
 *     ParseWasmElemSegments = 29,
 *     // Cost of parsing a known number of wasm imports.
 *     ParseWasmImports = 30,
 *     // Cost of parsing a known number of wasm exports.
 *     ParseWasmExports = 31,
 *     // Cost of parsing a known number of data segment bytes.
 *     ParseWasmDataSegmentBytes = 32,
 *
 *     // Cost of instantiating wasm bytes that only encode instructions.
 *     InstantiateWasmInstructions = 33,
 *     // Cost of instantiating a known number of wasm functions.
 *     InstantiateWasmFunctions = 34,
 *     // Cost of instantiating a known number of wasm globals.
 *     InstantiateWasmGlobals = 35,
 *     // Cost of instantiating a known number of wasm table entries.
 *     InstantiateWasmTableEntries = 36,
 *     // Cost of instantiating a known number of wasm types.
 *     InstantiateWasmTypes = 37,
 *     // Cost of instantiating a known number of wasm data segments.
 *     InstantiateWasmDataSegments = 38,
 *     // Cost of instantiating a known number of wasm element segments.
 *     InstantiateWasmElemSegments = 39,
 *     // Cost of instantiating a known number of wasm imports.
 *     InstantiateWasmImports = 40,
 *     // Cost of instantiating a known number of wasm exports.
 *     InstantiateWasmExports = 41,
 *     // Cost of instantiating a known number of data segment bytes.
 *     InstantiateWasmDataSegmentBytes = 42,
 *
 *     // Cost of decoding a bytes array representing an uncompressed SEC-1 encoded
 *     // point on a 256-bit elliptic curve
 *     Sec1DecodePointUncompressed = 43,
 *     // Cost of verifying an ECDSA Secp256r1 signature
 *     VerifyEcdsaSecp256r1Sig = 44,
 *
 *     // Cost of encoding a BLS12-381 Fp (base field element)
 *     Bls12381EncodeFp = 45,
 *     // Cost of decoding a BLS12-381 Fp (base field element)
 *     Bls12381DecodeFp = 46,
 *     // Cost of checking a G1 point lies on the curve
 *     Bls12381G1CheckPointOnCurve = 47,
 *     // Cost of checking a G1 point belongs to the correct subgroup
 *     Bls12381G1CheckPointInSubgroup = 48,
 *     // Cost of checking a G2 point lies on the curve
 *     Bls12381G2CheckPointOnCurve = 49,
 *     // Cost of checking a G2 point belongs to the correct subgroup
 *     Bls12381G2CheckPointInSubgroup = 50,
 *     // Cost of converting a BLS12-381 G1 point from projective to affine coordinates
 *     Bls12381G1ProjectiveToAffine = 51,
 *     // Cost of converting a BLS12-381 G2 point from projective to affine coordinates
 *     Bls12381G2ProjectiveToAffine = 52,
 *     // Cost of performing BLS12-381 G1 point addition
 *     Bls12381G1Add = 53,
 *     // Cost of performing BLS12-381 G1 scalar multiplication
 *     Bls12381G1Mul = 54,
 *     // Cost of performing BLS12-381 G1 multi-scalar multiplication (MSM)
 *     Bls12381G1Msm = 55,
 *     // Cost of mapping a BLS12-381 Fp field element to a G1 point
 *     Bls12381MapFpToG1 = 56,
 *     // Cost of hashing to a BLS12-381 G1 point
 *     Bls12381HashToG1 = 57,
 *     // Cost of performing BLS12-381 G2 point addition
 *     Bls12381G2Add = 58,
 *     // Cost of performing BLS12-381 G2 scalar multiplication
 *     Bls12381G2Mul = 59,
 *     // Cost of performing BLS12-381 G2 multi-scalar multiplication (MSM)
 *     Bls12381G2Msm = 60,
 *     // Cost of mapping a BLS12-381 Fp2 field element to a G2 point
 *     Bls12381MapFp2ToG2 = 61,
 *     // Cost of hashing to a BLS12-381 G2 point
 *     Bls12381HashToG2 = 62,
 *     // Cost of performing BLS12-381 pairing operation
 *     Bls12381Pairing = 63,
 *     // Cost of converting a BLS12-381 scalar element from U256
 *     Bls12381FrFromU256 = 64,
 *     // Cost of converting a BLS12-381 scalar element to U256
 *     Bls12381FrToU256 = 65,
 *     // Cost of performing BLS12-381 scalar element addition/subtraction
 *     Bls12381FrAddSub = 66,
 *     // Cost of performing BLS12-381 scalar element multiplication
 *     Bls12381FrMul = 67,
 *     // Cost of performing BLS12-381 scalar element exponentiation
 *     Bls12381FrPow = 68,
 *     // Cost of performing BLS12-381 scalar element inversion
 *     Bls12381FrInv = 69,
 *
 *     // Cost of encoding a BN254 Fp (base field element)
 *     Bn254EncodeFp = 70,
 *     // Cost of decoding a BN254 Fp (base field element)
 *     Bn254DecodeFp = 71,
 *     // Cost of checking a G1 point lies on the curve
 *     Bn254G1CheckPointOnCurve = 72,
 *     // Cost of checking a G2 point lies on the curve
 *     Bn254G2CheckPointOnCurve = 73,
 *     // Cost of checking a G2 point belongs to the correct subgroup
 *     Bn254G2CheckPointInSubgroup = 74,
 *     // Cost of converting a BN254 G1 point from projective to affine coordinates
 *     Bn254G1ProjectiveToAffine = 75,
 *     // Cost of performing BN254 G1 point addition
 *     Bn254G1Add = 76,
 *     // Cost of performing BN254 G1 scalar multiplication
 *     Bn254G1Mul = 77,
 *     // Cost of performing BN254 pairing operation
 *     Bn254Pairing = 78,
 *     // Cost of converting a BN254 scalar element from U256
 *     Bn254FrFromU256 = 79,
 *     // Cost of converting a BN254 scalar element to U256
 *     Bn254FrToU256 = 80,
 *     // // Cost of performing BN254 scalar element addition/subtraction
 *     Bn254FrAddSub = 81,
 *     // Cost of performing BN254 scalar element multiplication
 *     Bn254FrMul = 82,
 *     // Cost of performing BN254 scalar element exponentiation
 *     Bn254FrPow = 83,
 *      // Cost of performing BN254 scalar element inversion
 *     Bn254FrInv = 84,
 *     // Cost of performing BN254 G1 multi-scalar multiplication (MSM)
 *     Bn254G1Msm = 85
 * };
 * ```
 */
export declare class ContractCostType extends EnumValue<ContractCostTypeName> {
    static readonly wasmInsnExec: ContractCostType;
    static readonly memAlloc: ContractCostType;
    static readonly memCpy: ContractCostType;
    static readonly memCmp: ContractCostType;
    static readonly dispatchHostFunction: ContractCostType;
    static readonly visitObject: ContractCostType;
    static readonly valSer: ContractCostType;
    static readonly valDeser: ContractCostType;
    static readonly computeSha256Hash: ContractCostType;
    static readonly computeEd25519PubKey: ContractCostType;
    static readonly verifyEd25519Sig: ContractCostType;
    static readonly vmInstantiation: ContractCostType;
    static readonly vmCachedInstantiation: ContractCostType;
    static readonly invokeVmFunction: ContractCostType;
    static readonly computeKeccak256Hash: ContractCostType;
    static readonly decodeEcdsaCurve256Sig: ContractCostType;
    static readonly recoverEcdsaSecp256k1Key: ContractCostType;
    static readonly int256AddSub: ContractCostType;
    static readonly int256Mul: ContractCostType;
    static readonly int256Div: ContractCostType;
    static readonly int256Pow: ContractCostType;
    static readonly int256Shift: ContractCostType;
    static readonly chaCha20DrawBytes: ContractCostType;
    static readonly parseWasmInstructions: ContractCostType;
    static readonly parseWasmFunctions: ContractCostType;
    static readonly parseWasmGlobals: ContractCostType;
    static readonly parseWasmTableEntries: ContractCostType;
    static readonly parseWasmTypes: ContractCostType;
    static readonly parseWasmDataSegments: ContractCostType;
    static readonly parseWasmElemSegments: ContractCostType;
    static readonly parseWasmImports: ContractCostType;
    static readonly parseWasmExports: ContractCostType;
    static readonly parseWasmDataSegmentBytes: ContractCostType;
    static readonly instantiateWasmInstructions: ContractCostType;
    static readonly instantiateWasmFunctions: ContractCostType;
    static readonly instantiateWasmGlobals: ContractCostType;
    static readonly instantiateWasmTableEntries: ContractCostType;
    static readonly instantiateWasmTypes: ContractCostType;
    static readonly instantiateWasmDataSegments: ContractCostType;
    static readonly instantiateWasmElemSegments: ContractCostType;
    static readonly instantiateWasmImports: ContractCostType;
    static readonly instantiateWasmExports: ContractCostType;
    static readonly instantiateWasmDataSegmentBytes: ContractCostType;
    static readonly sec1DecodePointUncompressed: ContractCostType;
    static readonly verifyEcdsaSecp256r1Sig: ContractCostType;
    static readonly bls12381EncodeFp: ContractCostType;
    static readonly bls12381DecodeFp: ContractCostType;
    static readonly bls12381G1CheckPointOnCurve: ContractCostType;
    static readonly bls12381G1CheckPointInSubgroup: ContractCostType;
    static readonly bls12381G2CheckPointOnCurve: ContractCostType;
    static readonly bls12381G2CheckPointInSubgroup: ContractCostType;
    static readonly bls12381G1ProjectiveToAffine: ContractCostType;
    static readonly bls12381G2ProjectiveToAffine: ContractCostType;
    static readonly bls12381G1Add: ContractCostType;
    static readonly bls12381G1Mul: ContractCostType;
    static readonly bls12381G1Msm: ContractCostType;
    static readonly bls12381MapFpToG1: ContractCostType;
    static readonly bls12381HashToG1: ContractCostType;
    static readonly bls12381G2Add: ContractCostType;
    static readonly bls12381G2Mul: ContractCostType;
    static readonly bls12381G2Msm: ContractCostType;
    static readonly bls12381MapFp2ToG2: ContractCostType;
    static readonly bls12381HashToG2: ContractCostType;
    static readonly bls12381Pairing: ContractCostType;
    static readonly bls12381FrFromU256: ContractCostType;
    static readonly bls12381FrToU256: ContractCostType;
    static readonly bls12381FrAddSub: ContractCostType;
    static readonly bls12381FrMul: ContractCostType;
    static readonly bls12381FrPow: ContractCostType;
    static readonly bls12381FrInv: ContractCostType;
    static readonly bn254EncodeFp: ContractCostType;
    static readonly bn254DecodeFp: ContractCostType;
    static readonly bn254G1CheckPointOnCurve: ContractCostType;
    static readonly bn254G2CheckPointOnCurve: ContractCostType;
    static readonly bn254G2CheckPointInSubgroup: ContractCostType;
    static readonly bn254G1ProjectiveToAffine: ContractCostType;
    static readonly bn254G1Add: ContractCostType;
    static readonly bn254G1Mul: ContractCostType;
    static readonly bn254Pairing: ContractCostType;
    static readonly bn254FrFromU256: ContractCostType;
    static readonly bn254FrToU256: ContractCostType;
    static readonly bn254FrAddSub: ContractCostType;
    static readonly bn254FrMul: ContractCostType;
    static readonly bn254FrPow: ContractCostType;
    static readonly bn254FrInv: ContractCostType;
    static readonly bn254G1Msm: ContractCostType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"ContractCostType", {
        readonly wasmInsnExec: 0;
        readonly memAlloc: 1;
        readonly memCpy: 2;
        readonly memCmp: 3;
        readonly dispatchHostFunction: 4;
        readonly visitObject: 5;
        readonly valSer: 6;
        readonly valDeser: 7;
        readonly computeSha256Hash: 8;
        readonly computeEd25519PubKey: 9;
        readonly verifyEd25519Sig: 10;
        readonly vmInstantiation: 11;
        readonly vmCachedInstantiation: 12;
        readonly invokeVmFunction: 13;
        readonly computeKeccak256Hash: 14;
        readonly decodeEcdsaCurve256Sig: 15;
        readonly recoverEcdsaSecp256k1Key: 16;
        readonly int256AddSub: 17;
        readonly int256Mul: 18;
        readonly int256Div: 19;
        readonly int256Pow: 20;
        readonly int256Shift: 21;
        readonly chaCha20DrawBytes: 22;
        readonly parseWasmInstructions: 23;
        readonly parseWasmFunctions: 24;
        readonly parseWasmGlobals: 25;
        readonly parseWasmTableEntries: 26;
        readonly parseWasmTypes: 27;
        readonly parseWasmDataSegments: 28;
        readonly parseWasmElemSegments: 29;
        readonly parseWasmImports: 30;
        readonly parseWasmExports: 31;
        readonly parseWasmDataSegmentBytes: 32;
        readonly instantiateWasmInstructions: 33;
        readonly instantiateWasmFunctions: 34;
        readonly instantiateWasmGlobals: 35;
        readonly instantiateWasmTableEntries: 36;
        readonly instantiateWasmTypes: 37;
        readonly instantiateWasmDataSegments: 38;
        readonly instantiateWasmElemSegments: 39;
        readonly instantiateWasmImports: 40;
        readonly instantiateWasmExports: 41;
        readonly instantiateWasmDataSegmentBytes: 42;
        readonly sec1DecodePointUncompressed: 43;
        readonly verifyEcdsaSecp256r1Sig: 44;
        readonly bls12381EncodeFp: 45;
        readonly bls12381DecodeFp: 46;
        readonly bls12381G1CheckPointOnCurve: 47;
        readonly bls12381G1CheckPointInSubgroup: 48;
        readonly bls12381G2CheckPointOnCurve: 49;
        readonly bls12381G2CheckPointInSubgroup: 50;
        readonly bls12381G1ProjectiveToAffine: 51;
        readonly bls12381G2ProjectiveToAffine: 52;
        readonly bls12381G1Add: 53;
        readonly bls12381G1Mul: 54;
        readonly bls12381G1Msm: 55;
        readonly bls12381MapFpToG1: 56;
        readonly bls12381HashToG1: 57;
        readonly bls12381G2Add: 58;
        readonly bls12381G2Mul: 59;
        readonly bls12381G2Msm: 60;
        readonly bls12381MapFp2ToG2: 61;
        readonly bls12381HashToG2: 62;
        readonly bls12381Pairing: 63;
        readonly bls12381FrFromU256: 64;
        readonly bls12381FrToU256: 65;
        readonly bls12381FrAddSub: 66;
        readonly bls12381FrMul: 67;
        readonly bls12381FrPow: 68;
        readonly bls12381FrInv: 69;
        readonly bn254EncodeFp: 70;
        readonly bn254DecodeFp: 71;
        readonly bn254G1CheckPointOnCurve: 72;
        readonly bn254G2CheckPointOnCurve: 73;
        readonly bn254G2CheckPointInSubgroup: 74;
        readonly bn254G1ProjectiveToAffine: 75;
        readonly bn254G1Add: 76;
        readonly bn254G1Mul: 77;
        readonly bn254Pairing: 78;
        readonly bn254FrFromU256: 79;
        readonly bn254FrToU256: 80;
        readonly bn254FrAddSub: 81;
        readonly bn254FrMul: 82;
        readonly bn254FrPow: 83;
        readonly bn254FrInv: 84;
        readonly bn254G1Msm: 85;
    }>;
    static fromValue(value: number): ContractCostType;
    static fromName(name: ContractCostTypeName): ContractCostType;
    static fromXdrObject(wire: number): ContractCostType;
}
