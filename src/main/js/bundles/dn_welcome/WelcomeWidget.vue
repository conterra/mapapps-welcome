<template>
    <div id="app">
        <v-app id="inspire">
            <v-container grid-list-md text-xs-center fill-height fluid>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card color="primary">
                            <v-card-title class="title">{{title}}</v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card dark>
                            <v-card-text>
                                {{infoText}}
                            </v-card-text>
                            <v-flex xs12>
                                <v-card-media v-if="imgUrl"
                                              class="white--text"
                                              height='170px'
                                              v-bind:src="imgUrl"
                                >
                                    <v-container fill-height fluid>
                                        <v-layout fill-height>
                                        </v-layout>
                                    </v-container>
                                </v-card-media>
                            </v-flex>
                            <v-checkbox v-if="accept" v-bind:label="checkboxText" v-model="checkBox"
                                        color='blue'></v-checkbox>
                            <div>
                                <v-btn v-on:click="$emit('close')" v-bind:items="checkbox" color='blue'>
                                    {{buttonText}}
                                </v-btn>
                            </div>
                            <v-checkbox v-if="!accept" v-bind:label="checkboxText" v-model="checkBox"
                                        color="blue" class="text-lg-right"></v-checkbox>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
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
                i18n: {
                    type: Object,
                    default: function () {
                        return {
                            title: "Welcome Info",
                            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                            checkbox: "I accept",
                            button: "Understood"
                        }
                    }
                }
            };
        },
        methods: {}

    };
</script>