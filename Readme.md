# 📄 devC_BEDS 🛌

Dev container with :

- Bun
- Elysia
- Drizzle
- SQLite

## 🔧 Requirement

- Docker
- VS-Code
- Dev containers extension (microsoft)

## Usage

```bash
cd app && bun i # Install dependency
bun run db:migrate # Make migration
bun run db:push # Push migration
bun run dev # Run dev server
bun run check # Eslint check
bun run check:fix # Eslint + Prettier
