# Project Structure Overview

## Olivia Smith Portfolio Website

```
Second-Portfolio-AboutME/
│
├── frontend/                    # Vue.js 3 Frontend
│   ├── public/                  # Static files
│   ├── src/
│   │   ├── components/          # Vue components
│   │   │   ├── Header.vue       # Navigation header
│   │   │   ├── Hero.vue         # Profile introduction
│   │   │   ├── Services.vue     # Services offered
│   │   │   ├── Projects.vue     # Project showcase
│   │   │   ├── About.vue        # About section
│   │   │   ├── Journey.vue      # Education & experience
│   │   │   └── Footer.vue       # Footer with links
│   │   ├── assets/              # Images & styles
│   │   ├── App.vue              # Root component
│   │   ├── main.js              # Entry point
│   │   └── main.css             # Global styles
│   ├── index.html               # HTML entry
│   ├── vite.config.js           # Vite config
│   ├── tailwind.config.js       # Tailwind config
│   ├── postcss.config.js        # PostCSS config
│   ├── .eslintrc.cjs            # ESLint config
│   ├── .prettierrc               # Prettier config
│   ├── package.json             # Dependencies
│   ├── .gitignore
│   ├── README.md
│   └── GETTING_STARTED.md
│
├── backend/                     # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/
│   │   │       ├── ProjectController.php
│   │   │       └── PortfolioController.php
│   │   └── Models/              # Database models
│   ├── routes/
│   │   ├── api.php              # API routes
│   │   └── web.php              # Web routes
│   ├── public/                  # Web root
│   ├── package.json             # NPM scripts
│   ├── .gitignore
│   ├── .env.example             # Environment template
│   ├── README.md
│   └── GETTING_STARTED.md
│
├── .github/
│   └── copilot-instructions.md  # AI assistant config
│
├── .gitignore                   # Git ignore rules
├── README.md                    # Main documentation
└── package.json                 # Root npm scripts

```

## Technology Stack

### Frontend
- Vue.js 3 - Progressive JavaScript framework
- Vite - Next generation bundler
- Tailwind CSS - Utility-first CSS
- Axios - HTTP client
- ESLint - Code quality
- Prettier - Code formatting

### Backend
- Laravel - PHP web framework
- RESTful API - Standard API pattern
- CORS - Cross-origin support

## Color Palette

- **Dark Green**: `#3d5941`
- **Light Green**: `#628d5c`
- **Gold**: `#f4a900`
- **Light Gold**: `#ffd580`

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
php artisan serve
```

## API Endpoints

```
GET /api/portfolio              - Portfolio info
GET /api/portfolio/education    - Education
GET /api/portfolio/experience   - Experience
GET /api/projects               - All projects
GET /api/projects/{id}          - Project details
```

## Pages

1. **Header** - Sticky navigation
2. **Hero** - Profile intro with image
3. **Services** - 3 service offerings
4. **Projects** - 6 project cards
5. **About** - Stats and bio
6. **Journey** - Education & experience
7. **Footer** - Links and info

## Features

✅ Responsive Design
✅ Component-Based
✅ Professional Styling
✅ API Driven
✅ Fast Performance
✅ Easy to Customize
