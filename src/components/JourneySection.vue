<script setup>
import { education, experience } from '../data/portfolio'
</script>

<template>
  <section id="journey" class="section bg-slate">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">My <span class="text-gold">Academic</span> <span class="text-gold">Journey</span></h2>
        <p>Education and professional experience</p>
      </div>

      <div class="journey-grid">
        <div class="journey-column">
          <h3>Education</h3>
          <div v-for="item in education" :key="`${item.school}-${item.year}`" class="journey-item">
            <h4>{{ item.school }}</h4>
            <p class="journey-degree">{{ item.degree }}</p>
            <p class="journey-year">{{ item.year }}</p>
          </div>
        </div>

        <div class="journey-column">
          <h3>Work Experience</h3>
          <div v-for="item in experience" :key="`${item.company}-${item.year}`" class="journey-item">
            <h4>{{ item.company }}</h4>
            <p class="journey-degree">{{ item.position }}</p>
            <p class="journey-year">{{ item.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
