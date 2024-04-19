<template>
    <div class="container">
        <div class="h1">FAQ</div>
        <div v-for="documentation in documentations" :key="documentation.id">
            <div class="h5">{{ documentation.fields.title }}</div>
            <div v-html="documentation.info"/>
        </div>
    </div>
</template>

<script>
import {createClient} from "contentful";
import {BLOCKS} from "@contentful/rich-text-types";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";

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
    name: "FAQView",
    data() {
        return {
            documentations: []
        }
    },
    methods: {
        async loadDocumentations() {
            this.documentations = await contentful.getEntries({
                content_type: 'documentation'
            }).then(res => {
                console.log(res.items)
                return res.items
                    .filter(d => !d.fields.private)
                    .map(d => {
                    return {...d, info: documentToHtmlString(d.fields.text, renderHtmlOptions)}
                })
            }).catch((err) => console.error(err))
        }
    },
    mounted() {
        this.loadDocumentations()
    }
}
</script>

<style scoped>

</style>
