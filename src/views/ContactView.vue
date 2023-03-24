<template>
  <div class="about">
    <NavBar/>
    <div>This is Contact page </div>
    <FooterSection/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'ContactView',
  components: {
    NavBar,
    FooterSection,
  },
};
</script>
