# Workflow Documentation

This repository includes multiple GitHub Actions workflows and one reusable composite action to support Weeks 1–3 assignments.

---

## CI Pipeline (`.github/workflows/ci.yml`)

**Pipeline flow:** 
lint ──▶ test ──▶ build ──▶ deploy

- **Purpose**: Ensures code quality and reliability through linting, testing, and builds.  
- **Triggers**:  
  - Pushes to `main` or `develop`  
  - Pull requests targeting `main`  
- **Jobs**:  
  - `lint`: Runs ESLint and Prettier checks.  
  - `test`: Executes Jest tests with coverage, uploads results to Codecov, fails if coverage < 80%.  
    *Depends on `lint`.*  
  - `build`: Builds the project and uploads artifacts.  
    *Depends on `test`.*  
- **Secrets Required**:  
  - `CODECOV_TOKEN` (needed for private repos; optional for public depending on Codecov settings).  

**Troubleshooting**  
- Lint fails → run `npm run lint` and `npm run format` locally.  
- Prettier check fails → run `npm run format` to auto-fix.  
- Coverage below 80% → add more unit tests.  
- Coverage file missing → confirm `jest.config.cjs` has `collectCoverage` enabled.  
- Build fails → check `scripts/build.js` or missing dependencies.

---

## GitHub Pages Deployment (`.github/workflows/deploy.yml`)

- **Purpose**: Deploys the site automatically to GitHub Pages.  
- **Triggers**: Push to `main`.  
- **Jobs**:  
  - `deploy`: Installs dependencies, builds the project, and publishes the `dist/` directory to Pages.  
- **Environment Variables**:  
  - `NODE_ENV=production`  
  - `PUBLIC_URL` set dynamically to repo URL  
- **Secrets Required**: Uses built-in `GITHUB_TOKEN`.  

**Troubleshooting**  
- 404 Page → confirm GitHub Pages is enabled in **Settings → Pages**.  
- Permission denied (403) → ensure workflow permissions include `contents: write`.  
- Missing `dist/` → ensure `npm run build` succeeds before deploy.  

---

## Scheduled Dependency Audit (`.github/workflows/scheduled-audit.yml`)

- **Purpose**: Performs daily security auditing of dependencies.  
- **Triggers**:  
  - Scheduled cron job: runs daily at 00:00 UTC  
  - Manual `workflow_dispatch`  
- **Steps**:  
  - Installs dependencies and runs `npm audit --audit-level=moderate`.  
  - Opens an issue if vulnerabilities are detected.  
- **Secrets Required**: Uses built-in `GITHUB_TOKEN`.  

**Troubleshooting**  
- Too many false positives → run `npm audit fix`.  
- Workflow skipped → check cron syntax (`0 0 * * *`).  
- No issues opened → confirm `actions/github-script` has correct permissions.  

---

## Daily Dependency Check (`.github/workflows/dependency-check.yml`)

- **Purpose**: Detects outdated dependencies proactively.  
- **Triggers**: Nightly cron at 00:00 UTC.  
- **Jobs**:  
  - Runs `npm outdated` to check for new dependency versions.  
  - Opens a GitHub issue if outdated packages are found.  
- **Secrets Required**: Uses built-in `GITHUB_TOKEN`.  

**Troubleshooting**  
- Issues not being created → ensure `permissions: contents: write` is set.  
- Workflow not running → double-check cron syntax.  

---

## Composite Action (`.github/actions/setup-project`)

- **Purpose**: DRY (Don’t Repeat Yourself) setup for Node.js projects, reusable across workflows.  
- **Steps**:  
  - Installs Node.js (version configurable).  
  - Installs dependencies.  
  - Runs lint and tests.  
- **Inputs**:  
  - `node-version` (default: `18`).  
- **Usage Example**:  
  ```yaml
  - uses: ./.github/actions/setup-project
    with:
      node-version: '18'
