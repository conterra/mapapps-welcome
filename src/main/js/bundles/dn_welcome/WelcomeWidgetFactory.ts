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
import {InjectedReference} from "apprt-core/InjectedReference";

export default class WelcomeWidgetFactory {
    private _windowToggleTool: WindowToggleTool | undefined;
    private _tour: InjectedReference<Tour>;
    private doNotShowStorageKey = "dn_welcome.doNotShow";
    private widget: any;

    constructor(props: Partial<Config>) {
        this.widget = this.createWelcomeWidget(props);
    }

    activate(): void {
        this.applySavedDoNotShowWindowState();
    }

    createInstance(): void | typeof VueDijit {
        if (this.widget) {
            return VueDijit(this.widget);
        }
    }

    private createWelcomeWidget(config: Partial<Config>): any {
        const vm: any = new Vue(WelcomeWidget);
        vm.heading = config.heading;
        vm.infoText = config.infoText;
        vm.infoTextUrl = config.infoTextUrl;
        vm.showButton = config.showButton;
        vm.buttonText = config.buttonText;
        vm.buttonDependsOnCheckbox = config.buttonDependsOnCheckbox;
        vm.showCheckbox = config.showCheckbox;
        vm.checkboxText = config.checkboxText;
        vm.checkboxChecked = config.checkboxChecked;
        vm.showImage = config.showImage;
        vm.imageUrl = config.imageUrl;
        vm.imageHeight = config.imageHeight;

        vm.$on('click-button', () => {
            if (config.showCheckbox && vm.checkboxChecked) {
                localStorage.setItem(this.doNotShowStorageKey, "1");
            } else {
                localStorage.removeItem(this.doNotShowStorageKey);
            }
            this._windowToggleTool?.set("active", false);
            if (config.startTourOnButtonClick) {
                this.startDnIntroTour();
            }
        });

        return vm;
    }

    private applySavedDoNotShowWindowState(): void {
        const doNotShowAgain = localStorage.getItem(this.doNotShowStorageKey);
        if (doNotShowAgain !== "1") {
            this._windowToggleTool?.set("active", true);
        }
    }

    private startDnIntroTour(): void {
        if (!this._tour) {
            console.error("Could not start tour. 'dn_intro.Tour' component not available. " +
                "Did you install the latest 'dn_intro' bundle?");
        } else {
            this._tour.startTour();
        }
    }

    set windowToggleTool(tool: WindowToggleTool) {
        this._windowToggleTool = tool;
    }

    set tour(tour: Tour) {
        this._tour = tour;
    }
}

interface Config {
    heading: string;
    infoText: string;
    infoTextUrl: string;
    showButton: boolean;
    buttonText: string;
    buttonDependsOnCheckbox: boolean;
    startTourOnButtonClick: boolean;
    showCheckbox: boolean;
    checkboxText: string;
    checkboxChecked: boolean;
    showImage: boolean;
    imageUrl: string;
    imageHeight: string;
}


interface WindowToggleTool {
    set(propName: "active", value: boolean): void;
}

interface Tour {
    startTour(): void;
}
