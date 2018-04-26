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
    "dijit/_Widget",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/welcomeWidget.html",
    "dojo/cookie",
    "dojo/dom",
    "dojo/_base/fx",
    "ct/util/css",
    "ct/_lang",
    "dojo/parser",
    "dijit/form/CheckBox",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/form/Select",
    "dijit/TitlePane"


], function (declare, d_array, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, template, d_cookie) {
    return declare([_Widget, _TemplatedMixin, _WidgetsInTemplateMixin], {

        baseClass: "dnWelcomeWidget",
        templateString: template,
        _initialized: null,
        _watchHandlers: null,
        cookieKey: "doNotShowAgain",

        constructor: function () {
            this._watchHandlers = [];
        },

        postCreate: function () {
            this.inherited(arguments);
            this._checkForCookie();
        },

        startup: function () {
            this.inherited(arguments);
            this._initialized = true;
            this._checkIfAccept();
        },

        close: function () {
            if (this.accept) {
                if (this.acceptCheckbox.checked) {
                    this.tool.set('active', false);
                }
            } else {
                if (this.doNotShowAgain.checked) {
                    this.setCookie();
                } else {
                    this.deleteCookie();
                }
                this.tool.set('active', false);
            }
        },

        setCookie: function () {
            d_cookie(this.cookieKey, true, {expires: 365});
        },

        deleteCookie: function () {
            d_cookie(this.cookieKey, null, {expires: -1});
        },

        _checkForCookie: function () {
            let doNotShowAgain = d_cookie(this.cookieKey);
            if (doNotShowAgain === "true") {
                this.tool.set('active', false)
            } else {
                this.tool.set("active", true);
            }
        },
        _checkIfAccept: function () {
            if (this.accept) {
                dojo.destroy("_doNotShowAgain");
            } else {
                dojo.destroy("_accept");
            }
        },

        deactivate: function () {
            this.splashScreen._clear();
        }

    });


});