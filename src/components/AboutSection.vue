<script setup>
import { ref } from 'vue'
import { stats } from '../data/portfolio'
import { useStoredImage } from '../composables/useStoredImage'

const fileInput = ref(null)
const { imageSrc, updateImage } = useStoredImage('aboutImage')

function openFilePicker() {
  fileInput.value?.click()
}
</script>

<template>
  <section id="about" class="section bg-dark-green text-white">
    <div class="container about-grid">
      <div class="about-image">
        <div class="about-circle" role="button" tabindex="0" @click="openFilePicker" @keydown.enter="openFilePicker">
          <div class="about-inner">
            <span v-if="!imageSrc" class="placeholder-text">Click to upload</span>
            <img v-else :src="imageSrc" alt="About">
          </div>
          <input ref="fileInput" type="file" accept="image/*" @change="updateImage">
        </div>
      </div>

      <div class="about-content">
        <h2>Who is <span class="text-gold">SOENG Vicheka</span>?</h2>
        <p>
          I'm a passionate product designer with over 5 years of experience creating intuitive
          and beautiful digital experiences. My expertise spans UI/UX design, web design, and
          mobile application design.
        </p>
        <div class="stats-row">
          <div v-for="stat in stats" :key="stat.label">
            <div class="stat-number text-gold">{{ stat.value }}</div>
            <p>{{ stat.label }}</p>
          </div>
        </div>
        <a href="#contact" class="btn-primary gold-btn">Connect with me -></a>
      </div>
    </div>
  </section>
</template>
