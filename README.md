[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-welcome/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-welcome/actions/workflows/devnet-bundle-snapshot.yml)
![Static Badge](https://img.shields.io/badge/requires_map.apps-4.12.0-e5e5e5?labelColor=%233E464F&logoColor=%23e5e5e5)
![Static Badge](https://img.shields.io/badge/tested_for_map.apps-4.18.0-%20?labelColor=%233E464F&color=%232FC050)
# Welcome bundle
The Welcome Bundle is a widget for displaying a welcome screen. You can either configure it as a disclaimer, with a "I agree"-checkbox, or as a general start screen with a "Do-Not-Show-Again"-checkbox.

## Sample app
https://demos.conterra.de/mapapps/resources/apps/downloads_welcome/index.html

![Screenshot App](https://github.com/conterra/mapapps-welcome/blob/main/screenshot.JPG)

## Installation guide
1. Add the bundle `dn_welcome` to your app.
2. Customize the content of the welcome window as described in the [Documentation](https://github.com/conterra/mapapps-welcome/tree/main/src/main/js/bundles/dn_welcome) of the `dn_welcome` bundle.

## Development guide
Run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
