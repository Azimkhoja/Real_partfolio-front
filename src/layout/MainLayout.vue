<template >
    <HomeSection/>
    <main>
      <AboutMeSection/>
      <ProjectSection/>
      <ContactSection/>
    </main>  
    <Footer/>
  </template>
<script>

import AboutMeSection from "../sections/AboutMeSection.vue";
import ProjectSection from "../sections/ProjectSection.vue";
import ContactSection from "../sections/ContactSection.vue";
import HomeSection from "@/sections/HomeSection.vue"
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "mainLayout", 
  components: {
    HomeSection,
    Footer,
    AboutMeSection,
    ProjectSection,
    ContactSection,
  }
}
</script>
<style lang="css">
  
</style>