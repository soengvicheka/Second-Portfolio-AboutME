<template>
  <div class="min-h-screen bg-white">
    <Header />
    <Hero />
    <Services />
    <Projects />
    <About />
    <Contact />
    <Journey />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Journey from './components/Journey.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Services,
    Projects,
    About,
    Contact,
    Journey,
    Footer
  }
}
</script>

<style scoped>
/* App specific styles */
</style>
