import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { Curve25519Public } from './curve25519-public.js';
import { SurveyMessageCommandType } from './survey-message-command-type.js';

class SurveyRequestMessage extends XdrValue {
  surveyorPeerId;
  surveyedPeerId;
  ledgerNum;
  encryptionKey;
  commandType;
  static schema = struct(
    "SurveyRequestMessage",
    {
      surveyorPeerId: PublicKey.schema,
      surveyedPeerId: PublicKey.schema,
      ledgerNum: uint32(),
      encryptionKey: Curve25519Public.schema,
      commandType: SurveyMessageCommandType.schema
    }
  );
  constructor(input) {
    super();
    this.surveyorPeerId = input.surveyorPeerId;
    this.surveyedPeerId = input.surveyedPeerId;
    this.ledgerNum = input.ledgerNum;
    this.encryptionKey = input.encryptionKey;
    this.commandType = input.commandType;
  }
  toXdrObject() {
    return {
      surveyorPeerId: this.surveyorPeerId.toXdrObject(),
      surveyedPeerId: this.surveyedPeerId.toXdrObject(),
      ledgerNum: this.ledgerNum,
      encryptionKey: this.encryptionKey.toXdrObject(),
      commandType: this.commandType.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SurveyRequestMessage({
      surveyorPeerId: PublicKey.fromXdrObject(wire.surveyorPeerId),
      surveyedPeerId: PublicKey.fromXdrObject(wire.surveyedPeerId),
      ledgerNum: wire.ledgerNum,
      encryptionKey: Curve25519Public.fromXdrObject(wire.encryptionKey),
      commandType: SurveyMessageCommandType.fromXdrObject(wire.commandType)
    });
  }
}

export { SurveyRequestMessage };
//# sourceMappingURL=survey-request-message.js.map
