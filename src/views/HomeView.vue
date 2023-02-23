<template>
  <div class="home">
    <img alt="foto" src="../assets/foto.jpeg">
    <HelloWorld msg="Hi Darling! Welcome to Your Internet Page First Draft"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>

<style>
img {
  width: 300px;
}
</style>
