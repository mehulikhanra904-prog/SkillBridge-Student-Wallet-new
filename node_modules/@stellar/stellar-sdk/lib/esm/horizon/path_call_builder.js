import { CallBuilder } from './call_builder.js';

class PathCallBuilder extends CallBuilder {
  constructor(serverUrl, httpClient, source, destination, destinationAsset, destinationAmount) {
    super(serverUrl, httpClient);
    this.setPath("paths");
    this.url.searchParams.set("destination_account", destination);
    this.url.searchParams.set("source_account", source);
    this.url.searchParams.set("destination_amount", destinationAmount);
    const issuer = destinationAsset.getIssuer();
    if (!destinationAsset.isNative() && issuer !== void 0) {
      this.url.searchParams.set(
        "destination_asset_type",
        destinationAsset.getAssetType()
      );
      this.url.searchParams.set(
        "destination_asset_code",
        destinationAsset.getCode()
      );
      this.url.searchParams.set("destination_asset_issuer", issuer);
    } else {
      this.url.searchParams.set("destination_asset_type", "native");
    }
  }
}

export { PathCallBuilder };
//# sourceMappingURL=path_call_builder.js.map
