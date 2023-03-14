<template>
  <div class="home">
    <NavBar/>
    <img alt="foto" src="../assets/foto.jpeg">
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
  },
};
</script>

<style>
img {
  width: 300px;
}
</style>
