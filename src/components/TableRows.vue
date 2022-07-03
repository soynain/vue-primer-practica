<script setup>
import { ref } from 'vue';
console.time('benchmark fetch');
const response = await fetch('https://data.sfgov.org/resource/yitu-d5am.json?' +
    new URLSearchParams({
        '$limit': 100
    }), { method: 'GET' });
const jsonResponse = await response.json();
const varro=1
defineExpose({jsonResponse});
console.timeEnd('benchmark fetch');
</script>
<template>
    <thead>
        <tr>
            <th scope="col">Tittle</th>
            <th scope="col">Release Year</th>
            <th scope="col">Locations</th>
        </tr>
    </thead>
    <tbody v-for="row in jsonResponse">
        <tr>
            <th scope="col">{{ row.title }}</th>
            <td>{{ row.release_year }}</td>
            <td>{{ row.locations }}</td>
        </tr>
    </tbody>
</template>