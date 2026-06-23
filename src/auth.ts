// Clerk-based server auth adapter
import { auth as clerkAuth, currentUser } from '@clerk/nextjs/server';

// Keep a minimal compatibility layer: other server modules call `auth()` and
// expect an object with `user.id` when authenticated. We also expose `name`
// and `email` when Clerk can provide them so code that reads `session.user.name`
// continues to work.
export async function auth() {
  const { userId } = await clerkAuth();
  if (!userId) return null;

  const maybeUser = await currentUser();

  return {
    user: {
      id: userId,
      name: maybeUser?.firstName || (maybeUser as any)?.fullName || (maybeUser as any)?.username || null,
      email:
        (maybeUser as any)?.primaryEmailAddress?.emailAddress ?? (maybeUser as any)?.emailAddresses?.[0]?.emailAddress ?? null,
    },
  };
}

// Note: client-side helpers are provided in `src/lib/clerk-adapter.tsx`.


