<template>
    <div class="welcome">
        <div class="top">
            <v-toolbar class="primary title" dense>
                <v-toolbar-title>{{title}}</v-toolbar-title>
            </v-toolbar>
        </div>
        <div class="center">
            <v-container grid-list-md>
                <v-card-media v-if="imgUrl"
                              v-bind:height="imgHeight"
                              v-bind:src="imgUrl">
                </v-card-media>
                <v-card-title v-html="infoText">
                </v-card-title>
            </v-container>
        </div>
        <div class="bottom">
            <v-container v-if="accept" grid-list-md text-xs-center>
                <v-checkbox v-if="accept"
                            v-bind:label="checkboxText"
                            v-model="checkBox"
                            class="pa-2"
                            color="primary"
                            hide-details>
                </v-checkbox>
                <v-btn v-on:click="$emit('close')"
                       v-bind:disabled="!checkBox"
                       ripple
                       color="primary">
                    {{buttonText}}
                </v-btn>
            </v-container>
            <v-container v-else grid-list-md text-xs-center>
                <v-btn v-on:click="$emit('close')"
                       ripple
                       color="primary">
                    {{buttonText}}
                </v-btn>
                <v-checkbox v-if="!accept"
                            v-bind:label="checkboxText"
                            v-model="checkBox"
                            class="pa-2"
                            color="primary"
                            hide-details>
                </v-checkbox>
            </v-container>
        </div>
    </div>
</template>
<script>
    import Bindable from "apprt-vue/mixins/Bindable";

    export default {
        mixins: [Bindable],
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
        },
        methods: {}

    };
</script>