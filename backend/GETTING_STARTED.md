# Backend

## Portfolio API - Laravel

A RESTful API for the portfolio website.

### Quick Start

```bash
cd backend
npm install
# composer install (if using Composer)
# php artisan serve
```

Server runs at `http://localhost:8000`

### API Routes

**Base URL**: `http://localhost:8000/api`

#### Portfolio
- `GET /portfolio` - Portfolio information
- `GET /portfolio/education` - Education data
- `GET /portfolio/experience` - Work experience

#### Projects
- `GET /projects` - All projects
- `GET /projects/{id}` - Single project

### CORS

The API is configured to accept requests from `http://localhost:3000` (the Vue.js frontend).

### Features

- ✅ RESTful API
- ✅ CORS enabled
- ✅ JSON responses
- ✅ Easy to extend

### Environment Setup

Copy `.env.example` to `.env` and configure.

### Database (Optional)

Set up MySQL and run migrations:

```bash
php artisan migrate
```

### Deployment

1. Set up production environment
2. Configure database
3. Run migrations
4. Deploy to server

For more details, see `README.md` in the backend folder.
