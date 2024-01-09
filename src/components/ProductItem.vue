<template>
  <li class="catalog__item" v-if="product">
    <a class="catalog__pic" href="#" @click.prevent="$emit('gotoPage', 'product', {id: product.id})">
      <img :src="product.image" :alt="product.title" />
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price"> {{ product.price }} ₽ </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            value="#73B6EA"
            v-model="color"
          />
          <span class="colors__value" :style="{'background-color': product.color}"> </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      color: '#73B6EA'
    };
  },
  props: { product: Object },
  
};
</script>
