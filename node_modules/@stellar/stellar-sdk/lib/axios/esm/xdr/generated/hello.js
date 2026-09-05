import { struct, int32, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { Hash } from './hash.js';
import { PublicKey } from './public-key.js';
import { AuthCert } from './auth-cert.js';
import { Uint256Bytes } from './uint256-bytes.js';

class Hello extends XdrValue {
  ledgerVersion;
  overlayVersion;
  overlayMinVersion;
  networkId;
  versionStr;
  listeningPort;
  peerId;
  cert;
  nonce;
  static schema = struct("Hello", {
    ledgerVersion: uint32(),
    overlayVersion: uint32(),
    overlayMinVersion: uint32(),
    networkId: Hash.schema,
    versionStr: xdrString(100),
    listeningPort: int32(),
    peerId: PublicKey.schema,
    cert: AuthCert.schema,
    nonce: Uint256Bytes.schema
  });
  constructor(input) {
    super();
    this.ledgerVersion = input.ledgerVersion;
    this.overlayVersion = input.overlayVersion;
    this.overlayMinVersion = input.overlayMinVersion;
    this.networkId = input.networkId instanceof Hash ? input.networkId : new Hash(input.networkId);
    this.versionStr = input.versionStr instanceof XdrString ? input.versionStr : new XdrString(input.versionStr);
    this.listeningPort = input.listeningPort;
    this.peerId = input.peerId;
    this.cert = input.cert;
    this.nonce = input.nonce instanceof Uint256Bytes ? input.nonce : new Uint256Bytes(input.nonce);
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
      networkId: Hash.fromXdrObject(wire.networkId),
      versionStr: wire.versionStr,
      listeningPort: wire.listeningPort,
      peerId: PublicKey.fromXdrObject(wire.peerId),
      cert: AuthCert.fromXdrObject(wire.cert),
      nonce: Uint256Bytes.fromXdrObject(wire.nonce)
    });
  }
}

export { Hello };
//# sourceMappingURL=hello.js.map
