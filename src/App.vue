<script setup>
  import Hero from './components/Hero.vue'
  import Work from './components/Work.vue'
  import Header from './components/Header.vue'
</script>

<template>

  <header>
    <Header />
  </header>

  <main>
    <Hero />
    <Work />
  </main>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');


body {
  background-color: white;
}

@font-face {
  font-family: 'Bagnard';
  src: url(../src/assets/fonts/Bagnard.otf);
}
</style>
