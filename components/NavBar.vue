<template>
<nav class="pb-3">
<div class="container mt-4 flex flex-wrap justify-between items-center mx-auto">
  <div class="sm:flex justify-center text-4xl font-extrabold antialiased tracking-[-.17rem]">
    <img src="assets/images/logo.png" style="width: 55px; height: 55px" class="mr-3"/>
    <div class="mt-2" >
      <a href="#">serve</a>
      <a class="text-primary">_</a>
    </div>
  </div>
  <div id="content" class="flex flex-row">
    <NavBarPopover></NavBarPopover>
    <button class="min-w-fit p-3 text-white font-bold rounded-lg bg-primary ">Connect Wallet</button>
  </div>

</div>
</nav>

</template>

<script>
import NavBarPopover from "./NavBarPopover";

export default {
  name: "NavBar",
  components: { NavBarPopover},
  setup() {
    const menuItems = [{
      name: "Home",
      href: '/'
    },
      {
        name: "Home",
        href: '/'
      },
      {
        name: "Home",
        href: '/'
      }]
    return {
      menuItems
    }
  }
}
</script>

<style scoped>

</style>