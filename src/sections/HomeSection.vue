<template>

    <section id="home" class="home bg-[#343434] h-[1070px] overflow-hidden font-[Poppins]">
        <div class="container mx-auto relative z-20">
            <Header />
        </div>
        <div class="relative min-h-full">
            <!-- left side of home section -->
            <div class="yarmiqora w-[100%] bg-[#202020] h-[1080px]  absolute -top-20 z-10">
                <div class="container mx-auto">
                    <div class="mt-[324px] flex flex-col">
                        <h1 class="text-[44px] text-[#13ff00]  font-bold">Azimkhoja Ahmadkhonov</h1>
                        <div class="h-[5px] my-1 ml-48 rounded-md w-[416px] text-end bg-[#13ff00]"></div>
                        <h2 class="text-white text-[50px] font-bold w-[600px]">Backend & Frontend Developer</h2>
                        <p class="text-[#8F8F8F] text-xl mt-[28px] w-[600px]">Fullstack developer focused on creating Websites and Web applications. I really like different projects that solve real problems.</p>
                        <div class="flex  mt-11">
                            <div class="flex justify-between items-center bg-[#13ff00] p-2 rounded-lg">
                                <i class='bx bxs-download text-3xl'></i>
                                <p class="text-xl ml-3">Download CV</p>
                                <!-- <img src="../assets/images/cloud_down.svg" alt=""> -->
                            </div>
                            <div class="flex items-center bg-[#13ff00] rounded-lg px-3 ml-[120px]">
                                <!-- <img src="../assets/images/circle_down.svg" alt="circle down"> -->
                                <i class='bx bxs-right-top-arrow-circle text-3xl' ></i>
                                <p class="text-xl ml-3">Explore partfolio</p>
                            </div>
                            <!-- social media links -->
                        </div>
                            <ul class="flex justify-between items-center w-[428px] h-[62px] mt-[98px]">
                                <a href="https://www.instagram.com/ahmadxonovazimxoja"><li class="flex justify-center items-center w-[61px] h-[61px]  bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"><i class='bx bxl-instagram text-white text-3xl group-hover:text-black' ></i></li></a>
                                <a href="https://github.com/Azimkhoja"><li class="flex justify-center items-center w-[61px] h-[61px]  bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"><i class='bx bxl-github text-white text-3xl  group-hover:text-black' ></i></li></a>
                                <a href="https://www.linkedin.com/in/azimkhoja-ahmadkhonov-814577238"><li class="flex justify-center items-center w-[61px] h-[61px]  bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"><i class='bx bxl-linkedin text-white text-3xl  group-hover:text-black' ></i></li></a>
                                <a href="https://t.me/Azimxoja_A"><li class="flex justify-center items-center w-[61px] h-[61px]  bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"><i class='bx bxl-telegram text-white text-3xl  group-hover:text-black' ></i></li></a>
                                <a href=""><li class="flex justify-center items-center w-[61px] h-[61px]  bg-[#353535] rounded-full group hover:bg-[#13ff00] duration-150 hover:scale-125"><i class='bx bxl-whatsapp text-white text-3xl  group-hover:text-black' ></i></li></a>
                            </ul>
                    </div>

                </div>
            </div>
            <!-- right side of home section -->
            <div class="inline-block absolute left-1/2 top-[139px] -translate-x-1/2 mx-auto">
                <div
                    class="green-circle flex justify-center items-center h-[900px] w-[900px] rounded-full border-[8px] border-[#13ff00] ">
                    <div class="h-[885px] w-[885px] rounded-full bg-transparent">
                        <div class="relative">
                            <img src="../assets/images/Image_Portfolio.png" class="absolute -top-[52px] -left-2"
                                alt="my photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
import Header from "@/components/Header/Header.vue";
export default {
    name: "HomeSection",
    components: {
        Header,
    },
};
</script>
<style lang="css" scoped>
.yarmiqora {
    /* clip-path: polygon(0 0, 41% 0, 72% 100%, 0% 100%); */
    clip-path: polygon(0 0, 37% 0, 66% 100%, 0% 100%);

}
.green-circle {
    box-shadow: 0 0 40px #13ff00, inset 0px 0px 40px #13ff00;
}
</style>
