<script>
import axios from "axios";

const STANDARD_PRODUCT_TYPE = 0;
const ROMANTIC_PRODUCT_TYPE = 1;
const WELLNESS_PRODUCT_TYPE = 2;

const PREPARATION_PROCESSES = ['HvoIcslIOtNBxnwFOlN07', '6lkT0SW14Op8mOYrYcZ2Fl', '3nLzWKs0IssG6xFh0GaTw6']
const FINALIZATION_PROCESSES = ['476vQxjUNuSdGQABy0Z8R9', '6VpnHFiV2grce03YzpZ9Td', '1iTP7nFj3d9kYfVlAcTP5q']
const TRANSFROM_PROCESSES = ['7s7doErEAr1jZauxnMWc70', 'SqwRez3grqXAXbgiL12q1', '14FFqgHZIOSQTjoH7URVvB'];
const TRANSTO_PROCESSES = ['13J27SduyOR7hMKrZvk0O3', '5vo4l2Q82HlZlCwPOlbMyG', '5sn9GsMpw90ou947WdPWat'];

export default {
  name: "SelectWorkShiftView",
  data() {
    return {
      allProducts: []
    }
  },
  methods: {
    loadAllProducts() {
      axios.get(`https://api.spaboot.de/products?category=RES`)
          .then(res => this.allProducts = res.data)
          .catch(err => console.log(err))
    },
    getProductById(productId) {
      return this.allProducts.find(p => p.id === productId)
    },
    getProductTypeByProductId(productId) {
      if (productId === 'RES-0004' || productId === 'RES-0006')
        return WELLNESS_PRODUCT_TYPE
      if (productId === 'RES-0010' || productId === 'RES-0009')
        return ROMANTIC_PRODUCT_TYPE
      return STANDARD_PRODUCT_TYPE;
    },
    prepare(event) {
      const selectedProduct = this.getProductById(event.target.value)
      const processId = PREPARATION_PROCESSES[this.getProductTypeByProductId(selectedProduct.id)]
      this.$router.push({name: 'process', params: {processId}, query: {trip: selectedProduct.trip}})
    },
    finalize(event) {
      const selectedProduct = this.getProductById(event.target.value)
      const processId = FINALIZATION_PROCESSES[this.getProductTypeByProductId(selectedProduct.id)]
      this.$router.push({name: 'process', params: {processId}, query: {trip: selectedProduct.trip}})
    },
    transferSelected() {
      if (this.$refs.transFromSelector.value && this.$refs.transFromSelector.value !== 'Bitte wähle'
          && this.$refs.transToSelector.value && this.$refs.transToSelector.value !== 'Bitte wähle')
        this.transfer(this.$refs.transFromSelector.value, this.$refs.transToSelector.value)
    },
    transfer(fromProductId, toProductId) {
      console.log('transfer from ' + fromProductId + ' to ' + toProductId)
      const selectedProduct = this.getProductById(this.$refs.transFromSelector.value)
      const processId = TRANSFROM_PROCESSES[this.getProductTypeByProductId(selectedProduct.id)]
      const selectedProduct2 = this.getProductById(this.$refs.transToSelector.value)
      const processId2 = TRANSTO_PROCESSES[this.getProductTypeByProductId(selectedProduct2.id)]
      this.$router.push({
        name: 'process',
        params: {
          processId: processId,
          processId2: processId2},
        query: {
          trip: selectedProduct.trip,
          trip2: selectedProduct2.trip}
      })
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
      <div class="input-group">
        <label for="transFromSelector" class="form-label">von</label>
        <select id="transFromSelector" class="form-select form-control w-100" @change="transferSelected"
                ref="transFromSelector">
          <option :value="null">Bitte wähle</option>
          <option v-for="product in allProducts" :key="product.id" :value="product.id">{{ product.name }}</option>
        </select>
        <label for="transToSelector" class="form-label mt-3">nach</label>
        <select id="transToSelector" class="form-select form-control w-100" @change="transferSelected"
                ref="transToSelector">
          <option :value="null">Bitte wähle</option>
          <option v-for="product in allProducts" :key="product.id" :value="product.id">{{ product.name }}</option>
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