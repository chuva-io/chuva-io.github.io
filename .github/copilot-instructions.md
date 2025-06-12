# GitHub Copilot Instructions

This project is a Monorepo with a **web project**, a **backend project**, and **shared types**. Below are the instructions for
using GitHub Copilot effectively across these projects.

## Shared Packages

In this section You will find information about how the projects in the Monorepo should share code.

### Shared Types

When defining API routes in the BE or creating new Tanstack Queries or Mutations in the FE we should use shared types in
`/packages/shared/types/` for the Headers, Body, and Query Params. The types should use Zod v4.

## Web

### 🔧 Technologies

- [React](https://react.dev/): The library for web and native user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): Rapidly build modern websites without ever leaving your HTML.
- [Zod](https://zod.dev/): TypeScript-first schema validation with static type inference.
- [TanStack Query](https://tanstack.com/query/latest): Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular.
- [TanStack Router](https://tanstack.com/router/latest): Modern and scalable routing for React and Solid applications.
- [TanStack Form](https://tanstack.com/form/latest): Headless, performant, and type-safe form state management for TS/JS, React, Vue, Angular, Solid, Lit and Svelte.

### 🧠 Best Practices

#### ⚛️ React

- Use **UpperCamelCase** for pages and components.
- Define props using **Zod schemas**.
- Create a new component if:
  - The file exceeds ~100 lines.
  - The component is reused in more than one place.
  - It has a single clear responsibility.
- Save custom React hooks in `/src/hooks/`
- Save reusable UI components (buttons, inputs, cards, etc.) in `/src/components`
  - Prefer ShadCN when possible.

#### 🎨 Styling

- Prefer **Tailwind CSS** for all styling.

#### 🧾 TypeScript

- Use `type` and `interface` consistently.
- Extend base types when needed.
  - Example: A mutation `UserInput` _(no ID)_ vs. a returned `User` _(with ID)_ → derive both from a shared base.
- Store shared types in `/src/types/`.
- Use **Zod** to generate types in all cases where validation is needed.

#### 🔁 TanStack Query

- Place **mutations** in `/src/mutations`.
- Place **queries** in `/src/queries`.
- Prefer `SuspenseQuery` over regular `Query`.
- Only use queries and mutations in `/src/pages`, not in components.
- Validate queries and mutations using Zod.
- Handle all environment variables in `/src/constants/index.ts`.
- Validate constants using Zod.

#### 🔁 TanStack Router

- Prefer directory-based routing: https://tanstack.com/router/latest/docs/framework/react/routing/file-based-routing#directory-routes

#### ⚙️ Constants

- Store constants in `/src/constants`.
- Validate constants (e.g. from `process.env`) using Zod.
- Log meaningful errors for missing or invalid constants.

## Backend

The backend uses [Less](https://docs.less.chuva.io/) and is written in TypeScript.
Validate data in routes, topics, and websocket messages using Zod.
