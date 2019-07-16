/*
 * Copyright (C) 2018 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "dojo/dom-construct",
    "dojo/cookie",
    "dijit/_Widget",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/WelcomeWidget.html",
    "dijit/form/CheckBox",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane"
], function (declare, d_array, domConstruct, d_cookie, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, template, CheckBox) {
    return declare([_Widget, _TemplatedMixin, _WidgetsInTemplateMixin], {
        baseClass: "welcomeWidget",
        templateString: template,
        cookieKey: "doNotShowAgain",

        constructor: function () {
            this.inherited(arguments);
        },

        postCreate: function () {
            this.inherited(arguments);

            var checkBox = this.checkbox = new CheckBox({
                checked: false
            });
            var labelCheckbox = domConstruct.create('label', {
                innerHTML: this.checkboxText,
                for: checkBox.id
            });

            if (this.accept) {
                domConstruct.place(checkBox.domNode, this._centerContentPane.domNode, "last");
                domConstruct.place(labelCheckbox, this._centerContentPane.domNode, "last");
            } else {
                domConstruct.place(checkBox.domNode, this._bottomContentPane.domNode, "last");
                domConstruct.place(labelCheckbox, this._bottomContentPane.domNode, "last");
            }

            this._checkForCookie();
        },

        startup: function () {
            this.inherited(arguments);
        },

        resize: function (dims) {
            this._container.resize(dims);
        },

        close: function () {
            if (this.accept) {
                if (this.checkbox.checked) {
                    this.tool.set('active', false);
                }
            } else {
                if (this.checkbox.checked) {
                    this._setCookie();
                } else {
                    this._deleteCookie();
                }
                this.tool.set('active', false);
            }
        },

        _setCookie: function () {
            d_cookie(this.cookieKey, true, {expires: this.expireTime});
        },

        _deleteCookie: function () {
            d_cookie(this.cookieKey, null, {expires: -1});
        },

        _checkForCookie: function () {
            var doNotShowAgain = d_cookie(this.cookieKey);
            if (doNotShowAgain === "true") {
                this.checkbox.set("checked", true);
            } else {
                this.tool.set("active", true);
            }
        }

    });


});
