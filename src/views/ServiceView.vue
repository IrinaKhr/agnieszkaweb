<template>
  <div class="about">
    <NavBar/>
    <div>This is About page </div>
    <FooterSection/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'ServiceView',
  components: {
    NavBar,
    FooterSection,
  },
};
</script>
