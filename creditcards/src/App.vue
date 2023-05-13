<template>
<validate />
</template>

<script>
import Validate from './components/Validate'

export default {
    components: {
        Validate
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}

html,
body {
    padding: 0;
    margin: 0;
    height: 100vh;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(73, 73, 80);
    background: linear-gradient(21deg, rgba(73, 73, 80, 1) 0%, rgba(0, 212, 255, 1) 100%);
}
</style>
