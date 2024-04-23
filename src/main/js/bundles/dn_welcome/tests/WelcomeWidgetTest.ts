///
/// Copyright (C) 2023 con terra GmbH (info@conterra.de)
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

import module from "module";
import { assert } from "chai";
import WelcomeWidget from "../WelcomeWidget.ts.vue";
import "vue-test-support/initVue"; // This registers Vuetify in Vue
import { mount } from "@vue/test-utils";

describe(module.id, function () {
    const elementExistenceTestCases = [
        {
            message: "Button is visible when 'showButton' is true",
            propName: "showButton", // If the data property with this name...
            propValue: true, // ...has this value...
            cssClassSelector: ".v-btn", // ...then look for the element in the Vue component under test matching this selector
            shouldExist: true // and check if the element exists
        },
        {
            message: "Button is invisible when 'showButton' is false",
            cssClassSelector: ".v-btn",
            propName: "showButton",
            propValue: false,
            shouldExist: false
        },
        {
            message: "Checkbox is visible when 'showCheckbox' is true",
            cssClassSelector: ".v-input--checkbox",
            propName: "showCheckbox",
            propValue: true,
            shouldExist: true
        },
        {
            message: "Checkbox is invisible when 'showCheckbox' is false",
            cssClassSelector: ".v-input--checkbox",
            propName: "showCheckbox",
            propValue: false,
            shouldExist: false
        },
        {
            message: "Checkbox is selected when 'checkboxChecked' is true",
            cssClassSelector: ".v-input--checkbox",
            propName: "showCheckbox",
            propValue: false,
            shouldExist: false
        },
        {
            message: "Image is visible when 'showImage' is true",
            cssClassSelector: ".v-image",
            propName: "showImage",
            propValue: true,
            shouldExist: true
        },
        {
            message: "Heading should be visible if 'heading' property is set",
            cssClassSelector: "h3",
            propName: "heading",
            propValue: "Welcome",
            shouldExist: true
        },
        {
            message: "Heading should be invisible if 'heading' property is an empty string",
            cssClassSelector: "h3",
            propName: "heading",
            propValue: "",
            shouldExist: false
        },
        {
            message: "Info text should be visible if 'infoText' property is set",
            cssClassSelector: ".dn-welcome-widget__info-text",
            propName: "infoText",
            propValue: "Lorem ipsum",
            shouldExist: true
        },
        {
            message: "Info text should be invisible if 'infoText' property is an empty string",
            cssClassSelector: ".dn-welcome-widget__info-text",
            propName: "infoText",
            propValue: "",
            shouldExist: false
        },
        {
            message: "When 'infoTextUrl' is set, the iframe should be visible",
            cssClassSelector: ".dn-welcome-widget__info-text--iframe",
            propName: "infoTextUrl",
            propValue: "https://www.example.com",
            shouldExist: true
        },
        {
            message: "When 'infoTextUrl' is not set, the iframe should be invisible",
            cssClassSelector: ".dn-welcome-widget__info-text--iframe",
            propName: "infoTextUrl",
            propValue: "",
            shouldExist: false
        }
    ];

    elementExistenceTestCases.forEach(testCase => {
        it(testCase.message, async function () {
            const wrapper = mount(WelcomeWidget);
            await wrapper.setData({
                [testCase.propName]: testCase.propValue
            });

            const element = wrapper.find(testCase.cssClassSelector);
            assert.equal(element.exists(), testCase.shouldExist);
        });

    });

    it("When 'buttonDependsOnCheckbox' is true and checkbox is not checked, the button should be disabled", async function () {
        const wrapper = mount(WelcomeWidget);
        await wrapper.setData({
            buttonDependsOnCheckbox: true,
            checkboxChecked: false
        });

        const buttonWrapper = wrapper.findComponent({ name: 'v-btn' });
        assert.isTrue(buttonWrapper.vm.$props.disabled);
    });

    it("When 'buttonDependsOnCheckbox' is true and checkbox is checked, the button should be enabled", async function () {
        const wrapper = mount(WelcomeWidget);
        await wrapper.setData({
            buttonDependsOnCheckbox: true,
            checkboxChecked: true
        });

        const buttonWrapper = wrapper.findComponent({ name: 'v-btn' });
        assert.isFalse(buttonWrapper.vm.$props.disabled);
    });
});
