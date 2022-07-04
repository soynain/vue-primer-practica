<script setup>
import TableRows from './TableRows.vue';
import AutoCompleteSearchBar from './AutoCompleteSearchBar.vue';
import { onMounted, ref, provide, toRaw, onUpdated } from 'vue';
const jsonProvider = ref(null); //key ref expose
//let movieNameInput = ref(null)

let jsonListenerProviderForChildrenState = ref(null);
let refreshWithJsonToChildKey = ref(0);
let resetRowsKey = ref(0);

provide('jsonListProvider', jsonListenerProviderForChildrenState);

const funcion = function (movieName) {
        let y = document.getElementsByClassName('tbl-body')[0]
        let elemArr = Array.from(y.childNodes)
        //  console.log(movieName,' ',elemArr.shift())
        elemArr.shift(); elemArr.pop();
        Array.from(elemArr).forEach((e, i) => {
            console.log(e)
            if (e.firstChild.innerText !== movieName) {
                console.log(e.firstChild.innerText, ' ', i)
                e.remove();
            }
        })
    }
onMounted(() => {
    jsonListenerProviderForChildrenState.value = jsonProvider;
 //   refreshWithJsonToChildKey.value++;
    provide('d', {
        funcion,
        resetRowsKey
    })
})

</script>

<template>

    <div class="d-flex flex-column-reverse w-100">
        <table class="table tabler-borderless w-100">
            <TableRows :key="resetRowsKey" ref="jsonProvider" />
        </table>
        <div class="container-fluid">
            <AutoCompleteSearchBar ref="movieNameInput" v-if="jsonProvider !== null"  />
        </div>
    </div>
</template>