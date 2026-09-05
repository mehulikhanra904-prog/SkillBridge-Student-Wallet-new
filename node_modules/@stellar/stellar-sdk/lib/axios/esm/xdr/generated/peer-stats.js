import { struct, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { PublicKey } from './public-key.js';

class PeerStats extends XdrValue {
  id;
  versionStr;
  messagesRead;
  messagesWritten;
  bytesRead;
  bytesWritten;
  secondsConnected;
  uniqueFloodBytesRecv;
  duplicateFloodBytesRecv;
  uniqueFetchBytesRecv;
  duplicateFetchBytesRecv;
  uniqueFloodMessageRecv;
  duplicateFloodMessageRecv;
  uniqueFetchMessageRecv;
  duplicateFetchMessageRecv;
  static schema = struct("PeerStats", {
    id: PublicKey.schema,
    versionStr: xdrString(100),
    messagesRead: uint64(),
    messagesWritten: uint64(),
    bytesRead: uint64(),
    bytesWritten: uint64(),
    secondsConnected: uint64(),
    uniqueFloodBytesRecv: uint64(),
    duplicateFloodBytesRecv: uint64(),
    uniqueFetchBytesRecv: uint64(),
    duplicateFetchBytesRecv: uint64(),
    uniqueFloodMessageRecv: uint64(),
    duplicateFloodMessageRecv: uint64(),
    uniqueFetchMessageRecv: uint64(),
    duplicateFetchMessageRecv: uint64()
  });
  constructor(input) {
    super();
    this.id = input.id;
    this.versionStr = input.versionStr instanceof XdrString ? input.versionStr : new XdrString(input.versionStr);
    this.messagesRead = input.messagesRead;
    this.messagesWritten = input.messagesWritten;
    this.bytesRead = input.bytesRead;
    this.bytesWritten = input.bytesWritten;
    this.secondsConnected = input.secondsConnected;
    this.uniqueFloodBytesRecv = input.uniqueFloodBytesRecv;
    this.duplicateFloodBytesRecv = input.duplicateFloodBytesRecv;
    this.uniqueFetchBytesRecv = input.uniqueFetchBytesRecv;
    this.duplicateFetchBytesRecv = input.duplicateFetchBytesRecv;
    this.uniqueFloodMessageRecv = input.uniqueFloodMessageRecv;
    this.duplicateFloodMessageRecv = input.duplicateFloodMessageRecv;
    this.uniqueFetchMessageRecv = input.uniqueFetchMessageRecv;
    this.duplicateFetchMessageRecv = input.duplicateFetchMessageRecv;
  }
  toXdrObject() {
    return {
      id: this.id.toXdrObject(),
      versionStr: this.versionStr,
      messagesRead: this.messagesRead,
      messagesWritten: this.messagesWritten,
      bytesRead: this.bytesRead,
      bytesWritten: this.bytesWritten,
      secondsConnected: this.secondsConnected,
      uniqueFloodBytesRecv: this.uniqueFloodBytesRecv,
      duplicateFloodBytesRecv: this.duplicateFloodBytesRecv,
      uniqueFetchBytesRecv: this.uniqueFetchBytesRecv,
      duplicateFetchBytesRecv: this.duplicateFetchBytesRecv,
      uniqueFloodMessageRecv: this.uniqueFloodMessageRecv,
      duplicateFloodMessageRecv: this.duplicateFloodMessageRecv,
      uniqueFetchMessageRecv: this.uniqueFetchMessageRecv,
      duplicateFetchMessageRecv: this.duplicateFetchMessageRecv
    };
  }
  static fromXdrObject(wire) {
    return new PeerStats({
      id: PublicKey.fromXdrObject(wire.id),
      versionStr: wire.versionStr,
      messagesRead: wire.messagesRead,
      messagesWritten: wire.messagesWritten,
      bytesRead: wire.bytesRead,
      bytesWritten: wire.bytesWritten,
      secondsConnected: wire.secondsConnected,
      uniqueFloodBytesRecv: wire.uniqueFloodBytesRecv,
      duplicateFloodBytesRecv: wire.duplicateFloodBytesRecv,
      uniqueFetchBytesRecv: wire.uniqueFetchBytesRecv,
      duplicateFetchBytesRecv: wire.duplicateFetchBytesRecv,
      uniqueFloodMessageRecv: wire.uniqueFloodMessageRecv,
      duplicateFloodMessageRecv: wire.duplicateFloodMessageRecv,
      uniqueFetchMessageRecv: wire.uniqueFetchMessageRecv,
      duplicateFetchMessageRecv: wire.duplicateFetchMessageRecv
    });
  }
}

export { PeerStats };
//# sourceMappingURL=peer-stats.js.map
