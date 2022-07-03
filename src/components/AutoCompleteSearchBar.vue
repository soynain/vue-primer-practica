<script setup>
import { inject, onMounted, ref } from 'vue';
const movieName = ref(null);
const jsonList = inject('jsonListProvider');
console.log(jsonList.value?.value?.jsonResponse);
function autocompleteSuggestions() {
    console.log(movieName.value.value);
    let formCont = document.querySelector('.autocomplete-items');
    if (formCont === null) {
        let a = document.createElement('div');
        a.setAttribute("id", "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        let b = document.createElement('div');
        b.innerText = movieName.value.value;
        a.appendChild(b)
        let parentNode = document.getElementsByClassName('search-bar-container')[0];
        parentNode.appendChild(a);
        let containerCenter=document.querySelector('.center-container');
        containerCenter.appendChild(parentNode);
    } else {

        let b = document.createElement('div');
        b.innerText = movieName.value.value;
        //  a.appendChild(b)
        //let parentNode = document.getElementsByClassName('search-bar-container')[0];
        formCont.appendChild(b);
    }

}
</script>
<style>
.autocomplete-items {
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    width:94%;
    z-index: 99;
    /*position the autocomplete items to be the same width as the container:*/
    top: 20%;

}

.autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid blue;
}

/*when hovering an item:*/
.autocomplete-items div:hover {
    background-color: #e9e9e9;
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
    background-color: DodgerBlue !important;
    color: #ffffff;
}
</style>
<template >
    <Suspense>
        <form class="search-bar-container mt-3 w-100" method="post" action="/get-movie">
            <label class="text-center form-label w-100" for="movie-name">Introduce el nombre de la pelicula</label>
            <input @input="autocompleteSuggestions" type="text" ref="movieName" name="movie-name" class="form-control">
            <div class="d-flex flex-column justify-content-between align-items-center w-100 center-container">
                
            </div>
        </form>
    </Suspense>
</template>