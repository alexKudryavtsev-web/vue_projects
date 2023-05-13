<template>
<v-app style="background-color: #f2f2f2;">
    <v-container fluid>
        <v-row style="height: 95vh;">
            <v-col sm="12" md="4">
                <field @remove="remove" @add="add" :func="func" :clear="clear" :save="save" />
            </v-col>
            <v-col sm="12" md="8" class="schedule">
                <schedule ref="schedule" :func="func" />
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>

<script>
import Schedule from './components/Schedule';
import Field from './components/Body';

export default {
    name: 'App',

    components: {
        Schedule,
        Field
    },

    data: () => ({
        openMenu: false,
        func: [],
        colors: [
            '#666699', '#999966', '#669999', '#660033',
            '#993366', '#cc6699', '#ff9933', '#009933',
            '#0099cc', '#006666', '#ff6666', '#cc99ff'
        ]
    }),
    methods: {
        save() {
            this.$refs.schedule.save()
        },
        clear() {
            this.$refs.schedule.clear()
            this.func = []
        },
        add() {
            this.func.push({
                name: `f${this.func.length+1}`,
                body: '12 + x',
                color: this.colors[Math.floor(Math.random() * this.colors.length)]
            })
        },
        remove(name) {
            let index = +name.charAt(1)
            this.func.splice(index-1, 1)

            for(let i = 0; i < this.func.length; i++) {
                this.func[i].name = 'f'+(i+1)
            }
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Cambay&display=swap');

* {
    font-family: 'Cambay', sans-serif;
}

.schedule {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
