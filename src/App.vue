<script setup>
import ExampleCompVue from './components/ExampleComp.vue';
import { ref, provide } from 'vue';
const contar = ref(0);
function increment() {
  contar.value++
}
provide('key', { contar, increment });
</script>
<template>
<div class="navo">dasdads {{contar}}</div>
  <ExampleCompVue></ExampleCompVue>
</template>

