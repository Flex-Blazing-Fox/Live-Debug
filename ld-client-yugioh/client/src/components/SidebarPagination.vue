<template>
  <div class="d-block">
    <ul class="pagination">
      <li class="page-item pointer"
        :class="currentPage === num ? 'active' : ''"
        v-for="num in totalPages"
        @click="fetchCardList(num)"
        :key="num">
        <a class="page-link" @click="fetchCardList(num)">{{ num }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      totalPages: 6,
      currentPage: 1
    }
  },
  methods: {
    fetchCardList (page) {
      this.currentPage = page
      this.$store.dispatch('fetchCardList', {
        page
      })
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer !important;
  }
</style>
