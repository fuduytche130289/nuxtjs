<template>
  <div class="container mx-auto">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
