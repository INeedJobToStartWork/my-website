# Gemini Context: @monorepo/mvp

This project is a TypeScript monorepo using **PNPM Workspaces** and **Turborepo**. It contains a Next.js website and a CLI package.

## Project Structure

- `apps/website`: A **Next.js** application.
- `packages/test-package-1`: A CLI tool built with **Commander** and **tsdown**.
- `configs/vitest`: Shared Vitest configuration.

## Technologies

- **Package Manager:** PNPM
- **Monorepo Management:** Turborepo
- **Frontend:** Next.js, React, TailwindCSS
- **CLI Development:** Commander.js, tsdown (for building)
- **Testing:** Vitest
- **Linting & Formatting:** ESLint, Prettier
- **Workflow Tools:** Husky, lint-staged, Changesets

## Building and Running

### Root Commands

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Runs all applications in development mode using Turbo. |
| `pnpm build` | Builds all packages and applications. |
| `pnpm lint` | Runs linting across the entire monorepo. |
| `pnpm format` | Formats all files in the project. |
| `pnpm test` | Executes all tests across packages. |
| `pnpm clean:builds` | Removes `dist`, `build`, and `lib` directories. |

### CLI Package (`packages/test-package-1`)

The CLI tool can be linked globally for development:
```bash
cd packages/test-package
pnpm link-cli
```
- Build commands: `pnpm build:dev`, `pnpm build:prod`.

### Website (`apps/website`)

- Start development: `pnpm dev` (from root or within `apps/website`).
- Analyze bundle: `pnpm analyze`.
- **Generators:**
  - `pnpm turbo gen package`: Creates a new CLI package in `packages/` based on the `test-package-1` template.

## Development Conventions

- **Commits:** Uses `commitsmile` for standardized commit messages.
- **Linting:** Pre-commit hooks via Husky and `lint-staged` ensure code quality.
- **Imports:** Uses path aliases (e.g., `@/` in `test-package-1`).
- **Releases:** Uses `changeset` for versioning and publishing to NPM.
