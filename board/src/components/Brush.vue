<template>
<div class="setting-body">
    <v-slider v-model="setting.width" label="width" style="width: 300px; height: 10px;" min="2" max="100" thumb-label="always"></v-slider>
    <v-switch v-model="setting.circle" color="blue" :label="`Is circle, ${setting.circle.toString()}`"></v-switch>
    <v-color-picker label="color" v-model="setting.color" style="margin: auto;"></v-color-picker>
</div>
</template>

<script>
export default {
    props: {
        setting: {
            type: Object,
            required: true
        }
    },
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

.setting-body>*:last-child {
    margin-top: 30px;
}
</style>
