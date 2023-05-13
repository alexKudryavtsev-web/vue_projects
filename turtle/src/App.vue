<template>
<canvas-comp />
</template>

<script>
import Canvas from './components/Canvas'
export default {
    components: {
        canvasComp: Canvas
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
* {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: #0066ff;
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
