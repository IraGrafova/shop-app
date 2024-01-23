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
import { mapGetters } from "vuex";

export default {
  props: ["productAmount", "item"],

  data() {
    return {currentProductAmount: 1,
    globalProductAmount: null
    }
  },

 

  computed: {
    ...mapGetters({
      products: "cartDetailProducts",
      
    }),
    amount() {
      // return this.item.amount
      this.products.forEach(el => {
        console.log(el.amount)
        console.log(this.item)
       
        
        return el.amount
      });
      // this.products.find(el => el.)
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
      console.log(this.products)  
    }
  },

  watch: {
    currentProductAmount(value) {
      console.log('watch '+value)
      this.changeProductCount({productId: this.$route.params.id, amount: value});
      this.$emit('update:productAmount', value)
    },
  },

};
</script>
