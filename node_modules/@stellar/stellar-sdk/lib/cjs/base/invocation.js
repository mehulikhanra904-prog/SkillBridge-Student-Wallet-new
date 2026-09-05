'use strict';

var uint8arrayExtras = require('uint8array-extras');
var asset = require('./asset.js');
var address = require('./address.js');
var scval = require('./scval.js');

function buildInvocationTree(root) {
  const fn = root.function;
  const output = {};
  switch (fn.type) {
    case "sorobanAuthorizedFunctionTypeContractFn": {
      const invokeArgs = fn.value;
      output.type = "execute";
      output.args = {
        source: address.Address.fromScAddress(invokeArgs.contractAddress).toString(),
        function: invokeArgs.functionName.toString(),
        args: invokeArgs.args.map((arg) => scval.scValToNative(arg))
      };
      break;
    }
    case "sorobanAuthorizedFunctionTypeCreateContractHostFn":
    // fallthrough: V1 just has no ctor args
    case "sorobanAuthorizedFunctionTypeCreateContractV2HostFn": {
      const createArgs = fn.value;
      const createV2 = fn.type === "sorobanAuthorizedFunctionTypeCreateContractV2HostFn";
      output.type = "create";
      const createInvocation = {};
      const exec = createArgs.executable;
      const preimage = createArgs.contractIdPreimage;
      const ctorArgs = createV2 ? {
        constructorArgs: fn.value.constructorArgs.map((arg) => scval.scValToNative(arg))
      } : {};
      if (exec.type === "contractExecutableWasm" && preimage.type === "contractIdPreimageFromAddress") {
        const details = preimage.value;
        createInvocation.type = "wasm";
        createInvocation.wasm = {
          salt: uint8arrayExtras.uint8ArrayToHex(details.salt.toBytes()),
          hash: uint8arrayExtras.uint8ArrayToHex(exec.value.value),
          address: address.Address.fromScAddress(details.address).toString(),
          ...ctorArgs
        };
      } else if (exec.type === "contractExecutableExternalRef" && preimage.type === "contractIdPreimageFromAddress") {
        const details = preimage.value;
        createInvocation.type = "external";
        createInvocation.external = {
          owner: address.Address.fromScAddress(exec.value.executableOwner).toString(),
          tag: exec.value.tag.asStringOrBytes(),
          salt: uint8arrayExtras.uint8ArrayToHex(details.salt.toBytes()),
          address: address.Address.fromScAddress(details.address).toString(),
          ...ctorArgs
        };
      } else if (exec.type === "contractExecutableStellarAsset" && preimage.type === "contractIdPreimageFromAsset") {
        createInvocation.type = "sac";
        createInvocation.asset = asset.Asset.fromOperation(preimage.value).toString();
      } else {
        throw new Error(
          `creation function appears invalid: ${JSON.stringify(fn.value)} (should be wasm+address, external ref+address, or token+asset)`
        );
      }
      output.args = createInvocation;
      break;
    }
    default:
      throw new Error(
        `unknown invocation type (${fn.type}): ${JSON.stringify(fn)}`
      );
  }
  output.invocations = root.subInvocations.map((i) => buildInvocationTree(i));
  return output;
}
function walkInvocationTree(root, callback) {
  walkHelper(root, 1, callback);
}
function walkHelper(node, depth, callback, parent) {
  if (callback(node, depth, parent) === false) {
    return;
  }
  node.subInvocations.forEach((i) => walkHelper(i, depth + 1, callback, node));
}

exports.buildInvocationTree = buildInvocationTree;
exports.walkInvocationTree = walkInvocationTree;
//# sourceMappingURL=invocation.js.map
