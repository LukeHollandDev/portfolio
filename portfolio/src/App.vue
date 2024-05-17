<script setup>
import About from './components/About.vue'
import ProjectLinks from './components/ProjectLinks.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main>
    <h1>Luke Holland</h1>
    <hr />
    <About />
    <ProjectLinks />
    <Projects username="AmazonPriime" />
    <br />
    <Footer />
    <br />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
