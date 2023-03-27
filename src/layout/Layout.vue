<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>
  <Header />
  <main>w
    <router-view> </router-view>
  </main>
  <Footer />
</template>

<style>
  main {
    min-height: calc(100vh - 70px );
  } 
</style>
