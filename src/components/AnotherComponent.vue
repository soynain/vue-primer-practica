<script setup>
import { provide,inject } from 'vue';
import AnotherComponentChild from'./AnotherComponentChild.vue';
provide('anotherval','raayo makin');
const {contar,increment}=inject('key');
const {refe,inc}=inject('cron2');
</script>
<template>
    <div class="cont">
        {{contar}}
    </div>
    <AnotherComponentChild/>
    <button class="btn btn-primary" @click="increment">{{contar}}'moo'{{refe}}</button>

</template>