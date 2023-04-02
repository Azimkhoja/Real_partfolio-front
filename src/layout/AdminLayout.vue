<template>
  <DashboardHeader :toogleBtn="toogleMenu" />
  <aside class="sticky z-20 top-0 w-[320px]">
    
    <Sidebar :toggle="toggled"/>
  </aside>
</template>
<script>
import DashboardHeader from '../components/Header/DashboardHeader.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';
export default {
    name: "adminLayout",
    components: {
    Sidebar,
    DashboardHeader,
},
    data() {
    return {
      toggled: true,
    };
  },
  methods: {
    toogleMenu() {
      this.toggled = !this.toggled;
    },
  },
    

}
</script>
<style lang="css" scoped>
    
</style>