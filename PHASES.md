# Opsio — 10-Phase Project Implementation Plan

## Phase 1: ✅ Core Setup (COMPLETE)
- Next.js 16 scaffold
- TypeScript strict mode
- Tailwind CSS + PostCSS
- ESLint + Prettier
- package.json + pnpm config
- tsconfig.json
- next.config.ts
- Engineering rules (`docs/rules.md`)

## Phase 2: 🔄 Auth Foundation (IN PROGRESS)
- NextAuth 5 configuration (`src/auth.ts`)
- GitHub OAuth provider
- Session management
- Auth handlers (signIn, auth, handlers exports)
- MongoDB adapter integration
- Environment variables for auth

## Phase 3: Database & Core Types
- MongoDB connection (`src/lib/db.ts`)
- Project types (`src/types/projects.ts`)
- Members types (`src/types/members.ts`)
- Types barrel export (`src/types/index.ts`)
- Crypto helpers for encryption (`src/lib/crypto-helpers.ts`)

## Phase 4: Schemas & Validation
- Project schema (`src/schema/project.ts`)
- Environment variable schema (`src/schema/environment-variable.ts`)
- Member schema (`src/schema/member.ts`)
- Environment validation (`src/schema/env.ts`)
- Schema barrel export (`src/schema/index.ts`)

## Phase 5: Config & Client Setup
- Axios instance (`src/config/axios.ts`)
- API endpoints mapping (`src/config/api-endpoints.ts`)
- TanStack Query client (`src/config/query-client.ts`)
- App-wide constants (`src/config/app-data.ts`)
- Utility functions (`src/lib/utils.ts`)

## Phase 6: API Routes — Auth & Projects
- Auth handler (`src/app/api/auth/[...nextauth]/route.ts`)
- List/Create projects (`src/app/api/projects/route.ts`)
- Get/Update/Delete project (`src/app/api/projects/[id]/route.ts`)
- List/Create members (`src/app/api/projects/[id]/members/route.ts`)
- Member management (`src/app/api/projects/[id]/members/[memberId]/route.ts`)

## Phase 7: API Routes — Members & Notifications
- User search (`src/app/api/users/search/route.ts`)
- Respond to invite (`src/app/api/members/[memberId]/respond/route.ts`)
- Notifications list/create (`src/app/api/notifications/route.ts`)
- Notification read/unread (`src/app/api/notifications/[id]/route.ts`)
- Mark all read (`src/app/api/notifications/read-all/route.ts`)

## Phase 8: Services & React Query Hooks
- Project service (`src/services/project.service.ts`)
- Member service (`src/services/member.service.ts`)
- Notification service (`src/services/notification.service.ts`)
- Project hooks (`src/hooks/use-projects.ts`)
- Member hooks (`src/hooks/use-members.ts`)
- Notification hooks (`src/hooks/use-notifications.ts`)

## Phase 9: UI Components & Layouts
- shadcn/ui primitives (button, card, dialog, etc.)
- Layout components (`src/components/layouts/navbar.tsx`, footer, etc.)
- Auth components (`src/components/auth/sign-in.tsx`)
- Dialogs & modals (`src/components/dialogs/`)
- Providers (`src/providers/root-provider.tsx`, theme, query)
- App context (`src/contexts/app-context.tsx`)

## Phase 10: Pages & Full Features
- Marketing layout & pages (`src/app/(marketing)/page.tsx`, privacy, terms, contact)
- Dashboard (`src/app/dashboard/page.tsx`)
- Project detail page (`src/app/dashboard/[id]/page.tsx`)
- Invite flow (`src/app/invite/[memberId]/page.tsx`)
- Loading states & error boundaries
- SEO components (`src/components/seo/`)
- Loaders & skeletons (`src/components/loaders/`)

---

## Progress Tracking
- [ ] Phase 1: Core Setup
- [ ] Phase 2: Auth Foundation
- [ ] Phase 3: Database & Core Types
- [ ] Phase 4: Schemas & Validation
- [ ] Phase 5: Config & Client Setup
- [ ] Phase 6: API Routes — Auth & Projects
- [ ] Phase 7: API Routes — Members & Notifications
- [ ] Phase 8: Services & React Query Hooks
- [ ] Phase 9: UI Components & Layouts
- [ ] Phase 10: Pages & Full Features
