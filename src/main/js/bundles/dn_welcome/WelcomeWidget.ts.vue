<!--

    Copyright (C) 2023 con terra GmbH (info@conterra.de)

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
    <v-container
        class="dn-welcome-widget"
        pa-0
    >
        <v-card
            class="dn_welcome-widget__card-main"
        >
            <v-img
                v-if="showImage"
                :height="imageHeight"
                :src="imageUrl"
            />
            <v-card-title primary-title>
                <v-container
                    column
                    pa-0
                >
                    <h3
                        v-if="heading"
                        class="headline mb-2"
                    >
                        {{ heading }}
                    </h3>
                    <iframe
                        v-if="infoTextUrl"
                        class="dn-welcome-widget__info-text--iframe"
                        title="Info Text"
                        :src="infoTextUrl"
                    />
                    <div
                        v-if="infoText"
                        class="dn-welcome-widget__info-text"
                        v-html="infoText"
                    />
                </v-container>
            </v-card-title>
            <v-card-actions>
                <v-container
                    pa-2
                    fluid
                >
                    <v-layout>
                        <v-checkbox
                            v-if="showCheckbox"
                            v-model="checkboxChecked"
                            right
                            :label="checkboxText"
                            color="primary"
                            hide-details
                        />
                    </v-layout>
                    <v-layout justify-end>
                        <v-btn
                            v-if="showButton"
                            large
                            :disabled="showCheckbox && buttonDependsOnCheckbox && !checkboxChecked"
                            ripple
                            color="primary"
                            @click="$emit('close')"
                        >
                            {{ buttonText }}
                        </v-btn>
                    </v-layout>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import Vue from "apprt-vue/Vue";

    export default Vue.extend({
        data: function (): any {
            return {
                heading: "",
                infoText: "",
                infoTextUrl: "",
                showButton: true,
                buttonText: "",
                buttonDependsOnCheckbox: false,
                showCheckbox: true,
                checkboxChecked: false,
                checkboxText: "",
                showImage: true,
                imageUrl: "",
                imageHeight: "200px"
            };
        }
    });
</script>
