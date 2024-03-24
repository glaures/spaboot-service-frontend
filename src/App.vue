<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navigation from "@/components/Navigation.vue";
import Version from "@/components/Version.vue";
</script>

<template>
  <div class="fixed-top">
    <Navigation/>
  </div>
  <div class="fixed-top-margin pb-5">
    <RouterView/>
  </div>
  <Version version="0.9"/>
</template>

<script>
</script>

<style scoped>
.fixed-top-margin {
  margin-top: 70px;
}
</style>
