<template>
    <div id="app">
        <v-app id="inspire">
            <v-container grid-list-md text-xs-center fill-height fluid>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card color="primary">
                            <v-card-title class="title">{{title}}
                            </v-card-title>  <!--in sandbox läuft i18n nicht... {i18n.title}}-->
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card dark>
                            <v-card-text>
                                {{text}}
                            </v-card-text>
                            <v-flex xs12>
                                <v-card-media v-if="img!=''"
                                              class="white--text"
                                              height = '170px'
                                              v-bind:src="img"
                                >
                                    <v-container fill-height fluid>
                                        <v-layout fill-height>
                                        </v-layout>
                                    </v-container>
                                </v-card-media>
                            </v-flex>
                            <v-checkbox v-if="accept" v-bind:label="`${checkboxText}`" v-model="checkbox"
                                        color='blue'></v-checkbox>
                            <div>
                                <v-btn v-on:click="closeWindow" v-bind:items="checkbox" color='blue'>
                                    {{buttonText}}
                                </v-btn>
                            </div>
                            <v-checkbox v-if="!accept" v-bind:label="`${checkboxText}`" v-model="checkbox"
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
            checkbox: false,
            title: "",
            text: "",
            accept: false,
            tool: {},
            img: "",
            buttonText: "",
            checkboxText: "",
            i18n: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        };
    },

    methods: {
        closeWindow: function () {
            if (this.accept) {
                if (this.checkbox) {
                    this.tool.set("active", false);

                }
            } else {
                if (this.checkbox === true) {
                    this.setCookie('doNotShowAgain', this.checkbox);
                }
                this.tool.set("active", false);
            }

        },

        setCookie: function (cookiename, cookievalue) {
            var d = new Date();
            d.setTime(d.getTime() + (14 * 24 * 60 * 60 * 1000));  //how long should the cookie be stored? cookie will be stored 14 days, change the first numbe to set a longer timevalue
            var expires = "expires=" + d.toUTCString();
            document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";  //cookiename = doNotShowAgain
        }

    }

};
</script>