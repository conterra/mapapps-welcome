<!--

    Copyright (C) 2022 con terra GmbH (info@conterra.de)

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

            http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

-->

<template>
    <div class="welcome">
        <div class="top">
            <v-toolbar
                class="primary title"
                dense
            >
                <v-toolbar-title>{{ title }}</v-toolbar-title>
            </v-toolbar>
        </div>
        <div class="center">
            <v-container
                grid-list-md
                class="pa-1"
            >
                <v-img
                    v-if="imgUrl"
                    :height="imgHeight"
                    :src="imgUrl"
                />
                <v-card-title>{{ infoText }}</v-card-title>
            </v-container>
        </div>
        <div class="bottom">
            <v-container
                v-if="accept"
                grid-list-md
                text-xs-center
                class="pa-1"
            >
                <v-checkbox
                    v-if="accept"
                    v-model="checkBox"
                    :label="checkboxText"
                    class="pa-2"
                    color="primary"
                    hide-details
                />
                <v-btn
                    :disabled="!checkBox"
                    ripple
                    color="primary"
                    @click="$emit('close')"
                >
                    {{ buttonText }}
                </v-btn>
            </v-container>
            <v-container
                v-else
                grid-list-md
                text-xs-center
                class="pa-1"
            >
                <v-btn
                    ripple
                    color="primary"
                    @click="$emit('close')"
                >
                    {{ buttonText }}
                </v-btn>
                <v-checkbox
                    v-if="!accept"
                    v-model="checkBox"
                    :label="checkboxText"
                    class="pa-2"
                    color="primary"
                    hide-details
                />
            </v-container>
        </div>
    </div>
</template>
<script>

    export default {
        data: function () {
            return {
                checkBox: false,
                accept: false,
                title: "",
                infoText: "",
                buttonText: "",
                checkboxText: "",
                imgUrl: "",
                imgHeight: "150px"
            };
        }
    };
</script>
