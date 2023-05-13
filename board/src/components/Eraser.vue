<template>
<div class="setting-body">
    <v-slider v-model="setting.width" label="width" style="width: 300px; height: 10px;" min="2" max="100" color="purple" thumb-color="purple" thumb-label="always"></v-slider>
    <v-switch v-model="setting.circle" color="purple" :label="`Is circle, ${setting.circle.toString()}`"></v-switch>
</div>
</template>

<script>
export default {
    props: {
        setting: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="less" scoped>
.setting-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.setting-body>* {
    width: 300px;
}
</style>
