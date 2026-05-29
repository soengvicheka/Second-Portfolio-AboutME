<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSending = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

async function submitContactForm() {
  errorMessage.value = ''
  successMessage.value = ''
  isSending.value = true

  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    subject: form.subject.trim(),
    message: form.message.trim()
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await response.json().catch(() => null)

    if (!response.ok || !data?.ok) {
      throw new Error(data?.error || 'Failed to send message.')
    }

    successMessage.value = 'Message sent successfully!'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''

    window.setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <section id="contact" class="section bg-light">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Let's <span class="text-gold">Connect</span></h2>
        <p>I'd love to hear about your project. Feel free to reach out and let's create something amazing together!</p>
      </div>

      <div class="contact-grid">
        <div class="contact-form-card">
          <form @submit.prevent="submitContactForm">
            <div class="form-group">
              <label for="formName">Your Name</label>
              <input id="formName" v-model="form.name" type="text" placeholder="John Doe" required>
            </div>
            <div class="form-group">
              <label for="formEmail">Email Address</label>
              <input id="formEmail" v-model="form.email" type="email" placeholder="john@example.com" required>
            </div>
            <div class="form-group">
              <label for="formSubject">Subject</label>
              <input id="formSubject" v-model="form.subject" type="text" placeholder="Project Discussion" required>
            </div>
            <div class="form-group">
              <label for="formMessage">Message</label>
              <textarea id="formMessage" v-model="form.message" placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" class="btn-primary btn-block" :disabled="isSending">
              {{ isSending ? 'Sending...' : 'Send Message' }}
            </button>
            <p v-if="successMessage" class="success-msg">{{ successMessage }}</p>
            <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
          </form>
        </div>

        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">@</div>
            <div>
              <h3>Email</h3>
              <a href="mailto:soengvicheka775@gamil.com">soengvicheka775@gamil.com</a>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">Tel</div>
            <div>
              <h3>Phone</h3>
              <a href="tel:+85567407884">+855 67 407 884</a>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">Map</div>
            <div>
              <h3>Location</h3>
              <p>BP 511 St. 371 Phum Tropeang Chhuk (Borey Sorla) Sangkat, Tek Thla Khan Sen Sok, Phnom Penh CAMBODIA</p>
            </div>
          </div>
          <div class="info-card">
            <h3 class="follow-title">Follow Me</h3>
            <div class="social-links">
              <a href="#" class="social-icon">f</a>
              <a href="#" class="social-icon">X</a>
              <a href="#" class="social-icon">in</a>
              <a href="#" class="social-icon">IG</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
