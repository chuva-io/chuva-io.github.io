# Chuva Template Monorepo

A modern, full-stack TypeScript monorepo featuring a React web application, a Less backend, and shared type definitions.

## 🏗️ Project Structure

This monorepo contains three main projects:

- **`apps/web`** - React frontend built with Vite, TanStack Router, TanStack Query, and Tailwind CSS
- **`apps/be`** - Backend API built with [Less](https://docs.less.chuva.io/)
- **`packages/types`** - Shared TypeScript types using Zod schemas

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) package manager
- [tmux](https://github.com/tmux/tmux/wiki) (optional, for running both projects simultaneously)

### Installation

1. **Install dependencies**
   ```bash
   yarn
   ```

### Development

#### Option 1: Run Everything with Tmux (Recommended)

The easiest way to run the entire development environment:

```bash
yarn dev
```

This command:

- Installs all dependencies
- Starts the Less backend in one tmux window
- Starts the React web app in another tmux window
- Opens VS Code
- Attaches you to the tmux session

**Tmux Controls:**

- Switch between windows: `Ctrl-b` + `1` (backend) or `Ctrl-b` + `2` (web)
- Detach from session: `Ctrl-b` + `d`
- Reattach to session: `tmux attach-session -t monorepo`

#### Option 2: Run Projects Individually

**Shared Types** (run first if making type changes):

```bash
yarn dev:types    # Watch mode
# or
yarn build:types  # Single build
```

**Backend (Less API):**

```bash
yarn dev:less
```

**Frontend (React Web App):**

```bash
yarn dev:web
```

## 📁 Detailed Project Structure

```
chuva-template-monorepo/
├── apps/
│   ├── web/                    # React frontend
│   │   ├── src/
│   │   │   ├── components/     # Reusable UI components
│   │   │   ├── pages/          # Page components
│   │   │   ├── queries/        # TanStack Query hooks
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   ├── constants/      # App constants
│   │   │   └── lib/           # Utilities
│   │   └── package.json
│   │
│   └── be/                     # Less backend
│       ├── less/
│       │   ├── apis/          # REST API endpoints
│       │   └── shared/        # Backend shared modules
│       └── package.json
│
├── packages/
│   └── types/                  # Shared TypeScript types
│       ├── src/
│       └── package.json
│
├── package.json               # Root package.json with workspace scripts
└── tmux.sh                   # Tmux development script
```

## 🛠️ Technology Stack

### Frontend (Web)

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Router** - File-based routing
- **TanStack Query** - Data fetching and caching
- **TanStack Form** - Form state management
- **Tailwind CSS** - Utility-first CSS framework
- **Zod** - Schema validation

### Backend

- **Less** - Serverless backend framework
- **TypeScript** - Type safety
- **Zod** - Data validation

### Shared

- **Zod** - Schema definitions for API contracts
- **TypeScript** - Shared type definitions

## 📚 Development Guidelines

For detailed coding standards, best practices, and architectural decisions, please refer to:

**[`.github/copilot-instructions.md`](.github/copilot-instructions.md)**

This document covers:

- React component patterns
- TypeScript conventions
- TanStack Query/Router usage
- Styling guidelines
- Backend patterns
- Shared type management

## 🔧 Available Scripts

### Root Level

- `yarn dev` - Start development environment with tmux
- `yarn build` - Build all projects for production
- `yarn build:types` - Build shared types package
- `yarn build:web` - Build web application
- `yarn build:less` - Build Less backend
- `yarn dev:types` - Watch shared types in development
- `yarn dev:web` - Start web development server
- `yarn dev:less` - Start Less backend in development

### Project-Specific Scripts

Navigate to individual project directories to run project-specific commands:

```bash
# Web app
cd apps/web
yarn dev          # Start Vite dev server
yarn build        # Build for production
yarn serve        # Preview production build

# Backend
cd apps/be
yarn dev          # Build and start Less server
yarn build        # Build Less project
yarn start        # Start Less server

# Shared types
cd packages/types
yarn dev          # Watch and rebuild types
yarn build        # Build types once
```

## 🤝 Contributing

1. Follow the coding guidelines in `.github/copilot-instructions.md`
2. Use shared types from `packages/types` for API contracts
3. Validate all data with Zod schemas
4. Test changes in both web and backend applications

## 📖 Additional Resources

- [Less Documentation](https://docs.less.chuva.io/)
- [TanStack Router](https://tanstack.com/router/latest)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zod](https://zod.dev/)
