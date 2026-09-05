import { struct, array, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Asset as Asset$1 } from './asset.js';
import { MuxedAccount } from './muxed-account.js';

class PathPaymentStrictReceiveOp extends XdrValue {
  sendAsset;
  sendMax;
  destination;
  destAsset;
  destAmount;
  path;
  static schema = struct(
    "PathPaymentStrictReceiveOp",
    {
      sendAsset: Asset$1.schema,
      sendMax: int64(),
      destination: MuxedAccount.schema,
      destAsset: Asset$1.schema,
      destAmount: int64(),
      path: array(Asset$1.schema, 5)
    }
  );
  constructor(input) {
    super();
    this.sendAsset = input.sendAsset;
    this.sendMax = input.sendMax;
    this.destination = input.destination;
    this.destAsset = input.destAsset;
    this.destAmount = input.destAmount;
    this.path = input.path;
  }
  toXdrObject() {
    return {
      sendAsset: this.sendAsset.toXdrObject(),
      sendMax: this.sendMax,
      destination: this.destination.toXdrObject(),
      destAsset: this.destAsset.toXdrObject(),
      destAmount: this.destAmount,
      path: this.path.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new PathPaymentStrictReceiveOp({
      sendAsset: Asset$1.fromXdrObject(wire.sendAsset),
      sendMax: wire.sendMax,
      destination: MuxedAccount.fromXdrObject(wire.destination),
      destAsset: Asset$1.fromXdrObject(wire.destAsset),
      destAmount: wire.destAmount,
      path: wire.path.map((w) => Asset$1.fromXdrObject(w))
    });
  }
}

export { PathPaymentStrictReceiveOp };
//# sourceMappingURL=path-payment-strict-receive-op.js.map
