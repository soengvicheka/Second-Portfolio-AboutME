<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="section-title mb-4 text-center">Let's <span class="text-gold">Connect</span></h2>
      <p class="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
        I'd love to hear about your project. Feel free to reach out and let's create something amazing together!
      </p>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <form @submit.prevent="submitForm">
            <div class="mb-6">
              <label class="block text-dark-green font-semibold mb-2">Your Name</label>
              <input 
                v-model="form.name"
                type="text" 
                placeholder="John Doe" 
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold transition"
                required
              />
            </div>

            <div class="mb-6">
              <label class="block text-dark-green font-semibold mb-2">Email Address</label>
              <input 
                v-model="form.email"
                type="email" 
                placeholder="john@example.com" 
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold transition"
                required
              />
            </div>

            <div class="mb-6">
              <label class="block text-dark-green font-semibold mb-2">Subject</label>
              <input 
                v-model="form.subject"
                type="text" 
                placeholder="Project Discussion" 
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold transition"
                required
              />
            </div>

            <div class="mb-6">
              <label class="block text-dark-green font-semibold mb-2">Message</label>
              <textarea 
                v-model="form.message"
                placeholder="Tell me about your project..." 
                rows="5"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold transition resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-primary w-full">
              Send Message
            </button>

            <p v-if="successMessage" class="text-green-600 font-semibold mt-4 text-center">
              ✓ Message sent successfully!
            </p>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Email -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-gold rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                ✉️
              </div>
              <div>
                <h3 class="text-lg font-bold text-dark-green mb-2">Email</h3>
                <a href="mailto:olivia@example.com" class="text-gold hover:text-dark-green transition">
                  soengvicheka775@gamil.com
                </a>
              </div>
            </div>
          </div>

          <!-- Phone -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-gold rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                📱
              </div>
              <div>
                <h3 class="text-lg font-bold text-dark-green mb-2">Phone</h3>
                <a href="tel:+1234567890" class="text-gold hover:text-dark-green transition">
                  +855 67 407 884
                </a>
              </div>
            </div>
          </div>

          <!-- Location -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-gold rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                📍
              </div>
              <div>
                <h3 class="text-lg font-bold text-dark-green mb-2">Location</h3>
                <p class="text-gray-600">
                  BP 511 St. 371 Phum Tropeang Chhuk (Borey Sorla) Sangkat, Tek Thla Khan Sen Sok, Phnom Penh CAMBODIA
                </p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 class="text-lg font-bold text-dark-green mb-4">Follow Me</h3>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 bg-dark-green text-white rounded-full flex items-center justify-center hover:bg-gold transition text-lg">
                f
              </a>
              <a href="#" class="w-10 h-10 bg-dark-green text-white rounded-full flex items-center justify-center hover:bg-gold transition text-lg">
                𝕏
              </a>
              <a href="#" class="w-10 h-10 bg-dark-green text-white rounded-full flex items-center justify-center hover:bg-gold transition text-lg">
                in
              </a>
              <a href="#" class="w-10 h-10 bg-dark-green text-white rounded-full flex items-center justify-center hover:bg-gold transition text-lg">
                📷
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      successMessage: false
    }
  },
  methods: {
    submitForm() {
      // For now, just show success message
      // In production, you'd send this to your backend API
      this.successMessage = true
      
      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.successMessage = false
      }, 3000)

      console.log('Form submitted:', this.form)
    }
  }
}
</script>
