<script>
import { version } from "@/../package.json"
export default {
  name: "Version",
  data() {
    return {
      version
    }
  }
}
</script>

<template>
  <div class="version">{{version}}</div>
</template>

<style scoped>
.version {
  font-size: 8px;
  color: grey;
  position: fixed;
  bottom: 1vh;
  min-width: 100vw;
  text-align: right;
  padding-right: 1vw;
}
</style>