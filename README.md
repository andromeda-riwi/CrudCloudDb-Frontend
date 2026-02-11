<div align="center">

# 🚀 ApexDB Frontend

### Tu Nube de Bases de Datos, Lista en Segundos

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<p align="center">
  <img src="public/logoApexDBWB.png" alt="ApexDB Logo" width="120" />
</p>

**[English](#english)** | **[Español](#español)**

---

</div>

## English

### 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Docker Deployment](#-docker-deployment)
- [IDE Setup](#-ide-setup)
- [Testing](#-testing)
- [Contributing](#-contributing)

---

### 📖 About the Project

**ApexDB** is a modern cloud database management platform that allows users to deploy, manage, and scale database instances (MySQL, PostgreSQL, MongoDB, SQL Server) through an intuitive web interface. This repository contains the frontend application built with Vue.js 3.

The platform offers:
- ⚡ Instant database provisioning in seconds
- 🔐 Secure credential management with rotation capabilities
- 📊 Real-time dashboards and analytics
- 💳 Subscription-based plans with payment integration
- 🌙 Dark mode support

---

### ✨ Features

| Feature | Description |
|---------|-------------|
| 🔒 **Authentication** | JWT-based auth with email verification, password reset, and session management |
| 🗄️ **Database Management** | Create, view, and delete database instances across multiple engines |
| 📊 **Dashboard** | Real-time statistics with interactive charts (Chart.js) |
| 💰 **Subscription Plans** | Multiple tiers (Free, Intermediate, Advanced) with payment gateway integration |
| 📝 **Audit Logs** | Complete activity tracking for security and compliance |
| 👤 **User Profile** | Profile management with password change capabilities |
| 🌙 **Dark Mode** | System-aware theme with manual toggle |
| 📱 **Responsive Design** | Mobile-first design that works on all devices |

---

### 🛠️ Tech Stack

#### Core
| Technology | Version | Purpose |
|------------|---------|---------|
| [Vue.js](https://vuejs.org/) | 3.5 | Progressive JavaScript Framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Type-safe JavaScript |
| [Vite](https://vitejs.dev/) | 7.1 | Next-generation build tool |
| [Vue Router](https://router.vuejs.org/) | 4.6 | Official router for Vue.js |
| [Pinia](https://pinia.vuejs.org/) | 3.0 | State management |

#### UI & Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 4.1 | Utility-first CSS framework |
| [Chart.js](https://www.chartjs.org/) | 4.5 | Data visualization |
| [vue-chartjs](https://vue-chartjs.org/) | 5.3 | Vue wrapper for Chart.js |
| [vue-toastification](https://github.com/Maronato/vue-toastification) | 2.0 | Toast notifications |

#### HTTP & API
| Technology | Purpose |
|------------|---------|
| [Axios](https://axios-http.com/) | HTTP client with interceptors |

#### Testing
| Technology | Purpose |
|------------|---------|
| [Vitest](https://vitest.dev/) | Unit testing framework |
| [Cypress](https://www.cypress.io/) | End-to-end testing |
| [@vue/test-utils](https://test-utils.vuejs.org/) | Vue component testing |

#### Code Quality
| Technology | Purpose |
|------------|---------|
| [ESLint](https://eslint.org/) | JavaScript/TypeScript linting |
| [Prettier](https://prettier.io/) | Code formatting |
| [vue-tsc](https://github.com/vuejs/language-tools) | Vue TypeScript type checking |

---

### 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `^20.19.0` or `>=22.12.0`
- **npm** `>=10.0.0` (comes with Node.js)
- **Git** for version control

---

### 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/CrudCloudDb-Frontend.git
   cd CrudCloudDb-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

---

### 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run test:unit` | Run unit tests with Vitest |
| `npm run test:e2e` | Run E2E tests against production build |
| `npm run test:e2e:dev` | Run E2E tests against dev server |
| `npm run lint` | Lint and auto-fix with ESLint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |

---

### 📁 Project Structure

```
CrudCloudDb-Frontend/
├── 📁 cypress/                 # End-to-end tests
│   ├── 📁 e2e/                 # E2E test specs
│   ├── 📁 fixtures/            # Test data
│   └── 📁 support/             # Test utilities
├── 📁 docker/                  # Docker configuration
│   └── nginx.conf              # Nginx config for SPA
├── 📁 public/                  # Static assets
├── 📁 src/
│   ├── 📁 assets/              # Styles and images
│   │   └── main.css            # Global styles with Tailwind
│   ├── 📁 components/          # Reusable Vue components
│   │   ├── AppFooter.vue       # Footer component
│   │   ├── CreateDatabaseModal.vue
│   │   ├── CredentialsModal.vue
│   │   ├── DarkModeToggle.vue
│   │   ├── DatabaseChart.vue   # Chart.js wrapper
│   │   ├── Navbar.vue
│   │   ├── PlanCard.vue
│   │   ├── PricingSection.vue
│   │   └── StatCard.vue
│   ├── 📁 composables/         # Vue composition functions
│   │   └── useDarkMode.ts      # Dark mode state management
│   ├── 📁 layouts/             # Page layouts
│   │   ├── AppLayout.vue       # Authenticated app layout
│   │   └── AuthLayout.vue      # Authentication pages layout
│   ├── 📁 router/              # Vue Router configuration
│   │   └── index.ts            # Routes with navigation guards
│   ├── 📁 services/            # API service layer
│   │   ├── api.ts              # Axios instance & interceptors
│   │   ├── audit.ts            # Audit logs service
│   │   ├── auth.ts             # Authentication service
│   │   ├── database.ts         # Database CRUD operations
│   │   ├── payment.ts          # Payment processing
│   │   └── user.ts             # User management
│   ├── 📁 views/               # Page components
│   │   ├── AuditLogView.vue
│   │   ├── DashboardView.vue
│   │   ├── DatabasesView.vue
│   │   ├── ForgotPasswordView.vue
│   │   ├── LandingView.vue
│   │   ├── LoginView.vue
│   │   ├── PlansView.vue
│   │   ├── ProfileView.vue
│   │   ├── RegisterView.vue
│   │   ├── ResetPasswordView.vue
│   │   └── VerifyEmailView.vue
│   ├── App.vue                 # Root component
│   └── main.ts                 # Application entry point
├── Dockerfile                  # Multi-stage Docker build
├── cypress.config.ts           # Cypress configuration
├── eslint.config.ts            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── vitest.config.ts            # Vitest configuration
```

---

### ⚙️ Configuration

#### API Base URL

The API base URL is configured in `src/services/api.ts`:

```typescript
const apiClient = axios.create({
  baseURL: 'https://your-api-url.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
```

#### Environment Variables

Create a `.env` file in the root directory (optional):

```env
VITE_API_BASE_URL=https://your-api-url.com/api
```

---

### 🐳 Docker Deployment

The project includes a multi-stage Dockerfile optimized for production:

1. **Build the Docker image**
   ```bash
   docker build -t apexdb-frontend .
   ```

2. **Run the container**
   ```bash
   docker run -d -p 80:80 apexdb-frontend
   ```

#### Docker Compose (optional)

```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

The Nginx configuration handles:
- ✅ SPA routing (fallback to `index.html`)
- ✅ Asset caching (1 year for static files)
- ✅ Gzip compression

---

### 💻 IDE Setup

#### Recommended: VS Code

1. Install [VS Code](https://code.visualstudio.com/)
2. Install [Vue - Official Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
3. Disable Vetur if installed

#### Browser DevTools

- **Chrome/Edge**: [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- **Firefox**: [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

---

### 🧪 Testing

#### Unit Tests (Vitest)

```bash
# Run once
npm run test:unit

# Watch mode
npm run test:unit -- --watch
```

#### E2E Tests (Cypress)

```bash
# Interactive mode (development)
npm run test:e2e:dev

# Headless mode (CI/CD)
npm run build
npm run test:e2e
```

---

### 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

---

## Español

### 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación-1)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Configuración](#-configuración)
- [Despliegue con Docker](#-despliegue-con-docker)
- [Configuración del IDE](#-configuración-del-ide)
- [Testing](#-testing-1)
- [Contribuir](#-contribuir)

---

### 📖 Acerca del Proyecto

**ApexDB** es una plataforma moderna de gestión de bases de datos en la nube que permite a los usuarios desplegar, administrar y escalar instancias de bases de datos (MySQL, PostgreSQL, MongoDB, SQL Server) a través de una interfaz web intuitiva. Este repositorio contiene la aplicación frontend construida con Vue.js 3.

La plataforma ofrece:
- ⚡ Aprovisionamiento instantáneo de bases de datos en segundos
- 🔐 Gestión segura de credenciales con capacidad de rotación
- 📊 Dashboards en tiempo real y analíticas
- 💳 Planes de suscripción con integración de pasarela de pagos
- 🌙 Soporte para modo oscuro

---

### ✨ Características

| Característica | Descripción |
|----------------|-------------|
| 🔒 **Autenticación** | Autenticación basada en JWT con verificación de email, recuperación de contraseña y gestión de sesiones |
| 🗄️ **Gestión de Bases de Datos** | Crear, visualizar y eliminar instancias de bases de datos en múltiples motores |
| 📊 **Dashboard** | Estadísticas en tiempo real con gráficos interactivos (Chart.js) |
| 💰 **Planes de Suscripción** | Múltiples niveles (Gratis, Intermedio, Avanzado) con integración de pasarela de pagos |
| 📝 **Logs de Auditoría** | Seguimiento completo de actividades para seguridad y cumplimiento |
| 👤 **Perfil de Usuario** | Gestión de perfil con capacidad de cambio de contraseña |
| 🌙 **Modo Oscuro** | Tema adaptable al sistema con toggle manual |
| 📱 **Diseño Responsivo** | Diseño mobile-first que funciona en todos los dispositivos |

---

### 🛠️ Stack Tecnológico

#### Core
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Vue.js](https://vuejs.org/) | 3.5 | Framework JavaScript Progresivo |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | JavaScript con tipado seguro |
| [Vite](https://vitejs.dev/) | 7.1 | Herramienta de construcción de nueva generación |
| [Vue Router](https://router.vuejs.org/) | 4.6 | Router oficial para Vue.js |
| [Pinia](https://pinia.vuejs.org/) | 3.0 | Gestión de estado |

#### UI y Estilos
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Tailwind CSS](https://tailwindcss.com/) | 4.1 | Framework CSS utility-first |
| [Chart.js](https://www.chartjs.org/) | 4.5 | Visualización de datos |
| [vue-chartjs](https://vue-chartjs.org/) | 5.3 | Wrapper de Vue para Chart.js |
| [vue-toastification](https://github.com/Maronato/vue-toastification) | 2.0 | Notificaciones toast |

#### HTTP y API
| Tecnología | Propósito |
|------------|-----------|
| [Axios](https://axios-http.com/) | Cliente HTTP con interceptores |

#### Testing
| Tecnología | Propósito |
|------------|-----------|
| [Vitest](https://vitest.dev/) | Framework de testing unitario |
| [Cypress](https://www.cypress.io/) | Testing end-to-end |
| [@vue/test-utils](https://test-utils.vuejs.org/) | Testing de componentes Vue |

#### Calidad de Código
| Tecnología | Propósito |
|------------|-----------|
| [ESLint](https://eslint.org/) | Linting de JavaScript/TypeScript |
| [Prettier](https://prettier.io/) | Formateo de código |
| [vue-tsc](https://github.com/vuejs/language-tools) | Verificación de tipos TypeScript en Vue |

---

### 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** `^20.19.0` o `>=22.12.0`
- **npm** `>=10.0.0` (viene con Node.js)
- **Git** para control de versiones

---

### 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/your-username/CrudCloudDb-Frontend.git
   cd CrudCloudDb-Frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir el navegador**
   Navega a `http://localhost:5173`

---

### 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con HMR |
| `npm run build` | Verifica tipos y construye para producción |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run test:unit` | Ejecuta tests unitarios con Vitest |
| `npm run test:e2e` | Ejecuta tests E2E contra build de producción |
| `npm run test:e2e:dev` | Ejecuta tests E2E contra servidor de desarrollo |
| `npm run lint` | Lintea y auto-corrige con ESLint |
| `npm run format` | Formatea código con Prettier |
| `npm run type-check` | Ejecuta verificación de tipos TypeScript |

---

### 📁 Estructura del Proyecto

```
CrudCloudDb-Frontend/
├── 📁 cypress/                 # Tests end-to-end
│   ├── 📁 e2e/                 # Especificaciones E2E
│   ├── 📁 fixtures/            # Datos de prueba
│   └── 📁 support/             # Utilidades de testing
├── 📁 docker/                  # Configuración Docker
│   └── nginx.conf              # Config de Nginx para SPA
├── 📁 public/                  # Assets estáticos
├── 📁 src/
│   ├── 📁 assets/              # Estilos e imágenes
│   │   └── main.css            # Estilos globales con Tailwind
│   ├── 📁 components/          # Componentes Vue reutilizables
│   │   ├── AppFooter.vue       # Componente de footer
│   │   ├── CreateDatabaseModal.vue
│   │   ├── CredentialsModal.vue
│   │   ├── DarkModeToggle.vue
│   │   ├── DatabaseChart.vue   # Wrapper de Chart.js
│   │   ├── Navbar.vue
│   │   ├── PlanCard.vue
│   │   ├── PricingSection.vue
│   │   └── StatCard.vue
│   ├── 📁 composables/         # Funciones de composición Vue
│   │   └── useDarkMode.ts      # Gestión de estado del modo oscuro
│   ├── 📁 layouts/             # Layouts de página
│   │   ├── AppLayout.vue       # Layout de app autenticada
│   │   └── AuthLayout.vue      # Layout de páginas de auth
│   ├── 📁 router/              # Configuración de Vue Router
│   │   └── index.ts            # Rutas con guards de navegación
│   ├── 📁 services/            # Capa de servicios API
│   │   ├── api.ts              # Instancia Axios e interceptores
│   │   ├── audit.ts            # Servicio de logs de auditoría
│   │   ├── auth.ts             # Servicio de autenticación
│   │   ├── database.ts         # Operaciones CRUD de bases de datos
│   │   ├── payment.ts          # Procesamiento de pagos
│   │   └── user.ts             # Gestión de usuarios
│   ├── 📁 views/               # Componentes de página
│   │   ├── AuditLogView.vue
│   │   ├── DashboardView.vue
│   │   ├── DatabasesView.vue
│   │   ├── ForgotPasswordView.vue
│   │   ├── LandingView.vue
│   │   ├── LoginView.vue
│   │   ├── PlansView.vue
│   │   ├── ProfileView.vue
│   │   ├── RegisterView.vue
│   │   ├── ResetPasswordView.vue
│   │   └── VerifyEmailView.vue
│   ├── App.vue                 # Componente raíz
│   └── main.ts                 # Punto de entrada de la aplicación
├── Dockerfile                  # Build multi-stage de Docker
├── cypress.config.ts           # Configuración de Cypress
├── eslint.config.ts            # Configuración de ESLint
├── index.html                  # Punto de entrada HTML
├── package.json                # Dependencias y scripts
├── tsconfig.json               # Configuración de TypeScript
├── vite.config.ts              # Configuración de Vite
└── vitest.config.ts            # Configuración de Vitest
```

---

### ⚙️ Configuración

#### URL Base de la API

La URL base de la API está configurada en `src/services/api.ts`:

```typescript
const apiClient = axios.create({
  baseURL: 'https://tu-url-api.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
```

#### Variables de Entorno

Crea un archivo `.env` en el directorio raíz (opcional):

```env
VITE_API_BASE_URL=https://tu-url-api.com/api
```

---

### 🐳 Despliegue con Docker

El proyecto incluye un Dockerfile multi-stage optimizado para producción:

1. **Construir la imagen Docker**
   ```bash
   docker build -t apexdb-frontend .
   ```

2. **Ejecutar el contenedor**
   ```bash
   docker run -d -p 80:80 apexdb-frontend
   ```

#### Docker Compose (opcional)

```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

La configuración de Nginx maneja:
- ✅ Enrutamiento SPA (fallback a `index.html`)
- ✅ Caché de assets (1 año para archivos estáticos)
- ✅ Compresión Gzip

---

### 💻 Configuración del IDE

#### Recomendado: VS Code

1. Instala [VS Code](https://code.visualstudio.com/)
2. Instala la [Extensión Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
3. Desactiva Vetur si está instalado

#### DevTools del Navegador

- **Chrome/Edge**: [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- **Firefox**: [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

---

### 🧪 Testing

#### Tests Unitarios (Vitest)

```bash
# Ejecutar una vez
npm run test:unit

# Modo watch
npm run test:unit -- --watch
```

#### Tests E2E (Cypress)

```bash
# Modo interactivo (desarrollo)
npm run test:e2e:dev

# Modo headless (CI/CD)
npm run build
npm run test:e2e
```

---

### 🤝 Contribuir

1. Haz fork del repositorio
2. Crea tu rama de feature (`git checkout -b feature/NuevaCaracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añadir NuevaCaracteristica'`)
4. Haz push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

---

<div align="center">

### 🗄️ Motores de Base de Datos Soportados

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" width="60" height="60" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" width="60" height="60" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="60" height="60" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" alt="SQL Server" width="60" height="60" />
</p>

---

**Hecho con ❤️ usando Vue.js**

</div>
