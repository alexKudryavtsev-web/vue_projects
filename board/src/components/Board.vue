<template>
<div id="app">
    <div class="canvas-area" ref="area">
        <canvas ref="canvas" @click="clickCanvas" @mousemove="moveOnCanvas" width="1000" height="540"></canvas>
        <div class="el" ref="el" v-show="state == 'text'" :style="text">{{setting.text.text}}</div>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        mouseClicked: false
    }),
    props: {
        setting: {
            type: Object,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    },
    methods: {
        clickCanvas(e) {
            let canvas = this.$refs.canvas
            let cnxt = canvas.getContext('2d')

            let el = this.$refs.el

            if (this.state == 'brush' || this.state == 'eraser') {
                this.mouseClicked = !this.mouseClicked
            } else {
                el.style.top = e.offsetY + 'px'
                el.style.left = e.offsetX + 'px'
            }
        },
        moveOnCanvas(e) {
            let canvas = this.$refs.canvas
            let cnxt = canvas.getContext('2d')

            if (this.mouseClicked) {
                if (this.state === 'eraser') {
                    let {
                        circle,
                        width
                    } = this.setting.eraser
                    this.draw('#fff', width, circle, e.offsetX, e.offsetY)
                } else if (this.state === 'brush') {
                    let {
                        color,
                        width,
                        circle
                    } = this.setting.brush
                    this.draw(color, width, circle, e.offsetX, e.offsetY)
                }
            }
        },
        draw(color, width, circle, x, y) {
            let canvas = this.$refs.canvas
            let ctx = canvas.getContext('2d')

            ctx.beginPath()
            ctx.fillStyle = color

            if (circle) {
                ctx.arc(x, y, width, 0, 2 * Math.PI)
                ctx.fill()
            } else {
                ctx.fillRect(x, y, width, width)
            }
        },
        fillText(e) {
            let canvas = this.$refs.canvas
            let el = this.$refs.el

            let {
                width,
                family,
                text,
                color,
                style
            } = this.setting.text

            let cntx = canvas.getContext('2d')

            let bold = style.includes('bold') ? 'bold' : ''
            let cursiv = style.includes('cursiv') ? 'italic' : ''

            cntx.font = `${cursiv} ${bold} ${width}px ${family}`;
            cntx.fillStyle = color

            let x = el.offsetTop + (el.offsetHeight / 4)
            let y = el.offsetLeft - (el.offsetWidth / 2)

            cntx.fillText(text, y, x)

            this.$emit('newState', 'none')
        },
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

            this.$emit('newState', 'none')
            this.mouseClicked = false
        }
    },
    computed: {
        text() {
            let {
                style,
                width,
                family,
                color
            } = this.setting.text
            return {
                fontSize: `${width}px`,
                fontWeight: style.includes('bold') ? 'bold' : '',
                fontStyle: style.includes('cursiv') ? 'italic' : '',
                fontFamily: family,
                color
            }
        }
    }
};
</script>

<style lang="less" scoped>
.canvas-area {
    width: 1000px;
    height: 540px;
    overflow: hidden;
    position: relative;

    &>.el {
        position: absolute;
        line-height: 1em;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%)
    }

    &>canvas {
        background-color: #fff;
    }
}
</style>
