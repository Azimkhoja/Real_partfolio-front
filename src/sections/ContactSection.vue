<template >
    <section class="bg-[#161616] py-[212px] min-h-screen font-[Poppins]">
        <div class="container mx-auto">
            <div class="contact-container  flex rounded-[33px]">
                <div class="contact-left w-2/5 py-[92px]  bg-[#272727] rounded-l-[33px] ">
                    <div class="flex flex-col ml-[110px]">
                        <div class="flex items-center ">
                            <h1 class="text-4xl text-white">CONTACT</h1>
                            <div class="h-1 w-4/5 ml-2 bg-[#13ff00]"></div>
                        </div>
                        <div class="flex items-center mt-[78px]">
                            <i class='bx bx-phone-call text-white text-4xl mr-3' ></i>
                            <p  class="text-white text-2xl"> +998 93 778 67 78</p>
                        </div>
                        <div class="flex items-center my-[56px]">
                            <i class='bx bx-envelope  text-white text-4xl mr-3' ></i>
                            <p class="text-white text-2xl">ahmadkhonovazimkhoja@gmail.com</p>
                        </div>
                        <div class="flex items-center">
                            <img src="../assets/images/location-marker.svg" alt="location icon">
                            <p class="text-white text-2xl ml-3" >Uzbekistan, Tashkent</p>
                        </div>
                    </div>
                    <div class="h-1 w-3/5 mt-[151px] bg-[#13ff00]"></div>
                </div>
                <!-- right side of contact section starting -->
                <div class="contact-right bg-[#202020] w-3/5  rounded-r-[33px]">

                    <div class="py-8 px-4 mx-auto max-w-3xl lg:py-16">
                        <form action="#">
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div class="w-full">
                                    <label for="name" class="block mb-2 text-sm font-medium text-[#C1C1C1]">Your
                                        name</label>
                                    <input type="text" name="name" id="name"
                                        class="bg-[#343434] border-none h-12  text-white   text-sm rounded-lg  focus:ring-[#13ff00] focus:border-[#13ff00] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required="">
                                </div>
                                <div class="w-full">
                                    <label for="email" class="block mb-2 text-sm font-medium text-[#C1C1C1]">Your
                                        email</label>
                                    <input type="email" name="email" id="email"
                                        class="bg-[#343434] border-none h-12 text-white text-sm rounded-lg focus:ring-[#13ff00] focus:border-[#13ff00] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required="">
                                </div>

                                <div class="sm:col-span-2 my-5">
                                    <label for="name" class="block mb-2 text-sm font-medium text-[#C1C1C1]">Subject</label>
                                    <input type="text" name="name" id="name"
                                        class="bg-[#343434]  border-none h-12 text-white text-sm rounded-lg  focus:ring-[#13ff00] focus:border-[#13ff00] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required="">
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="description"
                                        class="block mb-2 text-sm font-medium text-[#C1C1C1]">Message</label>
                                    <textarea id="description" rows="8"
                                        class="block p-2.5 w-full text-sm text-white border-none bg-[#343434] rounded-lg  focus:ring-[#13ff00] focus:border-[#13ff00] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
                                </div>
                            </div>
                            <a href="https://ahmadkhonovazimkhoja@gmail.com" class="flex justify-center items-center w-[205px]  py-2 bg-[#13ff00] rounded-lg mt-10">
                                <i class='bx bxs-envelope text-3xl mr-5' ></i> 
                                <p class="text-xl font-medium">
                                    Send
                                </p>
                                
                            </a>
                        </form>
                    </div>
                </div>
                <!-- right side of contact section finished here -->
            </div>
        </div>

    </section>
</template>
<script>
export default {
    name: "ContactSection",
}
</script>
<style lang="css"></style>