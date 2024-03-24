<script>
export default {
  name: "Version",
  props: {
    version: String
  }
}
</script>

<template>
  <div class="version">v{{version}}</div>
</template>

<style scoped>
.version {
  font-size: 8px;
  color: grey;
  position: fixed;
  bottom: 1vh;
  right: 1vh;
}
</style>