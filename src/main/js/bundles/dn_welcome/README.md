# dn_welcome

The Welcome bundle is a widget for displaying a welcome screen. You can configure it in different ways, e.g. to use it
as a disclaimer, with an "I-agree" checkbox, or as an introductory message with a "Do-Not-Show-Again"-checkbox.

## Usage

1. Add the bundle "dn_welcome" to the `allowedBundles` property in your `app.json`.
2. Customize the content of the welcome window as described in the following section.

## Configuration reference

### `Config` component
All configuration is performed on the `Config` component as show in the following sample:

```json
{
    "dn_welcome": {
        "Config": {
            "heading": "${welcome.heading}",
            "infoText": "${welcome.infoText}",
            "infoTextUrl": "",
            "showButton": true,
            "buttonText": "${welcome.buttonText}",
            "buttonDependsOnCheckbox": true,
            "startTourOnButtonClick": false,
            "showCheckbox": true,
            "checkboxText": "${welcome.checkboxText}",
            "checkboxChecked": true,
            "showImage": true,
            "imageUrl": "resource('${app}:images/welcome.jpg')",
            "imageHeight": "300px"
        }
    }
}
```

### Including external resources

In some cases, it is helpful to be able to include text or an image from an external location.
For example, if the info text in the dialog changes frequently, it may be easier to include the text from an external HTML file.
The file can then be edited by the responsible people without requiring access to the map.apps Manager.
Including the info text from an HTML file also allows for a much more sophisticated layout, if you include CSS.

To do this, create an HTML file on a publicly accessible web server. The file should look something like this:

````html
<html>
    <body style="margin: 0;">
        <h3>Welcome IFrame</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    </body>
</html>
````

In your `app.json`, configure the `infoTextUrl` property to the URL of that HTML file:

````json
{
    "dn_welcome": {
        "Config": {
            "infoTextUrl": "https://www.example.com/resources/infotext.html"
        }
    }
}
````

The HTML file is then embedded within an Iframe in the welcome dialog.

The same is possible for images at the top of the dialog.
Simply set the `imageUrl` to the URL of an external image, e.g. https://www.example.com/resources/myimage.jpg

### Starting an introductory tour with the dn_intro bundle

If you have the `dn_intro` bundle installed and want to start an introductory tour when the user clicks the button in the welcome window, you can set the `startTourOnButtonClick` property to `true`:

```json
{
    "dn_welcome": {
        "Config": {
            "startTourOnButtonClick": true
        }
    }
}
```

See the documentation of the [dn_intro](https://github.com/conterra/mapapps-intro/blob/master/src/main/js/bundles/dn_intro/README.md) bundle for more information on how to configure the tour.

### Available properties

All of these properties are optional.

| Property                  | Type    | Possible values       | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|---------------------------|---------|-----------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `heading`                 | String  |                       |             | The heading shown below the image. If this property is set to an empty                                                                                                                                                                                                                                                                                                                                                                                                         |
| `infoText`                | String  |                       |             | The text displayed in the main content area of the window.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `infoTextUrl`             | String  |                       |             | The URL to an external HTML document that should be embedded in an iframe as info text. If this property is left empty, the iframe will not be shown.                                                                                                                                                                                                                                                                                                                          |
| `showButton`              | Boolean | `true` &#124; `false` | `true`      | Whether to show the button. If you still require a way to close the windo without using the button, you can remove `noTitleBarAndWindowTools` CSS class from the window's `windowClass` property. The window title bar containing a "close" button will then become visible. See the [templates bundle documentation](https://demos.conterra.de/mapapps/resources/jsregistry/root/templates/latest/README.md#b%3Dtemplates%3Bv%3D4.17.0%3Bf%3Dtempla%3B) for more information. |
| `buttonText`              | String  |                       |             | The label of the button.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `buttonDependsOnCheckbox` | Boolean | `true` &#124; `false` | `false`     | If `true`, the button is only enabled when the checkbox is checked. If the checkbox is not checked, the button is greyed out and cannot be clicked. Note: `showCheckbox` must be `true` for this property to have an effect.                                                                                                                                                                                                                                                   |
| `startTourOnButtonClick`  | Boolean | `true` &#124; `false` | `false`     | If `true` and the `dn_intro` bundle is installed, when clicking the button in the welcome window, the tour configured in the dn_intro bundle will be started.                                                                                                                                                                                                                                                                                                                  |
| `showCheckbox`            | Boolean | `true` &#124; `false` | `true`      | Whether to show the checkbox in the window. Note: The property `buttonDependsOnCheckbox` is ignored, if `showCheckbox` is `false`.                                                                                                                                                                                                                                                                                                                                             |
| `checkboxText`            | String  |                       |             | The label for the checkbox.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `checkboxChecked`         | Boolean | `true` &#124; `false` | `false`     | Whether the checkbox is already checked when the welcome window shows up.                                                                                                                                                                                                                                                                                                                                                                                                      |
| `showImage`               | Boolean | `true` &#124; `false` | `true`      | Whether to show an image at the top of the welcome window.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `imageUrl`                | String  |                       |             | The URL to the image shown at the top of the welcome window. Besides absolute URLs, you can use a relative URL to address an image inside the app folder: `resource('${app}:images/welcome.jpg')`                                                                                                                                                                                                                                                                              |
| `imageHeight`             | String  |                       | ```300px``` | The height of the image defined as a valid CSS dimension string.                                                                                                                                                                                                                                                                                                                                                                                                               |


### Container window configuration

Here is an example configuration from the `app.json` file to customize the containing window for the welcome widget.
- The `w` and `h` properties of the `marginBox` property are used to define the window's size in pixels.
- The window gets appended a CSS class `myCustomStyleClass` that you can define in a separate CSS file.
- The `maximizable` property is `true`, which displays a maximize button in the window's title bar.
- When `modal` is `false`, user interactions outside the area of the window will not be blocked.

```json
{
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
                                    "w": "400",
                                    "h": "600"
                                },
                                "windowClass": "myCustomStyleClass",
                                "maximizable": true,
                                "modal": false
                            }
                        }
                    ]
                }
            ]
        }
    }
}
```
