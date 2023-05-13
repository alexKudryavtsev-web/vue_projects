<template>
<v-app>

    <v-container>
        <v-row>
            <v-col>
                <h1>Create Post</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field v-model="title" outlined label="title"></v-text-field>
                <v-select v-model="type" :items="types" label="type" outlined></v-select>
                <v-file-input v-model="file" accept=".md" show-size label="content"></v-file-input>
                <v-btn color="success" @click="send">Send</v-btn>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>

<script>
import Vue from 'vue'
import {
    Converter
} from 'showdown'

export default {
    data() {
        return {
            types: [
                'programming', 'biology', 'physics', 'chemistry',
                'linguistics', 'design', 'business', 'economics',
                'more'
            ],
            title: '',
            type: '',
            file: undefined
        }
    },
    methods: {
        async send() {
            let cnvr = new Converter()

            this.$store.dispatch('addPost', {
                title: this.title,
                type: this.type,
                content: cnvr.makeHtml(await this.file.text()),
                date: new Date().toISOString().split('T')[0]
            })
            this.title = ''
            this.type = ''
            this.file = undefined
        }
    },
}
</script>
