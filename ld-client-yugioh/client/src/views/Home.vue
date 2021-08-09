<template>
  <div class="row mb-5">
    <!-- sidebar section && main menu section -->
    <Sidebar />
    <MainContent />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'

export default {
  name: 'Home',
  components: {
    Sidebar,
    MainContent
  },
  created () {
    this.$store.dispatch('fetchCardList', {
      page: 1
    })
    this.$store.dispatch('fetchCardDetail', {
      card_number: 'DR04-EN096'
    })
  }
}
</script>
