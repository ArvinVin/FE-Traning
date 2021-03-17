<template>
  <div class="product-creation">
  </div>
</template>

<script>
const ProductCardPreview = () => import(/* webpackChunkName: "c-product-card-review" */ '@/components/product/ProductCardPreview')
const ProductCreationForm = () => import(/* webpackChunkName: "c-product-creation-form" */ '@/components/product/ProductCreationForm')
export default {
  name: 'ProductCreation'
}
</script>

<style lang="scss" scoped>

</style>
