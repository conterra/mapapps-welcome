///
/// Copyright (C) 2024 con terra GmbH (info@conterra.de)
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///         http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import WelcomeWidget from "./WelcomeWidget.ts.vue";
import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import Sanitizer from "arcgishtmlsanitizer";
import Config from "./Config";

export default class WelcomeWidgetFactory {
    #config: Config;
    #windowToggleTool: any;
    #doNotShowStorageKey = "dn_welcome.doNotShow";
    #widget: Vue | undefined;

    constructor(config?: Config) {
        this.#config = config || new Config();
    }

    activate(): void {
        this.#initComponent();
        this.#applySavedDoNotShowWindowState();
    }

    createInstance(): void | typeof VueDijit {
        if (this.#widget) {
            return VueDijit(this.#widget);
        }
    }

    #initComponent(): void {
        const config = this.#config;
        const vm = this.#widget = new Vue(WelcomeWidget);
        vm.heading = config.heading;
        vm.infoText = this.#sanitizeInfoText(config.infoText);
        vm.showButton = config.showButton;
        vm.buttonText = config.buttonText;
        vm.buttonDependsOnCheckbox = config.buttonDependsOnCheckbox;
        vm.showCheckbox = config.showCheckbox;
        vm.checkboxText = config.checkboxText;
        vm.checkboxChecked = config.checkboxChecked;
        vm.showImage = config.showImage;
        vm.imageUrl = config.imageUrl;
        vm.imageHeight = config.imageHeight;

        vm.$on('close', () => {
            if (config.showCheckbox && vm.checkboxChecked) {
                localStorage.setItem(this.#doNotShowStorageKey, "1");
            } else {
                localStorage.removeItem(this.#doNotShowStorageKey);
            }
            this.#windowToggleTool.set("active", false);
        });
    }

    #applySavedDoNotShowWindowState(): void {
        const doNotShowAgain = localStorage.getItem(this.#doNotShowStorageKey);
        if (doNotShowAgain !== "1") {
            this.#windowToggleTool.set("active", true);
        }
    }

    #sanitizeInfoText(infotext: string): string {
        return new Sanitizer().sanitize(infotext);
    }

    set config(config: Config) {
        this.#config = config;
    }

    set windowToggleTool(tool: any) {
        this.#windowToggleTool = tool;
    }
}
