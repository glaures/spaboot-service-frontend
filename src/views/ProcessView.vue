<script setup>
import TaskList from "@/components/TaskList.vue";
</script>

<template>
  <div class="container" v-if="process">
    <div class="h1">{{ process.title }}</div>
    <div class="mt-3" v-if="wagon.length > 0">
      <div class="h2">Wagen</div>
      <TaskList :tasks="wagon" @show-info="showInfo($event)"/>
    </div>
    <div class="mt-3" v-if="toBoat.length > 0">
      <div class="h2">Weg zum Boot</div>
      <TaskList :tasks="toBoat" @show-info="showInfo($event)"/>
    </div>
    <div class="mt-3" v-if="boat.length > 0">
      <div class="h2">Am Boot</div>
      <TaskList :tasks="boat" @show-info="showInfo($event)"/>
    </div>
    <div class="mt-3" v-if="fromBoat.length > 0">
      <div class="h2">Weg zurück</div>
      <TaskList :tasks="fromBoat" @show-info="showInfo($event)"/>
    </div>
    <div class="mt-3" v-if="welcomeGuests.length > 0">
      <div class="h2">Zurück im Wagen</div>
      <TaskList :tasks="welcomeGuests" @show-info="showInfo($event)"/>
    </div>
    <div class="mt-3" v-if="instructions.length > 0">
      <div class="h2">Bootinstruktionen</div>
      <TaskList :tasks="instructions" @show-info="showInfo($event)"/>
    </div>
  </div>
  <div class="modal fade" tabindex="-1" id="infoModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ infoHeader }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-html="info">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {createClient} from "contentful";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import {Modal} from "bootstrap";
import { BLOCKS } from '@contentful/rich-text-types';

const space = 'gdb2xwu41tp3'
const accessToken = 'sog4clElan4c9rnNSsqJhxf42oLKRfSxQimYOJBxEu4'
const contentful = createClient({space: space, accessToken: accessToken})
const renderHtmlOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
        `<img src="${fields.file.url}" width="300" alt="${fields.description}"/>`,
  },
}
export default {
  name: "ProcessView",
  props: {
    processId: String
  },
  data() {
    return {
      process: null,
      infoHeader: null,
      info: null
    }
  },
  computed: {
    wagon() {
      return this.process.tasks.filter(t => t.fields.location === 'wagon')
    },
    toBoat() {
      return this.process.tasks.filter(t => t.fields.location === 'toBoat')
    },
    boat() {
      return this.process.tasks.filter(t => t.fields.location === 'boat')
    },
    fromBoat() {
      return this.process.tasks.filter(t => t.fields.location === 'fromBoat')
    },
    welcomeGuests() {
      return this.process.tasks.filter(t => t.fields.location === 'welcomeGuests')
    },
    instructions() {
      return this.process.tasks.filter(t => t.fields.location === 'instructions')
    },
    setOff() {
      return this.process.tasks.filter(t => t.fields.location === 'setOff')
    },

  },
  methods: {
    async loadTasks() {
      console.log("processId: " + this.processId)
      const process = await contentful.getEntry(this.processId, {limit: 1, include: 10}).then(p => p.fields)
          .catch(err => console.error(err))
      console.log("process is " + process.title)
      if (process.includes) {
        console.log('loading included tasks from ' + process.includes.sys.id)
        const includedTasks = await contentful.getEntry(process.includes.sys.id)
            .then(includedProcess => includedProcess.fields.tasks)
            .catch(err => console.err)
        console.log('included tasks are ' + JSON.stringify(includedTasks))
        includedTasks.push.apply(includedTasks, process.tasks)
        process.tasks = includedTasks
      }
      if (this.$route.query.trip === 'false') {
        process.tasks = process.tasks.filter(t => !t.fields.tripOnly)
      }
      this.process = process
    },
    showInfo(task) {
      this.infoHeader = task.fields.name
      this.info = documentToHtmlString(task.fields.description, renderHtmlOptions)
      this.uniqueModal = new Modal(document.getElementById("infoModal"), {keyboard: false});
      this.uniqueModal.show();
    }
  },
  mounted() {
    this.loadTasks()
  }
}
</script>

<style scoped>

</style>