<template>
  <div class="col-lg-4 mb-4">
    <Pagination />
    <SidebarList />
  </div>
</template>

<script>
import Pagination from './SidebarPagination'
import SidebarList from './SidebarList'

export default {
  name: 'Sidebar',
  components: {
    Pagination,
    SidebarList
  }
}
</script>

<style>
</style>
