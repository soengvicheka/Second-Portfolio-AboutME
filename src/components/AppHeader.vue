<script setup>
import { navLinks } from '../data/portfolio'
</script>

<template>
  <header class="sticky-header">
    <nav class="container">
      <div class="logo">
        <span class="text-gold">SOENG </span>Vicheka
      </div>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>

      <a href="#contact" class="btn-primary">Contact Me</a>
    </nav>
  </header>
</template>
