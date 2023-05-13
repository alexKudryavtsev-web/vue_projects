<template>
<div id="func" :style="{backgroundColor: item.color}">
    <div class="title">{{item.name}}</div>
    <input type="text" v-model.lazy="item.body" placeholder="f(x)=">

    <div @click="$emit('remove', item.name)" class="btn">
        <v-btn fab x-small elevation="0">
            <v-icon>
                mdi-close
            </v-icon>
        </v-btn>
    </div>
</div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="less" scoped>
#func {
    display: flex;
    background-color: #ff4d4d;
    padding: 10px 5px;
    width: 300px;

    &>.title {
        flex: 3;
        text-align: center;
        color: #fff;
    }

    &>.btn {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &>input {
        flex: 5;
        outline: none;
        background-color: #fff;
        padding: 5px;
        text-align: center;
    }
}
</style>
