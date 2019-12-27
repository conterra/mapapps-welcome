# Welcome Bundle
The Welcome Bundle is a new Widget for displaying a Welcome Screen. You can either configure it as a disclaimer, with a "I agree"-checkbox, or as a general start screen with a "Do-Not-Show-Again"-checkbox.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_welcome/index.html

![Screenshot App](https://github.com/conterra/mapapps-welcome/blob/master/screenshot.JPG)

## Installation Guide
**Requirement: map.apps 4.2.0**

1. First, you need to add the bundle "dn_welcome" to your app.
2. After that, you can customize the content of the welcome window.

[dn_welcome Documentation](https://github.com/conterra/mapapps-welcome/tree/master/src/main/js/bundles/dn_welcome)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
