<template>
<v-app id="window">
    <v-app-bar app dark>
        <h2>
            <v-icon style="position: relative; top: -3px;">
                mdi-calculator
            </v-icon>
            Calculator
        </h2>

        <v-spacer></v-spacer>

        <v-btn text v-for="item of menu" :key="item.title" :to="item.route">
            {{item.title}}
        </v-btn>
    </v-app-bar>
    <main>
        <router-view></router-view>
    </main>
</v-app>
</template>

<script>
export default {
    name: 'App',

    components: {},

    data: () => ({
        menu: [{
                title: 'classic',
                route: '/'
            }
        ]
    }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cute+Font&display=swap');
@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');

* {
    font-family: 'Titillium Web', sans-serif !important;

}

main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgb(2, 0, 36) !important;
    background: linear-gradient(104deg, rgba(2, 0, 36, 1) 0%, rgba(9, 121, 110, 1) 0%, rgba(0, 138, 255, 1) 100%) !important;
}
</style>
