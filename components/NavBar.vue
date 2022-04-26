<template>
<nav class="pb-3">
<div class="container mx-auto mt-4 flex justify-between">
  <div class="sm:flex justify-center text-4xl font-extrabold antialiased tracking-[-.17rem]">
    <img src="assets/images/logo.png" style="width: 55px; height: 55px" class="mr-3"/>
    <div class="mt-2" >
      <a href="#">serve</a>
      <a class="text-primary">_</a>
    </div>
  </div>
  <div id="content">
    <ul class="flex ">
      <li v-for="(menuItem, index) in menuItems" :key="index" :href="menuItem.href" class="px-3 py-3">
        <button>{{menuItem.name}}</button>

      </li>
    </ul>
  </div>
</div>
</nav>

</template>

<script>
export default {
  name: "NavBar",
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