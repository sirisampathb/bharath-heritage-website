# Bharath Heritage

Bharath Heritage is a web application for exploring India's cultural heritage and historical monuments. Visitors can browse featured monuments and open individual monument pages to learn about their history, location, architectural style, timelines, and interesting facts.

## Features

- **Explore monuments:** Browse a collection of featured Indian heritage sites.
- **Monument details:** View information such as location, period of construction, dynasty, architectural style, description, historical timeline, and facts.
- **User authentication:** Register, log in, check the current user session, and log out.
- **Dashboard:** Access a dashboard after signing in, with monument-management and explorer-oriented views.
- **Monument API:** Retrieve all monuments, retrieve a monument by ID, create a monument, and delete a monument through the Spring Boot API.

## Technology Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- TanStack Query
- Wouter
- Framer Motion

### Backend
- Node.js and Express 5 (application server and development API routes)
- Java 17
- Spring Boot 3.2
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven

### Tools
- Docker and Docker Compose
- Git and GitHub
- Vercel configuration is included in the repository

## Getting Started

### Prerequisites

- Node.js 20 or later (below version 24)
- npm
- Java 17 or later
- PostgreSQL, when running the Spring Boot backend locally
- Docker Desktop, when using the provided Compose setup

### Run the Node/Express application

From the repository root:

```bash
npm install
npm run dev
```

The Express server starts on port `5000` by default and configures Vite for frontend development. Open `http://localhost:5000` in your browser.

### Run the Spring Boot backend

The repository also contains a Spring Boot backend in `backend-spring/`.

1. Start PostgreSQL and create a database named `monumentdb`.
2. Configure the database URL, username, and password using your local environment or application configuration. Do not commit real credentials.
3. Start the backend:

```bash
cd backend-spring
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

The Spring Boot API uses port `8080` by default.

### Docker Compose

A `docker-compose.yml` file is included to run PostgreSQL and the Spring Boot backend. Before using it, replace any hard-coded database credentials in the Compose and Spring configuration with environment variables or another secure local configuration method. Then run:

```bash
docker compose up --build
```

## API Endpoints

### Monument endpoints (Spring Boot)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/monuments` | Retrieve all monuments |
| `GET` | `/api/monuments/{id}` | Retrieve a monument by ID |
| `POST` | `/api/monuments` | Create a monument |
| `DELETE` | `/api/monuments/{id}` | Delete a monument |

### Authentication endpoints (Spring Boot)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a user |
| `POST` | `/api/auth/login` | Log in |
| `GET` | `/api/auth/me` | Retrieve the authenticated user |
| `POST` | `/api/auth/logout` | Log out |

## Project Structure

```text
bharath-heritage-website/
├── client/                 # React + TypeScript frontend
│   └── src/
│       ├── components/     # Reusable UI and layout components
│       ├── hooks/          # Data-fetching hooks
│       ├── pages/          # Home, monument details, login, register, dashboard
│       └── lib/            # Client utilities and authentication
├── server/                 # Node.js / Express server and API routes
├── shared/                 # Shared types and schema
├── backend-spring/         # Spring Boot backend
│   └── src/main/java/      # Controllers, entities, services, repositories
├── docker-compose.yml
├── package.json
└── SPRING_BOOT_SETUP.md
```

## Notes

- The repository includes both the Node/Express application server and a separate Spring Boot backend. Check `SPRING_BOOT_SETUP.md` for the Spring Boot setup details.
- The Node/Express development routes currently include an in-memory storage implementation. The Spring Boot backend is separately configured to use PostgreSQL.
- The repository currently contains database credentials in configuration files. Treat any credentials that have been committed to a public repository as exposed: rotate them, remove them from tracked files, and load replacements from environment variables or a secrets manager before deploying.

## Author

**Bommisetty Siri Sampath**

- GitHub: [@sirisampathb](https://github.com/sirisampathb)
- Repository: [bharath-heritage-website](https://github.com/sirisampathb/bharath-heritage-website)
