# Mahosh Fragrance

A complete luxury perfume brand website built as a production-ready full-stack starter:

- Frontend: Next.js, React, responsive luxury UI, SEO metadata, image optimization
- Backend: Node.js, Express, MongoDB, JWT auth, validation, secure middleware
- Features: products, cart, checkout, orders, users, admin-protected routes

## Project Structure

```text
mahosh-fragrance/
  frontend/        Next.js storefront and pages
  backend/         Express REST API and MongoDB models
  package.json     Workspace scripts
```

## Installation

```bash
npm install
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

Start MongoDB locally or use MongoDB Atlas, then update `backend/.env`.

Seed products and a default admin:

```bash
npm run seed --workspace backend
```

Default admin:

```text
Email: admin@mahoshfragrance.com
Password: AdminPass123
```

Run both apps:

```bash
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000/api`

## Environment Variables

Backend:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/mahosh_fragrance
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000
```

Frontend:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## API Overview

Auth:

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/logout`

Products:

- `GET /api/products`
- `GET /api/products/:slug`
- `POST /api/products` admin
- `PUT /api/products/:id` admin
- `DELETE /api/products/:id` admin

Cart:

- `GET /api/cart`
- `POST /api/cart`
- `PUT /api/cart/:productId`
- `DELETE /api/cart/:productId`
- `DELETE /api/cart`

Orders:

- `POST /api/orders/checkout`
- `GET /api/orders/mine`
- `GET /api/orders` admin
- `PATCH /api/orders/:id/status` admin

Users:

- `GET /api/users` admin
- `PATCH /api/users/:id/role` admin
- `DELETE /api/users/:id` admin

## Deployment Guide

1. Create a MongoDB Atlas cluster and copy the connection string.
2. Deploy `backend/` to Render, Railway, Fly.io, or an equivalent Node host.
3. Set backend environment variables, especially `MONGODB_URI`, `JWT_SECRET`, and `CLIENT_URL`.
4. Deploy `frontend/` to Vercel or Netlify.
5. Set `NEXT_PUBLIC_API_URL` to your deployed backend URL plus `/api`.
6. In the backend CORS config, set `CLIENT_URL` to the deployed frontend domain.
7. Run the seed script once in the backend production environment if you want starter products.

## Production Notes

- Replace the default admin password immediately.
- Use a long random `JWT_SECRET`.
- Put real payment processing behind `POST /api/orders/checkout` before accepting live orders.
- Store product images in a CDN or object storage bucket for a real catalog workflow.
