# Backend - README

## Laravel REST API

A RESTful API backend for the portfolio website.

### Installation

```bash
npm install
# or for PHP dependencies
# composer install
```

### Development

```bash
npm run dev
```

Runs the dev server (if using Vite/npm scripts)

### API Endpoints

#### Portfolio
- `GET /api/portfolio` - Get portfolio information
- `GET /api/portfolio/education` - Get education data
- `GET /api/portfolio/experience` - Get work experience

#### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get project details

### Environment Configuration

Create a `.env` file in the backend root:

```env
APP_NAME=Portfolio
APP_ENV=local
APP_KEY=your_app_key
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=

CORS_ALLOWED_ORIGINS=http://localhost:3000
```

### CORS Configuration

Update CORS settings to allow requests from your frontend:

```php
// config/cors.php
'allowed_origins' => ['http://localhost:3000'],
```

### Running the Server

```bash
php artisan serve
```

Runs at `http://localhost:8000`

### Project Structure

```
app/
├── Http/
│   └── Controllers/
│       ├── ProjectController.php
│       └── PortfolioController.php
└── Models/

routes/
├── api.php          # API routes
└── web.php          # Web routes
```

### Adding More Features

1. Create Models in `app/Models/`
2. Create Controllers in `app/Http/Controllers/`
3. Define routes in `routes/api.php`
4. Add middleware as needed

### Database

To use a database, run migrations:

```bash
php artisan migrate
```

### API Response Format

All API responses follow this format:

```json
{
  "data": {
    "id": 1,
    "title": "Example",
    ...
  },
  "message": "Success"
}
```

### DEBUGGING

Enable debug mode in `.env`:

```env
APP_DEBUG=true
```

View logs in `storage/logs/`

### Deployment

1. Set `APP_ENV=production` in `.env`
2. Set `APP_DEBUG=false` in `.env`
3. Generate app key: `php artisan key:generate`
4. Run migrations: `php artisan migrate --force`
5. Deploy to server
