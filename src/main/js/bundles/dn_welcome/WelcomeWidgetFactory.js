/*
 * Copyright (C) 2017 con terra GmbH (info@conterra.de)
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
import Welcome from "./WelcomeWidget.vue";
import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import Binding from "apprt-binding/Binding";

class WelcomeWidgetFactory {

    activate() {

        this._initComponent({


            tool: this._tool,
            properties: this._properties,

        });
    }

    _initComponent({tool, properties}) {
        const vm = this.Welcome = new Vue(Welcome);
        vm.i18n = this._i18n.get().ui;
        vm.checkbox = false;
        vm.tool = tool;
        vm.title= properties.title;
        vm.text = properties.infotext;
        vm.accept = properties.accept;
        vm.img = properties.imgUrl;
        vm.buttonText = properties.buttonText
        vm.checkboxText = properties.checkboxText
        this._checkForCookie(vm);
        Binding
            .create()
            .bindTo(vm)
            .syncAll("checkbox")
            .enable();


    }

    createInstance() {
        return VueDijit(this.Welcome);
    }

    _checkForCookie(vm) {   //method for eventHandling before displaying Welcome screen

        let doNotShowAgain = this._readCookie("doNotShowAgain");
        if (doNotShowAgain !== "") {
            vm.tool.set("active", false);
            vm.checkbox = true;

        } else {
            vm.tool.set("active", true);
        }
    }

    _readCookie(cookiename) {
        var name = cookiename + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieValueArray = decodedCookie.split(';');
        for (var i = 0; i < cookieValueArray.length; i++) {
            var values = cookieValueArray[i];
            while (values.charAt(0) == ' ') {
                values = values.substring(1);
            }
            if (values.indexOf(name) == 0) {
                return values.substring(name.length, values.length);
            }
        }
        return "";
    }
}

module.exports = WelcomeWidgetFactory;