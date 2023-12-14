<template>
  <ul class="catalog__list">
    <ProductItem
      :product="item"
      v-for="(item, index) in products"
      :key="index"
    />
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "ProductList",

  components: { ProductItem },
  props: { products: Array },


};
</script>
