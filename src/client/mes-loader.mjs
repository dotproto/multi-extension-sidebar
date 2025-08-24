// This file is the primary entry point for external clients to load the MES client library.
// Extensions that integrate with MES will need to copy this file into their project and call its exported `load` function to load a given version of the client library.

export const load = () => {
  const isChrome = () => {};
  const isFirefox = (() => {
    const manifest = browser.runtime.getManifest();
    return manifest.app
  })();
  // 1. Figure out what browser we're running in in order to determine how to exchange messages with the main MES extension.
  // 

};
