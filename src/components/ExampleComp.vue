<script setup>
import { inject,provide,ref } from 'vue';
import ExampleCompoChildVue from './ExampleCompoChild.vue';
import AnotherComponent from './AnotherComponent.vue';
const {contar,increment}=inject('key');
const {refe,inc}=inject('cron2');


</script>
<style scoped>
    *{
        display: flex;flex-direction: row;border: 2px solid black;
    }
</style>
<template>
<button @click="inc">{{refe}} refe</button>
    <ExampleCompoChildVue/>
</template>
