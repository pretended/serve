<template>
  <NuxtLayout name="custom">
    <div class="flex justify-center pt-28 bg-[#fbfbfb] px-6" style="height: 90vh !important;">
        <div>
          <h1 class="text-6xl xs:text-4xl sm:text-5xl font-black text-center antialiased tracking-[-.17rem]" style="font-variation-settings: 'wght' 900;" >
           <p> The platform for getting the </p>
            <p class="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC33] to-[#E233FF] pb-2"> right answers!</p>
          </h1>
          <span class="text-2xl font-normal tracking-[-.12rem] text-gray mt-5 flex justify-center ">
            Create the perfect survery and share it for finding the right answers.
          </span>

        <div>
          <button class="focus:ring bg-gradient-to-tr from-[#FFCC33] to-[#E233FF] flex mx-auto px-4 py-4 mt-10 rounded-lg font-bold text-white shadow-2xl drop-shadow-2xl">
            Create a survey
          </button>

        </div>
        </div>
      </div>
  </NuxtLayout>
</template>

<script>

export default {
  name: 'index',

  setup() {

  }
}

</script>

<style scoped>

</style>