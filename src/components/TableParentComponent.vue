<script setup>
import TableRows from './TableRows.vue';
import AutoCompleteSearchBar from './AutoCompleteSearchBar.vue';
import { onMounted, ref,provide } from 'vue';
const jsonProvider = ref(null);

let jsonListenerProvider=ref(null);
let jsonList=ref(0);
provide('jsonListProvider',jsonListenerProvider);
onMounted(() => {
  //  console.log(jsonProvider.value.jsonResponse,' sda')
    jsonListenerProvider.value=jsonProvider;
    jsonList.value++;
})
</script>

<template>
    
    <div class="d-flex flex-column-reverse w-100">
        <table class="table tabler-borderless w-100">
        <TableRows ref="jsonProvider"/>
    </table>
    <div class="container-fluid">
        <AutoCompleteSearchBar v-if="jsonProvider!==null" :key="jsonList"/>
    </div>
    </div>
</template>