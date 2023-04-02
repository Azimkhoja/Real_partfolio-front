<template>
    <header class="shadow fixed top-0 w-full z-20 bg-[#161616]">
     <div class="container-fluid">
        <nav class="flex w-full justify-between h-[70px] items-center p-4">
  
            <a href="#" class="nav__logo text-2xl ml-5 font-bold text-[#13ff00]">
                LOGO
            </a>
  
            <div class="nav__menu flex justify-between w-[220px] items-center cursor-pointer p-2">
  
                <i @click="toogleBtn" class='bx bx-menu text-3xl text-[#13ff00] hover:text-white active:bg-[#2ef81f] duration-300 rounded-lg '></i>
  
                <div class="nav__user flex items-center">
                    <span class="text font-semibold text-[#13ff00] mr-2">Azimkhoja</span>
                    <i class='bx bxs-user-circle text-2xl text-[#13ff00]'></i>
                </div>
  
            </div>
  
        </nav>
     </div>
    </header>
  </template>
  
  
  <script>
  export default {
    name: "Header",
    props: {
        toogleBtn: {
            type: Function,
            required: true
       } 
    }
  }
  </script>
  
  
  
  <style></style>