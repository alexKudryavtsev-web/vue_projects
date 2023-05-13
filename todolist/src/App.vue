<template>
<div id="app">
    <h1 class="logo"># Todo List</h1>
    <List :todo="todo" @mark="mark" @clear="clear" @remove="remove" @deleteMarked="deleteMarked" @add="add" />
</div>
</template>

<script>
import List from "./components/List";
import cookie from "cookie_js";

export default {
    name: 'App',
    components: {
        List
    },
    data: function () {
        return {
            todo: []
        }
    },
    watch: {
        todo(v) {
            cookie.empty()
            for(let task of this.todo) {
                cookie.set(task.name, task.complete)
            }
            console.log(document.cookie)
        }
    },
    methods: {
        mark(name) {
            let newTodo = []
            for (let cookie of this.todo) {
                if (cookie.name === name) {
                    cookie.complete = !cookie.complete
                }
                newTodo.push(cookie)
            }
            this.todo = newTodo;
        },
        remove(name) {
            this.todo = this.todo.filter(cookie => cookie.name != name)
        },
        clear() {
            this.todo = []
        },
        deleteMarked() {
            this.todo = this.todo.filter(cookie => !cookie.complete)
        },
        add(value) {
            for (let cookie of this.todo) {
                if (cookie.name === value) return;
            }
            this.todo.push({
                name: value,
                complete: false
            })
        }
    },
    mounted() {
        console.log(document.cookie)
        for(let [name, complete] of Object.entries(cookie.all())) {
            this.todo.push({name: name, complete: complete === "true"})
        }
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Solway&display=swap");

.logo {
    font-family: "Solway", serif;
    color: #6699ff;
    line-height: 2em;
    font-size: 2.5em;
    text-align: center;
}
</style>
