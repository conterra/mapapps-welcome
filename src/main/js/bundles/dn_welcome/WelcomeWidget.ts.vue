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
    <v-layout>
        <v-card>
            <v-img
                v-if="showImage"
                :height="imageHeight + 'px'"
                :src="imageUrl"
            />

            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">
                        {{ title }}
                    </h3>
                    <div v-html="infoText" />
                </div>
            </v-card-title>

            <v-card-actions>
                <v-container
                    grid-list-md
                    text-xs-center
                    class="pa-1"
                >
                    <v-checkbox
                        v-if="showCheckbox"
                        v-model="checkboxChecked"
                        :label="checkboxText"
                        class="pa-2"
                        color="primary"
                        hide-details
                    />
                    <v-btn
                        v-if="showButton"
                        :disabled="buttonDependsOnCheckbox && !checkboxChecked"
                        ripple
                        color="primary"
                        @click="$emit('close')"
                    >
                        {{ buttonText }}
                    </v-btn>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-layout>
</template>

<script lang="ts">
    export default {
        data: function (): any {
            return {
                checkboxChecked: false,
                buttonDependsOnCheckbox: false,
                title: "",
                infoText: "",
                showButton: true,
                buttonText: "",
                showCheckbox: true,
                checkboxText: "",
                showImage: true,
                imageUrl: "",
                imageHeight: 150
            };
        }
    };
</script>
