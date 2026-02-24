# SupportPilot AI Frontend

Production-ready SaaS frontend scaffold for an AI-powered customer support platform.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts (mock analytics charts)
- Lucide icons

## Quick Start
```bash
npm install
npm run dev
```

## Folder Structure
```text
app/
  (auth)/
    login/
    register/
  (dashboard)/
    dashboard/
    conversations/
    agents/
    analytics/
    settings/
    billing/
components/
  layout/
  ui/
  conversations/
  dashboard/
  analytics/
lib/
  mock-data.ts
  utils.ts
types/
hooks/
```

## Notes
- Uses mock data only (no backend integration).
- Authentication pages are UI-only.
- Includes dark mode toggle and responsive dashboard layout.
