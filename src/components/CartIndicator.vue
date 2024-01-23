<template>
    <router-link class="header__cart" href="cart.html" aria-label="Корзина с товарами" :to="{name: 'cart'}">
        <svg width="30" height="21" fill="currentColor">
          <use xlink:href="#icon-cart"></use>
        </svg>
        <span class="header__count" aria-label="Количество товаров"> {{ totalAmount }} </span>
      </router-link>  
</template>

<script>
import { mapGetters } from "vuex";

    export default {
      computed: {
    ...mapGetters({
      totalAmount: 'cartTotalAmount'
    }),
  },
}
</script>

