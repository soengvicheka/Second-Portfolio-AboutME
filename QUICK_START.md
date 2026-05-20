# 🚀 Quick Start Guide

## Olivia Smith Portfolio Website

Your professional portfolio website is now ready! Follow these steps to get started.

---

## ✅ Installation Complete

Both frontend and backend dependencies have been installed successfully.

---

## 🎯 Getting Started

### 1️⃣ Start the Frontend (Vue.js)

```bash
cd frontend
npm run dev
```

**Open in browser:** `http://localhost:3000`

You'll see your complete portfolio website with:
- Professional header with navigation
- Hero section with profile introduction
- Services you provide
- Project showcase
- About section
- Education & experience
- Footer with links

### 2️⃣ Start the Backend (Laravel API) [Optional]

```bash
cd backend
php artisan serve
```

**API runs at:** `http://localhost:8000`

API endpoints available:
- `GET /api/portfolio` - Portfolio data
- `GET /api/portfolio/education` - Education info
- `GET /api/portfolio/experience` - Work experience
- `GET /api/projects` - Projects list

---

## 📝 Customize Your Portfolio

### Update Personal Information

Edit these files to add your content:

1. **Header & Hero**
   - File: `frontend/src/components/Hero.vue`
   - Update: Name, title, bio, buttons

2. **Services**
   - File: `frontend/src/components/Services.vue`
   - Update: Service titles and descriptions

3. **Projects**
   - File: `frontend/src/components/Projects.vue`
   - Update: Project titles, descriptions, tags

4. **About Section**
   - File: `frontend/src/components/About.vue`
   - Update: Bio and statistics

5. **Education & Experience**
   - File: `frontend/src/components/Journey.vue`
   - Update: Education and work experience

### Replace Images

1. Place your images in `frontend/public/`
2. Update image paths in components:
   ```vue
   <img src="/your-image.jpg" alt="Description" />
   ```

### Change Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  'dark-green': '#your-color',
  'light-green': '#your-color',
  'gold': '#your-color',
}
```

---

## 🏗️ Project Structure

```
frontend/           - Vue.js website (port 3000)
backend/            - Laravel API (port 8000)
├── app/
│   └── Http/Controllers/
├── routes/
│   └── api.php
```

---

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
```
Output goes to `frontend/dist/` - ready for deployment!

---

## 🔗 Connect API to Frontend

Update API base URL in `frontend/src/main.js` or create an Axios instance:

```javascript
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api'
})

export default api
```

---

## 🎨 Features

✨ **Responsive Design** - Works on mobile, tablet, desktop
🎨 **Professional Styling** - Modern color scheme and animations
⚡ **Fast Performance** - Built with Vite (super fast!)
📱 **Component-Based** - Easy to modify and customize
🔗 **API Ready** - Connected to Laravel backend

---

## 📚 Documentation

- [Main README](./README.md) - Complete overview
- [Frontend README](./frontend/README.md) - Vue.js details
- [Backend README](./backend/README.md) - Laravel details
- [Project Structure](./STRUCTURE.md) - Full directory layout

---

## 🚀 Deploy

### Frontend Deployment (Vercel, Netlify, etc.)
```bash
cd frontend
npm run build
# Upload 'dist' folder
```

### Backend Deployment
- Use Laravel hosting (Laravel Forge, Heroku, etc.)
- Configure database in `.env`
- Run migrations

---

## 🆘 Troubleshooting

**Frontend not loading?**
- Make sure you're in `frontend/` directory
- Run `npm install` if needed
- Try `npm run dev` again

**Backend API not working?**
- Ensure Laravel is running: `php artisan serve`
- Check CORS settings
- Review API routes in `backend/routes/api.php`

**Port already in use?**
- Change frontend port: `npm run dev -- --port 3001`
- Change backend port: `php artisan serve --port 8001`

---

## 📧 Next Steps

1. ✅ Add your personal information
2. ✅ Replace placeholder images
3. ✅ Connect backend API (if needed)
4. ✅ Test on different devices
5. ✅ Deploy to production

---

## 🎉 You're All Set!

Your modern portfolio website is ready to showcase your work!

**Start developing:** `cd frontend && npm run dev`

Happy coding! 🚀
