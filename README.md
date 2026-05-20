# Portfolio Website - Vue.js + Laravel

A modern, professional portfolio website built with **Vue.js 3** for the frontend and **Laravel** for the backend.

## 🎨 Features

- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Component-Based** - Modular Vue.js components for easy maintenance
- **API-Driven** - RESTful Laravel API backend
- **Professional Styling** - Modern color scheme and animations
- **Fast Loading** - Optimized with Vite bundler

## 📁 Project Structure

```
.
├── frontend/          # Vue.js 3 + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/    # Vue components
│   │   ├── assets/        # Images and styles
│   │   ├── App.vue        # Root component
│   │   └── main.js        # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── backend/           # Laravel API
    ├── app/
    │   ├── Http/Controllers/
    │   └── Models/
    ├── routes/
    │   ├── api.php
    │   └── web.php
    └── package.json
```

## 🚀 Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Backend Setup

```bash
cd backend
npm install
# For Laravel setup, you would typically use Composer
# composer install
# php artisan serve
```

## 🎯 Pages & Sections

1. **Header** - Navigation bar with sticky positioning
2. **Hero** - Introduction section with profile
3. **Services** - UI/UX, Application, and Website Design services
4. **Projects** - Portfolio projects showcase
5. **About** - Professional background and statistics
6. **Journey** - Education and work experience
7. **Footer** - Contact and links

## 🛠️ Technologies Used

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Next generation bundler
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Laravel** - PHP web framework
- **RESTful API** - API endpoints for data

## 🎨 Color Scheme

- **Dark Green**: `#3d5941` - Primary color
- **Light Green**: `#628d5c` - Secondary color
- **Gold**: `#f4a900` - Accent color
- **Light Gold**: `#ffd580` - Light accent

## 📝 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server
- `npm run watch` - Watch for changes
- `npm run prod` - Build for production

## 🔌 API Endpoints

- `GET /api/portfolio` - Portfolio information
- `GET /api/portfolio/education` - Education data
- `GET /api/portfolio/experience` - Work experience
- `GET /api/projects` - List all projects
- `GET /api/projects/{id}` - Get project details

## 📦 Deployment

### Frontend
```bash
cd frontend
npm run build
# Deploy 'dist' folder to hosting service
```

### Backend
- Deploy using Laravel hosting providers (Laravel Forge, Heroku, etc.)
- Set up environment variables in `.env`
- Run migrations if database is used

## 🔐 Environment Variables

Create a `.env` file in the root of each project with necessary configurations.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Olivia Smith - Product Designer

## 🤝 Contributing

Feel free to fork this repository and submit pull requests.
