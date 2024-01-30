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
  props: ["productAmount", "item"],

  data() {
    return {currentProductAmount: 1,
    }
  }, 

  methods: {
    ...mapMutations({changeProductCount: 'updateCartProductAmount'}),
    

    minusProductAmount (amount) {
      if(amount != 0) {
        this.currentProductAmount = (amount-1)
      }
    },

    plusProductAmount(amount) {
      this.currentProductAmount = (amount+1); 
    }
  },

  watch: {
    currentProductAmount(value) {
      if (this.$route.name == "cart") {
        this.changeProductCount({productId: this.$route.params.id, amount: value});
        this.$emit('update:productAmount', value)   //нужен для обновления данных в корзине: итоговая сумма и сумма за количество товара, синхронизирован с CartItem
      } else       
      this.$emit('update:productAmount', value) //синхронизирован с ProductPage
    },
  },

  mounted() {
    if (this.$route.name == "cart") {
      this.currentProductAmount = this.item.amount
    }
}

};
</script>
