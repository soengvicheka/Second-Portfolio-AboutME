<template>
  <section class="bg-white py-20">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div>
        <span class="badge mb-4">Hello There!</span>
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-dark-green">
          I'm <span class="text-gold">Olivia Smith</span>,
          <br />
          <span class="text-3xl md:text-4xl">Product Designer</span>
          <br />
          <span class="text-2xl text-light-green">Based in USA.</span>
        </h1>
        <p class="text-gray-600 mb-8 text-lg">
          I'm a passionate product designer with expertise in creating intuitive and beautiful user experiences. Let me help bring your vision to life.
        </p>
        <div class="flex gap-4">
          <button class="btn-primary">View Portfolio</button>
          <button class="btn-secondary">See Me</button>
        </div>
      </div>

      <!-- Right - Profile Image Placeholder -->
      <div class="flex justify-center relative">
        <div class="relative w-80 h-80 bg-gold rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow" @click="triggerFileInput">
          <div class="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity">
            <img v-if="profileImage" :src="profileImage" alt="Profile" class="w-full h-full object-cover">
            <span v-else class="text-gray-400 text-lg">Click to upload profile</span>
          </div>
          <!-- Badge 1: UX Designer - Bottom Right -->
          <div class="absolute -bottom-4 -right-4 bg-dark-green text-white px-6 py-3 rounded-full font-medium shadow-lg">
            UX Designer
          </div>
          
          <!-- Badge 2: Front-End Developer - Top Left -->
          <div class="absolute -top-4 -left-4 bg-gold text-dark-green px-5 py-2 rounded-full font-medium shadow-lg text-sm">
            Front-End Dev
          </div>
          
          <!-- Badge 3: QA Testing - Top Right -->
          <div class="absolute -top-4 -right-4 bg-light-green text-white px-6 py-3 rounded-full font-medium shadow-lg text-sm">
            QA Testing
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      profileImage: null
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
          this.profileImage = e.target.result
          // Optionally save to localStorage
          localStorage.setItem('profileImage', e.target.result)
        }
        reader.readAsDataURL(file)
      }
    }
  },
  mounted() {
    // Load saved profile image from localStorage
    const savedImage = localStorage.getItem('profileImage')
    if (savedImage) {
      this.profileImage = savedImage
    }
  }
}
</script>
