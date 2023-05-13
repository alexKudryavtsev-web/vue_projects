<template>
<div id="app">
    <h4 class="select">{{select.date}} {{this.months[select.month]}} {{select.year}}</h4>
    <h1 class="title" style="grid-area: t">{{year}}, {{months[month]}}.</h1>

    <button style="grid-area: b" @click="back"><i class="fas fa-chevron-left"></i></button>
    <button style="grid-area: n" @click="next"><i class="fas fa-chevron-right"></i></button>

    <p class="week" v-for="(day,i) of week" :key="'md' + i">
        {{day}}
    </p>

    <div class="days" v-for="(days,i) of days" :key="i">
        <div class="day" @click="take(day)" v-for="(day,i) of days" :key="i" :class="{sel: isSelect(day), empty: day === null, today: isToday(day)}">
            {{day | onlyDate}}
        </div>
    </div>
</div>
</template>

<script>
import calendar from '../calendar'

export default {
    data() {
        return {
            months: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
            week: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            days: [],
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            select: ''
        }
    },
    methods: {
        back() {
            this.month--
            if (this.month === -1) {
                this.month = 11
                this.year--
            }
            this.days = calendar.create(this.year, this.month)
        },
        next() {
            this.month++
            if (this.month === 12) {
                this.month = 0
                this.year++
            }
            this.days = calendar.create(this.year, this.month)
        },
        isToday(day) {
            if (day === null) return false
            let today = new Date()
            return today.getFullYear() === this.year && today.getMonth() === this.month && today.getDate() === day.getDate()
        },
        isSelect(day) {
            if(day === null) return
            let s = this.select
            return s.date === day.getDate() && s.year === this.year && s.month === this.month
        },
        take(day) {
            if (day === null) return
            this.select = {
                date: day.getDate(),
                month: this.month,
                year: this.year
            }
        }
    },
    mounted() {
        this.days = calendar.create(this.year, this.month)
    },
    filters: {
        onlyDate: date => {
            if (date !== null) 
                return date.getDate()
            else 
                return 0
        }
    }
}
</script>

<style lang="less" scoped>
@color-weekends: #ff6666;
@color-today: #0059b3;
@color-select: #404040;

#app {
    display: grid;
    grid-template-columns: repeat(7, 50px);
    grid-template-rows: 5vh 10vh 10vh 50vh;
    grid-template-areas:
        "s s s s s s s"
        "b t t t t t n"
        "d1 d2 d3 d4 d5 d6 d7"
        "c1 c2 c3 c4 c5 c6 c7";
    grid-gap: 10px;
    text-transform: lowercase;

    &>h1 {
        .center();
        font-weight: 300;
    }

    &>.select {
        .center();
        grid-area: s;
    }

    &>button {
        .center();
        border: none;
        outline: none;

        background-color: #fff;
        padding: 10px;

        border-radius: 4px;
        font-size: 18px;

        transition: .1s font-size;

        &:hover {
            font-size: 24px;
        }
    }

    &>.week {
        .center();
        font-weight: bold;
    }

    &>.days {
        display: flex;
        flex-direction: column;

        &>.day {
            .center();
            margin: 10px;
            padding: 5px;
            border-radius: 50%;
            transition: .2s box-shadow;

            &:hover {
                box-shadow: 0px 0px 0px 4px @color-select;
            }
        }

        &:nth-last-child(-n+2) {

            &>* {
                background-color: @color-weekends;
                color: #fff;
            }
        }
    }
}

.empty {
    opacity: 0;
}

.today {
    background-color: @color-today;
    color: #fff;
}

.sel {
    background-color: @color-select!important;
    color: #fff;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
