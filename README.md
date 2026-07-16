# ♻️ Recicla ![CI](https://github.com/PabloExeQGimenez/recicla/actions/workflows/ci.yml/badge.svg)

Aplicación **Full Stack** para la gestión integral de cooperativas de reciclaje, desarrollada con **React, NestJS, Prisma y PostgreSQL**.

Permite administrar recuperadores, materiales, pesajes y solicitudes de pago mediante una arquitectura escalable basada en **Clean Architecture**, con despliegue en Docker y CI/CD mediante GitHub Actions.

---

## 🚀 Demo

| Servicio | URL |
|----------|-----|
| 🌐 Frontend | https://recicla-frontend.onrender.com |
| 🔌 API | https://recicla-api.onrender.com |
| 📖 Swagger | https://recicla-api.onrender.com/api/docs |

> **Credenciales de prueba**
>
> **Email:** `admin@recicla.com`
>
> **Contraseña:** `admin123`

---

## 📸 Capturas

> _Próximamente..._

---

## ✨ Funcionalidades

- 🔐 Autenticación mediante JWT.
- 👥 Gestión de recuperadores.
- ♻️ Gestión de materiales.
- ⚖️ Registro y administración de pesajes.
- 💰 Solicitudes de pago.
- 📖 Documentación interactiva con Swagger.
- 🔄 Validaciones compartidas entre frontend y backend mediante Zod.
- 🐳 Contenedorización con Docker.
- 🚀 Despliegue en Render.
- ⚙️ Integración continua mediante GitHub Actions.

---

## ⭐ Highlights

- Arquitectura basada en **Clean Architecture**.
- Monorepo utilizando **npm Workspaces**.
- API REST desarrollada con **NestJS**.
- ORM **Prisma** sobre PostgreSQL.
- Tipos y validaciones compartidas mediante **Zod**.
- Autenticación segura con **JWT**.
- Pipeline de **CI/CD** automatizado.
- Despliegue completo mediante **Docker** y **Render**.

---

## 🛠️ Tech Stack

| Capa | Tecnologías |
|------|-------------|
| **Backend** | NestJS · Prisma ORM · PostgreSQL · JWT · Passport · Zod |
| **Frontend** | React 19 · TypeScript · Vite · Styled Components · React Router |
| **Shared** | Tipos y validaciones compartidas entre frontend y backend |
| **DevOps** | Docker · Docker Compose · Render · GitHub Actions |

---

## 🏗️ Arquitectura

Proyecto organizado como **Monorepo** utilizando **npm Workspaces**, siguiendo principios de **Clean Architecture**.

### Backend

```
Domain
    ↓
Application (Use Cases)
    ↓
Infrastructure (Prisma)
    ↓
Presentation (Controllers)
```

### Frontend

```
Pages
    ↓
Hooks
    ↓
Services
    ↓
API
```

### Shared

```
Frontend
      ↘
    Shared
      ↗
Backend
```

El paquete **Shared** centraliza los tipos y validaciones utilizados por ambas aplicaciones, evitando duplicación de código y garantizando consistencia entre frontend y backend.

---

## 📂 Estructura del proyecto

```text
recicla/
├── apps/
│   ├── api/              # Backend (NestJS + Prisma)
│   └── frontend/         # Frontend (React + Vite)
│
├── packages/
│   └── shared/           # Tipos y validaciones compartidas
│
├── docker-compose.yml
├── render.yaml
└── package.json
```

---

## 🔧 Prerrequisitos

- Node.js 18+
- npm 9+
- Docker y Docker Compose (opcional)

---

## ▶️ Instalación

### Con Docker (recomendado)

```bash
git clone git@github.com:PabloExeQGimenez/recicla.git

cd recicla

docker compose up --build
```

### Servicios disponibles

| Servicio | URL |
|----------|-----|
| 🌐 Frontend | http://localhost |
| 🔌 API | http://localhost:3000 |
| 📖 Swagger | http://localhost:3000/api/docs |

---

### Sin Docker

```bash
git clone git@github.com:PabloExeQGimenez/recicla.git

cd recicla

npm install

cp apps/api/.env.example apps/api/.env

# Configurar variables de entorno

npm run dev
```

---

## 🧪 Tests

```bash
# Backend
npm run test -w apps/api

# Frontend
npm run test -w apps/frontend
```

---

## 🚀 Deploy

La aplicación se encuentra desplegada en **Render** utilizando un **Blueprint (`render.yaml`)**.

Infraestructura:

- 🌐 Frontend servido como sitio estático.
- 🔌 API desplegada mediante Docker.
- 🗄️ Base de datos PostgreSQL administrada por Render.

---

## ⚙️ CI/CD

Pipeline automatizado mediante **GitHub Actions**, ejecutado en cada **push** y **Pull Request** hacia `main`.

Incluye:

- ✅ Lint
- ✅ Build del monorepo
- ✅ Tests del frontend (Vitest)
- ✅ Tests del backend (Jest + PostgreSQL)

---

## 🗺️ Roadmap

Próximas mejoras planificadas:

- Refresh Tokens.
- Dashboard analítico.
- Auditoría de acciones.
- Tests End-to-End.
- Monitoreo y métricas.
- Notificaciones por correo electrónico.

---

## 👨‍💻 Autor

**Pablo Exequiel Giménez**

- GitHub: https://github.com/PabloExeQGimenez
- LinkedIn: https://www.linkedin.com/in/pabloexeqgimenez/
