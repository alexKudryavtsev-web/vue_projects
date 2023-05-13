<template>
<div id="app">
    <div class="title">
        Card Validation
        <i class="el-icon-bank-card"></i>
    </div>
    <div class="card">
        <el-input placeholder="card" v-model.lazy="numberCard" prefix-icon="el-icon-wallet" clearable>
        </el-input>
        <h2>{{answer}}</h2>
        <h4>Company: {{company}}</h4>
        <h4>Id: {{id}}</h4>
        <h4>Control: {{control}}</h4>
    </div>
</div>
</template>

<script>
import checker from '../checker'

export default {
    data() {
        return {
            answer: '',
            company: '',
            id: '',
            control: '',
            numberCard: ''
        }
    },
    watch: {
        numberCard(val) {
            this.answer = checker.check(val)
            this.company = checker.company(val)
            this.id = checker.id(val)
            this.control = checker.control(val)
        }
    },
    mounted() {
        this.numberCard = '4417123456789113'
    }
}
</script>

<style lang="less" scoped>
#app {
    background-color: #fff;
    height: 80vh;
    border-radius: 8px;
    min-width: 350px;
    .col;

    &>.title {
        flex: 2;
        font-size: 2em;
        .center;

        &>i {
            margin-left: 7px;
        }
    }

    &>.card {
        flex: 8;
        padding: 0 15px;
        .col;
        justify-content: flex-start;
        align-items: center;

        &>* {
            margin: 10px 0;
            font-weight: 300;
        }
    }
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.col {
    display: flex;
    flex-direction: column;
}
</style>
