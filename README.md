# Welcome Widget
The Welcome Bundle is a new Widget for displaying a Welcome Screen. You can either configure it as a disclaimer, with a "I agree"-checkbox, or as a general start screen with a "Do-Not-Show-Again"-checkbox.


:heavy_exclamation_mark: desktop-only

Sample App
------------------
https://demos.conterra.de/mapapps/resources/apps/downloads_welcome/index.html

![Screenshot Sample App Welcome](https://github.com/conterra/mapapps-basemap-fader/blob/master/welcome_screenshot.JPG)

Installation Guide
------------------
**Requirement: map.apps 4.2.0**

Add the bundle "dn_welcome" to your map.apps 4 app. 

To customize the window add the following code to your app.json 


  "bundles": {
    "dn_welcome": {
      "WelcomeWidgetFactory":{
        "title": "Your title",
        "infotext": "Your text",
        "buttonText":"Your button text",
        "checkboxText": "Your checkbox text",
        "accept": false, //if set to true the window will be transformed to a disclaimer window
        "imgUrl": "Your Image URL"
      }
    },
 
 Or simply adjust the attributes during the live-configuration.
 To adjust the size of the window find the following part in your app.json
     
     "templates": {
       "TemplateModel": {
         "_templates": [
           {
             "name": "seasons",
             "widgets": [
             ]
           }
         ]
       }
     },
     
and add the following code:

               {
                 "widgetRole": "welcomeInfo",
                 "window": {
                   "marginBox": {
                     "w": your width,
                     "h": your height
                   }
                 }
               }
 
 
#### Restrictions
You have to enable cookies in your browser, if you want to set the information window to do-not-show-again.


Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
