<template>
<div id="calc">
    <div class="item item-text">
        <input type="text" disabled v-model="expr">
    </div>
    <div class="item" :class="btn.class" v-for="btn of buttons" :key="btn.class">
        <v-btn :token="btn.token" @click="handle" icon>
            <v-icon size="46">
                {{btn.icon}}
            </v-icon>
        </v-btn>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            buttons: [{
                    class: 'item-equal',
                    icon: 'mdi-equal-box',
                    token: '='
                },
                {
                    class: 'item-clear',
                    icon: 'mdi-close-box-outline',
                    token: 'clear'
                },
                {
                    class: 'item-back',
                    icon: 'mdi-arrow-left-bold-box-outline',
                    token: 'back'
                },
                {
                    class: 'item-plus',
                    icon: 'mdi-plus',
                    token: '+'
                },
                {
                    class: 'item-minus',
                    icon: 'mdi-minus',
                    token: '-'
                },
                {
                    class: 'item-divide',
                    icon: 'mdi-slash-forward',
                    token: '/'
                },
                {
                    class: 'item-multiply',
                    icon: 'mdi-multiplication',
                    token: '*'
                },
                {
                    class: 'item-one',
                    icon: 'mdi-numeric-1-box-outline',
                    token: '1'
                },
                {
                    class: 'item-two',
                    icon: 'mdi-numeric-2-box-outline',
                    token: '2'
                },
                {
                    class: 'item-three',
                    icon: 'mdi-numeric-3-box-outline',
                    token: '3'
                },
                {
                    class: 'item-four',
                    icon: 'mdi-numeric-4-box-outline',
                    token: '4'
                },
                {
                    class: 'item-five',
                    icon: 'mdi-numeric-5-box-outline',
                    token: '5'
                },
                {
                    class: 'item-six',
                    icon: 'mdi-numeric-6-box-outline',
                    token: '6'
                },
                {
                    class: 'item-seven',
                    icon: 'mdi-numeric-7-box-outline',
                    token: '7'
                },
                {
                    class: 'item-eight',
                    icon: 'mdi-numeric-8-box-outline',
                    token: '8'
                },
                {
                    class: 'item-nine',
                    icon: 'mdi-numeric-9-box-outline',
                    token: '9'
                },
                {
                    class: 'item-zero',
                    icon: 'mdi-numeric-0-box-outline',
                    token: '0'
                },
                {
                    class: 'item-bracket',
                    icon: 'mdi-code-brackets',
                    token: '()'
                }
            ],
            expr: '2 + 2',
            history: ['2 + 2'],
            isLeft: true
        }
    },
    watch: {
        expr(val) {
            this.history.push(val)
        }
    },
    methods: {
        isArifm(token) {
            return token === '-' || token === '+' || token === '*' || token === "/"
        },
        handle(e) {
            let token = e.target.parentNode.parentNode.attributes.token.value

            if (token === '=') {

                this.expr = eval(this.expr).toString()

            } else if (token === 'clear') {

                this.expr = ''

            } else if (token === 'back') {

                this.history.splice(-1,1)
                this.expr = this.history[this.history.length-1]

            } else if (token === '()') {

                if (this.isLeft) {

                    this.expr += ' ' + '('
                    this.isLeft = false

                } else {

                    this.expr += ')'
                    this.isLeft = true

                }

            } else if (this.isArifm(token)) {

                if (this.isArifm(this.expr.charAt(this.expr.length - 2))) {

                    this.expr = this.expr.substring(0, this.expr.length - 3)

                }
                this.expr += ' ' + token + ' '

            } else {

                this.expr += token

            }
        }
    }
}
</script>

<style lang="less">
.v-icon {
    color: white !important;
}

.item {
    background-color: #333;
    color: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s background-color;

    &:hover {
        background-color: #555;
    }
}

.item-text {
    grid-area: txt;

    &>input {
        width: 100%;
        height: 100%;
        padding: 20px;
        outline: none;
        font-size: 1.2em;
    }
}

.item-equal {
    grid-area: equal
}

.item-clear {
    grid-area: clear
}

.item-back {
    grid-area: back
}

.item-plus {
    grid-area: plus
}

.item-minus {
    grid-area: minus
}

.item-multiply {
    grid-area: multiply
}

.item-divide {
    grid-area: divide
}

.item-one {
    grid-area: one
}

.item-two {
    grid-area: two
}

.item-three {
    grid-area: three
}

.item-bracket {
    grid-area: brackets
}

.item-four {
    grid-area: four
}

.item-five {
    grid-area: five
}

.item-six {
    grid-area: six
}

.item-seven {
    grid-area: seven
}

.item-eight {
    grid-area: eight
}

.item-nine {
    grid-area: nine;
}

.item-zero {
    grid-area: zero
}

#calc {
    opacity: 0.95;
    display: grid;
    grid-template-columns: repeat(6, 50px);
    grid-template-rows: 15vh;
    grid-auto-rows: 10vh;
    grid-template-areas:
        "txt txt txt txt txt txt"
        "equal equal clear clear back back"
        "one two three plus plus plus"
        "four five six minus minus minus"
        "seven eight nine divide divide divide"
        "zero brackets brackets multiply multiply multiply";
    grid-gap: 10px;
}
</style>
