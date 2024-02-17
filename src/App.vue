<template>
  <NavBar />
  <div class="container is-max-deskto px-2 py-4"><RouterView /></div>
</template>

<script setup lang="ts">
import NavBar from "./components/layout/NavBar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
