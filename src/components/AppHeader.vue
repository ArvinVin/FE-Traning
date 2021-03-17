<template>
  <div class="app-header background-blue">
    <div class="app-header__container">
      <div class="app-header__logo">
        <router-link to="/home">
          <img src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg">
        </router-link>
      </div>

      <div class="app-header__search-frame">
        <BliField
          class="app-header__search-field"
          custom-icon
          right-icon
        >
          <BliIconSearch slot="icon" />
          <BliInput
            v-model="searchVal"
            @keyup.enter="searchProduct"
          />
          <label>Kamu lagi cari apa?</label>
        </BliField>
      </div>

      <div class="app-header__action-frame">
        <BliButton
          class="app-header__btn-add"
          outline
          color="white"
          size="small"
          @click="redirectTo('ProductCreation')"
        >
          Add New
        </BliButton>
        <BliButton
          class="app-header__btn-list"
          color="white"
          size="small"
          @click="redirectTo('Product')"
        >
          Product List
        </BliButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      searchVal: ''
    }
  },

  computed: {
    searchQuery () {
      return this.$route.query.search
    }
  },

  watch: {
    searchQuery (nv) {
      this.searchVal = nv
    }
  },

  created () {
    this.searchVal = this.searchQuery
  },

  methods: {
    searchProduct () {
      this.redirectTo('Product', {
        query: {
          search: this.searchVal
        }
      })
    },

    redirectTo (route, { query, params } = {}) {
      this.$router.replace({
        name: route,
        query: query,
        params: params
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  background-color: #0095da;
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    &__logo {
      img {
        width: 125px;
      }
    }

    &__search-field {
      width: 350px;
      margin: 10px 0 ;
    }

    &__btn-add {
      margin-right: 25px;
    }
}
</style>
