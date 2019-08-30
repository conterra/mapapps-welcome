/*
 * Copyright (C) 2019 con terra GmbH (info@conterra.de)
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
import WelcomeWidget from "./WelcomeWidget.vue";
import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import d_cookie from "dojo/cookie";

class WelcomeWidgetFactory {

    activate() {
        this.cookieKey = "doNotShowAgain";
        this._initComponent();
        this._checkForCookie();
    }

    _initComponent() {
        const properties = this._properties;
        const vm = this.welcomeWidget = new Vue(WelcomeWidget);
        vm.checkBox = false;
        vm.accept = properties.accept;
        vm.title = properties.title;
        vm.infoText = properties.infoText;
        vm.buttonText = properties.buttonText;
        vm.checkboxText = properties.checkboxText;
        vm.imgUrl = properties.imgUrl;
        vm.imgHeight = properties.imgHeight;

        vm.$on('close', () => {
            if (vm.accept) {
                if (vm.checkBox) {
                    this._tool.set("active", false);
                }
            } else {
                if (vm.checkBox) {
                    this.setCookie();
                } else {
                    this.deleteCookie();
                }
                this._tool.set("active", false);
            }
        });
    }

    createInstance() {
        return VueDijit(this.welcomeWidget);
    }

    _checkForCookie() {
        const doNotShowAgain = d_cookie(this.cookieKey);
        if (doNotShowAgain === "true" && !this._properties.accept) {
            this.welcomeWidget.checkBox = true;
        } else {
            this._tool.set("active", true);
        }
    }

    setCookie() {
        const properties = this._properties;
        d_cookie(this.cookieKey, true, {expires: properties.expirationTime});
    }

    deleteCookie() {
        d_cookie(this.cookieKey, null, {expires: -1});
    }

}

module.exports = WelcomeWidgetFactory;
