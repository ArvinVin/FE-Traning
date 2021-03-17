<template>
  <div id="app" class="app">
    <div class="app__container">
      <header class="app__header">
        <AppHeader />
      </header>

      <div class="app__pages">
        <router-view class="app__content"/>
      </div>
    </div>
  </div>
</template>

<script>
const AppHeader = () => import(/* webpackChunkName: "c-app-header" */ '@/components/AppHeader.vue')

export default {
  name: 'App',

  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_vars.scss";

  .app {
    &__container {
    }

    &__content {
      max-width: 1200px;
      background-color: $color-black;
      padding: 25px 0;
      margin: 0 auto;
    }
  }
</style>
