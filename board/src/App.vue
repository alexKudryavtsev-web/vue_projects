<template>
<v-app style="background-color: #999999;">
    <div>
        <v-app-bar>
            <v-btn @click="state = btn.state;" @dblclick="openMenu = !openMenu; state = btn.state" v-for="btn of btns" :color="btn.color" :key="btn.icon" dark>
                <v-icon size="28" v-text="btn.icon"></v-icon>
            </v-btn>
            <v-btn @click="state = btn.state; openMenu = !openMenu;" v-for="btn of onclickbtn" :color="btn.color" :key="btn.icon" dark>
                <v-icon size="28" v-text="btn.icon"></v-icon>
            </v-btn>
            
            <v-spacer></v-spacer>

            <v-btn color="success" @click="save" width="100">save</v-btn>
            <v-btn color="primary" @click="clear" width="100">delete</v-btn>
            <v-btn color="yellow" @click="fill" v-show="state === 'text'" width="100">fill</v-btn>
        </v-app-bar>
    </div>

    <board ref="board" :setting="setting" :state="state" @newState="changeState" id="board" />

    <v-navigation-drawer style="width: 500px;" :class="{'open': openMenu}" absolute temporary>

        <div id="menu">
            <v-app-bar-nav-icon @click="openMenu = !openMenu;"></v-app-bar-nav-icon>
            <h3>{{state}}</h3>
        </div>

        <brush :setting="setting.brush" v-if="state === 'brush'" />
        <txt :setting="setting.text" v-else-if="state === 'text'" />
        <eraser :setting="setting.eraser"  v-else-if="state === 'eraser'" />

    </v-navigation-drawer>

</v-app>
</template>

<script>
import Board from './components/Board';
import Brush from './components/Brush';
import Txt from './components/Text';
import Eraser from './components/Eraser';

export default {
    components: {
        Board,
        Brush,
        Txt,
        Eraser,
    },
    data: () => ({
        openMenu: false,
        state: 'brush',
        btns: [{
                icon: 'mdi-brush',
                color: 'primary',
                state: 'brush'
            },
            {
                icon: 'mdi-broom',
                color: 'purple',
                state: 'eraser'
            }
        ],
        onclickbtn: [{
                icon: 'mdi-message-text',
                color: 'indigo',
                state: 'text'
            }
        ],
        setting: {
            brush: {
                width: 10,
                color: '#111',
                circle: false
            },
            eraser: {
                width: 10,
                circle: false
            },
            text: {
                text: 'Some Text',
                family: 'Impact',
                width: 18,
                decoration: '',
                style: '',
                color: '#111'
            }
        }
    }),
    methods: {
        changeState(val) {
            this.state = val;
        },
        clear() {
            this.$refs.board.clear()
        },
        save() {
            this.$refs.board.save()
        },
        fill() {
            this.$refs.board.fillText()
        }
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}

.open {
    transform: translateX(0%) !important;
}

.setting {
    height: 100vh;
}

.setting-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.setting-body>* {
    margin: 20px;
}

html,
body {
    padding: 0;
    margin: 0;

    height: 100vh;
    background-color: #999;
}

.v-btn {
    margin: 10px;
}

#menu {
    display: flex;
    align-items: center;
}

#board {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
