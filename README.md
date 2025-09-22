# CSP451 Student Seed (Weeks 1–3)

Starter repository for CheckPoints 1–3. Use this to begin your assignments.

## Status Badges

- ![CI](https://github.com/ababamahmoudi/CSP451-Checkpoint3-AliBabamahmoudi-/actions/workflows/ci.yml/badge.svg)
- ![Deploy](https://github.com/ababamahmoudi/CSP451-Checkpoint3-AliBabamahmoudi-/actions/workflows/deploy.yml/badge.svg)
- [![codecov](https://codecov.io/gh/ababamahmoudi/CSP451-Checkpoint3-AliBabamahmoudi-/branch/main/graph/badge.svg)](https://codecov.io/gh/ababamahmoudi/CSP451-Checkpoint3-AliBabamahmoudi-)




## Project Structure

- `src/` — HTML/CSS/JS scaffold
- `tests/` — Jest unit/integration tests (80%+ coverage threshold)
- `scripts/` — build and smoke test scripts
- `.github/workflows/` — CI, Pages deploy, scheduled audit
- `.github/actions/setup-project` — reusable composite action

## Week 1 Tasks

- Create at least 5 meaningful commits using conventional prefixes (`feat`, `fix`, `docs`, `style`, `refactor`).
- Add `.gitignore`, update README, and ensure repository has necessary files (`index.html`, `style.css`, `script.js` equivalent is in `src/`).
- Create feature branch `feature/add-about-page`, add `about.html`, open PR, then merge.

## Week 2 Tasks

- Practice branching strategies, open PRs, request reviews, resolve conflicts.

## Week 3 Tasks

- Ensure CI passes: lint, test with coverage >= 80%, and build.
- Pages deployment on pushes to `main`.
- Scheduled dependency audit opens issue for high/critical vulnerabilities.

## Local Development

```bash
# Use Node 18
nvm use || nvm install

# Install dependencies
npm ci

# Run
npm start

# Lint & format
npm run lint
npm run format

# Test (with coverage)
npm test

# Build static site to dist/
npm run build
```

## GitHub Pages

- After first push to `main`, enable Pages: Settings > Pages > Source: GitHub Actions.
- The workflow in `.github/workflows/pages.yml` deploys `dist/`.

## Codecov

- Optional: Add repository to Codecov and set `CODECOV_TOKEN` secret if private.

## License

MIT

# CSP451 Assignment

![Deployment](https://github.com/ababamahmoudi/CSP451-Checkpoint3-AliBabamahmoudi/actions/workflows/deploy.yml/badge.svg)

A Node.js project for CSP451 coursework.

See WORKFLOWS.md for detailed CI/CD documentation.
