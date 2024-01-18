<template>
    <RouterLink @click={click} @focus={focus} class="group flex px-4 py-2 font-bold hover:text-slate-500 focus:bg-sky-900/50 rounded-full" :to="to">
        {{ name }}
    </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps({
    to: String,
    name: String,
    click: Function,
    focus: Function,
    subButtons: Array
});
</script>