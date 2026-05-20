<template>
  <section id="about" class="py-20 bg-dark-green text-white">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <!-- Left - Image -->
      <div class="flex justify-center">
        <div class="relative w-64 h-64 bg-gold rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow" @click="triggerFileInput">
          <div class="w-56 h-56 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity">
            <img v-if="aboutImage" :src="aboutImage" alt="About" class="w-full h-full object-cover">
            <span v-else class="text-gray-500">Click to upload</span>
          </div>
          <!-- Hidden file input -->
          <input 
            ref="fileInput" 
            type="file" 
            accept="image/*" 
            class="hidden" 
            @change="handleImageUpload"
          />
        </div>
      </div>

      <!-- Right - Content -->
      <div>
        <h2 class="text-4xl font-bold mb-6">
          Who is <span class="text-gold">Olivia Smith</span>?
        </h2>
        <p class="text-gray-200 mb-8 text-lg leading-relaxed">
          I'm a passionate product designer with over 5 years of experience creating intuitive and beautiful digital experiences. My expertise spans UI/UX design, web design, and mobile application design.
        </p>

        <div class="grid grid-cols-3 gap-6 mb-8">
          <div>
            <div class="text-3xl font-bold text-gold">400+</div>
            <p class="text-gray-300">Projects</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-gold">50+</div>
            <p class="text-gray-300">Clients</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-gold">1B</div>
            <p class="text-gray-300">Users</p>
          </div>
        </div>

        <a href="#contact" class="btn-primary bg-gold text-dark-green hover:bg-light-gold inline-block">
          Connect with me →
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      aboutImage: null
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleImageUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.aboutImage = e.target.result
          // Optionally save to localStorage
          localStorage.setItem('aboutImage', e.target.result)
        }
        reader.readAsDataURL(file)
      }
    }
  },
  mounted() {
    // Load saved about image from localStorage
    const savedImage = localStorage.getItem('aboutImage')
    if (savedImage) {
      this.aboutImage = savedImage
    }
  }
}
</script>
