<template >
    <HomeSection/>
    <main>
      <p>home page</p>
    </main>  
    <Footer/>
  </template>
<script>
import HomeSection from "@/sections/HomeSection.vue"
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "mainLayout", 
  components: {
    HomeSection,
    Footer
  }
}
</script>
<style lang="css">
  
</style>