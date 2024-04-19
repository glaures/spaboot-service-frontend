<script>
export default {
  name: "TaskList",
  props: {
    tasks: Array
  }
}
</script>

<template>
    <div class="mt-4" v-for="task in tasks" :key="task.fields.name">
      <div class="ms-2">
        <div class="fw-bold">{{ task.fields.name }}</div>
        <div class="ms-3" v-if="task.fields.description" v-html="task.info"/>
      </div>
    </div>
</template>

<style scoped>

</style>
