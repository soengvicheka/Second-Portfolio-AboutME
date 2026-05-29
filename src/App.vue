<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AboutSection from './components/AboutSection.vue'
import JourneySection from './components/JourneySection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <AboutSection />
    <JourneySection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
