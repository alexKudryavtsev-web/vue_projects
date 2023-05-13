<template>
<div id="app">
    <button @click="clear">clear</button>

    <canvas width="1000" height="500"></canvas>
    <div class="toddler" :style="styleToddler"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            left: 10,
            top: 10
        }
    },
    methods: {
        clear() {
            let canvas = document.querySelector('canvas')
            let cntx = canvas.getContext('2d')
            cntx.clearRect(0, 0, canvas.width, canvas.height)
        },
        draw() {
            let cntx = document.querySelector('canvas').getContext('2d')
            let toddler = document.querySelector('.toddler')
            
            let left = toddler.offsetLeft + this.randomInt(1, 15)
            let top = toddler.offsetTop + this.randomInt(1, 15)
            let width = this.randomInt(10, 100)

            cntx.beginPath();
            cntx.arc(left, top, width, 0, 2 * Math.PI, false);
            cntx.fillStyle = this.randomColor()
            cntx.fill()
        },
        randomInt(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        },
        randomColor() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16)
        },
        toRight() {
            if (this.left <= 908)
                this.left += 10
        },
        toLeft() {
            if (this.left != 0) 
                this.left -= 10
        },
        toTop() {
            if (this.top != 0) 
                this.top -= 10
        },
        toBottom() {
            if (this.top <= 450) 
                this.top += 10
        }
    },
    computed: {
        styleToddler() {
            return {
                left: `${this.left}px`,
                top: `${this.top}px`
            }
        }
    },
    mounted() {
        let vm = this
        document.onkeydown = function (event) {
            switch (event.keyCode) {
                case 37:
                    vm.toLeft()
                    vm.draw()
                    break
                case 38:
                    vm.toTop()
                    vm.draw()
                    break
                case 39:
                    vm.toRight()
                    vm.draw()
                    break
                case 40:
                    vm.toBottom()
                    vm.draw()
                    break
            }
        };
    }
}
</script>

<style lang="less" scoped>
#app {
    background-color: white;
    border-radius: 8px;
    position: relative;
    width: 1000px;
    height: 500px;

    &>.toddler {
        position: absolute;
        background-image: url(https://avatanplus.com/files/resources/original/5856a78b88509159127e7926.png);
        background-size: 100%;
        width: 95px;
        height: 50px;
    }
}
</style>
