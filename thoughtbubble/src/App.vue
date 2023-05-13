<template>
<v-app>
    <v-navigation-drawer :class="{'open': openMenu}" absolute temporary>
        <v-container cols="12">
            <v-row justify="start" no-gutters>
                <v-app-bar-nav-icon @click="openMenu = !openMenu"></v-app-bar-nav-icon>
            </v-row>
        </v-container>

        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Thought Bubble
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Menu
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in menu" @click="openMenu = !openMenu" :key="item.title" link :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
        <v-app-bar-nav-icon @click="openMenu = !openMenu"></v-app-bar-nav-icon>

        <v-toolbar-title>
            thought bubble
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon v-for="(item, i) of panel" :key="i" :to="item.route">
            <v-icon>{{item.icon}}</v-icon>
        </v-btn>
    </v-toolbar>

    <v-content>
        <router-view></router-view>
    </v-content>
</v-app>
</template>

<script>
export default {
    data: () => ({
        openMenu: false,
        panel: [{
                icon: 'mdi-bank',
                route: '/bank'
            },
            {
                icon: 'mdi-anvil',
                route: '/create-post'
            }
        ],
        menu: [{
                icon: 'mdi-home',
                title: 'Home',
                route: '/'
            },
            {
                icon: 'mdi-bank',
                route: '/bank',
                title: 'Bank'
            },
            {
                icon: 'mdi-anvil',
                route: '/create-post',
                title: 'Add Thought'
            },
            {
                icon: 'mdi-cash-usd',
                route: '/support',
                title: 'Support'
            }
        ]
    }),
    created() {
        this.$store.dispatch('loadArticles')
    }
};
</script>

<style>

.open {
    transform: translateX(0%) !important;
}

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
* {
    font-family: 'Montserrat', sans-serif !important;
}
</style>
