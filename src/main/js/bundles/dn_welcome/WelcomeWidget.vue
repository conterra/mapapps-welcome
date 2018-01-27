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
                <v-card-title>
                    {{infoText}}
                </v-card-title>
            </v-container>
        </div>
        <div class="bottom">
            <v-container grid-list-md text-xs-center>
                <v-checkbox v-if="accept"
                            v-bind:label="checkboxText"
                            v-model="checkBox"
                            class="pa-2"
                            color="primary"
                            hide-details>
                </v-checkbox>
                <v-btn v-on:click="$emit('close')"
                       v-bind:items="checkbox"
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
                <v-snackbar
                        v-model="snackbar"
                        timeout="3000"
                        color="info"
                        multi-line
                        top
                        absolute>
                    {{ i18n.snackbarText }}
                    <v-btn flat color="pink" @click.native="snackbar = false">{{i18n.close}}</v-btn>
                </v-snackbar>
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
                imgHeight: "150px",
                snackbar: false,
                i18n: {
                    type: Object,
                    default: function () {
                        return {
                            title: "Welcome Info",
                            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                            checkbox: "I accept",
                            button: "Understood",
                            snackbarText: "First you have to check the checkbox",
                            close: "Close"
                        }
                    }
                }
            };
        },
        methods: {}

    };
</script>