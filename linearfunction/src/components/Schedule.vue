<template>
<canvas ref="canvas" height="550" width="555" />
</template>

<script>
import draw from '../script/draw.js'
import calc from '../script/calc.js'

export default {
    props: {
        func: Array
    },
    methods: {
        save() {
            let canvas = this.$refs.canvas
            let url = canvas.toDataURL('.png')

            let a = document.createElement('a')

            a.setAttribute('href', url)
            a.setAttribute('download', 'img.png')

            a.click()
        },
        clear() {
            let canvas = this.$refs.canvas
            let cntx = canvas.getContext('2d')
            cntx.clearRect(0, 0, canvas.width, canvas.height)
            draw.init(canvas)
        }
    },
    mounted() {
        let canvas = this.$refs.canvas
        draw.init(canvas)
    },
    watch: {
        func: {
            deep: true,
            handler(val, old) {
                let canvas = this.$refs.canvas
                this.clear()
                for (let item of val) {
                    let [x1, y1, x2, y2] = calc.parse(item.body)

                    x1 = canvas.width / 2 + (x1 * 20)
                    y1 = canvas.height / 2 - (y1 * 20)
                    x2 = canvas.width / 2 + (x2 * 20)
                    y2 = canvas.height / 2 - (y2 * 20)

                    draw.infinityByTwoCoord(canvas, x1, y1, x2, y2, item.color)
                }
            }
        }
    }
};
</script>

<style lang="less">
canvas {
    width: 550px;
    height: 550px;
    background-color: #fff;
}
</style>
