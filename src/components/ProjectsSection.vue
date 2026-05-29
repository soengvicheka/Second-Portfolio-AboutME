<script setup>
import { ref } from 'vue'
import { projects } from '../data/portfolio'
import { useStoredImage } from '../composables/useStoredImage'

const imageInputs = ref({})
const projectImages = Object.fromEntries(
  projects.map((project) => [project.id, useStoredImage(`projectImage-${project.id}`)])
)

function openProjectImage(projectId) {
  imageInputs.value[projectId]?.click()
}
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">My Latest <span class="text-gold">Projects</span></h2>
        <p>Showcasing my recent work and design solutions</p>
      </div>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image" role="button" tabindex="0" @click="openProjectImage(project.id)" @keydown.enter="openProjectImage(project.id)">
            <img
              v-if="projectImages[project.id].imageSrc.value"
              :src="projectImages[project.id].imageSrc.value"
              :alt="project.title"
            >
            <span v-else class="placeholder-text">Click to upload image</span>
            <input
              :ref="(el) => { imageInputs[project.id] = el }"
              type="file"
              accept="image/*"
              @change="projectImages[project.id].updateImage"
            >
          </div>

          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="badge">{{ tag }}</span>
          </div>

          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-title"
          >
            {{ project.title }}
          </a>
          <h3 v-else class="project-title">{{ project.title }}</h3>

          <p class="project-category">{{ project.category }}</p>

          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            Visit website
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
