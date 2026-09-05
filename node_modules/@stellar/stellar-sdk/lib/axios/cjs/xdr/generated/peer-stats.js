'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var publicKey = require('./public-key.js');

class PeerStats extends xdrValue.XdrValue {
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
  static schema = jsXdr.struct("PeerStats", {
    id: publicKey.PublicKey.schema,
    versionStr: xdrString.xdrString(100),
    messagesRead: jsXdr.uint64(),
    messagesWritten: jsXdr.uint64(),
    bytesRead: jsXdr.uint64(),
    bytesWritten: jsXdr.uint64(),
    secondsConnected: jsXdr.uint64(),
    uniqueFloodBytesRecv: jsXdr.uint64(),
    duplicateFloodBytesRecv: jsXdr.uint64(),
    uniqueFetchBytesRecv: jsXdr.uint64(),
    duplicateFetchBytesRecv: jsXdr.uint64(),
    uniqueFloodMessageRecv: jsXdr.uint64(),
    duplicateFloodMessageRecv: jsXdr.uint64(),
    uniqueFetchMessageRecv: jsXdr.uint64(),
    duplicateFetchMessageRecv: jsXdr.uint64()
  });
  constructor(input) {
    super();
    this.id = input.id;
    this.versionStr = input.versionStr instanceof xdrString.XdrString ? input.versionStr : new xdrString.XdrString(input.versionStr);
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
      id: publicKey.PublicKey.fromXdrObject(wire.id),
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

exports.PeerStats = PeerStats;
//# sourceMappingURL=peer-stats.js.map
