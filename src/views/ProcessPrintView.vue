<script setup>
import TaskListPrint from "@/components/TaskListPrint.vue";
</script>

<template>
    <div class="container" v-if="process">
        <div class="h1">{{ process.title }}</div>
        <div class="mt-3" v-if="wagon.length > 0">
            <div class="h2">Wagen</div>
            <TaskListPrint :tasks="wagon"/>
        </div>
        <div class="mt-3" v-if="toBoat.length > 0">
            <div class="h2">Weg zum Boot</div>
            <TaskListPrint :tasks="toBoat"/>
        </div>
        <div class="mt-3" v-if="boat.length > 0">
            <div class="h2">Am Boot</div>
            <TaskListPrint :tasks="boat"/>
        </div>
        <div class="mt-3" v-if="fromBoat.length > 0">
            <div class="h2">Weg zurück</div>
            <TaskListPrint :tasks="fromBoat"/>
        </div>
        <div class="mt-3" v-if="welcomeGuests.length > 0">
            <div class="h2">Zurück im Wagen</div>
            <TaskListPrint :tasks="welcomeGuests"/>
        </div>
        <div class="mt-3" v-if="instructions.length > 0">
            <div class="h2">Bootinstruktionen</div>
            <TaskListPrint :tasks="instructions"/>
        </div>
        <div class="mt-3" v-if="setOff.length > 0">
            <div class="h2">Ablegen</div>
            <TaskListPrint :tasks="setOff"/>
        </div>
    </div>
</template>

<script>
import {createClient} from "contentful";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import {BLOCKS} from '@contentful/rich-text-types';

const space = 'gdb2xwu41tp3'
const accessToken = 'sog4clElan4c9rnNSsqJhxf42oLKRfSxQimYOJBxEu4'
const contentful = createClient({space: space, accessToken: accessToken})
const renderHtmlOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({data: {target: {fields}}}) =>
            `<img src="${fields.file.url}" width="300" alt="${fields.description}"/>`,
    },
}

export default {
    name: "ProcessView",
    props: {
        processId: String,
        processId2: String
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
            const process = await this.loadProcess(this.processId, this.$route.query.trip === 'true')
            if(this.processId2) {
                console.log("processId2: " + this.processId2)
                const process2 = await this.loadProcess(this.processId2, this.$route.query.trip2 === 'true')
                process.tasks.push.apply(process.tasks, process2.tasks)
                process.title += ' ' + process2.title
            }
            this.process = process
        },
        async loadProcess(processId, isTrip){
            let process = await contentful.getEntry(processId)
                .then(p => p.fields)
                .catch(err => console.error(err))
            if (process.includes) {
                const includedTasks = await contentful.getEntry(process.includes.sys.id)
                    .then(includedProcess => includedProcess.fields.tasks)
                    .catch(err => console.error(err))
                includedTasks.push.apply(includedTasks, process.tasks)
                process.tasks = includedTasks
            }
            if (!isTrip) {
                process.tasks = process.tasks.filter(t => !t.fields.tripOnly)
            }
            process.tasks = process.tasks.map(t => {
                return {
                    ...t,
                    info: documentToHtmlString(t.fields.description, renderHtmlOptions)
                }
            })
            return process
        }
    },
    watch: {
        processId: {
            handler(newVal) {
                if (newVal)
                    this.loadTasks()
            },
            immediate: true
        }
    }
}
</script>

<style scoped>

</style>
