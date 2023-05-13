<template>
<div class="setting">
    <h1>Linear Function</h1>

    <div class="panel">
        <v-btn @click="$emit('add')" dark fab small color="success" style="box-shadow: none;">
            <v-icon>
                mdi-plus
            </v-icon>
        </v-btn>
        <v-btn @click="save" dark fab small color="primary" style="box-shadow: none;">
            <v-icon>
                mdi-clipboard-arrow-down-outline
            </v-icon>
        </v-btn>
        <v-btn @click="clear" dark fab small color="purple" style="box-shadow: none;">
            <v-icon>
                mdi-broom
            </v-icon>
        </v-btn>
    </div>

    <func class="func" v-for="item of func" @remove="remove" :key="item.name" :item="item"/>
</div>
</template>

<script>
import Func from './Func'

export default {
    components: {
        Func
    },
    props: {
        func: Array,
        save: Function,
        clear: Function
    },
    methods: {
        remove(name) {
            this.$emit('remove', name)
        }
    }
}
</script>

<style lang="less" scoped>
.setting {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    height: 100%;

    &>.panel {
        display: flex;

        &>* {
            margin: 10px;
        }
    }

    &>.func {
        margin: 10px;
    }
    &>h1 {
        font-weight: 300;
    }
}
</style>
