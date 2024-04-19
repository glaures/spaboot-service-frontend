<template>
    <div class="container">
        <div class="h1">FAQ</div>
        <div>
            <div v-for="documentation in documentations" :key="documentation.id" class="mb-3 h5">
                <div @click="showInfo(documentation)">{{ documentation.fields.title }}</div>
            </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1" id="infoModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header sticky-top bg-light">
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
import {BLOCKS} from "@contentful/rich-text-types";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import {Modal} from "bootstrap";

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
            documentations: [],
            infoHeader: null,
            info: null
        }
    },
    methods: {
        async loadDocumentations() {
            this.documentations = await contentful.getEntries({
                content_type: 'documentation'
            }).then(res => res.items.filter(d => !d.fields.private))
                .catch((err) => console.error(err))
        },
        showInfo(doc) {
            this.infoHeader = doc.fields.title
            this.info = documentToHtmlString(doc.fields.text, renderHtmlOptions)
            this.uniqueModal = new Modal(document.getElementById("infoModal"), {keyboard: false});
            this.uniqueModal.show();
        }
    },
    mounted() {
        this.loadDocumentations()
    }
}
</script>

<style scoped>

</style>
