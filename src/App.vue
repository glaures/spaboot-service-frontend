<script setup>
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
  <Version/>
</template>

<script>
</script>

<style scoped>
.fixed-top-margin {
  margin-top: 70px;
}
</style>
