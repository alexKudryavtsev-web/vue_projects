<template>
<div class="item">
    <label :class="style">
        <button @click="remove">
            <i class="fas fa-trash-alt"></i>
        </button>
        <input type="checkbox" @click="mark" v-model="task.complete" />
        <h2>{{ task.name }}</h2>
    </label>
</div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        mark(e) {
            this.$emit('mark', this.task.name)
        },
        remove(e) {
            this.$emit('remove', this.task.name)
        }
    },
    computed: {
        style() {
            return {
                completed: this.task.complete
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

label {
    display: flex;
    align-items: center;
}
</style>