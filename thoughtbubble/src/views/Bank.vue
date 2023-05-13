<template>
<v-app>
    <v-container>
        <v-row justify="center">
            <v-col>
                <h1>Bank</h1>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="12">
                <v-text-field label="search on name" outlined v-model="query"></v-text-field>
            </v-col>
        </v-row>

        <v-row justify="center" no-gutters>
            <template v-for="(item, i) of filterName">
                <v-col class="ma-2" cols="12" sm="6" md="4" :key="i">
                    <v-card class="pa-3" outlined tile>
                        <v-card-title primary-title>
                            <h2>{{item.title}}</h2>
                        </v-card-title>
                        <v-card-title>
                            <h5>{{item.date}}</h5>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn color="success" :to="{
                                    name: 'articles',
                                    params: {id: item.id}
                                    }">
                                Go
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </template>
        </v-row>
    </v-container>
</v-app>
</template>

<script>
import Vue from 'vue'

export default {
    data() {
        return {
            query: ''
        }
    },
    computed: {
        articles() {
            return this.$store.state.articles
        },
        filterName() {
            return this.articles.filter(item => {
                return item.title.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
            })
        }
    }
}
</script>