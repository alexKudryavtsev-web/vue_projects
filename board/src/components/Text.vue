<template>
<div class="setting-body">
    <v-slider v-model="setting.width" label="width" style="height: 10px;" min="2" max="100" thumb-label="always"></v-slider>

    <v-text-field v-model="setting.text" label="text" class="text" outlined></v-text-field>

    <v-select v-model="setting.family" class="family" :items="fonts" label="font family" outlined></v-select>

    <v-divider style="margin: 0 0 20px 0;"></v-divider>

    <v-checkbox style="margin: 0;" multiple v-model="setting.style" v-for="n in style" :key="n" :value="`${n}`" :label="`${n}`" color="blue"></v-checkbox>

    <v-divider style="margin: 0 0 20px 0;"></v-divider>

    <v-color-picker v-model="setting.color" style="margin: auto;"></v-color-picker>
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
    data: () => ({
        fonts: ['Montserrat', 'Impact', 'Consolas', 'Arial', 'Roboto', 'Times New Roman', 'Times', 'Courier New'],
        style: ['cursiv', 'bold'],
    }),
};
</script>

<style lang="less" scoped>
.setting-body {
    display: flex;
    justify-content: center;
    align-items: center;
}

.setting-body>* {
    margin: 40px;
    width: 300px;
}
</style>
