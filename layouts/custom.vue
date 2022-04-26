<template>
    <div>
      <NavBar/>
      <slot />
      <Footer/>
    </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default {
  name: "custom",
  components: {Footer, NavBar}
}
</script>

<style scoped>

</style>