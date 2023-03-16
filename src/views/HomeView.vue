<template>
  <div class="home">
    <NavBar/>
    <ServicesSection/>
    <FooterSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ServicesSection,
    FooterSection,
  },
};
</script>

<style>
img {
  width: 300px;
}
</style>
