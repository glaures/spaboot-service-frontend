<script>
import axios from "axios";

const PROCESS_PREPARATION_STANDARD = 'HvoIcslIOtNBxnwFOlN07';
const PROCESS_PREPARATION_ROMANTIC = '6lkT0SW14Op8mOYrYcZ2Fl';
const PROCESS_PREPARATION_WELLNESS = '3nLzWKs0IssG6xFh0GaTw6';

const PROCESS_FINALIZATION_STANDARD = '476vQxjUNuSdGQABy0Z8R9';
const PROCESS_FINALIZATION_ROMANTIC = '6VpnHFiV2grce03YzpZ9Td';

export default {
  name: "SelectWorkShiftView",
  data() {
    return {
      allProducts: [],
      selectedProductId: null,
      selectedStep: null
    }
  },
  computed: {
    goodToGo() {
      return this.selectedProductId !== null && this.selectedStep !== null
    }
  },
  methods: {
    loadAllProducts() {
      axios.get(`https://api.spaboot.de/products?category=RES`)
          .then(res => this.allProducts = res.data)
          .catch(err => console.log(err))
    },
    prepare(event) {
      this.selectedStep = 'preparation'
      this.selectedProductId = event.target.value
    },
    finalize(event) {
      this.selectedStep = 'finalization'
      this.selectedProductId = event.target.value
    }
  },
  watch: {
    goodToGo(gtg) {
      if (gtg === true) {
        const selectedProduct = this.allProducts.find(p => p.id === this.selectedProductId)
        console.log(this.selectedStep + ": " + this.selectedProductId + " " + selectedProduct.name + " ")
        const pId = this.selectedProductId
        let processId
        if (pId === 'RES-0004' || pId === 'RES-0006')
          processId = this.selectedStep === 'preparation' ? PROCESS_PREPARATION_WELLNESS : PROCESS_FINALIZATION_STANDARD
        else if (pId === 'RES-0010' || pId === 'RES-0009')
          processId =  this.selectedStep === 'preparation' ? PROCESS_PREPARATION_ROMANTIC : PROCESS_FINALIZATION_ROMANTIC
        else
          processId = this.selectedStep === 'preparation' ? PROCESS_PREPARATION_STANDARD : PROCESS_FINALIZATION_STANDARD
        // if (pId === 'RES-0001' || pId === 'RES-0002' || pId === 'RES-0003' || pId === 'RES-0005' || pId === 'RES-0007' || pId === 'RES-0008')
        console.log('process: ' + processId)
        this.$router.push({name: 'process', params: {processId}, query: {trip: selectedProduct.trip}})
      }
    }
  },
  mounted() {
    this.loadAllProducts()
  }
}
</script>

<template>
  <div class="container">
    <div class="h1">Wähle Deine Schicht</div>
    <div class="mt-5">
      <div class="h3">Vorbereitung und Start</div>
      <select id="preparationSelector" class="form-select form-control" @change="prepare($event)">
        <option :value="null">Bitte wähle</option>
        <option v-for="product in allProducts" :key="product.id" :value="product.id">
          {{ product.name }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <div class="h3">Übergang</div>
      kommt noch
      <div class="input-group d-none">
        <select id="transFromSelector" @change="transFrom($event)">
          <option v-for="product in allProducts" :key="product.id">{{ product.name }}</option>
        </select>
        <select id="transFromSelector" @change="transFrom($event)">
          <option v-for="product in allProducts" :key="product.id">{{ product.name }}</option>
        </select>
      </div>
    </div>
    <div class="mt-5">
      <div class="h3">Abholung</div>
      <select id="finalizationSelector" class="form-select form-control" @change="finalize($event)">
        <option :value="null">Bitte wähle</option>
        <option v-for="product in allProducts" :key="product.id" :value="product.id">
          {{ product.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>

</style>