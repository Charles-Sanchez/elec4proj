# BULSU COE Web Engineering Project

Multi-group collaboration website with:

- Landing page sections assigned per group
- Per-department pages loaded from JSON files in `public/data/`
- Per-department admin editor (`/dept/:deptCode/admin`) with live preview + JSON export

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Routes

- `/` Landing page
- `/admin` Landing admin editor
- `/departments` Department selector
- `/dept/:deptCode` Department page
- `/dept/:deptCode/admin` Department admin editor

## Content Files

- Landing: `src/data/landing.ts`
- Departments: `public/data/departments/*.json`

## Collaboration Setup

See [docs/PROJECT_WORKFLOW.md](docs/PROJECT_WORKFLOW.md).
For per-department TSX customization, see [docs/DEPARTMENT_PAGE_CUSTOMIZATION.md](docs/DEPARTMENT_PAGE_CUSTOMIZATION.md).

# Secure Deployment Test
Last update: Fri Mar 27 18:17:52 PST 2026
Deployment attempt: Fri Mar 27 18:23:55 PST 2026
Deployment attempt with corrected secrets: Fri Mar 27 18:30:34 PST 2026
Triggering build after SSH_HOST fix: Fri Mar 27 18:34:24 PST 2026
Deployment finalized with secret token: Sat Mar 28 22:19:21 PST 2026
Automated Sync Test 2: Sat Mar 28 22:56:32 PST 2026
