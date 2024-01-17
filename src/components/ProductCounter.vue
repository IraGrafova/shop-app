<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="minusProductAmount(currentProductAmount)">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="currentProductAmount"/>

    <button type="button" aria-label="Добавить один товар" @click.prevent="plusProductAmount(currentProductAmount)">
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
    currentProductAmount(value) {
      this.changeProductCount({productId: this.$route.params.id, amount: value});
    this.$emit('update:productAmount', value)
    },
  },
  methods: {
    ...mapMutations({changeProductCount: 'updateCartProductAmount'}),

    minusProductAmount (amount) {
      if(amount != 0) {
        console.log('amount '+amount)
        this.changeProductCount({productId: this.$route.params.id, amount: amount-1});
        this.$emit("update:productAmount", amount - 1);
      }
    },

    plusProductAmount() {

    }
  }

};
</script>
