<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-dark-green">
        <span class="text-gold">SOENG </span>Vicheka
      </div>
      <ul class="hidden md:flex gap-8 text-dark-green font-medium">
        <li><a href="#about" class="hover:text-gold transition">About</a></li>
        <li><a href="#skills" class="hover:text-gold transition">Skills</a></li>
        <li><a href="#projects" class="hover:text-gold transition">Projects</a></li>
      </ul>
      <a href="#contact" class="btn-primary">Contact Me</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
