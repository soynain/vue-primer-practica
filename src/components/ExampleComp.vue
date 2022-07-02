<script setup>
import store from 'store-js';
import { inject } from 'vue'


const {contar,increment}=inject('key');

</script>
<template>
    <button class="btn btn-primary" @click="increment">{{contar}}</button>
</template>