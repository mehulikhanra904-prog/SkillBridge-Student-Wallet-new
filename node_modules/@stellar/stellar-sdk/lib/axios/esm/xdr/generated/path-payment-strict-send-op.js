import { struct, array, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Asset as Asset$1 } from './asset.js';
import { MuxedAccount } from './muxed-account.js';

class PathPaymentStrictSendOp extends XdrValue {
  sendAsset;
  sendAmount;
  destination;
  destAsset;
  destMin;
  path;
  static schema = struct(
    "PathPaymentStrictSendOp",
    {
      sendAsset: Asset$1.schema,
      sendAmount: int64(),
      destination: MuxedAccount.schema,
      destAsset: Asset$1.schema,
      destMin: int64(),
      path: array(Asset$1.schema, 5)
    }
  );
  constructor(input) {
    super();
    this.sendAsset = input.sendAsset;
    this.sendAmount = input.sendAmount;
    this.destination = input.destination;
    this.destAsset = input.destAsset;
    this.destMin = input.destMin;
    this.path = input.path;
  }
  toXdrObject() {
    return {
      sendAsset: this.sendAsset.toXdrObject(),
      sendAmount: this.sendAmount,
      destination: this.destination.toXdrObject(),
      destAsset: this.destAsset.toXdrObject(),
      destMin: this.destMin,
      path: this.path.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new PathPaymentStrictSendOp({
      sendAsset: Asset$1.fromXdrObject(wire.sendAsset),
      sendAmount: wire.sendAmount,
      destination: MuxedAccount.fromXdrObject(wire.destination),
      destAsset: Asset$1.fromXdrObject(wire.destAsset),
      destMin: wire.destMin,
      path: wire.path.map((w) => Asset$1.fromXdrObject(w))
    });
  }
}

export { PathPaymentStrictSendOp };
//# sourceMappingURL=path-payment-strict-send-op.js.map
