<template >
    <HomeSection/>
    <main>
      <AboutMeSection/>
      </main>  
    <Footer/>
  </template>
<script>

import AboutMeSection from "../sections/AboutMeSection.vue";
import HomeSection from "@/sections/HomeSection.vue"
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "mainLayout", 
  components: {
    HomeSection,
    Footer,
    AboutMeSection
  }
}
</script>
<style lang="css">
  
</style>