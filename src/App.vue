<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';

</script>

<template>
  <header>
    <div class="flex justify-center">
      <NavigationBar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
