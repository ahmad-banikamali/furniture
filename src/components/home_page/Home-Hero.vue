<script setup lang="ts">
</script>

<template>
  <div class="h-screen bg-banner bg-cover bg-center text-white">
    <div class="grid grid-cols-12 h-screen ">
      <div class="col-start-1 col-span-1 flex items-center ">
        <a class="bg-zinc-100 flex py-16 w-2/5 justify-center">
          <img src="@images/home_page/icons/arrow-right.svg" alt="previous banner">
        </a>
      </div>

      <div class="col-start-2 col-span-10  relative">
        <header class="flex gap-3 absolute top-0 left-0 right-0 text-xl pt-8 px-14">
          <div>
            <a href="" class="font-bold text-xl">
              Soudemy
            </a>
          </div>
          <nav class="ml-20">
            <ul class="flex ml-3 gap-10 font-bold text-lg">
              <li>Home</li>
              <li>Shop</li>
              <li>About us</li>
              <li>Blog</li>
            </ul>
          </nav>
          <nav class="ml-auto flex gap-7">
            <img src="@images/home_page/icons/search-normal.svg"/>
            <img src="../../assets/images/home_page/icons/bag.svg"/>
            <img src="@images/home_page/icons/menu.svg"/>
          </nav>
        </header>

        <div class="h-full flex flex-col">
          <div class="h-1/2  flex justify-center items-end">
            <div class="flex flex-col items-center ">
              <div class="text-center text-5xl mb-5">ALL FOR YOUR HOME</div>
              <div class="text-justify [text-align-last:center]  w-2/5 text-xl ">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Consequat
                dolor odio
                odio malesuada at condimentum adipiscing iaculis semper.
              </div>
              <div class=" flex items-center translate-y-1/2 ">
                <a href="" class="border border-white py-5 px-8 flex items-center text-xl">
                  View more
                  <span
                      class="inline-block ml-4 ">
                            <img src="@images/home_page/icons/arrow-right.svg"
                                 class="rotate-180 invert" alt="next banner">

                </span></a>
              </div>
            </div>
          </div>

        </div>


      </div>

      <div class="col-start-12 col-span-1 flex items-center flex-row-reverse">
        <a class="bg-zinc-100 flex py-16 w-2/5 justify-center">
          <img src="@images/home_page/icons/arrow-right.svg" class="rotate-180" alt="next banner">
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
