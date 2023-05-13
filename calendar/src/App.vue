<template>
<calendar />
</template>

<script>
import Calendar from './components/Calendar.vue'

export default {
    name: 'app',
    components: {
        Calendar
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

* {
    font-family: 'Montserrat', sans-serif;
}

html,
body {
    padding: 0;
    margin: 0;

    height: 100vh;
    background-color: #fff;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
