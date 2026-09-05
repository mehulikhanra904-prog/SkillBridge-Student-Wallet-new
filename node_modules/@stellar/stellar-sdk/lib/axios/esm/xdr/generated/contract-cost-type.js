import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class ContractCostType extends EnumValue {
  static wasmInsnExec = new ContractCostType("wasmInsnExec", 0);
  static memAlloc = new ContractCostType("memAlloc", 1);
  static memCpy = new ContractCostType("memCpy", 2);
  static memCmp = new ContractCostType("memCmp", 3);
  static dispatchHostFunction = new ContractCostType(
    "dispatchHostFunction",
    4
  );
  static visitObject = new ContractCostType("visitObject", 5);
  static valSer = new ContractCostType("valSer", 6);
  static valDeser = new ContractCostType("valDeser", 7);
  static computeSha256Hash = new ContractCostType(
    "computeSha256Hash",
    8
  );
  static computeEd25519PubKey = new ContractCostType(
    "computeEd25519PubKey",
    9
  );
  static verifyEd25519Sig = new ContractCostType(
    "verifyEd25519Sig",
    10
  );
  static vmInstantiation = new ContractCostType("vmInstantiation", 11);
  static vmCachedInstantiation = new ContractCostType(
    "vmCachedInstantiation",
    12
  );
  static invokeVmFunction = new ContractCostType(
    "invokeVmFunction",
    13
  );
  static computeKeccak256Hash = new ContractCostType(
    "computeKeccak256Hash",
    14
  );
  static decodeEcdsaCurve256Sig = new ContractCostType(
    "decodeEcdsaCurve256Sig",
    15
  );
  static recoverEcdsaSecp256k1Key = new ContractCostType(
    "recoverEcdsaSecp256k1Key",
    16
  );
  static int256AddSub = new ContractCostType("int256AddSub", 17);
  static int256Mul = new ContractCostType("int256Mul", 18);
  static int256Div = new ContractCostType("int256Div", 19);
  static int256Pow = new ContractCostType("int256Pow", 20);
  static int256Shift = new ContractCostType("int256Shift", 21);
  static chaCha20DrawBytes = new ContractCostType(
    "chaCha20DrawBytes",
    22
  );
  static parseWasmInstructions = new ContractCostType(
    "parseWasmInstructions",
    23
  );
  static parseWasmFunctions = new ContractCostType(
    "parseWasmFunctions",
    24
  );
  static parseWasmGlobals = new ContractCostType(
    "parseWasmGlobals",
    25
  );
  static parseWasmTableEntries = new ContractCostType(
    "parseWasmTableEntries",
    26
  );
  static parseWasmTypes = new ContractCostType("parseWasmTypes", 27);
  static parseWasmDataSegments = new ContractCostType(
    "parseWasmDataSegments",
    28
  );
  static parseWasmElemSegments = new ContractCostType(
    "parseWasmElemSegments",
    29
  );
  static parseWasmImports = new ContractCostType(
    "parseWasmImports",
    30
  );
  static parseWasmExports = new ContractCostType(
    "parseWasmExports",
    31
  );
  static parseWasmDataSegmentBytes = new ContractCostType(
    "parseWasmDataSegmentBytes",
    32
  );
  static instantiateWasmInstructions = new ContractCostType(
    "instantiateWasmInstructions",
    33
  );
  static instantiateWasmFunctions = new ContractCostType(
    "instantiateWasmFunctions",
    34
  );
  static instantiateWasmGlobals = new ContractCostType(
    "instantiateWasmGlobals",
    35
  );
  static instantiateWasmTableEntries = new ContractCostType(
    "instantiateWasmTableEntries",
    36
  );
  static instantiateWasmTypes = new ContractCostType(
    "instantiateWasmTypes",
    37
  );
  static instantiateWasmDataSegments = new ContractCostType(
    "instantiateWasmDataSegments",
    38
  );
  static instantiateWasmElemSegments = new ContractCostType(
    "instantiateWasmElemSegments",
    39
  );
  static instantiateWasmImports = new ContractCostType(
    "instantiateWasmImports",
    40
  );
  static instantiateWasmExports = new ContractCostType(
    "instantiateWasmExports",
    41
  );
  static instantiateWasmDataSegmentBytes = new ContractCostType(
    "instantiateWasmDataSegmentBytes",
    42
  );
  static sec1DecodePointUncompressed = new ContractCostType(
    "sec1DecodePointUncompressed",
    43
  );
  static verifyEcdsaSecp256r1Sig = new ContractCostType(
    "verifyEcdsaSecp256r1Sig",
    44
  );
  static bls12381EncodeFp = new ContractCostType(
    "bls12381EncodeFp",
    45
  );
  static bls12381DecodeFp = new ContractCostType(
    "bls12381DecodeFp",
    46
  );
  static bls12381G1CheckPointOnCurve = new ContractCostType(
    "bls12381G1CheckPointOnCurve",
    47
  );
  static bls12381G1CheckPointInSubgroup = new ContractCostType(
    "bls12381G1CheckPointInSubgroup",
    48
  );
  static bls12381G2CheckPointOnCurve = new ContractCostType(
    "bls12381G2CheckPointOnCurve",
    49
  );
  static bls12381G2CheckPointInSubgroup = new ContractCostType(
    "bls12381G2CheckPointInSubgroup",
    50
  );
  static bls12381G1ProjectiveToAffine = new ContractCostType(
    "bls12381G1ProjectiveToAffine",
    51
  );
  static bls12381G2ProjectiveToAffine = new ContractCostType(
    "bls12381G2ProjectiveToAffine",
    52
  );
  static bls12381G1Add = new ContractCostType("bls12381G1Add", 53);
  static bls12381G1Mul = new ContractCostType("bls12381G1Mul", 54);
  static bls12381G1Msm = new ContractCostType("bls12381G1Msm", 55);
  static bls12381MapFpToG1 = new ContractCostType(
    "bls12381MapFpToG1",
    56
  );
  static bls12381HashToG1 = new ContractCostType(
    "bls12381HashToG1",
    57
  );
  static bls12381G2Add = new ContractCostType("bls12381G2Add", 58);
  static bls12381G2Mul = new ContractCostType("bls12381G2Mul", 59);
  static bls12381G2Msm = new ContractCostType("bls12381G2Msm", 60);
  static bls12381MapFp2ToG2 = new ContractCostType(
    "bls12381MapFp2ToG2",
    61
  );
  static bls12381HashToG2 = new ContractCostType(
    "bls12381HashToG2",
    62
  );
  static bls12381Pairing = new ContractCostType("bls12381Pairing", 63);
  static bls12381FrFromU256 = new ContractCostType(
    "bls12381FrFromU256",
    64
  );
  static bls12381FrToU256 = new ContractCostType(
    "bls12381FrToU256",
    65
  );
  static bls12381FrAddSub = new ContractCostType(
    "bls12381FrAddSub",
    66
  );
  static bls12381FrMul = new ContractCostType("bls12381FrMul", 67);
  static bls12381FrPow = new ContractCostType("bls12381FrPow", 68);
  static bls12381FrInv = new ContractCostType("bls12381FrInv", 69);
  static bn254EncodeFp = new ContractCostType("bn254EncodeFp", 70);
  static bn254DecodeFp = new ContractCostType("bn254DecodeFp", 71);
  static bn254G1CheckPointOnCurve = new ContractCostType(
    "bn254G1CheckPointOnCurve",
    72
  );
  static bn254G2CheckPointOnCurve = new ContractCostType(
    "bn254G2CheckPointOnCurve",
    73
  );
  static bn254G2CheckPointInSubgroup = new ContractCostType(
    "bn254G2CheckPointInSubgroup",
    74
  );
  static bn254G1ProjectiveToAffine = new ContractCostType(
    "bn254G1ProjectiveToAffine",
    75
  );
  static bn254G1Add = new ContractCostType("bn254G1Add", 76);
  static bn254G1Mul = new ContractCostType("bn254G1Mul", 77);
  static bn254Pairing = new ContractCostType("bn254Pairing", 78);
  static bn254FrFromU256 = new ContractCostType("bn254FrFromU256", 79);
  static bn254FrToU256 = new ContractCostType("bn254FrToU256", 80);
  static bn254FrAddSub = new ContractCostType("bn254FrAddSub", 81);
  static bn254FrMul = new ContractCostType("bn254FrMul", 82);
  static bn254FrPow = new ContractCostType("bn254FrPow", 83);
  static bn254FrInv = new ContractCostType("bn254FrInv", 84);
  static bn254G1Msm = new ContractCostType("bn254G1Msm", 85);
  static schema = enumType("ContractCostType", {
    wasmInsnExec: 0,
    memAlloc: 1,
    memCpy: 2,
    memCmp: 3,
    dispatchHostFunction: 4,
    visitObject: 5,
    valSer: 6,
    valDeser: 7,
    computeSha256Hash: 8,
    computeEd25519PubKey: 9,
    verifyEd25519Sig: 10,
    vmInstantiation: 11,
    vmCachedInstantiation: 12,
    invokeVmFunction: 13,
    computeKeccak256Hash: 14,
    decodeEcdsaCurve256Sig: 15,
    recoverEcdsaSecp256k1Key: 16,
    int256AddSub: 17,
    int256Mul: 18,
    int256Div: 19,
    int256Pow: 20,
    int256Shift: 21,
    chaCha20DrawBytes: 22,
    parseWasmInstructions: 23,
    parseWasmFunctions: 24,
    parseWasmGlobals: 25,
    parseWasmTableEntries: 26,
    parseWasmTypes: 27,
    parseWasmDataSegments: 28,
    parseWasmElemSegments: 29,
    parseWasmImports: 30,
    parseWasmExports: 31,
    parseWasmDataSegmentBytes: 32,
    instantiateWasmInstructions: 33,
    instantiateWasmFunctions: 34,
    instantiateWasmGlobals: 35,
    instantiateWasmTableEntries: 36,
    instantiateWasmTypes: 37,
    instantiateWasmDataSegments: 38,
    instantiateWasmElemSegments: 39,
    instantiateWasmImports: 40,
    instantiateWasmExports: 41,
    instantiateWasmDataSegmentBytes: 42,
    sec1DecodePointUncompressed: 43,
    verifyEcdsaSecp256r1Sig: 44,
    bls12381EncodeFp: 45,
    bls12381DecodeFp: 46,
    bls12381G1CheckPointOnCurve: 47,
    bls12381G1CheckPointInSubgroup: 48,
    bls12381G2CheckPointOnCurve: 49,
    bls12381G2CheckPointInSubgroup: 50,
    bls12381G1ProjectiveToAffine: 51,
    bls12381G2ProjectiveToAffine: 52,
    bls12381G1Add: 53,
    bls12381G1Mul: 54,
    bls12381G1Msm: 55,
    bls12381MapFpToG1: 56,
    bls12381HashToG1: 57,
    bls12381G2Add: 58,
    bls12381G2Mul: 59,
    bls12381G2Msm: 60,
    bls12381MapFp2ToG2: 61,
    bls12381HashToG2: 62,
    bls12381Pairing: 63,
    bls12381FrFromU256: 64,
    bls12381FrToU256: 65,
    bls12381FrAddSub: 66,
    bls12381FrMul: 67,
    bls12381FrPow: 68,
    bls12381FrInv: 69,
    bn254EncodeFp: 70,
    bn254DecodeFp: 71,
    bn254G1CheckPointOnCurve: 72,
    bn254G2CheckPointOnCurve: 73,
    bn254G2CheckPointInSubgroup: 74,
    bn254G1ProjectiveToAffine: 75,
    bn254G1Add: 76,
    bn254G1Mul: 77,
    bn254Pairing: 78,
    bn254FrFromU256: 79,
    bn254FrToU256: 80,
    bn254FrAddSub: 81,
    bn254FrMul: 82,
    bn254FrPow: 83,
    bn254FrInv: 84,
    bn254G1Msm: 85
  });
  static fromValue(value) {
    return enumFromValue(
      "ContractCostType",
      ContractCostType.schema,
      ContractCostType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ContractCostType", ContractCostType, name);
  }
  static fromXdrObject(wire) {
    return ContractCostType.fromValue(wire);
  }
}

export { ContractCostType };
//# sourceMappingURL=contract-cost-type.js.map
