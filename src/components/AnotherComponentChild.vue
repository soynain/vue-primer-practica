<script setup>
import { inject } from 'vue';
const datonieto=inject('anotherval');
</script>
<template>
    <div>{{datonieto}}</div>
</template>