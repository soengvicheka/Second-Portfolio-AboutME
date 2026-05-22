<template>
  <section id="skills" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="section-title mb-4">Skills I <span class="text-gold">Bring</span> to Every Project</h2>
        <p class="mx-auto text-gray-600 max-w-2xl text-base sm:text-lg">
          A polished skills showcase with category cards and modern accent styling to reflect expertise clearly.
        </p>
      </div>

      <div class="grid gap-6 xl:grid-cols-4 lg:grid-cols-2">
        <div class="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-2xl shadow-md">
              🎨
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Frontend</p>
              <h3 class="mt-2 text-xl font-semibold text-dark-green">Frontend Development</h3>
            </div>
          </div>
          <p class="text-sm text-slate-500 mb-6">Clean interfaces, responsive builds and polished component work.</p>
          <div class="grid gap-3 sm:grid-cols-2">
            <span v-for="skill in frontendSkills" :key="skill" class="badge bg-gradient-to-r from-gold to-light-gold text-dark-green shadow-sm">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-dark-green text-2xl text-white shadow-md">
              ⚙️
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Backend</p>
              <h3 class="mt-2 text-xl font-semibold text-dark-green">Backend Development</h3>
            </div>
          </div>
          <p class="text-sm text-slate-500 mb-6">Solid server-side logic, frameworks and clean API flows.</p>
          <div class="grid gap-3 sm:grid-cols-2">
            <span v-for="skill in backendSkills" :key="skill" class="badge bg-gradient-to-r from-dark-green to-light-green text-white shadow-sm">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-light-green text-2xl text-white shadow-md">
              🛠️
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Tools</p>
              <h3 class="mt-2 text-xl font-semibold text-dark-green">Tools & Databases</h3>
            </div>
          </div>
          <p class="text-sm text-slate-500 mb-6">Essential tooling and database systems for modern workflows.</p>
          <div class="grid gap-3 sm:grid-cols-2">
            <span v-for="skill in toolsSkills" :key="skill" class="badge bg-gradient-to-r from-light-green to-dark-green text-white shadow-sm">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-400 text-2xl text-white shadow-md">
              💡
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Other</p>
              <h3 class="mt-2 text-xl font-semibold text-dark-green">Other Concepts</h3>
            </div>
          </div>
          <p class="text-sm text-slate-500 mb-6">Design, process and collaboration tools that round out the experience.</p>
          <div class="grid gap-3 sm:grid-cols-2">
            <span v-for="skill in otherSkills" :key="skill" class="badge bg-gradient-to-r from-slate-400 to-slate-600 text-white shadow-sm">
              {{ skill }}
            </span>
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
      toolsSkills: ['MongoDB', 'Git & Github', 'Postman', 'Jupyter', 'Testing'],
      otherSkills: ['Figma', 'Progress', 'Jira']
    }
  }
}
</script>
