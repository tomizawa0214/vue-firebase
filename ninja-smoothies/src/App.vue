<template>
  <div id="app">
    <Navbar />
    <Index />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Index from '@/components/Index'

export default {
  name: 'App',
  components: {
    Navbar,
    Index
  }
}
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
</style>
