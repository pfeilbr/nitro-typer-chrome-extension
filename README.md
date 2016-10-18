# Nitro Typer Chrome Extension

Auto typer for [nitrotype.com](https://www.nitrotype.com) typing game.  Extension is activated / injected when visiting the <https://www.nitrotype.com/race> URL.  It will automatically start a new race when one has finished.  This is based on the existence of a "race" button on the page.

[extensionizr](http://extensionizr.com/) was used to create base files

## Key Files

* `src/inject/inject.js` - entry point
* `src/inject/script.js` - main logic
* `manifest.json` - metadata
* `scratchpad.js` - **this is not used**.  this contains a history of ideas and code for the extension.  For example, OCR javascript code.
