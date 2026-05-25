<template>
  <section id="projects" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="section-title mb-4">My Latest <span class="text-gold">Projects</span></h2>
      <p class="text-gray-600 mb-12 max-w-2xl">
        Showcasing my recent work and design solutions
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="group">
          <div 
            class="bg-gray-300 h-64 rounded-lg overflow-hidden mb-4 flex items-center justify-center hover:shadow-lg transition cursor-pointer"
            @click="handleProjectClick(project)"
          >
            <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover hover:opacity-90 transition-opacity">
            <span v-else class="text-gray-500">Click to upload image</span>
            
            <!-- Hidden file input -->
            <input 
              :ref="`fileInput-${project.id}`"
              type="file" 
              accept="image/*" 
              class="hidden" 
              @change="handleImageUpload($event, project.id)"
            />
          </div>
          <div class="flex gap-2 mb-2">
            <span v-for="tag in project.tags" :key="tag" class="badge text-sm">{{ tag }}</span>
          </div>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg font-bold text-dark-green group-hover:text-gold transition block"
          >
            {{ project.title }}
          </a>
          <h3 v-else class="text-lg font-bold text-dark-green group-hover:text-gold transition">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 text-sm">{{ project.category }}</p>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block text-sm text-gold hover:underline mt-1"
          >
            Visit website
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Alumni Media Platform',
          category: 'Vitual Company ( VC1 )',
          tags: ['DEVELOPER', 'DESIGN', 'TESTING'],
          link: '',
          image: null
        },
        {
          id: 2,
          title: 'Fruit Seller',
          category: 'Web Design Project',
          tags: ['DEVELOPER', 'TESTING', 'DESIGN'],
          link: 'soeng-vicheka-project-webdesign.vercel.app',
          image: null
        },
        {
          id: 3,
          title: 'Student News (Blog Website)',
          category: 'Web Design',
          tags: ['HTML', 'CSS', 'JAVASCRIPT'],
          link: 'students-news.vercel.app',
          image: null
        },
        {
          id: 4,
          title: 'Weather App system',
          category: 'JavaScript',
          tags: ['HTML', 'CSS', 'JAVASCRIPT'],
          link: 'https://weather-system-group2.vercel.app/',
          image: null
        },
        {
          id: 5,
          title: 'Task Management systen',
          category: 'Web Design',
          tags: ['Figma'],
          link: '',
          image: null
        }
      ]
    }
  },
  methods: {
    handleProjectClick(project) {
      if (project?.link) {
        window.open(project.link, '_blank', 'noopener,noreferrer')
        return
      }
      this.triggerFileInput(project.id)
    },
    triggerFileInput(projectId) {
      const inputRef = this.$refs[`fileInput-${projectId}`]
      if (inputRef && inputRef[0]) {
        inputRef[0].click()
      }
    },
    handleImageUpload(event, projectId) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const project = this.projects.find(p => p.id === projectId)
          if (project) {
            project.image = e.target.result
            // Save to localStorage
            localStorage.setItem(`projectImage-${projectId}`, e.target.result)
          }
        }
        reader.readAsDataURL(file)
      }
    }
  },
  mounted() {
    // Load saved project images from localStorage
    this.projects.forEach(project => {
      const savedImage = localStorage.getItem(`projectImage-${project.id}`)
      if (savedImage) {
        project.image = savedImage
      }
    })
  }
}
</script>
