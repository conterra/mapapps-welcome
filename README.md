# Welcome Widget
The Welcome Bundle is a new Widget for displaying a Welcome Screen. You can either configure it as a disclaimer, with a "I agree"-checkbox, or as a general start screen with a "Do-Not-Show-Again"-checkbox.

Sample App
------------------
https://demos.conterra.de/mapapps/resources/apps/downloads_welcome/index.html

![Screenshot Sample App Welcome](https://github.com/conterra/mapapps-welcome/blob/master/Screenshot.PNG)

Installation Guide
------------------
**Requirement: map.apps 4.2.0**

1. First, you need to add the bundle "dn_welcome" to your app.
2. After that, you can customize the content of the welcome window.

#### Example:

```
"bundles": {
    "dn_welcome": {
        "WelcomeWidgetFactory":{
            "title": "Your title",
            "infoText": "Your text",
            "buttonText":"Your button text",
            "checkboxText": "Your checkbox text",
            "imgUrl": "Your Image URL",
            "imgHeight": "150px",
            "accept": false, //if set to true the window will be transformed to a disclaimer window
        }
    },
    "templates": {
        "TemplateModel": {
        "_templates": [
            {
                "name": "seasons",
                "widgets": [  
                    {
                        "widgetRole": "welcomeInfo",
                            "sublayout": [
                            "desktop",
                            "tablet_landscape",
                            "tablet_portrait"
                        ],
                        "window": {
                            "marginBox": {
                                "w": your width,
                                "h": your height
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```
     
and add the following code:

#### Configurable Components of dn_welcome:
 
###### Properties
 | Property                       | Type    | Possible Values               | Default            | Description                          |
 |--------------------------------|---------|-------------------------------|--------------------|--------------------------------------|
 | title                          | String  |                               |                    | Welcome window title                 |
 | infoText                       | String  |                               |                    | Welcome window info text             |
 | buttonText                     | String  |                               |                    | Welcome window button text           |
 | checkboxText                   | String  |                               |                    | Welcome window checkbox text         |
 | imgUrl                         | String  |                               |                    | Welcome window image URL             |
 | imgHeight                      | String  |                               |```150px```         | Welcome window image height          |
 | accept                         | Boolean |```true``` &#124; ```false```  |```true```          | Force user to accept                 |

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
