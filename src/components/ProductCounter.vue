<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="currentProductAmount" @change="productCount"/>

    <button type="button" aria-label="Добавить один товар">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: ["productAmount"],

  data() {
    return {currentProductAmount: 1,}
  },

  watch: {
    productAmount(value) {
      this.currentProductAmount = value;
    },
  },
  methods: {
    ...mapMutations({productCount: 'addProductToCart'})
  }
};
</script>
