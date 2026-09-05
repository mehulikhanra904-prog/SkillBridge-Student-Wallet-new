'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var hash = require('./hash.js');
var publicKey = require('./public-key.js');
var authCert = require('./auth-cert.js');
var uint256Bytes = require('./uint256-bytes.js');

class Hello extends xdrValue.XdrValue {
  ledgerVersion;
  overlayVersion;
  overlayMinVersion;
  networkId;
  versionStr;
  listeningPort;
  peerId;
  cert;
  nonce;
  static schema = jsXdr.struct("Hello", {
    ledgerVersion: jsXdr.uint32(),
    overlayVersion: jsXdr.uint32(),
    overlayMinVersion: jsXdr.uint32(),
    networkId: hash.Hash.schema,
    versionStr: xdrString.xdrString(100),
    listeningPort: jsXdr.int32(),
    peerId: publicKey.PublicKey.schema,
    cert: authCert.AuthCert.schema,
    nonce: uint256Bytes.Uint256Bytes.schema
  });
  constructor(input) {
    super();
    this.ledgerVersion = input.ledgerVersion;
    this.overlayVersion = input.overlayVersion;
    this.overlayMinVersion = input.overlayMinVersion;
    this.networkId = input.networkId instanceof hash.Hash ? input.networkId : new hash.Hash(input.networkId);
    this.versionStr = input.versionStr instanceof xdrString.XdrString ? input.versionStr : new xdrString.XdrString(input.versionStr);
    this.listeningPort = input.listeningPort;
    this.peerId = input.peerId;
    this.cert = input.cert;
    this.nonce = input.nonce instanceof uint256Bytes.Uint256Bytes ? input.nonce : new uint256Bytes.Uint256Bytes(input.nonce);
  }
  toXdrObject() {
    return {
      ledgerVersion: this.ledgerVersion,
      overlayVersion: this.overlayVersion,
      overlayMinVersion: this.overlayMinVersion,
      networkId: this.networkId.toXdrObject(),
      versionStr: this.versionStr,
      listeningPort: this.listeningPort,
      peerId: this.peerId.toXdrObject(),
      cert: this.cert.toXdrObject(),
      nonce: this.nonce.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new Hello({
      ledgerVersion: wire.ledgerVersion,
      overlayVersion: wire.overlayVersion,
      overlayMinVersion: wire.overlayMinVersion,
      networkId: hash.Hash.fromXdrObject(wire.networkId),
      versionStr: wire.versionStr,
      listeningPort: wire.listeningPort,
      peerId: publicKey.PublicKey.fromXdrObject(wire.peerId),
      cert: authCert.AuthCert.fromXdrObject(wire.cert),
      nonce: uint256Bytes.Uint256Bytes.fromXdrObject(wire.nonce)
    });
  }
}

exports.Hello = Hello;
//# sourceMappingURL=hello.js.map
