<script setup>
import ExampleCompVue from './components/ExampleComp.vue';
import { ref,provide } from 'vue/dist/vue.esm-browser';
const contar = ref(0);
function increment() {
    contar.value++
}
provide('key','arrecho');
</script>
<template>
  <ExampleCompVue/>
</template>

