<script setup>
import { skills } from '../data/portfolio'
</script>

<template>
  <section id="skills" class="section bg-slate">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Skills I <span class="text-gold">Bring</span> to Every Project</h2>
        <p>A polished skills showcase with category cards and modern accent styling to reflect expertise clearly.</p>
      </div>

      <div class="skills-grid">
        <article v-for="skill in skills" :key="skill.title" class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon" :class="skill.iconClass">{{ skill.icon }}</div>
            <div>
              <p class="skill-label">{{ skill.label }}</p>
              <h3>{{ skill.title }}</h3>
            </div>
          </div>
          <p class="skill-desc">{{ skill.description }}</p>
          <div class="skill-tags">
            <span
              v-for="tag in skill.tags"
              :key="tag"
              class="badge"
              :class="skill.badgeClass"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
