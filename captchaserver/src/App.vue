<template>
<captcha />
</template>

<script>
import Captcha from './components/Captcha'

export default {
    components: {
        Captcha
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
    background-color: #f2f2f2;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
