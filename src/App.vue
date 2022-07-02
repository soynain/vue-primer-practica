<script setup>
/* Las injecciones solo pueden ser del padre que es 
App.vue a los hijos que son el resto de componentes,
en este caso root que es app.vue solo tiene un hijo
y ExampleComp también tiene un hijo, entonces podrá
compartir datos con los nietos y el hijo*/
import TableParentComponent from './components/TableParentComponent.vue';

</script>
<template>
<Suspense>
    <TableParentComponent/>
</Suspense>
</template>

