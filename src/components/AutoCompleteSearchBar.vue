<script setup>
import { inject, onMounted, ref } from 'vue';
const movieNameInput = ref(null); //text input value from form
var indexForActiveElementInList = ref(-1);
const jsonList = inject('jsonListProvider'); //json from sibling's fetch  
const {resetRowsKey,funcion} = inject('d');

//console.log(jsonList.value?.value?.jsonResponse);
defineExpose({ movieNameInput });

function addActive(x) {
    removeActive(x);
    if (indexForActiveElementInList.value >= x.length) indexForActiveElementInList.value = 0;
    if (indexForActiveElementInList.value < 0) indexForActiveElementInList.value = (x.length - 1);
    x[indexForActiveElementInList.value].classList.add("autocomplete-active");
}
function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
    }
}
function arrowDown() {
    var x = document.getElementById("autocomplete-list");
    if (x !== null) {
        indexForActiveElementInList.value++;
        addActive(x.childNodes);
    }
}

function arrowUp() {
    let x = document.getElementById("autocomplete-list");
    if (x !== null) {
        indexForActiveElementInList.value--;
        addActive(x.childNodes);
    }
}

function closeAllLists() {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
        x[i].parentNode.removeChild(x[i]);
    }
    indexForActiveElementInList.value = 0;
    resetRowsKey.value++;
}

function entercl() {
    var x = document.getElementsByClassName("autocomplete-items")[0].childNodes;
    var y = document.getElementsByClassName('tbl-body');
    movieNameInput.value.value = x[indexForActiveElementInList.value].innerText;
    // console.log(y[0].remove)
    funcion(movieNameInput.value.value);
    closeAllLists();

}

function autocompleteSuggestions() {
    //  console.log(movieName.value.value);
    
    closeAllLists();
    let AutoCompleteMainContainer = document.querySelector('.autocomplete-items');
    let formInstanceParent = document.getElementsByClassName('search-bar-container')[0];
    if (AutoCompleteMainContainer === null) {
        let containerForAutoCompleteList = document.createElement('div');
        containerForAutoCompleteList.setAttribute("id", "autocomplete-list");
        containerForAutoCompleteList.setAttribute("class", "autocomplete-items");
        for (let i = 0; i < jsonList.value?.value?.jsonResponse.length; i++) {
            if (jsonList.value?.value?.jsonResponse[i].title.includes(movieNameInput.value.value)) {
                let autoCompleteItemName = document.createElement('div');
                autoCompleteItemName.innerText = jsonList.value?.value?.jsonResponse[i].title;
                autoCompleteItemName.addEventListener('click', (e) => {
                    movieNameInput.value.value = e.target.innerText;
                    funcion(e.target.innerText);
                    closeAllLists();
                })
                containerForAutoCompleteList.appendChild(autoCompleteItemName)
            }
        }
        formInstanceParent.appendChild(containerForAutoCompleteList);
    } else {
        for (let i = 0; i < jsonList.value?.value?.jsonResponse.length; i++) {
            if (jsonList.value?.value?.jsonResponse[i].title.includes(movieNameInput.value.value)) {
                let autoCompleteItemName = document.createElement('div');
                autoCompleteItemName.innerText = jsonList.value?.value?.jsonResponse[i].title;
                autoCompleteItemName.addEventListener('click', (e) => {
                    movieNameInput.value.value = e.target.innerText;
                    funcion(e.target.innerText);
                    closeAllLists();
                })
                AutoCompleteMainContainer.appendChild(autoCompleteItemName);
            }
        }
    }
}
onMounted(() => {
    
})
</script>
<style>
.autocomplete-items {
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    width: 94%;
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
        <form @submit.prevent class="search-bar-container mt-3 w-100" method="post" action="/get-movie">
            <label class="text-center form-label w-100" for="movie-name">Introduce el nombre de la pelicula</label>
            <input @keyup.enter="entercl" @keyup.up="arrowUp" @keyup.down="arrowDown" @keyup.delete="closeAllLists"
                @input="autocompleteSuggestions" type="text" ref="movieNameInput" name="movie-name"
                class="form-control">
        </form>
    </Suspense>
</template>