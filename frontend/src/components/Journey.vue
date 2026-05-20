<template>
  <section id="journey" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="section-title mb-4">My <span class="text-gold">Academic</span> <span class="text-gold">Journey</span></h2>
      <p class="text-gray-600 mb-12 max-w-2xl">
        Education and professional experience
      </p>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Education -->
        <div>
          <h3 class="text-2xl font-bold text-dark-green mb-8">Education</h3>
          <div v-for="edu in education" :key="edu.id" class="mb-6 pb-6 border-b-2 border-gold last:border-b-0">
            <h4 class="font-bold text-dark-green text-lg">{{ edu.school }}</h4>
            <p class="text-gold font-medium">{{ edu.degree }}</p>
            <p class="text-gray-600 text-sm">{{ edu.year }}</p>
          </div>
        </div>

        <!-- Experience -->
        <div>
          <h3 class="text-2xl font-bold text-dark-green mb-8">Work Experience</h3>
          <div v-for="exp in experience" :key="exp.id" class="mb-6 pb-6 border-b-2 border-gold last:border-b-0">
            <h4 class="font-bold text-dark-green text-lg">{{ exp.company }}</h4>
            <p class="text-gold font-medium">{{ exp.position }}</p>
            <p class="text-gray-600 text-sm">{{ exp.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Journey',
  data() {
    return {
      education: [
        {
          id: 1,
          school: 'Harmony Institute',
          degree: 'Bachelor in UI/UX Design',
          year: '2018 - 2022'
        },
        {
          id: 2,
          school: 'Aurora Academy',
          degree: 'Diploma in Graphics Design',
          year: '2016 - 2018'
        },
        {
          id: 3,
          school: 'CrystalBrook',
          degree: 'Advanced Certification',
          year: '2022 - 2023'
        }
      ],
      experience: [
        {
          id: 1,
          company: 'InSight Hancer',
          position: 'Senior Product Designer',
          year: '2022 - Present'
        },
        {
          id: 2,
          company: 'Self-Employed',
          position: 'Freelance Designer',
          year: '2021 - 2022'
        },
        {
          id: 3,
          company: 'KG Graphics Studio',
          position: 'Junior UI/UX Designer',
          year: '2019 - 2021'
        }
      ]
    }
  }
}
</script>
