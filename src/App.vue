<script setup>
  import Header from './components/Header.vue'
  import Hero from './components/Hero.vue'
  import Work from './components/Work.vue'
  import About from './components/About.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
</script>

<template>

  <header>
    <Header />
  </header>

  <main>
    <Hero />
    <Work />
    <About />
    <Contact />
  </main>

  <Footer>
    <Footer />
  </Footer>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');


@font-face {
  font-family: 'Bagnard';
  src: url(../src/assets/fonts/Bagnard.otf);
}

body {
  background-color: white;
}

header {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: linear-gradient(180deg, #FFF 0%, #FFF 25.52%, rgba(255, 255, 255, 0.00) 100%);
}

.section-title{
  font-family: 'Bagnard';
  width: 100%;
}


/* ------------- Mobile -------------- */
  @media screen and (max-width: 639px) {
    .section-title{
        font-size: 2rem;
    }
  }

/* ------------- Tablet -------------- */
@media screen and (min-width: 640px) and (max-width: 979px) {
  .section-title{
      padding-left: 2rem;
      font-size: 2rem;
  }
}

/* ------------- Desktop -------------- */
@media screen and (min-width: 980px) {
  .section-title{
      padding-left: 4rem;
      font-size: 3rem;
  }
}

</style>
