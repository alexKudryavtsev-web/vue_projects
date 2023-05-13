<template>
<div id="app">
    <canvas ref="canvas" width="375" height="120"></canvas>
    <input type="text" v-model="text" placeholder="text on captcha" class="text">

    <button class="new" @click="makeNew">new</button>
    <button class="check" @click="check">check</button>
</div>
</template>

<script>
import lib from '../captcha.js'

export default {
    data() {
        return {
            text: '',
            word: ''
        }
    },
    methods: {
        makeNew() {
            this.clear()
            this.word = lib.makeCaptcha(this.$refs.canvas)
        },
        check() {
            this.text = this.text.toLowerCase() === this.word.toLowerCase()
        },
        clear() {
            let canvas = this.$refs.canvas
            let cntx = canvas.getContext('2d')
            cntx.clearRect(0, 0, canvas.width, canvas.height)
            this.text = ''
        }
    }
}
</script>

<style lang="less">
canvas {
    grid-area: captcha;
    position: relative;
    background-color: #fff;
}

.text {
    grid-area: text;
    outline: none;
    font-size: 1em;
    border-radius: 8px;
    padding: 5px 10px;
    border: none;

    transition: 0.2s box-shadow;

    &:focus {
        box-shadow: 0px 0px 16px 3px #99ccff;
    }
}

button {
    color: white;
    border: none;
    border-radius: 4px;
    outline: none;
}

.new {
    grid-area: new;
    background-color: #6699ff;
}

.check {
    grid-area: check;
    background-color: #009933;
}

#app {
    display: grid;
    grid-template-columns: repeat(2, 180px);
    grid-template-rows: 120px 60px 40px;
    grid-template-areas:
        "captcha captcha"
        "text text"
        "new check";
    grid-gap: 15px;
}
</style>
