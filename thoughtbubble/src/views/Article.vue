<template>
<v-app>

    <v-container>
        <h1>Title: {{date.title}}</h1>
        <h4>Date: {{date.date}}</h4>
        <h4>Type: {{date.type}}</h4>
    </v-container>
    
    <v-container>
        <div v-html="date.content"></div>
    </v-container>

</v-app>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params['id']
        }
    },
    computed: {
        date() {
            for (let post of this.$store.state.articles) {
                if (post.id === this.id) return post
            }
        }
    }
}
</script>
