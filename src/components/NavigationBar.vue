<template>
    <nav class="flex text-sm items-center p-2 m-10 x-20 rounded-full bg-white/5 fixed w-fit">
        <RouterLink @click="showWorkButtons" @focus="showWorkButtons" class="group flex px-4 py-2 font-bold hover:text-slate-500 focus:bg-sky-900/50 rounded-full" to="/">
            Work
        </RouterLink>
        <div ref="workButtons">
            <RouterLink to="#complete" class="hidden group-focus:block font-light text-xs focus:bg-sky-900 p-2 rounded-full">Complete</RouterLink>
            <RouterLink class="hidden group-focus:block font-light text-xs focus:bg-sky-900 rounded-full p-2 focus:bg-sky-900 p-2 rounded-full" to="#in-progress" >In Progress</RouterLink>            
        </div>
        
        <NavigationBarButton name="About" to="/about" :click="removeWorkButtons"/>
        <NavigationBarButton name="Technology" to="/technology" :click="removeWorkButtons"/>
        <NavigationBarButton name="Blog" to="/blog" :click="removeWorkButtons"/>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBarButton from './NavigationBarButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const workButtons = ref(null);

function showWorkButtons() {
    workButtons.value.childNodes.forEach((workButton) => {
        if (workButton.classList.contains('hidden')) workButton.classList.remove('hidden');
        router.push({ path: "/" });
    });

}

function removeWorkButtons() {
    workButtons.value.childNodes.forEach((workButton) => {
        if (!workButton.classList.contains('hidden')) workButton.classList.add('hidden');
    });
}

</script>