<template>
    <div class="welcome">
        <div class="top">
            <v-toolbar
                class="primary title"
                dense>
                <v-toolbar-title>{{ title }}</v-toolbar-title>
            </v-toolbar>
        </div>
        <div class="center">
            <v-container
                grid-list-md
                class="pa-1">
                <v-img
                    v-if="imgUrl"
                    :height="imgHeight"
                    :src="imgUrl"/>
                <v-card-title v-html="infoText"/>
            </v-container>
        </div>
        <div class="bottom">
            <v-container
                v-if="accept"
                grid-list-md
                text-xs-center
                class="pa-1">
                <v-checkbox
                    v-if="accept"
                    :label="checkboxText"
                    v-model="checkBox"
                    class="pa-2"
                    color="primary"
                    hide-details/>
                <v-btn
                    :disabled="!checkBox"
                    ripple
                    color="primary"
                    @click="$emit('close')">
                    {{ buttonText }}
                </v-btn>
            </v-container>
            <v-container
                v-else
                grid-list-md
                text-xs-center
                class="pa-1">
                <v-btn
                    ripple
                    color="primary"
                    @click="$emit('close')">
                    {{ buttonText }}
                </v-btn>
                <v-checkbox
                    v-if="!accept"
                    :label="checkboxText"
                    v-model="checkBox"
                    class="pa-2"
                    color="primary"
                    hide-details/>
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
        }
    };
</script>
