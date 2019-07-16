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
    "./WelcomeWidget"

], function (declare, WelcomeWidget, undefined) {
    return declare([], {
        _instance: undefined,

        createInstance: function () {
            var i18n = this._i18n.get().ui;
            var props = this._properties || {};
            var tool = this._tool;

            return new WelcomeWidget({
                i18n: i18n,
                tool: tool,
                _watchHandlers: null,
                imgUrl: props.imgUrl,
                checkboxText: props.checkboxText,
                buttonText: props.buttonText,
                infoText: props.infoText,
                title: props.title,
                imgHeight: props.imgHeight,
                accept: props.accept,
                expireTime: props.expireTime
            });
        }

    });
});



