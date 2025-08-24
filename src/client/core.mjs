import { UNSET, VERSIONS } from "./shared/constants.mjs";

export class ClientLibrary {
  constructor({version = UNSET} = {}) {
    if (version === UNSET) {
      version = VERSIONS.LATEST;
    }
    this.version = version;
  }
}
