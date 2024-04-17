# Welcome bundle
The Welcome Bundle is a widget for displaying a welcome screen. You can either configure it as a disclaimer, with a "I agree"-checkbox, or as a general start screen with a "Do-Not-Show-Again"-checkbox.

## Sample app
https://demos.conterra.de/mapapps/resources/apps/downloads_welcome/index.html

![Screenshot App](https://github.com/conterra/mapapps-welcome/blob/master/screenshot.JPG)

## Installation guide
**Requirement: map.apps 4.12.0**

1. Add the bundle `dn_welcome` to your app.
2. Customize the content of the welcome window as described in the [Documentation](https://github.com/conterra/mapapps-welcome/tree/master/src/main/js/bundles/dn_welcome) of the `dn_welcome` bundle.



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
