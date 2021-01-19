# dn_welcome

The Welcome Bundle is a new Widget for displaying a Welcome Screen. You can either configure it as a disclaimer, with a "I agree"-checkbox, or as a general start screen with a "Do-Not-Show-Again"-checkbox.

# Usage

1. First, you need to add the bundle "dn_welcome" to your app.
2. After that, you can customize the content of the welcome window.

## Configuration Reference

### WelcomeWidgetFactory:

```json
"dn_welcome": {
    "WelcomeWidgetFactory":{
        "title": "Your title",
        "infoText": "Your text",
        "buttonText":"Your button text",
        "checkboxText": "Your checkbox text",
        "imgUrl": "Your Image URL",
        "imgHeight": "150px",
        "accept": false,
        "expirationTime": 7,
        "cookieName": "dn_welcome_hide"
    }
}
```

| Property                       | Type    | Possible Values               | Default               | Description                                                                                 |
|--------------------------------|---------|-------------------------------|-----------------------|---------------------------------------------------------------------------------------------|
| title                          | String  |                               |                       | Welcome window title.                                                                       |
| infoText                       | String  |                               |                       | Welcome window info text.                                                                   |
| buttonText                     | String  |                               |                       | Welcome window button text.                                                                 |
| checkboxText                   | String  |                               |                       | Welcome window checkbox text.                                                               |
| imgUrl                         | String  |                               |                       | Welcome window image URL.                                                                   |
| imgHeight                      | String  |                               | ```150px```           | Welcome window image height.                                                                |
| accept                         | Boolean | ```true``` &#124; ```false``` | ```true```            | Force user to accept. If set to true the window will be transformed to a disclaimer window. |
| expirationTime                 | Boolean |                               | ```365```             | Expiration time of the cookie in days.                                                      |
| cookieName                     | String  |                               | ```dn_welcome_hide``` | Name of the cookie. Changing the name will cause the cookie to be displayed again.          |

### template configuration
```json
"templates": {
    "TemplateModel": {
    "_templates": [
        {
            "name": "seasons",
            "widgets": [
                {
                    "widgetRole": "welcomeWidget",
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
```

### Restrictions
You have to enable cookies in your browser, if you want to set the information window to do-not-show-again.
