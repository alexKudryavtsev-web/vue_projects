<template>
<div id="list">
    <div id="text">
        <input type="text" ref="text" placeholder="input new task" @keyup.enter="add" />
        <button class="add-btn" @click="add">
            <i class="fas fa-search-plus"></i>
        </button>
    </div>

    <ul>
        <li v-for="(t, idx) of todo" :key="idx">
            <Item :task="t" @remove="remove" @mark="mark" />
        </li>
    </ul>

    <div id="panel">
        <button @click="clear"><i class="fas fa-cut"></i> list</button>
        <button @click="deleteMarked"><i class="fas fa-cut"></i> marked</button>
    </div>

</div>
</template>

<script>
import Item from './Item';

export default {
    name: 'List',
    components: {
        Item
    },
    props: {
        todo: {
            type: Array,
            required: true
        }
    },
    methods: {
        mark(name) {
            this.$emit('mark', name)
        },
        clear(e) {
            this.$emit('clear')
        },
        deleteMarked() {
            this.$emit('deleteMarked')
        },
        add(e) {
            if(this.$refs.text.value.trim() == '') return;
            this.$emit('add', this.$refs.text.value.trim())
            this.$refs.text.value = ''
        },
        remove(name) {
            this.$emit('remove', name)
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

#list {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 0 10px;
}

#panel button {
    background-color: #80aaff;
    font-family: 'Montserrat', sans-serif;
    color: white;
    padding: 15px 20px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    transition: 1s background-color;
    outline: none;
    margin: 5px;
    width: 120px;
}

#panel button:hover {
    background-color: #6699ff;
}

#panel button i {
    font-size: 1.2em;
}

#text {
    position: relative;
}

input[type="text"] {
    padding: 25px;
    width: 100%;
    position: relative;
    right: 30px;
    font-size: 1em;

    border: none;
    outline: none;
    background-color: #fff;
    box-shadow: 0px 0px 27px -5px #999;
    font-family: 'Montserrat', sans-serif;
}

.add-btn {
    position: absolute;
    top: 9px;
    left: 245px;
    background-color: #6699ff;
    color: white;
    padding: 15px 20px;
    font-size: 20px;
    border: none;
    border-radius: 6px;
    transition: 1s background-color;
    outline: none;
}

.add-btn:hover {
    background-color: #80aaff;
}
</style>
