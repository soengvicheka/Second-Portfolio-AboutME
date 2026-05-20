# Frontend - README

## Vue.js 3 Portfolio Frontend

A modern, responsive portfolio website built with Vue.js 3, Vite, and Tailwind CSS.

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the dev server at `http://localhost:3000`

### Build

```bash
npm run build
```

Builds the application for production to the `dist` folder.

### Preview

```bash
npm run preview
```

Previews the production build locally.

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality.

### Project Structure

```
src/
├── components/      # Vue components
│   ├── Header.vue
│   ├── Hero.vue
│   ├── Services.vue
│   ├── Projects.vue
│   ├── About.vue
│   ├── Journey.vue
│   └── Footer.vue
├── assets/         # Static assets
├── App.vue         # Root component
├── main.js         # Entry point
└── main.css        # Global styles
```

### Customization

- **Colors**: Edit `tailwind.config.js` to change color scheme
- **Content**: Update Vue components in `src/components/`
- **Images**: Add images to `public/` folder
- **Fonts**: Modify font imports in `index.html`

### API Integration

Update API endpoints in components to match your Laravel backend:

```javascript
// Example: In Journey.vue or other components
const response = await axios.get('/api/portfolio/education')
```

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2015+ JavaScript
- CSS Grid and Flexbox support

### Performance

- Vite for fast development and optimized builds
- Tailwind CSS for minimal CSS
- Code splitting for lazy loading
