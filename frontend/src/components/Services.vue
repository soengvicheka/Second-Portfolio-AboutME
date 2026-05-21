<template>
  <section id="skills" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="section-title mb-4">My <span class="text-gold">Skills</span></h2>
      <p class="text-gray-600 mb-12 max-w-2xl">
        A collection of technologies and tools I've mastered
      </p>

      <!-- Skills Categories -->
      <div class="space-y-12">
        <!-- Frontend -->
        <div>
          <h3 class="text-2xl font-bold text-dark-green mb-6 flex items-center">
            <span class="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mr-3 text-xl">🎨</span>
            Frontend Development
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in frontendSkills" :key="skill" class="bg-gradient-to-br from-gold to-light-gold p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-default">
              <p class="font-semibold text-dark-green text-center">{{ skill }}</p>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div>
          <h3 class="text-2xl font-bold text-dark-green mb-6 flex items-center">
            <span class="w-12 h-12 bg-dark-green rounded-lg flex items-center justify-center mr-3 text-xl text-white">⚙️</span>
            Backend Development
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in backendSkills" :key="skill" class="bg-gradient-to-br from-dark-green to-light-green p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-default">
              <p class="font-semibold text-white text-center">{{ skill }}</p>
            </div>
          </div>
        </div>

        <!-- Tools & Databases -->
        <div>
          <h3 class="text-2xl font-bold text-dark-green mb-6 flex items-center">
            <span class="w-12 h-12 bg-light-green rounded-lg flex items-center justify-center mr-3 text-xl">🛠️</span>
            Tools & Databases
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in toolsSkills" :key="skill" class="bg-gradient-to-br from-light-green to-dark-green p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-default">
              <p class="font-semibold text-white text-center">{{ skill }}</p>
            </div>
          </div>
        </div>

        <!-- Other Skills -->
        <div>
          <h3 class="text-2xl font-bold text-dark-green mb-6 flex items-center">
            <span class="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mr-3 text-xl">💡</span>
            Other Concepts
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in otherSkills" :key="skill" class="bg-gradient-to-br from-gray-400 to-gray-600 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-default">
              <p class="font-semibold text-white text-center">{{ skill }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      frontendSkills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
      backendSkills: ['PHP', 'Laravel', 'OOP Basic'],
      toolsSkills: ['MongoDB', 'Git & Github', 'Postman', 'Jupyter'],
      otherSkills: ['Figma', 'Progress', 'Jira']
    }
  }
}
</script>
