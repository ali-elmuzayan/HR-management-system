# HRMS

Human Resource Management System built as a monorepo with a Laravel API backend and a React SPA frontend.

## Tech stack

| Layer    | Stack |
| -------- | ----- |
| Backend  | PHP 8.3, Laravel 13, Pest |
| Frontend | React 19, TypeScript, NextJS 16, Tailwind CSS 4, shadcn/ui |

## Project structure

```
07_hrms/
├── backend/   # Laravel application (API, jobs, database)
└── client/    # NextJS 
```

## Prerequisites

- PHP 8.3+ with required extensions for Laravel
- Composer
- Node.js 20+ and npm
- MySQL (or adjust `DB_*` in `backend/.env`)

## Getting started

### Backend

```bash
cd backend
composer install
cp .env.example .env   # if .env does not exist
php artisan key:generate
php artisan migrate
php artisan serve
```

The API runs at [http://localhost:8000](http://localhost:8000) by default.

You can also run the full backend setup in one step:

```bash
cd backend
composer setup
```

### Frontend

```bash
cd client
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000) by default.

## Development

From `backend/`, `composer dev` starts the Laravel server, queue worker, log tail (Pail), and Vite (if configured in that project). For day-to-day work with this split repo, run the backend and frontend dev commands in separate terminals.

| Command | Location | Description |
| ------- | -------- | ----------- |
| `composer dev` | `backend/` | Laravel serve, queue, logs, and related tooling |
| `php artisan serve` | `backend/` | HTTP server only |
| `npm run dev` | `client/` | NextJS dev server with HMR |
| `npm run build` | `client/` | Production build |
| `composer test` | `backend/` | Run Pest tests |

## Environment

Copy `backend/.env.example` to `backend/.env` and set database credentials and `APP_URL` before migrating. Configure the frontend to point at your API base URL when you add API calls (e.g. via environment variables in Vite).

## License

MIT (see individual package licenses in `backend/` and `client/`).
