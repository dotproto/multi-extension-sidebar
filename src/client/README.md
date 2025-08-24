# Client libraires

Client libraries are exposed as ES Module files in this directory using the pattern `lib-<VERSION>.mjs`. 

We don't provide a `lib.mjs` becuase there is no single stable version of the client librarty.
Extnesion authors that want to integrate with MES need to know what version they're using or explicitly opt into a dynamic version like `lib-latest`. 

## `lib-latest.mjs`

Always references the latest version of the MES client library.
This can be useful at development time but it SHOULD NOT be used in production extensions.

## `lib-0.1.mjs`

IDK `¯\_(ツ)_/¯`


# Internals

The primary entry point for the client library is `core.mjs`.
This file's primary export, the `ClientLibrary` class, is responsible for boostrapping a given version of the client library.
Each individual library version is downstream of this common library