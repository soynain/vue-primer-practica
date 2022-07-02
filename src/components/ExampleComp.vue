<script setup>
import store from 'store-js';
import { inject } from 'vue/dist/vue.esm-browser'


const roma=inject('key');

function prueba(){
    console.log(roma)
}
</script>
<template>
    <button class="btn btn-primary" @click="prueba">Kaisoc</button>
</template>