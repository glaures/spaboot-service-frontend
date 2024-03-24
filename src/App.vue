<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="fixed-top">
    <Navigation/>
  </div>
  <div class="fixed-top-margin pb-5">
    <RouterView/>
  </div>
</template>

<script>
</script>

<style scoped>
.fixed-top-margin {
  margin-top: 70px;
}
</style>
