import { KeypairSigner } from './signer.js';

const basicNodeSigner = (keypair, networkPassphrase) => {
  const { signTransaction, signAuthEntry } = new KeypairSigner(
    keypair,
    networkPassphrase
  );
  return { signTransaction, signAuthEntry };
};

export { basicNodeSigner };
//# sourceMappingURL=basic_node_signer.js.map
