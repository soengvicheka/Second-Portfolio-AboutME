<script setup>
import { ref } from 'vue'
import { useStoredImage } from '../composables/useStoredImage'

const fileInput = ref(null)
const { imageSrc, updateImage } = useStoredImage('profileImage')

function openFilePicker() {
  fileInput.value?.click()
}
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="badge">Hello There!</span>
        <h1>
          <span class="text-gold">SOENG VICHKEA</span><br>
          <span class="subtitle">Front-end Developer and UX/UI designer</span>
        </h1>
        <p>
          I'm a passionate front-end developer and ux/ui designer with expertise in creating
          intuitive and beautiful user experiences. Let me help bring your vision to life.
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn-primary">View Portfolio</a>
          <a href="#about" class="btn-secondary">See Me</a>
        </div>
      </div>

      <div class="hero-image">
        <div class="profile-circle" role="button" tabindex="0" @click="openFilePicker" @keydown.enter="openFilePicker">
          <div class="profile-inner">
            <span v-if="!imageSrc" class="placeholder-text">Click to upload profile</span>
            <img v-else :src="imageSrc" alt="Profile">
          </div>
          <input ref="fileInput" type="file" accept="image/*" @change="updateImage">
          <div class="badge-round badge-ux">UX Designer</div>
          <div class="badge-round badge-frontend">Front-End Dev</div>
          <div class="badge-round badge-qa">QA Testing</div>
        </div>
      </div>
    </div>
  </section>
</template>
