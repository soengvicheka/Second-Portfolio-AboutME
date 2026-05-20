<template>
  <section id="projects" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="section-title mb-4">My Latest <span class="text-gold">Projects</span></h2>
      <p class="text-gray-600 mb-12 max-w-2xl">
        Showcasing my recent work and design solutions
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="group cursor-pointer">
          <div class="bg-gray-300 h-64 rounded-lg overflow-hidden mb-4 flex items-center justify-center hover:shadow-lg transition">
            <span class="text-gray-500">[Project Image]</span>
          </div>
          <div class="flex gap-2 mb-2">
            <span v-for="tag in project.tags" :key="tag" class="badge text-sm">{{ tag }}</span>
          </div>
          <h3 class="text-lg font-bold text-dark-green group-hover:text-gold transition">{{ project.title }}</h3>
          <p class="text-gray-600 text-sm">{{ project.category }}</p>
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
          title: 'Ready Product - E-commerce Platform',
          category: 'E-commerce Design',
          tags: ['ECOMMERCE', 'DESIGN', 'MOBILE'],
          image: null
        },
        {
          id: 2,
          title: 'Healthy Product Mobile App',
          category: 'Mobile App Design',
          tags: ['MOBILE', 'HEALTH', 'APP'],
          image: null
        },
        {
          id: 3,
          title: 'Ready Product Web Dashboard',
          category: 'Web Design',
          tags: ['DASHBOARD', 'WEB', 'UI/UX'],
          image: null
        },
        {
          id: 4,
          title: 'Coffee Shop Mobile App',
          category: 'Mobile App Design',
          tags: ['MOBILE', 'COFFEE', 'APP'],
          image: null
        },
        {
          id: 5,
          title: 'Coffee Shop Website Design',
          category: 'Web Design',
          tags: ['WEBSITE', 'COFFEE', 'DESIGN'],
          image: null
        },
        {
          id: 6,
          title: 'Portfolio Landing Page',
          category: 'Web Design',
          tags: ['PORTFOLIO', 'LANDING', 'WEB'],
          image: null
        }
      ]
    }
  }
}
</script>
