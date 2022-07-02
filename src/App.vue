<script setup>
/* Las injecciones solo pueden ser del padre que es 
App.vue a los hijos que son el resto de componentes,
en este caso root que es app.vue solo tiene un hijo
y ExampleComp también tiene un hijo, entonces podrá
compartir datos con los nietos y el hijo*/
import ExampleCompVue from './components/ExampleComp.vue';
import AnotherComponent from './components/AnotherComponent.vue';
import { ref, provide,inject } from 'vue';

const contar = ref(0);
function increment() {
  contar.value++
}
provide('key', { contar, increment });
provide('rocio durcal','negro');

const refe=ref(0);
function inc(){
    return refe.value++;
}
provide('cron2',{refe,inc});
</script>
<template>
<div class="navo">dasdads {{contar}}</div>
  <ExampleCompVue></ExampleCompVue>
  <AnotherComponent/>
</template>

