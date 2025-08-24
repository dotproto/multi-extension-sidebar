import { VERSIONS } from "./client-const.mjs";
import { ClientLibrary } from "./core.mjs";

export * from VERSIONS;
export const MESClient = new ClientLibrary({ version: VERSIONS.v0_1 });
