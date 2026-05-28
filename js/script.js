/* ─── Image Upload ─── */
function handleImageUpload(input, imgId, placeholderId, storageKey) {
  const file = input.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    const img = document.getElementById(imgId)
    const placeholder = document.getElementById(placeholderId)
    img.src = e.target.result
    img.classList.remove('hidden')
    placeholder.classList.add('hidden')
    localStorage.setItem(storageKey, e.target.result)
  }
  reader.readAsDataURL(file)
}

function loadSavedImage(imgId, placeholderId, storageKey) {
  const saved = localStorage.getItem(storageKey)
  if (saved) {
    const img = document.getElementById(imgId)
    const placeholder = document.getElementById(placeholderId)
    img.src = saved
    img.classList.remove('hidden')
    placeholder.classList.add('hidden')
  }
}

/* ─── Projects ─── */
const projectsData = [
  {
    id: 1,
    title: 'Alumni Media Platform',
    category: 'Vitual Company ( VC1 )',
    tags: ['DEVELOPER', 'DESIGN', 'TESTING'],
    link: ''
  },
  {
    id: 2,
    title: 'Fruit Seller',
    category: 'Web Design Project',
    tags: ['DEVELOPER', 'TESTING', 'DESIGN'],
    link: 'https://soeng-vicheka-project-webdesign.vercel.app'
  },
  {
    id: 3,
    title: 'Student News (Blog Website)',
    category: 'Web Design',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: 'https://students-news.vercel.app'
  },
  {
    id: 4,
    title: 'Weather App system',
    category: 'JavaScript',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: 'https://weather-system-group2.vercel.app/'
  },
  {
    id: 5,
    title: 'Task Management systen',
    category: 'Web Design',
    tags: ['Figma'],
    link: ''
  }
]

function renderProjects() {
  const grid = document.getElementById('projectsGrid')
  grid.innerHTML = projectsData.map(project => {
    const savedImage = localStorage.getItem(`projectImage-${project.id}`)
    const imageHtml = savedImage
      ? `<img src="${savedImage}" alt="${project.title}">`
      : `<span class="placeholder-text">Click to upload image</span>`

    const titleHtml = project.link
      ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-title">${project.title}</a>`
      : `<h3 class="project-title">${project.title}</h3>`

    const linkHtml = project.link
      ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">Visit website</a>`
      : ''

    return `
      <div class="project-card">
        <div class="project-image" onclick="document.getElementById('projInput-${project.id}').click()">
          ${imageHtml}
          <input type="file" id="projInput-${project.id}" accept="image/*" class="hidden" onchange="handleProjectImageUpload(this, ${project.id})">
        </div>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="badge">${t}</span>`).join('')}
        </div>
        ${titleHtml}
        <p class="project-category">${project.category}</p>
        ${linkHtml}
      </div>
    `
  }).join('')
}

function handleProjectImageUpload(input, projectId) {
  const file = input.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    localStorage.setItem(`projectImage-${projectId}`, e.target.result)
    renderProjects()
  }
  reader.readAsDataURL(file)
}

/* ─── Journey ─── */
const educationData = [
  { school: 'Harmony Institute', degree: 'Bachelor in UI/UX Design', year: '2018 - 2022' },
  { school: 'Aurora Academy', degree: 'Diploma in Graphics Design', year: '2016 - 2018' },
  { school: 'CrystalBrook', degree: 'Advanced Certification', year: '2022 - 2023' }
]

const experienceData = [
  { company: 'InSight Hancer', position: 'Senior Product Designer', year: '2022 - Present' },
  { company: 'Self-Employed', position: 'Freelance Designer', year: '2021 - 2022' },
  { company: 'KG Graphics Studio', position: 'Junior UI/UX Designer', year: '2019 - 2021' }
]

function renderJourney() {
  const grid = document.getElementById('journeyGrid')
  grid.innerHTML = `
    <div class="journey-column">
      <h3>Education</h3>
      ${educationData.map(edu => `
        <div class="journey-item">
          <h4>${edu.school}</h4>
          <p class="journey-degree">${edu.degree}</p>
          <p class="journey-year">${edu.year}</p>
        </div>
      `).join('')}
    </div>
    <div class="journey-column">
      <h3>Work Experience</h3>
      ${experienceData.map(exp => `
        <div class="journey-item">
          <h4>${exp.company}</h4>
          <p class="journey-degree">${exp.position}</p>
          <p class="journey-year">${exp.year}</p>
        </div>
      `).join('')}
    </div>
  `
}

/* ─── Contact Form ─── */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm')
  const submitBtn = document.getElementById('submitBtn')
  const successMsg = document.getElementById('successMsg')
  const errorMsg = document.getElementById('errorMsg')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    errorMsg.classList.add('hidden')
    successMsg.classList.add('hidden')
    submitBtn.disabled = true
    submitBtn.textContent = 'Sending...'

    const payload = {
      name: document.getElementById('formName').value.trim(),
      email: document.getElementById('formEmail').value.trim(),
      subject: document.getElementById('formSubject').value.trim(),
      message: document.getElementById('formMessage').value.trim()
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Failed to send message.')
      }
      successMsg.classList.remove('hidden')
      form.reset()
      setTimeout(() => successMsg.classList.add('hidden'), 3000)
    } catch (err) {
      errorMsg.textContent = err.message
      errorMsg.classList.remove('hidden')
    } finally {
      submitBtn.disabled = false
      submitBtn.textContent = 'Send Message'
    }
  })

  /* ─── Load saved images ─── */
  loadSavedImage('profileImg', 'profilePlaceholder', 'profileImage')
  loadSavedImage('aboutImg', 'aboutPlaceholder', 'aboutImage')

  /* ─── Render dynamic content ─── */
  renderProjects()
  renderJourney()
})
