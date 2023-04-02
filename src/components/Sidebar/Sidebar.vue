<template >
    
    <div v-if="toggle" class="bg-[#3a3939] w-[250px] mt-14 min-h-screen shadow-lg">
        <a href="/" class="text-xl font-bold bg-[#161616] p-5 text-center block text-[#13ff00]">ADMIN DASHBOARD</a>
        <ul class="list mt-8">
            <li class="list__item py-1 px-2" v-for="item in navlink" :key="item.id">
                <router-link :to="item.link"
                    class="flex items-center text-lg bg-[#4f4f4f] rounded-lg shadow-lg list__item-link min-w-full hover:bg-indigo-50 duration-300 font-medium  p-3">
                    <i class="bx text-2xl mr-3 text-[#13ff00]" :class="item.icon"></i>
                    <span class="">{{ item.title }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import navlinks from "../../constants/navlink";
export default {
    name: "Sidebar",
    props: {
        toggle: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            navlink: navlinks,
        };
    },
};
</script>

<style scoped>
.router-link-active {
    background-color: rgb(107, 8, 177) !important;
    color: #fff !important;
    font-weight: 600 !important;
    background-color: violet !important;
}
</style>
