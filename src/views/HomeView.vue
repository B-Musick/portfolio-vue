<script setup lang="ts">
let projects = [{ title: "test1" }, { title: "test2" }, { title: "test3" }, ]
</script>

<template>
  <nav></nav>
  <main>
    <div class="h-screen bg-gradient-to-br from-cyan-700 to-blue-900 font-lobster text-teal-200 flex justify-center items-center">
      <h1 class="text-5xl m-10">Hello friend. <br/> I'm Brendan Musick, <br/>Full Stack Developer. </h1>
    </div>
    <div class="h-screen bg-gradient-to-bl from-blue-900 to-cyan-700 flex justify-center items-center" id="complete">
      <div class="bg-red-300 w-1/4 h-1/2 rounded-3xl">
        
      </div>
    </div>
    <div class="h-screen bg-gradient-to-br from-cyan-700 to-blue-900" id="in-progress">Progress</div>
  </main>
</template>
