<template>
<v-app>
    <v-container>
        <v-row>
            <v-col>
                <h1>About Thought Bubble</h1>
            </v-col>
        </v-row>
        <v-row>
            <p>
                thought bubble - it is public repository, where users can anonymous add different thoughts
            </p>
        </v-row>

        <v-row>
            <p>
                You must obey rules our community:
                <ul>
                    <li v-for="(rule, i) of rules" :key="i">{{rule}}</li>
                </ul>
            </p>
        </v-row>

        <v-row>
            <v-col>
                <h4>
                    * Moderator could remove thought from bubble
                </h4>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <h2>
                    Anonymous
                </h2>
            </v-col>

            <p>
                Moderator don't know, who wrote anyone though, he is can only remove thought from bubbles. If thought illegal, then he only will delete thoughts
            </p>
        </v-row>

        <v-row>
            <v-col cols="12">
                <h2>
                    Tech
                </h2>
            </v-col>

            <p>
                Site make on:
                <ul>
                    <li v-for="(item, i) of tech" :key="i">
                        {{item}}
                    </li>
                </ul>
            </p>
        </v-row>
    </v-container>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            rules: [
                'no eroticism',
                'no hatred for a certain group of people',
                'not write about illegal activities'
            ],
            tech: [
                'Vue.js',
                'Vue-router',
                'Vuex',
                'Vue-resource',
                'Showdown.js',
                'Firebase | JSON-server'
            ]
        }
    }
}
</script>
