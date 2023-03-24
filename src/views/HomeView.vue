<template>
  <div class="home">
    <NavBar/>
    <ServicesSection/>
    <TestimonialSection/>
    <FooterSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ServicesSection,
    TestimonialSection,
    FooterSection,
  },
};
</script>

<style>
</style>
