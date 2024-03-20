<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "TaskList",
  components: {FontAwesomeIcon},
  emits: 'showInfo',
  props: {
    tasks: Array
  }
}
</script>

<template>
  <div class="list-group">
    <div class="list-group-item d-flex" v-for="task in tasks" :key="task.fields.name">
      <input class="form-check-input" v-model="task.checked" type="checkbox" :value="task.checked">
      <div class="ms-2 flex-grow-1 d-flex justify-content-between">
        <div class="flex-grow-1" @click="task.checked = !task.checked">{{ task.fields.name }}</div>
        <div v-if="task.fields.description" @click="$emit('showInfo', task)"><FontAwesomeIcon icon="circle-info" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>