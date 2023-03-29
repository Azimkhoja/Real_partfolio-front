<template>
    <section id="about" class="bg-[#161616] font-[Poppins] relative">
        <img src="../assets/images/ABOUT ME (1).png" class="absolute right-0 mt-[80px]" alt="about me text">
        <div class="container mx-auto">
            <div class="flex flex-col items-center ">
                <h1 class="text-white text-[50px] font-bold  mt-[146px]">ABOUT ME</h1>
                <div class="w-[65px] bg-[#13ff00] h-1 rounded-md"></div>
                <div class="text-center w-[942px] mt-[52px] mb-[108px]">
                    <p class="text-[#8F8F8F] text-3xl leading-[45px]">I'm <strong class="text-[#13ff00]  font-medium">Azimkhoja</strong>, I'm <strong class="text-[#13ff00]  font-medium">23</strong> years old and I live in <strong class="text-[#13ff00]  font-medium">Uzbekistan, Tashkent</strong>.
                        <strong class="text-[#13ff00]  font-medium">Fullstack developer</strong>, I'm passionate about interfaces, from their creation to
                        development. I like to learn more and more about the area, challenges that take me out of my comfort
                        zone are the best. <br> <br> I have prototyped and developed <strong class="text-[#13ff00] font-medium">Landing Pages, Sites, E-commerces, E-mails Marketing, Apps</strong>  and Programs.</p>
                </div>

            </div>

        </div>
    </section>
    <section class="bg-[#1D1D1D] pb-[206px] font-[Poppins]">
        <div class="container mx-auto ">
            <h1 class="text-4xl text-center font-bold text-white pt-[84px]">My Services</h1>
            <div class="flex flex-col items-center mt-[71px]">
                <div class="flex justify-between items-center gap-[400px]">
                    <div class="flex gap-5 items-center w-[385px]">
                        <img src="../assets/images/bx-code-block.svg" alt="code block">
                        <p class="text-white text-3xl">Web Development</p>
                    </div>
                    <div class="flex   gap-5 items-center  w-[385px]">
                        <img src="../assets/images/bx-layout.svg" alt="code block">
                        <p class="text-white text-3xl">UI Design</p>
                    </div>
                </div>
                <div class="flex justify-between items-center gap-[400px] mt-[102px]">
                    <div class="flex  gap-5 items-center w-[385px]">
                        <img src="../assets/images/bx-mobile.svg" alt="code block">
                        <p class="text-white text-3xl">Mobile Development</p>
                    </div>
                    <div class="flex  gap-5 items-center  w-[385px]">
                        <img src="../assets/images/bx-rocket.svg" alt="code block">
                        <p class="text-white text-3xl">Social Media Design</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-[#161616] pt-[95px] h-screen font-[Poppins] relative">
        <div class="container mx-auto ">
            <div class="wrapper flex justify-around  items-center text-white">
                <div class="left-info flex flex-col ml-20">
                    <div class="mb-[68px]">
                        <h1 class=" text-3xl font-bold mb-[52px]">Education</h1>
                        <p class="date text-[22px] ">January 2020 - December 2023</p>
                        <h2 class="text-[#13ff00] text-3xl font-medium mt-4 mb-2">Sistemas de informação</h2>
                        <p class="text-[22px] text-[#C1C1C1]">Universidade Santa Cecília</p>
                    </div>
                    <div>
                        <p class="date text-[22px] ">August 2018 - December 2019</p>
                        <h2 class="text-[#13ff00] text-3xl font-medium mt-4 mb-2 w-[447px]">Técnico em Desenvolvimento de Sistema</h2>
                        <p class="text-[22px] text-[#C1C1C1]">Universidade Santa Cecília</p>
                    </div>
                </div>
                <div class="right-info flex flex-col ml-[140px]">
                    <div class="mb-[68px]">
                        <h1 class=" text-3xl font-bold mb-[52px]">Jobs</h1>
                        <p class="date text-[22px] ">January 2020 - December 2023</p>
                        <h2 class="text-[#13ff00] text-3xl font-medium mt-4 mb-2">Sistemas de informação</h2>
                        <p class="text-[22px] text-[#C1C1C1]">Universidade Santa Cecília</p>
                    </div>
                    <div>
                        <p class="date text-[22px] ">August 2018 - December 2019</p>
                        <h2 class="text-[#13ff00] text-3xl font-medium mt-4 mb-2 w-[447px]">Técnico em Desenvolvimento de Sistema</h2>
                        <p class="text-[22px] text-[#C1C1C1]">Universidade Santa Cecília</p>
                    </div>
                </div>
            </div>
            <img src="../assets/images/ABOUT ME.png" class="absolute left-0  mt-20" alt="about me">
        </div>
    </section>

</template>
<script>
export default {
    name: "AboutMe"
}
</script>
<style lang="css" scoped></style>